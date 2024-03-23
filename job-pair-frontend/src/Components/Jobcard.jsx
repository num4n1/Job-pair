import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-body">
        <img src={job.logoUrl} alt="Company Logo" className="company-logo" />
        <h3>{job.title}</h3>
        <p>{job.location}</p>
        <p>{job.applicants} Applicants</p>
        <p>Posting date: {job.postingDate}</p>
      </div>
    </div>
  );
}

export default JobCard;
