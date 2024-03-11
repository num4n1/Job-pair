import React from 'react';
import '../Styles/Navbar.css'; // Make sure to create a corresponding CSS file
import logo from '../Assets/Job-pair-small 1.png'; // Import the image here

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt='Brand logo' />
      <div className="menu">
        <a href="/jobs">Jobs</a>
        <a href="/interviews">Interviews</a>
        <a href="/tracking">Tracking</a>
        <a href="/profile" className="active">Profile</a>
        <a href="/chat">Chat</a>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <a href="/logout">Logout</a>
      </div>
      <div className="menu-icon">
        {/* Icon to show/hide the menu on small screens */}
      </div>
    </nav>
  );
};

export default Navbar;