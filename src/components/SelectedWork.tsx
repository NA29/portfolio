"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cleanContent } from "@/data/portfolio";
import { useState } from "react";

export default function SelectedWork() {
  const { projects } = cleanContent;
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="selected-work" className="w-full max-w-6xl mx-auto px-6 pb-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
       >
         {/* Title matching Experience/Background style but lighter */}
         <h2 className="text-xl font-medium text-gray-400 tracking-tight mb-12">
            Selected Work
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
             {/* Left Column: Project List */}
             <div className="space-y-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative cursor-default py-2 transition-colors" 
                    >
                        <div className="flex flex-col mb-1">
                            <h3 className={`text-xl font-medium transition-colors duration-300 ${hoveredProject === index ? "text-gray-400" : "text-[#1a1a1a]"}`}>
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm text-gray-400 font-mono">
                                    {project.stack}
                                </span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-300 font-mono block mt-1">
                            {project.date}
                        </span>
                    </motion.div>
                ))}
             </div>

             {/* Right Column: Project Details (Hover Reveal) */}
             <div className="hidden md:block">
               <div className="sticky top-48"> 
                 {/* Adjusted sticky top to account for nav/padding */}
                 <AnimatePresence mode="wait">
                   {hoveredProject !== null && (
                     <motion.div
                       key={hoveredProject}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -10 }}
                       transition={{ duration: 0.2 }}
                     >
                       <ul className="space-y-3">
                         {projects[hoveredProject].description.map((desc, i) => (
                           <li key={i} className="text-sm text-gray-500 leading-relaxed list-none">
                             {desc}
                           </li>
                         ))}
                       </ul>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             </div>
         </div>
       </motion.div>
    </section>
  );
}
