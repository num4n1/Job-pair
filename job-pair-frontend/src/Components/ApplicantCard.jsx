import React from 'react'
import { useState } from 'react';
import '../Styles/applicantcard.css'
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
function ApplicantCard({applicant}) {
    const [isStarFilled, setIsStarFilled] = useState(false);

    const chatNow = () => {
        console.log('Chat Now')

    }
    const sendInterview = () => {
        console.log('Interview Sent')

    }
  return (
    <>
    <div className='card-div'>
        <div className='top-row'>
            <div className='top-row-cell'>
                <div className='info-box'>
                    {applicant.name}
                </div>
                <div className='info-box'>
                   GPA: {applicant.GPA}
                </div>
                <div className='info-box'>
                    {applicant.university}
                </div>

                </div>
                <div className='top-row-cell'>
                    <div className='info-box'>
                       Match Score: {applicant.matchScore}
                    </div>
                    <Button variant="link" onClick={() => setIsStarFilled(!isStarFilled)} style={{ color: isStarFilled ? '#FFD700' : '' }}>
      <FontAwesomeIcon icon={isStarFilled ? fasStar : farStar} />
    </Button>
                </div>
        </div>
        <div className='bottom-row'>
            <div className='summary-box'>
                {applicant.summary}
                </div>
                <div className='buttons-column'>
                <Button size="sm" variant="primary" onClick={sendInterview} >
          Send Interview
        </Button>
        <Button  size="sm" variant="primary" onClick={chatNow}>
          Chat Now
        </Button>

                </div>

            </div>

    </div>
    <div className='mobile-applicant-wrapper'>
    <div className='card-div-mobile'>
        <div className='mobile-row'>
            <div className='mobile-row-info'>
                <div className='mobile-row-name'>
                {applicant.name}
                </div>

                <Button variant="link" onClick={() => setIsStarFilled(!isStarFilled)} style={{ color: isStarFilled ? '#FFD700' : '' }}>
      <FontAwesomeIcon icon={isStarFilled ? fasStar : farStar} />
    </Button>

            </div>
            <div className='mobile-row-info'>
                <div className='info-box'>
                     GPA: {applicant.GPA}
                     </div>
                <div className='info-box'>
                    {applicant.university}
                    </div>
            </div>
        </div>
        <div className='mobile-row'>
            <div className='summary-box'>
                {applicant.summary}
                </div>
                </div>

    </div>
    <div className='buttons-column'>
                <Button size="lg" variant="primary" onClick={sendInterview} >
          Send Interview
        </Button>
        <Button  size="lg" variant="primary" onClick={chatNow}>
          Chat Now
        </Button>

                </div>
    </div>
    </>
  )
}

export default ApplicantCard