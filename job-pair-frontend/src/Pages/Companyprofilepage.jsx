import React from 'react'
import { Companyprofilepageform } from '../Components/Companyprofilepageform'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Companyprofilepage() {
  const { id } = useParams();

  const [company, setCompany] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    setCompany({
      name: 'Company Name',
      emailAddress: 'weqweqe@email.com',
      phoneNumber: '1234567890',
      location: '1234 Some Street, Some City, Some State, 12345',
      description: 'This is a company description',
    });
  }, [id]);

  return (
    <div className='main-container'>
        <div className='profile-container'>
            <h1>Profile</h1>
            <Companyprofilepageform company={company}/>
        </div>

    </div>
  )
}
