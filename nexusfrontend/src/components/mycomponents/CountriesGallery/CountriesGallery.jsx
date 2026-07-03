import React from 'react';
import CircularGallery from '../../ui/circulargallery/circulargallery';

const CountriesGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full py-16" style={{ outline: 'none', border: 'none' }}>
      {/* Centered Heading Block */}
      <div className="flex flex-col items-center justify-center text-center mb-10 max-w-2xl px-4 w-full" style={{ outline: 'none', border: 'none' }}>
        <span className="text-xs font-bold uppercase tracking-widest text-[#b81d24] bg-[#b81d24]/8 px-3 py-1 rounded-full border border-[#b81d24]/10 self-center text-center">
          Our Destinations
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight font-heading text-center w-full">
          Countries Visa we Provide
        </h2>
        <p className="text-sm text-slate-500 mt-3 font-body text-center max-w-md mx-auto">
          Explore our primary migration destinations. We offer comprehensive immigration consulting and visa processing services for top-tier countries.
        </p>
      </div>

      {/* Gallery Wrapper */}
      <div style={{ height: '600px', position: 'relative', width: '100%', outline: 'none', border: 'none' }}>
        <CircularGallery
          bend={1}
          textColor="#000E24"
          borderRadius={0.05}
          scrollEase={0.05}
          fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap"
          font="bold 30px Roboto Flex"
          scrollSpeed={2}
        />
      </div>
    </div>
  );
};

export default CountriesGallery;