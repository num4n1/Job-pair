import React from 'react'
import { Profilepageform } from  '../Components/Profilepageform.jsx';
export default function Profilepage({user}) {
  return (
    <div className='main-container'>
        <div className='profile-container'>
            <h1>Profile</h1>
            <Profilepageform user={user}/>
        </div>

    </div>
  )
}
