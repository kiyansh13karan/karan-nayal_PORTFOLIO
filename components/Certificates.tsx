import React from "react";
import Image from "next/image";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2024",
      image: "/aws-certificate.png"
    },
    {
      id: 2,
      title: "Career Essentials in Data Analysis",
      organization: "Microsoft & LinkedIn",
      year: "2024",
      image: "/career-essential-in-data-analysis.png"
    },
    {
      id: 3,
      title: "Frontend Software Engineering Job Simulation",
      organization: "Forage",
      year: "2024",
      image: "/frontend-software-engineering-job-siulation.png"
    },
    {
      id: 4,
      title: "SQL and Relational Database",
      organization: "IBM",
      year: "2024",
      image: "/sql-relational-database.png"
    }
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-black-200/50 border border-black-300 hover:border-purple/30 transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-white-200 text-sm">
                  Issued by: <span className="text-purple">{cert.organization}</span>
                </p>
                <p className="text-white-200 text-sm">
                  Year: <span className="text-purple">{cert.year}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;