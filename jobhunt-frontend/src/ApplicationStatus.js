import React, { useState, useEffect } from 'react';
import './ApplicationStatus.css';
import axios from 'axios';

function ApplicationStatus() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState(''); // Define companyFilter state
  const [showNoMatches, setShowNoMatches] = useState(false); // Define showNoMatches state


  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/jobs/'); // Replace with your backend URL
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/jobs/${id}/update-status/`, {
        status: newStatus,
      }); // Replace with your backend URL
      console.log('Job status updated:', response.data);
      fetchJobs();
      // You can update the state or perform any additional actions after the status is successfully updated
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  const removeJob = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/jobs/${id}/`);
      console.log('Job deleted:', id);
      setFilteredJobs(filteredJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const applyJob = async (id, url) => {
    try {
      await updateStatus(id, 'Applied');
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error applying job:', error);
    }
  };

  const filterJobs = (status) => {
    if (filter === status) {
      setFilter(''); // Reset the filter if it's already applied
      setFilteredJobs(jobs); // Show all the jobs
    } else {
      setFilter(status);
      if (status === 'Applied') {
        setFilteredJobs(jobs.filter((job) => job.status === 'Applied'));
      } else if (status === 'Interviewing') {
        setFilteredJobs(jobs.filter((job) => job.status === 'Phone Screen' || job.status === 'VO'));
      } else if (status === 'Rejected') {
        setFilteredJobs(jobs.filter((job) => job.status === 'Rejected'));
      } else if (status === 'Not Applied') {
        setFilteredJobs(jobs.filter((job) => job.status === 'Added'));
      } else {
        setFilteredJobs(jobs);
      }
    }
  };

  const filterByCompany = (value) => {
    if (!value) {
      setFilteredJobs(jobs);
      setShowNoMatches(false);
    } else {
      const filteredData = jobs.filter(job => job.company.toLowerCase().includes(value.toLowerCase()));
      setFilteredJobs(filteredData);
      setShowNoMatches(filteredData.length === 0);
    }
  };


  return (
    <div className="application-status-container">
      <h2 className="application-status-heading">Application Status</h2>
      <div className="filter-buttons">
       <button
          className={filter === 'Not Applied' ? 'active' : ''}
          onClick={() => filterJobs('Not Applied')}
        >
          Not Applied
        </button>
        <button
          className={filter === 'Applied' ? 'active' : ''}
          onClick={() => filterJobs('Applied')}
        >
          Applied
        </button>
        <button
          className={filter === 'Interviewing' ? 'active' : ''}
          onClick={() => filterJobs('Interviewing')}
        >
          Interviewing
        </button>
        <button
          className={filter === 'Rejected' ? 'active' : ''}
          onClick={() => filterJobs('Rejected')}
        > 
          Rejected
        </button>
        <div className="company-filter-input">
          <input
           className="filter-input"
           type="text"
           placeholder="Filter by Company"
           value={companyFilter}
           onChange={(e) => {
             setCompanyFilter(e.target.value);
             filterByCompany(e.target.value);
           }}
          />
        </div>
      </div>
      <div className="job-items-container">
        {filteredJobs.length === 0 ? (
          <div className="no-matches-message">No matches</div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-item">
              <div className="delete-button-container">
                <button className="delete-button" onClick={() => removeJob(job.id)}>X</button>
              </div>
              <div className="job-details">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>Status: {job.status}</p>
                <label>
                  Update Status:
                  <select value={job.status} onChange={(e) => updateStatus(job.id, e.target.value)}>
                    <option value="Added">Added</option>
                    <option value="Applied">Applied</option>
                    <option value="Phone Screen">Phone Screen</option>
                    <option value="VO">VO</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </label>
                <br /> {/* Add a line break */}
                <button className="apply-button" onClick={() => applyJob(job.id, job.url)}>APPLY NOW</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ApplicationStatus;
