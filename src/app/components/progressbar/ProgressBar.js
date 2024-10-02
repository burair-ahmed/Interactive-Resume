"use client"; // Marking this component as a Client Component

import React, { useEffect, useState } from 'react';
import "../ProgressBar.css";

// Function to determine the color based on the percentage
const getProgressColor = (value) => {
  let red = 255;
  let green = 0;

  if (value < 50) {
    // Transition from red to yellow
    red = 255;
    green = Math.round((value / 50) * 255);
  } else {
    // Transition from yellow to green
    green = 255;
    red = Math.round(255 - ((value - 50) / 50) * 255);
  }

  return `rgb(${red}, ${green}, 0)`;
};

// ProgressBar Component
export default function Progressbar({ value, heading }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Reset displayValue to 0 at the start of the effect
    setDisplayValue(0);

    const totalDuration = 1000; // Total duration in milliseconds
    const incrementTime = 20; // Time between each increment in milliseconds
    const totalIncrements = totalDuration / incrementTime; // Total number of increments
    const incrementAmount = Math.max(1, Math.ceil(value / totalIncrements)); // Ensure at least 1% increment

    const timer = setInterval(() => {
      setDisplayValue((prev) => {
        if (prev < value) {
          return Math.min(prev + incrementAmount, value); // Increment until reaching the target value
        } else {
          clearInterval(timer);
          return value; // Ensure it ends exactly at the target value
        }
      });
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [value]);

  // Determine the progress color based on the current displayValue
  const progressColor = getProgressColor(displayValue);
  const remainingColor = `${progressColor.replace('rgb', 'rgba').replace(')', ', 0.3)')}`; // Set opacity for remaining section

  return (
    <div className="w-full relative">
      {/* Flex container for heading and progress bar */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg percent-hd font-semibold text-gray-700">{heading}</h2>
        <span className="text-lg percent-val text-gray-700 font-semibold">{Math.round(displayValue)}%</span>
      </div>
      {/* Progress Bar Container */}
      <div className="w-full progress-container rounded-full h-1.5 relative">
        {/* Remaining Progress Bar Background */}
        <div
          className="absolute inset-0 rounded-full h-full"
          style={{ width: '100%', backgroundColor: remainingColor }}
        />
        {/* Progress Bar Filler */}
        <div
          className="progress-bg h-full rounded-full"
          style={{ width: `${displayValue}%`, backgroundColor: progressColor }}
        />
      </div>
    </div>
  );
}
