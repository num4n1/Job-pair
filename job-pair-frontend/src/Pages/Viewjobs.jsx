import Axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import '../Styles/Viewjobs.css'
import {
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Form,
  FormLabel,
  Button,
  Card,
  Modal,
  Col,
} from "react-bootstrap";

// import { Tilt } from "react-tilt";


import "../Styles/Searchbar.css";
import "../Styles/VerticalMenu.css";
import JobCard from "../Components/Jobcard";
import Filter from "../Components/JobFilter";


export default function Viewjobs() {
  const [jobs, setJobs] = useState([]);
  const [resultsToShow, setResultsToShow] = useState([]);
  const [showApplyJob, setShowApplyJob] = useState(false);
  const [showAddDoc,setShowAddDoc] = useState(false)
  const [currJob, setCurrJob] = useState({});

  const [resume, setResume] = useState();
  const [coverLetter, setCoverLetter] = useState();

  const [eligiblejobSwitch, setEligiblejobSwitch] = useState(false);
 const [userType,setUserType] = useState("recruiter")

 const createJob = ()=> {

 }
 

  useEffect(() => {
    // Checks for token in storage, indicating signed in.
    // if(localStorage.getItem("token") == null){
    //   window.location.href = "http://localhost:3000/login";
    // }
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/get_all_jobs_brief?username=zeeshan", {
        })
        console.log(response);
        setJobs(response.data);
        
        // setResourceList(response.data);
      } catch (error) {
        console.error("Error in getting resources for job page", error);
        setJobs([
            {
                id: 1,
                logoUrl: 'https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg', // Replace with actual path to logo image
                title: 'Entry Level - Software Developer',
                location: 'Calgary, Alberta / Remote',
                applicants: 129,
                postingDate: '2024-01-10',
                applicantsList: [],
                companyName:'Google'
            
              }
        ])
      }
    };

    fetchData();
    
  }, [])

  const redirectToApplicationReview = (applicationTitle) => {
    localStorage.setItem("ApplicationReviewTitle",applicationTitle);
    // Reloads the current page
    window.location.reload();
    // Redirects to the main page
    window.location.href = "http://localhost:3000/applicationReview";
  };

  function handleCloseAddDoc() {
    setShowAddDoc(false);
  }

  function handleCloseApplyJob() {
    setShowApplyJob(false);
  }

  function handleSearch(e) {
    if (e === "Enter") {
      let query = document.getElementById("searchBar").value.toLowerCase();
      if (query === "") {
        setResultsToShow(jobs);
      } else {
        let res = jobs.filter((job) => {
          if (
            job.companyName.toLowerCase() === query ||
            job.industry.toLowerCase() === query ||
            job.Title.toLowerCase() === query
          ) {
            return true;
          } else {
            return false;
          }
        });

        if (res.length === 0) {
          document.getElementById("errorMessage").classList.add("ShowError");
        } else {
          document.getElementById("errorMessage").classList.remove("ShowError");
          setResultsToShow(res);
        }
      }
    }
  }

  function apply(id) {
    setCurrJob(jobs.find((job) => (job.id = id)));
    setShowApplyJob(true);
  }

  function applyForJob(id, resumeDNo, coverDno) {
    let temp = [resumeDNo];
    if(coverDno !== ""){
      temp.push(coverDno);
    }
    console.log(temp)
    Axios.post("http://127.0.0.1:5000/api/apply", {
      token: localStorage.getItem("token"),
      JobID: id,
      dNo:  temp,
    })
    setShowApplyJob(false);
  }
  
  function submitDocuments(resume, coverLetter){
    if(resume !== undefined){
      let formData = new FormData();
      formData.append("file", resume[0]);
      Axios.post("http://127.0.0.1:5000/api/addUserDocument", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem("token"),
          type: "resume",
        }
      })
    }

    if(coverLetter !== undefined){
      let formData1 = new FormData();
      formData1.append("file", coverLetter[0]);
      Axios.post("http://127.0.0.1:5000/api/addUserDocument", formData1, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem("token"),
          type: "coverLetter",
        }
      })
    }

    setShowAddDoc(false);
  }

  

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
    
      console.log('Search Query:', searchQuery);
      
    };
  
    return (
      <div className="search-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter your search..."
            style={{ width: '75%', color:`black` }}
          />
          <button type="submit" style={{ fontWeight: 'bold' }}>Search</button>
        </form>
      </div>
    );
  };

  

  return (
    <Container style={{ minHeight: `100vh` }}>
        
        <h1 style={{ fontWeight: 'bold', fontSize: '50px', textAlign: 'center', marginBottom: '35px', paddingTop:`70px` }}>jobs</h1>
        View Jobs
        <div className="job-main-content-wrapper">
          
        <div>
        <Filter></Filter>
        </div>
        <div className="job-right-div">
        <div className="jobs-body">
            {jobs?.map((job) => {
              return (
                <JobCard job={job} userType={"recruiter"}></JobCard>
         
              );
            })}
          </div>
          { userType == 'recruiter' &&
          <div className="create-job-button-wrapper">
          <Button  size="lg" variant="primary" onClick={createJob}>
          Create Job
        </Button>
        </div>
        
            }
            </div>
        </div>

   
    </Container>
  );
}

