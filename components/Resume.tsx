import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Resume = () => {
  const quickLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/kiyansh13karan",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn", 
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/karan-nayal-054981286/",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:karannayalkannu1982@gmail.com", 
      color: "hover:text-red-400"
    }
  ];

  const highlights = [
    "B.Tech CSE – Graphic Era Hill University, Bhimtal (CGPA: 7.5)",
    "300+ DSA problems solved (LeetCode & GeeksforGeeks)",
    "Projects in Web Development & Machine Learning"
  ];

  return (
    <div className="py-16" id="resume">
      <div className="flex flex-col items-center">
        {/* Resume Content */}
        <div id="resume-content" className="flex flex-col items-center mt-[5px]">
          {/* Resume Section Heading */}
          <h1 className="heading mb-4">
            <span className="text-purple">Resume</span>
          </h1>
          <p className="text-white-200 text-center mb-8 text-lg">
            A quick overview of my background and experience
          </p>
          
          <p className="text-white-200 text-center max-w-3xl mb-12 text-base leading-relaxed">
            Computer Science Engineering student with strong foundations in Web Development, Machine Learning, and problem solving. Passionate about building modern, responsive applications and solving real-world problems through technology.
          </p>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-5xl mx-auto mb-12 px-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-white-200 text-center relative z-10">
                  • {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 mb-12">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-black-300 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple/20 ${link.color}`}
              >
                <div className="text-2xl text-white-200 group-hover:scale-110 transition-all duration-300">
                  {link.icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </a>
            ))}
          </div>

          {/* Download Resume Button */}
          <a 
            href="/Karan_Nayal_CV.pdf" 
            download="Karan_Nayal_CV.pdf"
            className="inline-block"
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