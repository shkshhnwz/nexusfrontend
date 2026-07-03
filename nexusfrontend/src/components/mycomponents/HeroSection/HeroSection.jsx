import React, { useState } from 'react';
import TextPressure from '../../ui/TextPressure/TextPressue';
import './HeroSection.css';

export default function HeroSection() {
  const [selectedCountry, setSelectedCountry] = useState('Canada');

  return (
    <div className="hero-grid">
      {/* Hero Text Content */}
      <div className="hero-content-left">
        <div className="badge-tag">
          <span className="badge-pulse"></span>
          TRUSTED IMMIGRATION PARTNERS
        </div>

        <h1 className="hero-title">
          <div className="hero-title-pressure-1">
            <TextPressure
              text="#1 IMMIGRATION FIRM"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#111827"
              minFontSize={48}
            />
          </div>
          <div className="hero-title-pressure-2">
            <TextPressure
              text="IN DUBAI, UAE"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#black"
              minFontSize={40}
            />
          </div>
        </h1>

        <h2 className="hero-subtitle">
          <div className="hero-subtitle-pressure">
            <TextPressure
              text="IMMIGRATION LIKE NEVER BEFORE"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#4b5563"
              minFontSize={20}
            />
          </div>
        </h2>

        {/* Country Selector Pill Capsule */}
        <div className="country-capsule-container">
          <div className="country-capsule">
            <button
              className={`country-pill ${selectedCountry === 'Australia' ? 'active' : ''}`}
              onClick={() => setSelectedCountry('Australia')}
            >
            <img 
                src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788979/Australia_epv3it.webp" 
                alt="Australia Flag" 
                className="flag-img" 
              />
              Australia
            </button>
            <button
              className={`country-pill ${selectedCountry === 'Canada' ? 'active' : ''}`}
              onClick={() => setSelectedCountry('Canada')}
            >
              <img 
                src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788993/kanedda_pp39dw.webp" 
                alt="Canada Flag" 
                className="flag-img" 
              />
              Canada
            </button>
            <button
              className={`country-pill ${selectedCountry === 'New Zealand' ? 'active' : ''}`}
              onClick={() => setSelectedCountry('New Zealand')}
            >
              <img src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788980/newzealand_mpv80j.webp" 
              alt="NewZealand Flag" 
              className="flag-img"
              />
              New Zealand
            </button>
          </div>
        </div>

        {/* Checklist items */}
        <div className="hero-checklist">
          <div className="checklist-item">
            <div className="check-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Affordable Options</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Personalized Assistance</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>Fastrack Solutions</span>
          </div>
        </div>

        {/* Footer Logos Section */}
        <div className="partner-logos-container">
          <div className="partner-logo ircc">
            <img 
              src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788980/IRCC-Png-Logo-1_x7vtok.webp" 
              alt="IRCC Logo" 
              className="partner-logo-img ircc-img"
            />
          </div>

          <div className="partner-logo google-reviews">
            <img 
              src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788980/Google_paohxz.webp" 
              alt="Google Logo" 
              className="partner-logo-img google-img"
            />
            <div className="google-reviews-stars">
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 24 24" width="12" height="12" fill="#eab308">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="reviews-text">Reviews</span>
            </div>
          </div>

          <div className="partner-logo ielts">
            <img 
              src="https://res.cloudinary.com/dc9xarlgi/image/upload/v1779788980/IELTS-logo-1_qaewir.webp" 
              alt="IELTS Logo" 
              className="partner-logo-img ielts-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
