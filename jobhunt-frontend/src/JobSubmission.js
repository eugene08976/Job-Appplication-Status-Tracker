import React, { useState } from 'react';
import axios from 'axios';
import './JobSubmission.css';
import { fetchJobs } from './ApplicationStatus';

function JobSubmission() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!url || !title || !company) {
      setError('Missing values');
      return;
    }
    setError('');

    axios
      .post('http://localhost:8000/api/submit-job/', { url, title, company })
      .then((response) => {
        console.log('Job submitted successfully');
        setSubmitMessage('Job submitted successfully');
        setUrl('');
        setTitle('');
        setCompany('');
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setSubmitMessage('Job already submitted');
        } else if (error.response && error.response.status === 400) {
          setSubmitMessage('Invalid URL');
        } else {
          console.error('Error:', error);
          setError('An error occurred while submitting the job');
        }
      });
  };

  // const fetchJobs = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/api/jobs/'); // Replace with your backend URL
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching jobs:', error);
  //     throw error;
  //   }
  // };

  return (
    <div className="JobSubmissionContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Job URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
        <label>
          Job Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </label>
        <div className="submit-section">
          <button className="job-submission-button" type="submit">
            Submit
          </button>
          {error && <p className="error-message">{error}</p>}
          {submitMessage && <p className="success-message">{submitMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default JobSubmission;
