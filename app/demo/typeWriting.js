"use client";
import { useState, useEffect } from "react";

const TypewriterBubble = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, 58); // typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative text-center bg-red-900 text-white rounded-[10px] px-6 py-4 w-fit max-w-lg">
        <p className="text-xl text-balance">{displayedText}</p>
      </div>
    </div>
  );
};

export default TypewriterBubble;
