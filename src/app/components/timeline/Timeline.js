import React from "react";
import "../Timeline.css";
import TimelineItem from "./Timeline-items"; // Import the TimelineItem component

const Timeline = () => {
  // You can define your timeline data directly in the component
  const timelineItems = [
    {
      year: "2014 - 2016",
      company: "PINEAPPLE",
      title: "Full Stack Developer",
      description: "Worked as part of a multi-disciplinary team...",
    },
    {
      year: "2011 - 2014",
      company: "MACROSOOFT",
      title: "Web Developer",
      description: "Responsible for working on a range of projects...",
    },
    {
      year: "2003 - 2006",
      company: "JOOJLE",
      title: "Systems Analyst / Web Developer",
      description: "Worked with backend developers...",
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-10">Experience</h1>
      <div className="relative wrap overflow-hidden h-full"> 
        <div className="border-5 absolute border-opacity-100 timeline-border-style h-full border left-1/2"style={{borderColor:'#00ff00'}}></div>

        <div >
        {timelineItems.map((item, index) => (
          <TimelineItem 
          
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

export default Timeline;
