"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaReact, FaPython, FaNodeJs, FaGithub, FaRocket, FaCode, FaChartLine, FaDatabase, FaJava, FaBrain } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiMicrosoftexcel, SiPowerbi, SiCplusplus, SiR } from "react-icons/si";

const orbitTechs = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#336791]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
  { name: "R", icon: <SiR className="text-[#276DC3]" /> },
  { name: "AI/ML", icon: <FaBrain className="text-pink-400" /> },
  { name: "Excel", icon: <SiMicrosoftexcel className="text-[#217346]" /> },
  { name: "Power BI", icon: <SiPowerbi className="text-[#F2C811]" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

const OrbitIcon = ({ tech, index, total }: { tech: typeof orbitTechs[0]; index: number; total: number }) => {
  const angle = (index / total) * 360;
  // Use a larger radius since the center is at the corner
  const radius = index % 2 === 0 ? 280 : 380; // Alternate between two orbits

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      style={{
        transformOrigin: "0% 0%",
        willChange: "transform",
      }}
      initial={{ rotate: angle }}
      animate={{ rotate: angle + 360 }}
      transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
    >
      <motion.div
        className="absolute flex flex-col items-center justify-center"
        style={{
          marginTop: -radius - 32, // adjust for icon size
          marginLeft: -32,
          willChange: "transform",
        }}
        initial={{ rotate: -angle }}
        animate={{ rotate: -(angle + 360) }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        <div className="w-16 h-16 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#0A0A1A]/90 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center text-3xl md:text-3xl">
          {tech.icon}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const OrbitalTechStackCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none w-full h-full",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      {/* Background gradients/nebula */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full border border-purple-500/20 bg-purple-500/10 blur-[80px] pointer-events-none z-0 transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/2 w-[150px] h-[150px] rounded-full border border-blue-500/20 bg-blue-500/10 blur-[60px] pointer-events-none z-0 transform -translate-y-1/2 translate-x-1/4" />

      {/* Orbital Animation Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          // Masks out the left and top areas so icons fade when they go near the text
          WebkitMaskImage: "radial-gradient(circle at 100% 100%, black 30%, rgba(0,0,0,0.5) 55%, transparent 80%)",
          maskImage: "radial-gradient(circle at 100% 100%, black 30%, rgba(0,0,0,0.5) 55%, transparent 80%)",
        }}
      >
        {/* Central glowing box at Bottom Right Corner */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 rounded-3xl border border-indigo-500/30 bg-[#0A0A1A]/90 shadow-[0_0_50px_rgba(99,102,241,0.5)] backdrop-blur-2xl flex items-center justify-center text-5xl text-indigo-400 pointer-events-auto transform -rotate-12">
          <FaCode className="transform -translate-x-3 -translate-y-3" />
        </div>

        {/* Orbit Rings centered at Bottom Right Corner (hidden, only structure remains) */}

        {/* Orbiting Tech Icons */}
        <div className="absolute bottom-0 right-0 w-0 h-0">
          {orbitTechs.map((tech, index) => (
            <OrbitIcon key={tech.name} tech={tech} index={index} total={orbitTechs.length} />
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 lg:p-8 pointer-events-none max-w-[85%] lg:max-w-[65%]">
        {/* Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-medium w-fit mb-3 md:mb-4">
          <FaCode className="text-purple-400" /> Always Learning
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="font-sans font-light text-gray-300 text-sm md:text-base">
            I constantly try to improve
          </span>
          <span className="font-sans font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-wide pb-1 mt-1">
            My Tech Stack
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm my-1">
          Exploring new technologies, building projects, and leveling up every day.
        </p>

        {/* Stats Grid */}
        <div className="flex flex-row items-center gap-4 md:gap-6 mt-4 md:mt-6 pointer-events-auto border-t border-white/5 pt-5 w-full max-w-[280px] md:max-w-md">
          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <FaRocket className="text-purple-400 text-lg" />
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg md:text-xl">15+</div>
              <div className="text-gray-400 text-[10px] md:text-xs">Technologies</div>
            </div>
          </div>
          
          <div className="h-10 w-px bg-white/10" />

          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <FaCode className="text-blue-400 text-lg" />
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg md:text-xl">500+</div>
              <div className="text-gray-400 text-[10px] md:text-xs">Hours Coded</div>
            </div>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.15)]">
              <FaChartLine className="text-teal-400 text-lg" />
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg md:text-xl">20+</div>
              <div className="text-gray-400 text-[10px] md:text-xs">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
