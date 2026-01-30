"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SelectedWork from "@/components/SelectedWork";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div 
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center">
      
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] w-full mb-24 gap-12 md:gap-24">
        {/* Abstract Art Animation */}
        <motion.div
// ... (keep existing art) ...
          className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-gray-200 to-gray-400 blur-2xl opacity-90"
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <motion.h1 
// ... (keep existing text) ...
            className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a1a1a]"
            >
            Nathan
            <br />
            Audegond
            </motion.h1>
            <motion.p
// ... (keep existing subtext) ...
            className="mt-4 text-xs md:text-sm text-gray-500 font-normal"
            >
            Software @ McGill University
            </motion.p>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>
      
      <SelectedWork />
    </main>
  );
}
