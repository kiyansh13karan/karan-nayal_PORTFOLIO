import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "SQL", "JavaScript", "R"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Full-Stack Development",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      title: "Data Analytics & Viz",
      skills: ["Power BI", "Advanced Excel with AI", "Matplotlib"],
      gradient: "from-orange-500 to-amber-400",
    },
    {
      title: "Machine Learning & CV",
      skills: ["TensorFlow", "Scikit-learn", "OpenCV"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Tools & Technologies",
      skills: ["VS Code", "PyCharm", "IntelliJ", "Git", "GitHub", "Canva", "Docker", "Linux", "Jupyter Notebook"],
      gradient: "from-rose-500 to-red-400",
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

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-auto px-4">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="flex flex-col p-6 relative backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-3xl border border-black-300 group hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            {/* Background glowing effect on hover */}
            <div className={`absolute -inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
            
            {/* Top Border Gradient */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient} opacity-50`} />

            <div className="relative z-10 w-full flex-grow">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 text-sm font-medium text-white-100 bg-black-100 rounded-lg border border-white/10 shadow-sm shadow-black-100/50 hover:bg-white/5 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
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