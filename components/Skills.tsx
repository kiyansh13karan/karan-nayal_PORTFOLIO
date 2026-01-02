import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "C", percentage: 75 },
        { name: "C++", percentage: 80 },
        { name: "SQL", percentage: 85 },
        { name: "JavaScript", percentage: 88 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", percentage: 92 },
        { name: "CSS", percentage: 90 },
        { name: "React.js", percentage: 88 },
        { name: "Next.js", percentage: 85 },
        { name: "MongoDB", percentage: 78 },
        { name: "Express.js", percentage: 82 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", percentage: 78 },
        { name: "MySQL", percentage: 80 },
      ]
    },
    {
      title: "Machine Learning & CV",
      skills: [
        { name: "TensorFlow", percentage: 75 },
        { name: "Scikit-learn", percentage: 80 },
        { name: "OpenCV", percentage: 70 },
        { name: "Pandas", percentage: 85 },
        { name: "NumPy", percentage: 88 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", percentage: 95 },
        { name: "PyCharm", percentage: 85 },
        { name: "IntelliJ IDEA", percentage: 80 },
        { name: "Git", percentage: 88 },
        { name: "Canva", percentage: 75 },
        { name: "Microsoft Office", percentage: 90 },
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

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto px-4">
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
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white-200 text-sm lg:text-base font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple text-sm lg:text-base font-semibold">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-black-100 rounded-full h-3 overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out animate-pulse shadow-lg shadow-purple/30"
                        style={{ 
                          width: `${skill.percentage}%`,
                          background: `linear-gradient(90deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)`,
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
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