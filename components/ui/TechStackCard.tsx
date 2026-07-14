"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const commands = [
  { cmd: "whoami", out: "Karan — Full Stack Developer & ML Enthusiast" },
  { cmd: "cat current_focus.txt", out: "Building responsive web apps & ML models" },
  { cmd: "npm run build", out: "✓ Compiled successfully", success: true },
  { cmd: "python train_model.py", out: "✓ Model accuracy: 94.2%", success: true },
  { cmd: "git status", out: "3 projects in progress..." },
  { cmd: "echo \"Let's build something great\"", out: "Let's build something great" },
];

export const TechStackCard = ({ className }: { className?: string }) => {
  const [lines, setLines] = useState<{ type: "cmd" | "out"; text: string; success?: boolean }[]>([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "output" | "wait" | "done">("typing");
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, typedChars]);

  useEffect(() => {
    if (phase === "done") {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentCmdIndex(0);
        setTypedChars(0);
        setPhase("typing");
      }, 5000); // 5s wait before clearing and restarting
      return () => clearTimeout(timeout);
    }

    if (currentCmdIndex >= commands.length) {
      setPhase("done");
      return;
    }

    const currentCommand = commands[currentCmdIndex];

    if (phase === "typing") {
      if (typedChars < currentCommand.cmd.length) {
        const timeout = setTimeout(() => {
          setTypedChars((prev) => prev + 1);
        }, Math.random() * 80 + 50); // slower typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("output");
        }, 600); // longer pause before output
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "output") {
      setLines((prev) => [
        ...prev,
        { type: "cmd", text: currentCommand.cmd },
        { type: "out", text: currentCommand.out, success: currentCommand.success }
      ]);
      setTypedChars(0);
      setPhase("wait");
    }

    if (phase === "wait") {
      const timeout = setTimeout(() => {
        setCurrentCmdIndex((prev) => prev + 1);
        setPhase("typing");
      }, 1500); // longer pause before next command
      return () => clearTimeout(timeout);
    }
  }, [phase, currentCmdIndex, typedChars]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col h-full bg-[#0A0A1A]",
        className
      )}
      style={{
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      {/* Mac OS Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 text-center text-xs text-gray-400 font-mono select-none">
          karan@portfolio:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="relative flex-1 min-h-0">
        <div 
          ref={containerRef}
          className="absolute inset-0 p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto scrollbar-hide"
        >
          <div className="flex flex-col gap-3">
          {lines.map((line, i) => (
            <div key={i} className="flex flex-col">
              {line.type === "cmd" ? (
                <div className="flex items-start gap-2 text-white">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span>{line.text}</span>
                </div>
              ) : (
                <div className="flex items-start gap-2 text-gray-400 mt-1">
                  <span className="text-gray-500">{">"}</span>
                  <span className={cn(line.success && "text-emerald-400")}>
                    {line.text}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Current typing line */}
          {phase === "typing" && currentCmdIndex < commands.length && (
            <div className="flex items-start gap-2 text-white">
              <span className="text-emerald-400 font-bold">$</span>
              <span>
                {commands[currentCmdIndex].cmd.substring(0, typedChars)}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-gray-400 ml-0.5 align-middle"
                />
              </span>
            </div>
          )}

          {/* Blinking cursor when done */}
          {phase === "done" && (
            <div className="flex items-start gap-2 text-white">
              <span className="text-emerald-400 font-bold">$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-gray-400 ml-0.5 align-middle"
              />
            </div>
          )}
        </div>
      </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};
