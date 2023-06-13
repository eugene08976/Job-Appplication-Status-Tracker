// jobhunt-frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobSubmission from './JobSubmission';
import ApplicationStatus from './ApplicationStatus';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{ marginTop: '50px', textAlign: 'center' }}>Job Hunting</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<ApplicationStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <JobSubmission />
      <hr />
      <ApplicationStatus />
    </div>
  );
}

export default App;
