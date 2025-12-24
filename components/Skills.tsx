import React from "react";
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa6";
import { SiCplusplus, SiJavascript, SiMongodb, SiMysql, SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiVisualstudiocode, SiPycharm, SiIntellijidea, SiCanva } from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "C", icon: <SiCplusplus />, color: "text-blue-400" },
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
        { name: "SQL", icon: <FaDatabase />, color: "text-orange-400" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <DiHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <DiCss3 />, color: "text-blue-400" },
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <TbBrandNextjs />, color: "text-white" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "Express.js", icon: <FaNodeJs />, color: "text-green-400" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
      ]
    },
    {
      title: "Machine Learning & CV",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
        { name: "Scikit-learn", icon: <FaPython />, color: "text-orange-400" },
        { name: "OpenCV", icon: <SiOpencv />, color: "text-green-400" },
        { name: "Pandas", icon: <SiPandas />, color: "text-blue-300" },
        { name: "NumPy", icon: <SiNumpy />, color: "text-blue-400" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", icon: <SiVisualstudiocode />, color: "text-blue-500" },
        { name: "PyCharm", icon: <SiPycharm />, color: "text-green-400" },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "text-red-400" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "Canva", icon: <SiCanva />, color: "text-purple-400" },
        { name: "Microsoft Office", icon: <FaDatabase />, color: "text-blue-600" },
      ]
    }
  ];

  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <p className="text-white-200 text-center mt-4 mb-16 text-lg">
        Technologies and tools I work with
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto px-4">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col p-3 lg:p-5 justify-between items-center relative backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-3xl border border-black-300 group hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <div className="relative z-10 w-full">
              <h3 className="text-xl lg:text-2xl font-bold text-center text-white mb-8">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 rounded-xl bg-black-100 border border-black-300 hover:scale-110 hover:shadow-lg hover:shadow-purple/20 transition-all duration-300 group/skill cursor-pointer"
                  >
                    <div className={`text-3xl lg:text-4xl mb-3 ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-white-200 text-sm lg:text-base text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;