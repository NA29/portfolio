"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  date,
  stack,
  description,
  image,
}: {
  title: string;
  date: string;
  stack: string;
  description: string[];
  image?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={image || `https://placehold.co/600x450/e0e0e0/171717?text=${encodeURIComponent(title)}`}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
      
      <div className="absolute top-6 left-6 z-10 text-black">
        <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h3>
        <p className="text-xs font-medium opacity-80 font-mono">
          {stack.split(',')[0]} {/* Show primary tech */}
        </p>
      </div>
      
      {/* White text alternative if image is dark - enforcing light mode style from reference 
          Actually reference has colored text on light images or white on dark. 
          Given the 'minimalist light' theme, dark text on light placeholders works well.
      */}
    </motion.div>
  );
}
