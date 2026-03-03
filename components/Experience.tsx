"use client";

import React from "react";
import { FaBriefcase, FaCalendar, FaCircleCheck } from "react-icons/fa6";
import { workExperience, internships } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* Internships Section */}
      <div className="w-full mt-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          <span className="text-purple">Internships</span>
        </h2>

        <div className="space-y-6">
          {internships.map((intern) => (
            <div
              key={intern.id}
              className="relative p-6 lg:p-8 rounded-3xl backdrop-blur-lg bg-black-200/60 border border-black-300 hover:border-purple/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/30 to-blue-500/30 flex items-center justify-center border border-purple/30">
                      <FaBriefcase className="text-purple text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">
                        {intern.company}
                      </h3>
                      <p className="text-purple font-semibold text-base">
                        {intern.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-black-100/80 px-4 py-2 rounded-xl border border-black-300 w-fit">
                    <FaCalendar className="text-purple text-sm" />
                    <span className="text-white-200 text-sm font-medium">
                      {intern.duration}
                    </span>
                    <span className="text-purple/60 text-sm">({intern.type})</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider text-white-200">
                    Key Responsibilities
                  </h4>
                  {intern.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <FaCircleCheck className="text-purple text-sm mt-1 flex-shrink-0" />
                      <p className="text-white-200 text-sm lg:text-base leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="w-full mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          <span className="text-purple">Highlights</span>
        </h2>
        <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-8">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
