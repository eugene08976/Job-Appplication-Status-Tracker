# Generated by Django 4.2.2 on 2023-06-06 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobsubmission',
            name='status',
            field=models.CharField(default='Applied', max_length=255),
        ),
    ]
