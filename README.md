# Job Application Tracker

This is a web application for job application tracking and status management.

## Prerequisites

Before running the application, make sure you have the following installed:

- Python (version 3.8 or higher)
- Django (version 3.2 or higher)
- Django REST framework (version 3.12 or higher)
- Node.js (version 14 or higher)

## Installation

2. Navigate to the project directory: `cd job-application-tracker`
3. Install frontend dependencies:
   - Navigate to the frontend directory: `cd JobHuntAPI/jobhunt-frontend`
   - Run the command: `npm install`
4. Install backend dependencies:
   - Navigate to the backend directory: `cd JobHuntAPI`
   - Run the command: `pip install -r requirements.txt`

## Configuration

1. Database Configuration:
   - Open `JobHuntAPI/JobHuntAPI/settings.py` file and update the following variables under the `DATABASES` section:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.mysql',
             'NAME': 'your-database-name',
             'USER': 'your-database-username',
             'PASSWORD': 'your-database-password',
             'HOST': 'your-database-host',
             'PORT': 'your-database-port',
         }
     }
     ```

## Running the Application

1. Start the backend server:
   - Navigate to the backend directory: `cd JobHuntAPI`
   - Run the command: `python manage.py runserver`
2. Start the frontend development server:
   - Open a new terminal
   - Navigate to the frontend directory: `cd JobHuntAPI/jobhunt-frontend`
   - Run the command: `npm start`
3. Access the application in your web browser at `http://localhost:3000`

## Usage

- Submitting a Job:
  - Click on the "Jobs Applied" button on the top right corner.
  - Fill in the job details and click "Submit" to add a new job application.
- Updating Job Status:
  - In the application status page, select the desired job status from the "Update Status" dropdown.
  - The status will be updated in real-time.
- Filtering Jobs:
  - Use the filter buttons to filter jobs by status.
  - Use the company filter input to filter jobs by company name.

