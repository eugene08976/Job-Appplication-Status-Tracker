from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import JobSubmission
from .serializers import JobSubmissionSerializer

@api_view(['GET', 'POST'])
def submit_job(request):
    if request.method == 'POST':
        serializer = JobSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            url = serializer.validated_data['url']
            # Check if a job with the same URL already exists
            if JobSubmission.objects.filter(url=url).exists():
                return Response({'error': 'This job is already applied'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        jobs = JobSubmission.objects.all()
        serializer = JobSubmissionSerializer(jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_jobs(request):
    jobs = JobSubmission.objects.all()
    serializer = JobSubmissionSerializer(jobs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_job(request, job_id):
    try:
        job = JobSubmission.objects.get(id=job_id)
    except JobSubmission.DoesNotExist:
        return Response({'error': 'Job not found'}, status=status.HTTP_404_NOT_FOUND)

    job.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PATCH'])
def update_job_status(request, job_id):
    try:
        job = JobSubmission.objects.get(id=job_id)
    except JobSubmission.DoesNotExist:
        return Response({'error': 'Job not found'}, status=404)

    new_status = request.data.get('status')
    if not new_status:
        return Response({'error': 'New status not provided'}, status=400)

    job.status = new_status
    job.save()

    serializer = JobSubmissionSerializer(job)
    return Response(serializer.data)

