import React from "react";
import "./Education.css";
import EducationItem from "./Education-items"
const Education = () => {
  // You can define your timeline data directly in the component
  const EducationItems = [
    {
      year: "2014 - 2016",
      company: "APPLE",
      title: "Full Stack Developer",
      description: "Worked as part of a multi-disciplinary team...",
    },
    {
      year: "2011 - 2014",
      company: "MICROSOFT",
      title: "Web Developer",
      description: "Responsible for working on a range of projects...",
    },
    {
      year: "2003 - 2006",
      company: "GOOGLE",
      title: "Systems Analyst / Web Developer",
      description: "Worked with backend developers...",
    },
    {
      year: "2014 - 2016",
      company: "APPLE",
      title: "Full Stack Developer",
      description: "Worked as part of a multi-disciplinary team...",
    },
    {
      year: "2011 - 2014",
      company: "MICROSOFT",
      title: "Web Developer",
      description: "Responsible for working on a range of projects...",
    },
    {
      year: "2003 - 2006",
      company: "GOOGLE",
      title: "Systems Analyst / Web Developer",
      description: "Worked with backend developers...",
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="container mx-auto py-10">
      {/* <h1 className="text-3xl font-bold mb-10">Experience</h1> */}
      <div className="relative wrap overflow-hidden h-full"> 
        <div className="border-5 absolute border-opacity-100 timeline-border-style h-full border left-1/2"style={{borderColor:'#c0e8d7'}}></div>

        <div >
        {EducationItems.map((item, index) => (
          <EducationItem 
          
            key={index}
            year={item.year}
            company={item.company}
            title={item.title}
            description={item.description}
            isRight={index % 2 === 0}  // Alternates the position
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
