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
          <svg className="logo-svg" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L85 70 L50 55 L15 70 Z" fill="url(#logo-grad)" stroke="#fff" strokeWidth="2"/>
            <path d="M50 20 L75 63 L50 52 L25 63 Z" fill="#0c0d12" opacity="0.6"/>
            <circle cx="50" cy="40" r="6" fill="#fff" className="logo-pulse"/>
            <defs>
              <linearGradient id="logo-grad" x1="15" y1="10" x2="85" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff4545"/>
                <stop offset="1" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <span className="logo-main">NEXUS</span>
            <span className="logo-sub">MIGRATION</span>
            <span className="logo-tagline">Your Future, Our Vision</span>
          </div>
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
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('canada')}>
              Canada 
              <svg className="chevron-icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
              </svg>
            </button>
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

        {/* Social capsule */}
        <div className="navbar-social-capsule">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
