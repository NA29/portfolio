"use client";

import { motion } from "framer-motion";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center">
      
      {/* Artwork & Name Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] w-full mb-24 gap-12 md:gap-24">
        {/* Abstract Art Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-gray-200 to-gray-400 blur-2xl opacity-90"
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a1a1a]"
            >
            Nathan
            <br />
            Audegond
            </motion.h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-xs md:text-sm text-gray-500 font-normal"
            >
            Software Engineer
            <span className="mx-2 text-gray-300">|</span>
            Full Stack
            </motion.p>
        </div>
      </section>
      
      <SelectedWork />
    </main>
  );
}
