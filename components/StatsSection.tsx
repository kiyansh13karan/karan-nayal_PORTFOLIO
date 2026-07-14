"use client";
import React from "react";
import { FaCode, FaTrophy, FaRocket } from "react-icons/fa6";
import { Button } from "./ui/MovingBorders";

const StatsSection = () => {
  return (
    <div className="w-full mx-auto px-5 mb-20 relative z-10">
      <Button
        as="div"
        duration={5000}
        borderRadius="1rem"
        containerClassName="w-full h-auto p-[1px]"
        className="w-full flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-10 bg-[#060A17]/80 backdrop-blur-xl border-white/5"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-2xl bg-blue-900/30 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <FaCode className="text-blue-500 text-2xl" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide">10+</h3>
              <p className="text-gray-400 text-xs md:text-sm">Projects Completed</p>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="flex items-center gap-4 justify-center md:justify-start md:pl-8 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/20 flex items-center justify-center flex-shrink-0 border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <FaTrophy className="text-[#c084fc] text-2xl" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide">3+</h3>
              <p className="text-gray-400 text-xs md:text-sm">Certifications</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 justify-center md:justify-start md:pl-8 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-2xl bg-teal-900/30 flex items-center justify-center flex-shrink-0 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
              <FaCode className="text-teal-400 text-2xl" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide">500+</h3>
              <p className="text-gray-400 text-xs md:text-sm">DSA Problems Solved</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 justify-center md:justify-start md:pl-8 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-2xl bg-pink-900/30 flex items-center justify-center flex-shrink-0 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
              <FaRocket className="text-pink-400 text-2xl" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide">Always</h3>
              <p className="text-gray-400 text-xs md:text-sm">Learning & Building</p>
            </div>
          </div>

        </div>
      </Button>
    </div>
  );
};

export default StatsSection;
