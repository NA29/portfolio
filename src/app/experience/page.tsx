"use client";

import { useState } from "react";
import { cleanContent } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperiencePage() {
  const { experience } = cleanContent;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Default to first item if nothing hovered? Or empty? User said "make the bullet points appear", implying hidden by default.
  // But usually on mobile or default state checking the reference, empty is fine or first item.
  // Reference analysis said "Default State: Right side is empty". I will follow that.

  return (
    <main className="min-h-screen pt-48 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-medium mb-12 transition-opacity duration-300 hover:opacity-50 cursor-default tracking-tight text-[#1a1a1a]">Experience</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
        {/* Left Column: List */}
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="group cursor-pointer"
            >
              <div className="flex flex-col mb-1">
                <h3 className={`text-base font-medium transition-colors duration-300 ${hoveredIndex === index ? "text-gray-400" : "text-[#1a1a1a]"}`}>
                  {item.company}
                </h3>
                <span className="text-sm text-gray-500 font-normal">{item.title}</span>
              </div>
              <span className="text-xs text-gray-400 font-mono block mt-1">{item.date}</span>

              {/* Mobile Accordion Details */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden"
                  >
                     <ul className="space-y-3 pt-4 pb-2 mt-2 border-t border-gray-100">
                       {item.details.map((detail, i) => (
                         <li key={i} className="text-sm text-gray-500 leading-relaxed list-none">
                           {detail}
                         </li>
                       ))}
                     </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Column: Details Panel */}
        <div className="hidden md:block">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="space-y-3">
                    {experience[hoveredIndex].details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-500 leading-relaxed list-none">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Hint message if empty? Optional. Keeping it clean/empty as per reference. */}
          </div>
        </div>
      </div>
    </main>
  );
}
