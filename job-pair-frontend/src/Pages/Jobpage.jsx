import React, { useState ,useEffect } from 'react';
import Axios from "axios";
import {Container, Card, Form, FormControl, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/jobpage.css';



function Sidebar(){
    return(
        <div className='sidebar'>
            <Form className='form'>
             
                <Form.Check 
                    type="switch"
                    label="Location"
                    id="Location"
                    className='custom_formcheck'
                />
                <Form.Check 
                    type="switch"
                    label="Deadline soon"
                    id="Deadline soon"
                    className='custom_formcheck'
                />
           
                
            </Form>
        </div>
    );
}

function Jobspage() {
    const [jobs, setJobs] = useState();

    useEffect( () => {
        const fetchData = async () => {
            try {
              const response = await Axios.get("http://127.0.0.1:5000/get_all_jobs_brief?username=zeeshan", {
              })
              console.log(response);
              setJobs(response.data);
            } catch (error) {
              console.error("Error in getting resources for job page", error);
            }
          };
          console.log("I got your jobs ");
      
          fetchData();
    }
    , []
    )

    const redirectToApplicationReview = (applicationTitle) => {
        localStorage.setItem("ApplicationReviewTitle",applicationTitle);
        window.location.reload();
        window.location.href = "http://localhost:3000/applicationReview";
    };


    const handleSearch = (e) => {
        e.preventDefault();
        // Your search logic here
      };


    return(
        <div>
        <Container className='job_container'>
            <Row className='job_rows justify-content-center'>
                <Col className='d-none d-md-block justify-content-center align-items-center'>
                <Sidebar />
                </Col>
                <Col md={9} className='job_col'>
                    <div className="job_title">
                        <h1  style={{ fontWeight: 'bold', fontSize: '50px', textAlign: 'center', marginBottom: '40px', paddingTop:`70px` }}>jobs</h1>
                        <div className='searchBox'>
                            <FormControl
                                size="lg"
                                type="text"
                                placeholder="Search"
                                className="searchfield"
                            />
                            <button className='searchbutton'>Search</button>
                        </div>
                    </div>
                    
                    <div className='job_card_space'>
                        {jobs?.map((job,index) => {
                        const key = `${job.id}-${index}`;
                        return (
                            <div key={key} className="job-card" style={{ marginBottom:"20px", width: "20rem", height:"100%", maxHeight: "600px", background: '#FFFFFF', margin: `1% 0`, borderRadius: '35px', textAlign: 'center', padding: '11px', position: 'relative' }}>
                            <img
                            src={job.Image}
                            alt="job Logo"
                            style={{ width: '30%', marginBottom: '5px' }}
                            />
                        
                            <Card.Body style={{ cursor: `pointer`, display:`flex`, flexDirection:'column', height: `auto`}} onClick={() => redirectToApplicationReview(job.Title)}>
                            <Card.Title>{job.Title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {job.Institution}
                            </Card.Subtitle>
                            <div style={{ margin: '15px 0' }}>
                                {job.Requirements.map((requirement, index) => (
                                <p key={index}  className="requirement-text">
                                    #{requirement}
                                </p>
                                ))}
                            </div>
                            <div style={{ position: 'relative', bottom: '0', left: '0', width: '100%', borderTop: '1px solid #ccc', padding: '10px', borderRadius: '0px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0px' }}>
                                <div style={{ borderBottom: '1px solid #d3d3d3', borderRight: '1px solid #d3d3d3', padding: '10px' }}>💸{job["job Amount"]}</div>
                                <div style={{ borderBottom: '1px solid #d3d3d3', padding: '10px' }}>📆​ {job.Deadline}</div>
                                <div style={{ borderRight: '1px solid #d3d3d3', padding: '10px' }}>⌛​ {job["Estimated Completion Time"]}</div>
                                <div style={{ padding: '10px' }}>📜 Upto {job["Number of Recipients"]} Recipients</div>
                                </div>
                            </div>
                            </Card.Body>
                        </div>  
                    
                        );
                        })}
                        
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Jobspage;
