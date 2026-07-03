"use client";
import React from "react";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero.png";

// 1. Achievements Visual Component (Rendered inside ScrollStack)
export const AchievementsVisual = () => {
  const stats = [
    { value: "7+", label: "Years of Experience" },
    { value: "4000+", label: "ITA Filed" },
    { value: "95%", label: "Success Rate" },
    { value: "12000+", label: "Clients Served" }
  ];

  return (
    <div className="stack-card-grid">
      {/* Left Column (Text Info) */}
      <div className="stack-card-left">
        <div className="badge-tag">
          <span className="badge-pulse"></span>
          NEXUS MIGRATION
        </div>
        <h2 className="stack-title">Discover our greatest achievements</h2>
        <p className="stack-description font-semibold text-slate-700">
          Where dedication meets success.
        </p>
        <p className="stack-description">
          The narratives behind our notable accomplishments, where each success story showcases our dedication and skill, the inspiring journey that defines our achievements.
        </p>
      </div>

      {/* Right Column (Stats Box) */}
      <div className="stack-card-right justify-center">
        <div className="flex flex-col w-full bg-white p-6 justify-between text-slate-800 rounded-2xl shadow-xl border border-slate-100/60 max-w-sm">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-between py-3.5 border-b last:border-b-0 border-slate-100">
              <div className="flex items-center space-x-3.5">
                {/* Vertical red indicator bar */}
                <div className="w-1 h-8 bg-[#b81d24] rounded-full" />
                <span className="text-3xl font-black font-heading text-slate-900 tracking-tight leading-none">{stat.value}</span>
              </div>
              <div className="text-left text-xs font-bold text-slate-700 font-body max-w-[140px] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Work Process Visual Component (Rendered inside ScrollStack)
export const WorkProcessVisual = () => {
  return (
    <div className="stack-card-grid">
      {/* Left Column (Text Info) */}
      <div className="stack-card-left">
        <div className="badge-tag">
          <span className="badge-pulse"></span>
          OUR WORK PROCESS
        </div>
        <h2 className="stack-title">Visa Approved in 5 Simple Steps.</h2>
        <p className="stack-description">
          Our systematic approach simplifies your relocation journey. From profile evaluation and document checklist creation to visa lodge and pre-departure briefings, we cover every aspect of the process to ensure a hassle-free, successful visa approval.
        </p>
      </div>

      {/* Right Column (Visual Presenter Box) */}
      <div className="stack-card-right justify-center">
        <div className="relative h-64 w-full bg-[#1c1c1e] p-4 rounded-2xl shadow-xl border border-zinc-800 max-w-sm overflow-hidden">
          {/* Dotted border wrapper */}
          <div className="w-full h-full border border-dashed border-zinc-700/60 rounded-xl relative p-4 flex">
            {/* Presenter image on the left, sticking out from the bottom */}
            <img 
              src={heroImg} 
              alt="Presenter" 
              className="absolute left-1 bottom-0 h-[106%] object-contain pointer-events-none select-none z-10" 
            />
            
            {/* Content on the right side */}
            <div className="flex flex-col justify-between items-start pl-28 py-2 w-full h-full z-20">
              <div className="bg-zinc-800/85 text-zinc-300 text-[8px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest font-heading border border-zinc-700/40">
                Our Work Process
              </div>
              
              <h4 className="text-zinc-100 text-[14px] font-black font-heading mt-1 leading-snug tracking-tight">
                Visa Approved in <br />5 Simple Steps.
              </h4>
              
              <p className="text-zinc-400 text-[8px] leading-relaxed mt-1 font-body max-w-[140px]">
                Fast track your assessment, checklist evaluation, and IRCC filing.
              </p>
              
              {/* Action Row */}
              <div className="flex flex-col space-y-1.5 mt-auto w-full">
                <button className="bg-[#b81d24] hover:bg-[#a0161c] text-white text-[8px] font-extrabold px-3 py-1 rounded-full uppercase transition-all duration-300 tracking-wider shadow-md shadow-[#b81d24]/20 active:scale-95 cursor-pointer self-start">
                  Check Now
                </button>
                <div className="flex items-center space-x-1 text-zinc-400 text-[8px] font-semibold pt-1 border-t border-zinc-800 w-full">
                  <Phone className="w-2.5 h-2.5 text-zinc-400 fill-zinc-400/10" />
                  <a href="tel:+97142950122" className="text-zinc-200 font-bold hover:text-[#b81d24] transition-colors pl-0.5">+971 4 295 0122</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsVisual;
