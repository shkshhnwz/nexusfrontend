import React, { useState } from 'react';
import Navbar from './components/mycomponents/Navbar/Navbar';
import Strands from './components/ui/herobackground/herobacground';
import Globe3D from './3dcomponents/Globe3D';
import ScrollStack, { ScrollStackItem } from './components/ui/ScrollStack/ScrollStack';
import './App.css';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState('Canada');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', mobile: '' });
      }, 3000);
    }
  };

  return (
    <div className="app-container">
      {/* Background Glowing Waves */}
      <div className="background-waves">
        <Strands
          colors={['#ff4545', '#7c3aed', '#06b6d4', '#ff8e8e']}
          count={5}
          speed={0.4}
          amplitude={1.2}
          waviness={0.9}
          thickness={0.6}
          glow={2.8}
          taper={2}
          spread={1.2}
          intensity={0.7}
          saturation={1.8}
          opacity={0.85}
          scale={1.3}
          glass={false}
        />
      </div>

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="hero-section" id="home">
        <div className="hero-grid">

          {/* Left Column: Hero Text Content */}
          <div className="hero-content-left">
            <div className="badge-tag">
              <span className="badge-pulse"></span>
              TRUSTED IMMIGRATION PARTNERS
            </div>

            <h1 className="hero-title">
              #1 Immigration Firm <br />
              <span className="gradient-text">in Dubai, United Arab Emirates</span>
            </h1>

            <h2 className="hero-subtitle">
              Immigration Like Never Before
            </h2>

            {/* Country Selector Pill Capsule */}
            <div className="country-capsule-container">
              <div className="country-capsule">
                <button
                  className={`country-pill ${selectedCountry === 'Australia' ? 'active' : ''}`}
                  onClick={() => setSelectedCountry('Australia')}
                >
                  <svg className="flag-svg" viewBox="0 0 640 480" width="24" height="18">
                    <rect width="640" height="480" fill="#00008b" />
                    <path d="M0 0h240v160H0z" fill="#00008b" />
                    <path d="M0 26.7v106.6h240V26.7H0z" fill="#fff" />
                    <path d="M26.7 0v160h106.6V0H26.7z" fill="#fff" />
                    <path d="M0 53.3V107h240V53.3H0z" fill="#e8112d" />
                    <path d="M53.3 0v160h53.4V0H53.3z" fill="#e8112d" />
                    {/* Stars */}
                    <path d="M480 120l5 15 15 5-15 5-5 15-5-15-15-5 15-5zm80 100l3 9 9 3-9 3-3 9-3-9-9-3 9-3zm-160 80l4 12 12 4-12 4-4 12-4-12-12-4 12-4zm80 80l3 9 9 3-9 3-3 9-3-9-9-3 9-3zm40-140l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff" />
                  </svg>
                  Australia
                </button>
                <button
                  className={`country-pill ${selectedCountry === 'Canada' ? 'active' : ''}`}
                  onClick={() => setSelectedCountry('Canada')}
                >
                  <svg className="flag-svg" viewBox="0 0 640 480" width="24" height="18">
                    <rect width="640" height="480" fill="#ff4545" />
                    <rect x="160" width="320" height="480" fill="#fff" />
                    {/* Maple Leaf */}
                    <path d="M320 140l10 35 25-10-5 30 30 5-25 20 15 35-30-10-10 30-10-30-30 10 15-35-25-20 30-5-5-30 25 10z" fill="#ff4545" />
                  </svg>
                  Canada
                </button>
                <button
                  className={`country-pill ${selectedCountry === 'New Zealand' ? 'active' : ''}`}
                  onClick={() => setSelectedCountry('New Zealand')}
                >
                  <svg className="flag-svg" viewBox="0 0 640 480" width="24" height="18">
                    <rect width="640" height="480" fill="#00008b" />
                    {/* Union Jack details */}
                    <path d="M0 0h240v160H0z" fill="#00008b" />
                    <path d="M0 26.7v106.6h240V26.7H0z" fill="#fff" />
                    <path d="M26.7 0v160h106.6V0H26.7z" fill="#fff" />
                    <path d="M0 53.3V107h240V53.3H0z" fill="#e8112d" />
                    <path d="M53.3 0v160h53.4V0H53.3z" fill="#e8112d" />
                    {/* Stars red with white border */}
                    <path d="M480 140l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#ff4545" stroke="#fff" strokeWidth="2" />
                    <path d="M540 220l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#ff4545" stroke="#fff" strokeWidth="2" />
                    <path d="M420 300l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#ff4545" stroke="#fff" strokeWidth="2" />
                    <path d="M480 380l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#ff4545" stroke="#fff" strokeWidth="2" />
                  </svg>
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
                <svg viewBox="0 0 100 30" width="80" height="24" fill="currentColor">
                  <text x="5" y="20" fontSize="13" fontWeight="900" letterSpacing="-0.5px">ircc</text>
                  <path d="M36 8l3 8 7-2-2 7 6 2-5 4 3 8-7-2-2 7-2-7-7 2 3-8-5-4 6-2-2-7z" fill="#ff4545" />
                  <rect x="48" y="5" width="2" height="20" fill="rgba(255,255,255,0.2)" />
                  <text x="56" y="14" fontSize="6" fontWeight="600" fill="#9ca3af">Immigration</text>
                  <text x="56" y="22" fontSize="6" fontWeight="600" fill="#9ca3af">Canada</text>
                </svg>
              </div>

              <div className="partner-logo google-reviews">
                <div className="google-stars">
                  <span className="google-text">Google</span>
                  <div className="stars-row">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} viewBox="0 0 24 24" width="14" height="14" fill="#eab308">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="reviews-text">Reviews</span>
              </div>

              <div className="partner-logo ielts">
                <span className="ielts-main">IELTS</span>
                <span className="ielts-badge">Official</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Globe + Glassmorphic Consultation Form */}
          <div className="hero-content-right">


            {/* Consultation Form */}
            <div className="consultation-form-card">
              <div className="form-glow"></div>

              <h3 className="form-title">Get in touch with Us</h3>

              {isSubmitted ? (
                <div className="form-success-message">
                  <svg className="success-check-icon" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" stroke="#10b981" fill="rgba(16, 185, 129, 0.1)"></circle>
                    <polyline points="16 9 11 14 8 11" stroke="#10b981"></polyline>
                  </svg>
                  <h4>Thank You!</h4>
                  <p>Our immigration consultant will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="consultation-form">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile (With Country Code)"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="mobile">Mobile (With Country Code)</label>
                  </div>

                  <button type="submit" className="cta-button">
                    <span>GET CONSULTATION TODAY</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* Scroll Stack Sections */}
      <div className="scroll-stack-wrapper">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.06}
          itemStackDistance={25}
          baseScale={0.82}
          rotationAmount={3}
          blurAmount={2}
        >
          {/* Card 1: Immigration Services */}
          <ScrollStackItem itemClassName="card-services">
            <div className="services-card-grid">
              <div className="services-left-col">
                <div className="badge-tag">
                  <span className="badge-pulse"></span>
                  NEXUS MIGRATION
                </div>
                <h2 className="stack-title">Immigration Services From Expert Agents.</h2>
                <p className="stack-description">
                  Get expert guidance and support for your immigration needs from our experienced agents. 
                  We provide personalized assistance and advice to streamline your immigration process 
                  and maximize your chances of success.
                </p>
                {/* Image Placeholder */}
                <div className="image-placeholder-container">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Consultation Session" />
                  <div className="image-placeholder-overlay"></div>
                </div>
              </div>
              
              <div className="services-right-col">
                {/* Benefits sub-card */}
                <div className="sub-service-card">
                  <div className="sub-service-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="sub-service-content">
                    <h3 className="sub-service-title">Benefits</h3>
                    <p className="sub-service-text">
                      Secure your future in 3-5 years: gain citizenship, travel visa-free, and enjoy benefits like free healthcare and education.
                    </p>
                  </div>
                </div>

                {/* Services sub-card */}
                <div className="sub-service-card">
                  <div className="sub-service-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                  <div className="sub-service-content">
                    <h3 className="sub-service-title">Services</h3>
                    <ul className="sub-service-bullets">
                      <li>Get tailored IELTS/PTE prep and expert guidance for PR visa applications.</li>
                      <li>In-house support for IELTS training through a personal Trainer.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 2: Canada Migration */}
          <ScrollStackItem itemClassName="card-canada">
            <div className="stack-card-grid">
              <div className="stack-card-left">
                <div className="badge-tag">
                  <span className="badge-pulse"></span>
                  NEXUS MIGRATION
                </div>
                <h2 className="stack-title">
                  Secure Your Future: <br />
                  Migrate to <span className="accent-text-canada">Canada</span> with Ease.
                </h2>
                <p className="stack-description">
                  At Nexus Migration, we simplify your journey to Canada with expert, end-to-end relocation solutions. 
                  Whether you are aiming for Permanent Residency through Express Entry, seeking a Study Permit to advance 
                  your career, or applying for a Family Sponsorship, our certified consultants provide the strategic 
                  guidance you need. 
                </p>
                <p className="stack-description">
                  We handle the complex documentation and IRCC compliance so you can focus on your future. From initial 
                  eligibility assessment to post-landing support, Nexus Migration is your trusted partner in turning 
                  Canadian aspirations into reality.
                </p>
              </div>
              <div className="stack-card-right">
                <div className="image-placeholder-container">
                  <img src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80" alt="Migrate to Canada" />
                  <div className="image-placeholder-overlay"></div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 3: Australia Migration */}
          <ScrollStackItem itemClassName="card-australia">
            <div className="stack-card-grid reverse">
              <div className="stack-card-right">
                <div className="image-placeholder-container">
                  <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80" alt="Migrate to Australia" />
                  <div className="image-placeholder-overlay"></div>
                </div>
              </div>
              <div className="stack-card-left">
                <div className="badge-tag">
                  <span className="badge-pulse"></span>
                  NEXUS MIGRATION
                </div>
                <h2 className="stack-title">
                  Start Your New Chapter: <br />
                  Seamless <span className="accent-text-australia">Australian</span> Migration Starts Here.
                </h2>
                <p className="stack-description">
                  Unlock a world of opportunity in the Land Down Under with Nexus Migration's specialized Australian 
                  visa services. From navigating the points-based General Skilled Migration (GSM) program to securing 
                  Employer-Sponsored Visas or Student visas for world-class universities, we provide a clear path to your success. 
                </p>
                <p className="stack-description">
                  Our team focuses on meticulous Skills Assessment and EOI (Expression of Interest) management to maximize 
                  your chances of an invite. At Nexus Migration, we turn the complexity of Australian immigration laws 
                  into a straightforward journey toward your PR and professional future.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 4: New Zealand Migration */}
          <ScrollStackItem itemClassName="card-nz">
            <div className="stack-card-grid">
              <div className="stack-card-left">
                <div className="badge-tag">
                  <span className="badge-pulse"></span>
                  NEXUS MIGRATION
                </div>
                <h2 className="stack-title">
                  Your Gateway to <span className="accent-text-nz">New Zealand</span>: <br />
                  Expert Guidance for Every Step.
                </h2>
                <p className="stack-description">
                  Experience the unparalleled lifestyle of Aotearoa with Nexus Migration's dedicated New Zealand 
                  relocation support. We specialize in helping professionals and families navigate the Skilled Migrant 
                  Category and Green List pathways with precision. 
                </p>
                <p className="stack-description">
                  Whether you are pursuing a Work to Residence visa or seeking a Post-Study Work Visa to launch your 
                  international career, our consultants ensure your application meets every requirement of Immigration New Zealand. 
                  Nexus Migration provides the local expertise and global vision necessary to help you settle, work, and thrive.
                </p>
              </div>
              <div className="stack-card-right">
                <div className="image-placeholder-container">
                  <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80" alt="Migrate to New Zealand" />
                  <div className="image-placeholder-overlay"></div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}
