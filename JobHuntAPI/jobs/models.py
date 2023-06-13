from django.db import models

class JobSubmission(models.Model):
    url = models.URLField()
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    applied_time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, default="Added")

    def __str__(self):
        return f'{self.title} at {self.company}'
