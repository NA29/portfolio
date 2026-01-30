"use client";

import { cleanContent } from "@/data/portfolio";

export default function Hero() {
  const { about } = cleanContent;

  return (
    <section className="pt-48 pb-16 px-6 max-w-6xl mx-auto min-h-[50vh] flex flex-col justify-center">
      <h2 className="text-xl font-medium text-[#1a1a1a] tracking-tight mb-12">
        Background
      </h2>
      
      <div className="space-y-8 text-sm text-gray-500 leading-relaxed max-w-2xl">
        {about.paragraphs.map((para, i) => {
          // Check if this is the last paragraph containing "internships."
          if (para.includes("internships.")) {
             const parts = para.split("internships."); // Split to insert the interactive element
             return (
               <p key={i}>
                 {parts[0]}
                 <span className="group relative inline-block cursor-help text-gray-800 underline decoration-dotted underline-offset-4 decoration-gray-400">
                    internships.
                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] md:max-w-sm rounded bg-black p-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center z-20">
                      <span className="mb-2 text-center text-[10px] break-words w-full">{about.memeRequest}</span>
                    </div>
                 </span>
                 {parts[1]}
               </p>
             );
          }
          return <p key={i}>{para}</p>;
        })}
      </div>
    </section>
  );
}
