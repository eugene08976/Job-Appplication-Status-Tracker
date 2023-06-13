from rest_framework import serializers
from .models import JobSubmission

class JobSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSubmission
        fields = ['id', 'url', 'title', 'company', 'applied_time', 'status']
