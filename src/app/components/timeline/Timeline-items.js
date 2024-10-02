import React from "react";

const TimelineItem = ({ year, company, title, description, isRight }) => {
  return (
    <div className={`mb-8  flex justify-between items-center w-full ${isRight ? "flex-row-reverse" : ""}`}>
      <div className="w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
        
      </div>
      <div className="order-1 timeline-box bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h1 className="mx-auto text-black text-center font-semibold text-lg year-style">{year}</h1>
        <h3 className="mb-3 font-bold text-gray-800 text-center company-style text-xl">{company}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-center title-style text-opacity-100">{title}</p>
        <p className="text-sm mt-2 text-gray-700 description-style">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
