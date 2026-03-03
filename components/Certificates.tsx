import React from "react";
import { FaAward, FaBrain, FaChartBar, FaCode, FaRobot, FaCloud, FaGraduationCap, FaUsers } from "react-icons/fa6";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Fundamentals of Artificial Intelligence",
      organization: "NPTEL",
      year: "2025",
      icon: <FaBrain />,
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400",
    },
    {
      id: 2,
      title: "Data Analytics Virtual Experience",
      organization: "Accenture (Forage)",
      year: "2024",
      icon: <FaChartBar />,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      id: 3,
      title: "Frontend Software Engineering Job Simulation",
      organization: "Forage",
      year: "2024",
      icon: <FaCode />,
      gradient: "from-pink-500/20 to-orange-500/20",
      iconColor: "text-pink-400",
    },
    {
      id: 4,
      title: "Generative AI",
      organization: "LinkedIn Learning",
      year: "2024",
      icon: <FaRobot />,
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
    {
      id: 5,
      title: "AWS Training and Certification",
      organization: "Amazon Web Services",
      year: "2025",
      icon: <FaCloud />,
      gradient: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400",
    },
    {
      id: 6,
      title: "Introduction to Artificial Intelligence",
      organization: "Simplilearn",
      year: "2025",
      icon: <FaGraduationCap />,
      gradient: "from-green-500/20 to-cyan-500/20",
      iconColor: "text-green-400",
    },
    {
      id: 7,
      title: "Campus Mantri",
      organization: "GeeksforGeeks",
      year: "2026",
      icon: <FaUsers />,
      gradient: "from-emerald-500/20 to-green-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <div className="py-20" id="certificates">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>
      <p className="text-white-200 text-center mt-4 mb-16 text-lg">
        Professional certifications and achievements
      </p>

      <div className="w-full mt-12 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`relative p-6 rounded-2xl backdrop-blur-lg bg-black-200/50 border border-black-300 hover:border-purple/40 hover:scale-105 transition-all duration-300 group overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-black-100 border border-black-300 ${cert.iconColor} text-xl`}>
                {cert.icon}
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-base font-bold text-white leading-tight">
                  {cert.title}
                </h3>
                <p className="text-white-200 text-sm">
                  Issued by: <span className="text-purple font-semibold">{cert.organization}</span>
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <FaAward className="text-purple text-sm" />
                  <span className="text-purple text-sm font-semibold">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;