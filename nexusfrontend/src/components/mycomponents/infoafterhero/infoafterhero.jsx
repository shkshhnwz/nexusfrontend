import React from 'react';
import './infoafterhero.css';

export default function InfoAfterHero({ info }) {
  if (!info) return null;

  // Render country migration card layout
  if (info.type === 'country') {
    return (
      <div className={`stack-card-grid ${info.reverse ? 'reverse' : ''}`}>
        {info.reverse ? (
          <>
            {/* Image on the left */}
            <div className="stack-card-right">
              <div className="image-placeholder-container">
                <img src={info.image} alt={info.alt || 'Migration'} />
                <div className="image-placeholder-overlay"></div>
              </div>
            </div>
            {/* Text on the right */}
            <div className="stack-card-left">
              <div className="badge-tag">
                <span className="badge-pulse"></span>
                {info.badge || 'NEXUS MIGRATION'}
              </div>
              <h2 className="stack-title">{info.title}</h2>
              {info.descriptions && info.descriptions.map((desc, idx) => (
                <p key={idx} className="stack-description">{desc}</p>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Text on the left */}
            <div className="stack-card-left">
              <div className="badge-tag">
                <span className="badge-pulse"></span>
                {info.badge || 'NEXUS MIGRATION'}
              </div>
              <h2 className="stack-title">{info.title}</h2>
              {info.descriptions && info.descriptions.map((desc, idx) => (
                <p key={idx} className="stack-description">{desc}</p>
              ))}
            </div>
            {/* Image on the right */}
            <div className="stack-card-right">
              <div className="image-placeholder-container">
                <img src={info.image} alt={info.alt || 'Migration'} />
                <div className="image-placeholder-overlay"></div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default layout (servicesInfo)
  return (
    <div className="services-card-grid">
      <div className="services-left-col">
        <div className="badge-tag">
          <span className="badge-pulse"></span>
          {info.badge || 'NEXUS MIGRATION'}
        </div>
        <h2 className="stack-title">{info.title}</h2>
        <p className="stack-description">{info.description}</p>
        
        {info.image && (
          <div className="image-placeholder-container">
            <img src={info.image} alt={info.title || 'Services'} />
            <div className="image-placeholder-overlay"></div>
          </div>
        )}
      </div>
      
      <div className="services-right-col">
        {/* Benefits sub-card */}
        {info.benefits && (
          <div className="sub-service-card">
            <div className="sub-service-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="sub-service-content">
              <h3 className="sub-service-title">{info.benefits.title}</h3>
              <p className="sub-service-text">{info.benefits.text}</p>
            </div>
          </div>
        )}

        {/* Services sub-card */}
        {info.services && (
          <div className="sub-service-card">
            <div className="sub-service-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <div className="sub-service-content">
              <h3 className="sub-service-title">{info.services.title}</h3>
              {info.services.bullets && (
                <ul className="sub-service-bullets">
                  {info.services.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
