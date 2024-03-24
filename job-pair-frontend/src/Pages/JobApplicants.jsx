import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApplicantCard from '../Components/ApplicantCard.jsx';
function JobApplicants() {

  const { id } = useParams();
  const [job, setJob] = useState({
    id: 1,
    logoUrl: 'https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg', // Replace with actual path to logo image
    title: 'Entry Level - Software Developer',
    location: 'Calgary, Alberta / Remote',
    applicants: 129,
    postingDate: '2024-01-10',
    applicantsList: []

  });
  useEffect(() => {
    setJob({
        id: 1,
        logoUrl: 'https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg', // Replace with actual path to logo image
        title: 'Entry Level - Software Developer',
        location: 'Calgary, Alberta / Remote',
        applicants: 129,
        postingDate: '2024-01-10',
        applicantsList: [
            {
            id: 1,
            name: 'Nino Nakano',
            email: '',
            university: 'University of Calgary',
            degree: 'Computer Science',
            GPA: 3.5,
            matchScore: 90,
            summary:'AI GENERATED SUMMARY   '
        
        },
        {
            id: 2,
            name: 'Miku Nakano',
            email: '',
            university: 'University of Saskatchewan',
            degree: 'Computer Science',
            GPA: 3.1,
            matchScore: 23,
            summary:'AI GENERATED SUMMARY 2   '
        },
        {
            id: 3,
            name: 'Itsuki Nakano',
            email: '',
            university: 'University of Alberta',
            degree: 'Computer Science',
            GPA: 3.7,
            matchScore: 65,
            summary:'AI GENERATED SUMMARY 3   '
        }
        ]
      
    });
  }, [id]);

  return (
    <div>
        <div className='applicant-header-div'> <img src={job.logoUrl} alt="jobimage"></img> <h1>Applicants for {job.title}</h1> </div>
        <div>
         
            <ul>
                {job.applicantsList.map((applicant) => {
                    return (
                        <ApplicantCard applicant={applicant} key={applicant.id} />
                    )
                })}
            </ul>
            </div>




    </div>
  )
}

export default JobApplicants