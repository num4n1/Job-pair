import React, { useState } from 'react';
import JobCard from '../Components/Jobcard';
import Filter from '../Components/JobFilter';
import '../Styles/jobpage.css';



function JobsPage() {
  const hardcodedJobs = [
    {
      id: 1,
      logoUrl: 'https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg', // Replace with actual path to logo image
      title: 'Entry Level - Software Developer',
      location: 'Calgary, Alberta / Remote',
      applicants: 129,
      postingDate: '2024-01-10',
    },
    {
      id: 2,
      logoUrl: 'https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg',
      title: 'Mid Level - Software Developer',
      location: 'Red Deer, Alberta / Remote',
      applicants: 57,
      postingDate: '2024-03-12',
    },
    // ...other job objects
  ];

  const [filters, setFilters] = useState({
    title: '',
    location: '',
    postingDate: ''
  });


    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
        }));
    };

    const filteredJobs = hardcodedJobs.filter(job => {
        // Parse the job's posting date
        const jobDate = new Date(job.postingDate);
        console.log("jobDate" + jobDate);
        // Parse the filter's posting date, make sure filters.postingDate is in 'YYYY-MM-DD' format
        const filterDate = new Date(filters.postingDate);
        console.log("filterDate" + filterDate);
      
        return (
          (filters.title ? job.title.toLowerCase().includes(filters.title.toLowerCase()) : true) &&
          (filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
          (filters.postingDate ? jobDate >= filterDate : true)
        );
      });
      


return (
    <div className='main-container'>
        <div className="jobs-page">
        <aside className="filter-sidebar">
            <Filter onFilterChange={handleFilterChange} />
        </aside>
        <main className="main-content">
            <div className="job-cards-container">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            </div>
        </main>
        </div>
    </div>
  );


}export default JobsPage;
