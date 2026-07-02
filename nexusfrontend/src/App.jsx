import React from 'react';
import Navbar from './components/mycomponents/Navbar/Navbar';
import Strands from './components/ui/herobackground/herobacground';
import ScrollStack, { ScrollStackItem } from './components/ui/ScrollStack/ScrollStack';
import InfoAfterHero from './components/mycomponents/infoafterhero/infoafterhero';
import HeroSection from './components/mycomponents/HeroSection/HeroSection';
import AssesmentForm from './components/mycomponents/AssesmentForm/AssesmentForm';
import './App.css';

const servicesInfo = {
  badge: "NEXUS MIGRATION",
  title: "Immigration Services From Expert Agents.",
  description: "Get expert guidance and support for your immigration needs from our experienced agents. We provide personalized assistance and advice to streamline your immigration process and maximize your chances of success.",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  benefits: {
    title: "Benefits",
    text: "Secure your future in 3-5 years: gain citizenship, travel visa-free, and enjoy benefits like free healthcare and education."
  },
  services: {
    title: "Services",
    bullets: [
      "Get tailored IELTS/PTE prep and expert guidance for PR visa applications.",
      "In-house support for IELTS training through a personal Trainer."
    ]
  }
};

const canadaInfo = {
  type: 'country',
  badge: 'NEXUS MIGRATION',
  title: (
    <>
      Secure Your Future: <br />
      Migrate to <span className="accent-text-canada">Canada</span> with Ease.
    </>
  ),
  descriptions: [
    "At Nexus Migration, we simplify your journey to Canada with expert, end-to-end relocation solutions. Whether aiming for PR through Express Entry, a Study Permit, or Family Sponsorship, our certified consultants handle the complex documentation and IRCC compliance to turn your Canadian aspirations into reality."
  ],
  image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80",
  alt: "Migrate to Canada"
};

const australiaInfo = {
  type: 'country',
  reverse: true,
  badge: 'NEXUS MIGRATION',
  title: (
    <>
      Start Your New Chapter: <br />
      Seamless <span className="accent-text-australia">Australian</span> Migration Starts Here.
    </>
  ),
  descriptions: [
    "Unlock a world of opportunity in Australia with Nexus Migration's specialized visa services. From GSM points-based pathways to Employer-Sponsored and Student visas, our team manages your Skills Assessment and EOI to turn complex immigration laws into a straightforward journey toward your PR."
  ],
  image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80",
  alt: "Migrate to Australia"
};

const nzInfo = {
  type: 'country',
  badge: 'NEXUS MIGRATION',
  title: (
    <>
      Your Gateway to <span className="accent-text-nz">New Zealand</span>: <br />
      Expert Guidance for Every Step.
    </>
  ),
  descriptions: [
    "Experience the unparalleled lifestyle of New Zealand with Nexus Migration's relocation support. We help professionals and families navigate the Skilled Migrant Category and Green List pathways, ensuring your Work to Residence or Student application meets every requirement of Immigration New Zealand."
  ],
  image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  alt: "Migrate to New Zealand"
};

export default function App() {

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

      {/* Full Screen Hero Section */}
      <div className="full-screen-hero-container" id="home">
        <HeroSection />
      </div>

      {/* Scroll Stack Sections */}
      <div className="scroll-stack-wrapper">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.06}
          itemStackDistance={12}
          baseScale={0.82}
          rotationAmount={0}
          blurAmount={2}
          stackPosition="80px"
        >
          {/* Card 1: Free Assessment Form */}
          <ScrollStackItem itemClassName="card-assessment">
            <AssesmentForm />
          </ScrollStackItem>

          {/* Card 2: Immigration Services */}
          <ScrollStackItem itemClassName="card-services">
            <InfoAfterHero info={servicesInfo} />
          </ScrollStackItem>

          {/* Card 2: Canada Migration */}
          <ScrollStackItem itemClassName="card-canada">
            <InfoAfterHero info={canadaInfo} />
          </ScrollStackItem>

          {/* Card 3: Australia Migration */}
          <ScrollStackItem itemClassName="card-australia">
            <InfoAfterHero info={australiaInfo} />
          </ScrollStackItem>

          {/* Card 4: New Zealand Migration */}
          <ScrollStackItem itemClassName="card-nz">
            <InfoAfterHero info={nzInfo} />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}
