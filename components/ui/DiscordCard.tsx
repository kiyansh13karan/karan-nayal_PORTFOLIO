"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserGroup, FaRegComments, FaCode, FaArrowRight } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export const DiscordCard = () => {
  const [counts, setCounts] = useState({ online: 560, total: 2000 });

  useEffect(() => {
    fetch("/api/discord/")
      .then((res) => res.json())
      .then((data) => {
        if (data.approximate_presence_count !== undefined) {
          setCounts({
            online: data.approximate_presence_count,
            total: data.approximate_member_count,
          });
        }
      })
      .catch((err) => console.error("Failed to fetch Discord counts", err));
  }, []);

  const formatMembers = (count: number) => {
    if (count >= 1000) return (count / 1000).toFixed(1) + "K+";
    return count;
  };

  return (
    <div className="absolute inset-0 w-full h-full p-5 md:p-8 flex flex-col md:flex-row justify-between items-center bg-[#070a14] overflow-hidden rounded-3xl z-10 pointer-events-auto">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5865F2]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#a855f7]/15 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Left Side: Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full md:w-1/2 space-y-5 h-full">
        {/* Live Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-green-500 text-xs font-semibold">{counts.online} online</span>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Join the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b98ff] to-[#c4a5ff]">
            Discord community!
          </span>
        </h2>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#5865F2] to-transparent rounded-full" />

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
          An open space for UI designers, developers, tech enthusiasts, and creators to connect, share and grow together.
        </p>

        {/* Features Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <FaUserGroup className="text-[#8b98ff] text-sm" />
            <span className="text-gray-300 text-xs">Connect</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <FaRegComments className="text-[#8b98ff] text-sm" />
            <span className="text-gray-300 text-xs">Collaborate</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <FaCode className="text-[#8b98ff] text-sm" />
            <span className="text-gray-300 text-xs">Learn & Share</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-6 pt-2">
          {/* Join Button */}
          <a
            href="https://discord.gg/ef9JnZjVu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#5865F2] to-[#7f8afe] text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]"
          >
            <FaDiscord className="text-xl" />
            Join Discord
            <FaArrowRight className="text-white/70 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Members */}
          <div className="flex flex-col">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-6 h-6 rounded-full border-2 border-[#070a14] flex items-center justify-center text-[10px] text-white/80 font-bold bg-gradient-to-br from-[#5865F2] to-[#a855f7]`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-[#070a14] bg-white/10 flex items-center justify-center text-[8px] text-white font-semibold backdrop-blur-md">
                +{formatMembers(counts.total)}
              </div>
            </div>
            <span className="text-gray-400 text-[10px] mt-1 ml-1">{formatMembers(counts.total)} Members</span>
          </div>
        </div>
      </div>

      {/* Right Side: 3D Animation */}
      <div className="absolute right-0 top-0 bottom-0 z-0 w-full md:w-[55%] h-full flex items-center justify-center opacity-40 md:opacity-100 pointer-events-none">
        
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "24px 24px" }} 
        />

        {/* Thin Orbit Rings */}
        <motion.div 
          className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbiting Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(139,152,255,0.3)]">
            <FaRegComments className="text-[#8b98ff] text-sm" />
          </div>
          <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-8 h-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(139,152,255,0.3)]">
            <FaUserGroup className="text-[#8b98ff] text-sm" />
          </div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(88,101,242,0.4)]">
            <FaCode className="text-white text-lg" />
          </div>
          
          {/* Glowing dot on orbit */}
          <div className="absolute top-1/4 right-0 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#b388ff] shadow-[0_0_10px_#b388ff]" />
          <div className="absolute bottom-1/2 left-0 -translate-x-1/2 w-1 h-1 rounded-full bg-[#8b98ff] shadow-[0_0_8px_#8b98ff]" />
        </motion.div>

        {/* Podium/Base */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[180px] h-[60px] md:w-[220px] md:h-[70px]">
          <div className="absolute inset-0 rounded-[100%] border-t-4 border-[#5865F2]/40 bg-gradient-to-b from-[#5865F2]/10 to-transparent shadow-[0_-15px_30px_rgba(88,101,242,0.3)]" />
          <div className="absolute top-3 inset-x-3 bottom-[-2px] rounded-[100%] border-t-2 border-[#8b98ff]/30 bg-gradient-to-b from-[#8b98ff]/5 to-transparent" />
        </div>

        {/* Floating 3D Discord Logo */}
        <motion.div
          className="relative z-10 text-[#5865F2] drop-shadow-[0_20px_30px_rgba(88,101,242,0.6)]"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Back layers for 3D effect */}
          <FaDiscord className="absolute top-4 left-3 text-[140px] md:text-[180px] text-[#2c3489] opacity-80 blur-[2px]" />
          <FaDiscord className="absolute top-2 left-1.5 text-[140px] md:text-[180px] text-[#424cb5]" />
          {/* Front Layer */}
          <FaDiscord className="relative text-[140px] md:text-[180px] text-[#7289da] drop-shadow-[0_0_20px_rgba(114,137,218,0.6)]" />
        </motion.div>
      </div>
    </div>
  );
};
