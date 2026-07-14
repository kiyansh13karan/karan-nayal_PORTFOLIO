"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaLinkedin, FaUserFriends, FaAward, FaEye, FaLightbulb, FaCode, FaChartLine, FaTrophy, FaArrowRight } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { FaGraduationCap, FaLocationDot, FaLink } from "react-icons/fa6";

export const LinkedInCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col lg:flex-row h-full",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #09090b, #00122e, #09090b)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      {/* Subtle dotted background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Left Column (Stats & Connect) */}
      <div className="relative z-10 w-full lg:w-[40%] flex flex-col justify-between p-4 lg:p-6">
        <div>
          {/* Badge */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[9px] font-semibold w-fit tracking-wider">
            <FaLinkedin /> LINKEDIN
          </div>

          <h2 className="text-white text-lg md:text-xl font-light mt-3">
            Let's connect on
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight leading-tight">
            LinkedIn
          </h1>
          
          <p className="text-gray-400 text-[10px] md:text-xs mt-2 leading-relaxed max-w-sm">
            I share my learnings, projects, achievements and tech insights on LinkedIn.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
            <FaUserFriends className="text-blue-400 text-sm md:text-base mb-1 opacity-80" />
            <span className="text-white font-bold text-sm md:text-base">3500+</span>
            <span className="text-gray-500 text-[8px] md:text-[9px]">Connections</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
            <MdArticle className="text-blue-400 text-sm md:text-base mb-1 opacity-80" />
            <span className="text-white font-bold text-sm md:text-base">90+</span>
            <span className="text-gray-500 text-[8px] md:text-[9px]">Posts</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
            <FaAward className="text-blue-400 text-sm md:text-base mb-1 opacity-80" />
            <span className="text-white font-bold text-sm md:text-base">10+</span>
            <span className="text-gray-500 text-[8px] md:text-[9px]">Certificates</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
            <FaEye className="text-blue-400 text-sm md:text-base mb-1 opacity-80" />
            <span className="text-white font-bold text-sm md:text-base">3K+</span>
            <span className="text-gray-500 text-[8px] md:text-[9px]">Profile Views</span>
          </div>
        </div>

        {/* Connect Button */}
        <a 
          href="https://www.linkedin.com/in/karan-nayal-054981286/" 
          target="_blank"
          rel="noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs md:text-sm font-bold hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 pointer-events-auto"
        >
          <FaLinkedin className="text-base" />
          Visit My LinkedIn Profile
          <FaArrowRight className="text-[10px] ml-1" />
        </a>
      </div>

      {/* Right Column (Profile Card Replica) */}
      <div className="relative z-10 w-full lg:w-[60%] flex items-center justify-center p-4 mt-2 lg:mt-0">
        
        {/* Profile Card Container */}
        <div className="w-full max-w-[400px] rounded-2xl bg-[#111116] border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col relative">
          
          {/* Banner (Constellation/Nodes Background) */}
          <div className="h-20 w-full relative bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            <div className="absolute top-2 right-3 bg-black/40 backdrop-blur-md p-1.5 rounded-md">
              <FaLinkedin className="text-white text-sm" />
            </div>
            {/* Geometric lines effect overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,30 L100,5 L200,45 L300,10 L400,50 L500,20" fill="none" stroke="#4f46e5" strokeWidth="1" />
              <path d="M0,50 L150,70 L250,35 L350,60 L500,40" fill="none" stroke="#3b82f6" strokeWidth="1" />
              <circle cx="100" cy="5" r="1.5" fill="#fff" />
              <circle cx="200" cy="45" r="1.5" fill="#fff" />
              <circle cx="300" cy="10" r="1.5" fill="#fff" />
              <circle cx="150" cy="70" r="1.5" fill="#fff" />
              <circle cx="250" cy="35" r="1.5" fill="#fff" />
            </svg>
          </div>

          {/* Profile Content */}
          <div className="px-4 pb-4 relative flex-1 flex flex-col">
            
            {/* Profile Picture */}
            <div className="absolute -top-10 left-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-[3px] border-[#111116] overflow-hidden bg-gray-800 shadow-xl">
                  <img src="/linkedin_profile_image.jpg" alt="Karan Nayal" className="w-full h-full object-cover" />
                </div>
                {/* Active Status */}
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-[3px] border-[#111116]" />
                {/* Outer Ring gradient */}
                <div className="absolute -inset-1 rounded-full border border-transparent border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent rotate-45 pointer-events-none" />
              </div>
            </div>

            {/* Empty space for avatar overlap */}
            <div className="h-8" />

            {/* Name & Headline */}
            <div className="mt-1">
              <h3 className="text-white text-lg font-bold flex items-center gap-1.5">
                Karan Nayal
                <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </h3>
              <p className="text-blue-400 text-[10px] font-medium mt-0.5">
                Full-Stack Developer • Data Analyst Aspirant • AI/ML Enthusiast
              </p>
              <p className="text-gray-400 text-[10px] mt-1.5 max-w-sm leading-tight">
                Building scalable web applications and analyzing data to drive meaningful insights.
              </p>
            </div>

            {/* Info Details */}
            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-gray-400 text-[10px]">
                <FaGraduationCap className="text-gray-500" /> B.Tech CSE, Graphic Era Hill University
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-[10px]">
                <FaLocationDot className="text-gray-500" /> Haldwani, Uttarakhand, India
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-[10px] cursor-pointer">
                <FaLink className="text-gray-500" /> linkedin.com/in/karan-nayal
              </div>
            </div>

            {/* Bottom Section (What I Share) */}
            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
              <span className="text-gray-300 text-[10px] font-medium mr-2">What I share</span>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[8px] text-gray-400">
                  <FaLightbulb className="text-purple-400 text-[10px]" />
                  <span className="leading-tight">Tech<br/>Insights</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-gray-400">
                  <FaCode className="text-blue-400 text-[10px]" />
                  <span className="leading-tight">Projects &<br/>Case Studies</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-gray-400">
                  <FaChartLine className="text-green-400 text-[10px]" />
                  <span className="leading-tight">Data<br/>Analytics</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-gray-400">
                  <FaTrophy className="text-yellow-400 text-[10px]" />
                  <span className="leading-tight">Achievements &<br/>Certifications</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
