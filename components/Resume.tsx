import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Button } from "./ui/MovingBorders";
import { HoverBorderGradient } from "./ui/HoverBorder";

const Resume = () => {
  const quickLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/kiyansh13karan",
      color: "text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/karan-nayal-054981286/",
      color: "text-[#0A66C2]",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:karannayalkannu1982@gmail.com",
      color: "text-[#EA4335]",
    },
  ];

  const highlights = [
    "B.Tech CSE – Graphic Era Hill University, Bhimtal",
    "Campus Mantri at GeeksforGeeks (Jan 2026 – Jun 2026)",
    "750+ DSA problems solved (LeetCode & GeeksforGeeks)",
  ];

  return (
    <div className="py-16" id="resume">
      <div className="flex flex-col items-center">
        {/* Resume Content */}
        <div
          id="resume-content"
          className="flex flex-col items-center mt-[5px]"
        >
          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-5xl mx-auto mb-12 px-4 w-full">
            {highlights.map((highlight, index) => (
              <Button
                key={index}
                duration={Math.floor(Math.random() * 5000) + 5000}
                borderRadius="1.25rem"
                containerClassName="h-full w-full hover:scale-105 transition-transform duration-300 group md:col-span-1"
                className="flex-1 text-white border-none backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
              >
                <div className="p-6 h-full flex flex-col justify-center items-center relative z-10 w-full">
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-white-200 text-center text-sm md:text-base font-semibold relative z-20">
                    {highlight}
                  </p>
                </div>
              </Button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 mb-12">
            {quickLinks.map((link, index) => (
              <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                <HoverBorderGradient
                  containerClassName="w-16 h-16 hover:scale-110 transition-transform duration-300 group"
                  className="w-full h-full flex justify-center items-center bg-black-200 p-0"
                >
                  <div className={`text-3xl ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                </HoverBorderGradient>
              </a>
            ))}
          </div>

          {/* Download Resume Button */}
          <a
            href="/Karan_Nayal_CV.pdf"
            download="Karan_Nayal_CV.pdf"
            className="inline-block rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-purple/50 transition-all duration-300"
          >
            <MagicButton
              title="Download Resume"
              icon={<FaDownload />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
