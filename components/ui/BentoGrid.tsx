"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const Spline = dynamic(() => import("./SplineWrapper"), { ssr: false });

import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaLocationDot,
  FaRocket,
  FaCalendarDays,
  FaMountain,
  FaTree,
  FaShieldHalved,
  FaUserGroup,
  FaBolt,
  FaCode,
} from "react-icons/fa6";
import { SiGmail, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { DiscordCard } from "./DiscordCard";
import { TechStackCard } from "./TechStackCard";
import { OrbitalTechStackCard } from "./OrbitalTechStackCard";
import { LinkedInCard } from "./LinkedInCard";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-10, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {


  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "karannayalkannu1982@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  if (id === 1) {
    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col",
          className,
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[250px] h-[250px] rounded-full border border-purple-500/30 bg-purple-500/20 blur-[60px]" />
        </div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

        {/* Spline Robot (Absolute full box behind text) */}
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-40 mix-blend-lighten">
          <div className="absolute inset-0 scale-[1.3] md:scale-[1.4] translate-y-[15%] lg:translate-x-[10%]">
            <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </div>
        </div>

        {/* Floating Card (Hidden on very small screens, small on desktop) */}
        <div className="hidden lg:block absolute top-8 right-6 z-20 w-48 p-3 rounded-2xl border border-white/10 bg-[#0a0f25]/80 backdrop-blur-md shadow-2xl pointer-events-auto">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2 border border-purple-500/30">
            <FaRocket className="text-xs" />
          </div>
          <h3 className="text-white font-semibold text-xs mb-1">
            Full Stack Developer
          </h3>
          <p className="text-gray-400 text-[9px] leading-relaxed">
            Building scalable web apps.
          </p>
        </div>

        {/* Content (Left Side) */}
        <div className="relative z-20 w-full lg:w-[65%] h-full flex flex-col justify-between p-6 lg:p-8 pointer-events-none">
          {/* Top Section */}
          <div className="flex flex-col items-start gap-3">
            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-400 text-[10px] md:text-xs font-medium pointer-events-auto">
              <FaRegUser /> ABOUT ME
            </div>

            {/* Headings */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-1 leading-tight pointer-events-auto">
              Hi, I&apos;m <br />
              Karan Nayal
            </h1>

            <p className="text-xs md:text-sm text-gray-300 font-medium border-l-2 border-purple-500 pl-3 pointer-events-auto">
              Computer Science Engineering Student
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-start gap-4 mt-8 lg:mt-auto">
            {/* Description */}
            <p className="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed pointer-events-auto">
              Graphic Era Hill University, Bhimtal (2023–2027). Passionate about
              engineering modern digital experiences through Full Stack
              Development & AI-driven solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 pointer-events-auto">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/kiyansh13karan",
                  color:
                    "text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/karan-nayal-054981286/",
                  color:
                    "text-[#0077b5] group-hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]",
                },
                {
                  icon: <SiGmail />,
                  link: "mailto:karannayalkannu1982@gmail.com",
                  color:
                    "text-[#EA4335] group-hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.8)]",
                },
                {
                  icon: <SiLeetcode />,
                  link: "https://leetcode.com/u/karannayal13/",
                  color:
                    "text-[#FFA116] group-hover:drop-shadow-[0_0_8px_rgba(255,161,22,0.8)]",
                },
                {
                  icon: <SiGeeksforgeeks />,
                  link: "https://www.geeksforgeeks.org/profile/kannunayalslzt?tab=activity",
                  color:
                    "text-[#2F8D46] group-hover:drop-shadow-[0_0_8px_rgba(47,141,70,0.8)]",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-8 h-8 md:w-10 md:h-10 rounded-lg border border-white/10 bg-black/50 flex items-center justify-center text-sm md:text-base hover:bg-white/10 transition-all duration-300 hover:scale-125 hover:border-white/30"
                >
                  <div
                    className={`transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Pills */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 bg-black/30 py-4 px-[22px] rounded-xl border border-white/5 w-fit pointer-events-auto">
              <div className="flex items-center gap-3 sm:pr-5 sm:border-r border-white/10">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Course</p>
                  <p className="text-xs font-semibold text-white">B.Tech CSE</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:pr-5 sm:border-r border-white/10">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                  <FaCalendarDays />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Batch</p>
                  <p className="text-xs font-semibold text-white">
                    2023 - 2027
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Location</p>
                  <p className="text-xs font-semibold text-white">
                    Haldwani, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 2) {
    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between p-6 md:p-10",
          className,
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Globe Background */}
        <div className="absolute right-0 md:-right-4 top-0 bottom-0 w-[100%] md:w-[85%] lg:w-[75%] pointer-events-none opacity-90 z-0 scale-[1.1] md:scale-[1.3] -translate-y-5 md:-translate-y-12">
          <GridGlobe />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          {/* Location Badge */}
          <div className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 flex items-center gap-2 mb-6 pointer-events-auto">
            <FaLocationDot className="text-purple-400 text-sm" />
            <span className="text-purple-400 text-[10px] tracking-[0.2em] font-semibold uppercase">
              Location
            </span>
          </div>

          {/* Heading */}
          <p className="text-white text-lg md:text-xl font-semibold mb-1">
            I belong to
          </p>
          <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Haldwani,
            <br />
            <span className="text-purple-400">Uttarakhand.</span>
          </p>

          {/* Description */}
          <div className="border-l-2 border-purple-500/40 pl-4 mt-6 max-w-[80%] md:max-w-[50%]">
            <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed">
              A scenic city nestled in the Kumaon region of Uttarakhand,
              surrounded by mountains and nature.
            </p>
          </div>

          {/* Bottom Pills */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-auto bg-black/40 p-3 px-5 rounded-2xl border border-white/5 w-fit pointer-events-auto">
            <div className="flex items-center gap-2 sm:pr-4 sm:border-r border-white/10">
              <FaMountain className="text-purple-400 text-sm" />
              <span className="text-gray-300 text-[10px] md:text-xs font-medium">
                Scenic Views
              </span>
            </div>
            <div className="flex items-center gap-2 sm:pr-4 sm:border-r border-white/10">
              <FaTree className="text-purple-400 text-sm" />
              <span className="text-gray-300 text-[10px] md:text-xs font-medium">
                Natural Beauty
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldHalved className="text-purple-400 text-sm" />
              <span className="text-gray-300 text-[10px] md:text-xs font-medium">
                Peaceful Living
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 4) {
    return (
      <div className={cn("row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between", className)}>
        <DiscordCard />
      </div>
    );
  }

  if (id === 6) {
    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between p-5 md:p-6",
          className,
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Left Side */}
        <div className="relative z-10 flex flex-col justify-center w-full">
          {/* Badge */}
          <div className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 flex items-center gap-2 mb-2 pointer-events-auto">
            <FaUserGroup className="text-purple-400 text-sm" />
            <span className="text-gray-300 text-[10px] sm:text-xs tracking-wide">
              Let's Build Something Amazing
            </span>
          </div>

          {/* Title */}
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-2 pointer-events-auto">
            Do you want to
            <br />
            start{" "}
            <span className="text-purple-400">
              a project
              <br />
              together?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-4 pointer-events-auto">
            I'm always excited to collaborate on innovative ideas and bring them
            to life.
          </p>

          {/* Features row */}
          <div className="flex flex-wrap items-center gap-4 mb-4 pointer-events-auto">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <FaBolt className="text-purple-400 text-xs" />
              </div>
              <span className="text-gray-300 text-xs md:text-sm">
                Creative Ideas
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <FaCode className="text-purple-400 text-xs" />
              </div>
              <span className="text-gray-300 text-xs md:text-sm">
                Clean Code
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <FaRocket className="text-purple-400 text-xs" />
              </div>
              <span className="text-gray-300 text-xs md:text-sm">
                Impactful Solutions
              </span>
            </div>
          </div>

          {/* Email Button */}
          <div className="relative w-fit pointer-events-auto">
            <div
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 ${copied ? "block" : "hidden"}`}
            >
              <Lottie options={defaultOptions} height={200} width={400} eventListeners={[]} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>

        {/* Right Side Background Effects */}
        <div className="absolute right-0 top-0 bottom-0 w-[100%] md:w-[50%] pointer-events-none opacity-80 z-0 overflow-hidden">
          {/* Subtle gradient orbits / placeholders for the 3D graphic */}
          <div className="absolute w-[200%] h-[200%] border-[1px] border-purple-500/20 rounded-[100%] top-[20%] -right-[50%] rotate-12" />
          <div className="absolute w-[150%] h-[150%] border-[1px] border-blue-500/10 rounded-[100%] top-[40%] -right-[30%] rotate-45" />

          <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
        </div>
      </div>
    );
  }

  if (id === 3) {
    return <TechStackCard className={className} />;
  }

  if (id === 5) {
    return <LinkedInCard className={className} />;
  }

  if (id === 7) {
    return <OrbitalTechStackCard className={className} />;
  }

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {id === 1 ? (
            <div className="absolute right-0 top-0 w-full h-full opacity-80 pointer-events-auto translate-x-[10%] md:translate-x-[15%] lg:translate-x-[20%]">
              <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </div>
          ) : (
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 1 && "pointer-events-none",
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-base z-10 ${
              id === 1
                ? "font-medium text-neutral-200 leading-relaxed lg:text-xl lg:max-w-md"
                : "lg:text-2xl max-w-96 font-bold"
            }`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} eventListeners={[]} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
