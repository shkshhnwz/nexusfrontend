import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-blur-bg"></div>
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1783074023/NexusLogo_1_mb5sve.webp" 
          alt="NexusLogo" />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className="nav-item">
            <a href="#home" className="nav-link active">Home</a>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 'canada' ? 'open' : ''}`}
            onMouseEnter={() => setActiveDropdown('canada')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="dropdown-menu">
              <a href="#express-entry" className="dropdown-item">Express Entry</a>
              <a href="#pnp" className="dropdown-item">Provincial Nominee Program (PNP)</a>
              <a href="#student-visa" className="dropdown-item">Student Visa</a>
              <a href="#work-permit" className="dropdown-item">Work Permits</a>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 'countries' ? 'open' : ''}`}
            onMouseEnter={() => setActiveDropdown('countries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('countries')}>
              Countries
              <svg className="chevron-icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
              </svg>
            </button>
            <div className="dropdown-menu">
              <a href="#australia" className="dropdown-item">Australia</a>
              <a href="#new-zealand" className="dropdown-item">New Zealand</a>
              <a href="#uk" className="dropdown-item">United Kingdom</a>
              <a href="#usa" className="dropdown-item">United States</a>
              <a href="#europe" className="dropdown-item">Europe</a>
              <a href="#Canada" className="dropdown-item">Canada</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link">Our Team</a>
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-link">News & Blogs</a>
          </li>
          <li className="nav-item">
            <a href="#success" className="nav-link">Success Stories</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
