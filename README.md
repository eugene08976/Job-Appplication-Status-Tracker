# Job Application Tracker

This is a web application for job application tracking and status management.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 14 or higher)
- MySQL (or an alternative relational database management system)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/job-application-tracker.git`
2. Navigate to the project directory: `cd job-application-tracker`
3. Install dependencies for the frontend and backend:
   - Frontend: `cd jobhunt-frontend && npm install`
   - Backend: `cd jobhunt-backend && npm install`

## Configuration

1. Database Configuration:
   - Create a MySQL database and note down the connection details (host, port, username, password, database name).
   - Open `jobhunt-backend/.env` file and update the following variables:
     ```
     DB_HOST=your-database-host
     DB_PORT=your-database-port
     DB_USER=your-database-username
     DB_PASSWORD=your-database-password
     DB_NAME=your-database-name
     ```

## Running the Application

1. Start the backend server:
   - Navigate to the `jobhunt-backend` directory: `cd jobhunt-backend`
   - Run the command: `npm start`
2. Start the frontend development server:
   - Open a new terminal
   - Navigate to the `jobhunt-frontend` directory: `cd jobhunt-frontend`
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

## License

This project is licensed under the [MIT License](LICENSE).
