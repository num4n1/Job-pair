import React from 'react'
import { Companyprofilepageform } from '../Components/Companyprofilepageform'
export default function Companyprofilepage({company}) {
  return (
    <div className='main-container'>
        <div className='profile-container'>
            <h1>Profile</h1>
            <Companyprofilepageform company={company}/>
        </div>

    </div>
  )
}
