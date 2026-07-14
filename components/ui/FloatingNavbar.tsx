"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User, FileText, Award, FolderOpen, Code, MessageSquare, Mail } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const getIcon = (name: string) => {
    switch (name) {
      case "About": return <User className="w-[18px] h-[18px]" />;
      case "Resume": return <FileText className="w-[18px] h-[18px]" />;
      case "Certificates": return <Award className="w-[18px] h-[18px]" />;
      case "Projects": return <FolderOpen className="w-[18px] h-[18px]" />;
      case "Skills": return <Code className="w-[18px] h-[18px]" />;
      case "Testimonials": return <MessageSquare className="w-[18px] h-[18px]" />;
      case "Contact": return <Mail className="w-[18px] h-[18px]" />;
      default: return <User className="w-[18px] h-[18px]" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-3 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] items-center justify-center space-x-2 w-max",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="mr-4 pl-2 pr-4 flex items-center">
          <img src="/my_logo_1-1.png" alt="logo" className="h-8 w-auto object-contain invert brightness-0 dark:invert-0" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
        
        <div className="flex items-center space-x-2">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex items-center px-4 py-2 rounded-xl text-neutral-300 hover:text-white transition-colors"
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.25)] border border-white/40"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              
              <div className="relative z-10 flex items-center space-x-2">
                {getIcon(navItem.name)}
                <span className="text-sm font-semibold">
                  {navItem.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
