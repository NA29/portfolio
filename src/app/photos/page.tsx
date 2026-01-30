"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Manually curated list of available minified images
const PHOTOS = [
  "/photography/image1-min.jpeg", // Note .jpeg
  "/photography/image2-min.jpg",
  "/photography/image3-min.jpg",
  "/photography/image5-min.jpg",
  "/photography/image6-min.jpg",
  "/photography/image7-min.jpg",
  "/photography/image8-min.jpg",
  "/photography/image9-min.jpg",
  "/photography/image10-min.jpg",
  "/photography/image11-min.jpg",
  "/photography/image12-min.jpg",
  "/photography/image13-min.jpg",
  "/photography/image15-min.jpg",
  "/photography/image16-min.jpg",
  "/photography/image17-min.jpg",
  "/photography/image18-min.jpg",
  "/photography/image19-min.jpg",
  "/photography/image20-min.jpg",
  "/photography/image21-min.jpg",
  "/photography/image22-min.jpg",
  "/photography/image23-min.jpg",
  "/photography/image25-min.jpg",
  "/photography/image26-min.jpg",
  "/photography/image27-min.jpg",
  "/photography/image28-min.jpg",
  "/photography/image30-min.jpg",
];

const PhotoItem = ({ src, index }: { src: string; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      className="break-inside-avoid relative group mb-8"
    >
      <div className={`relative w-full rounded-sm bg-gray-100 overflow-hidden ${!isLoaded ? "animate-pulse min-h-[300px]" : "min-h-0"}`}>
        <img
          ref={imgRef}
          src={src}
          alt={`Photography shot ${index + 1}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)} // Show even if broken so we know
          className={`w-full h-auto rounded-sm hover:opacity-95 transition-all duration-700 ease-in-out ${
            isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-xl scale-105"
          }`}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default function PhotosPage() {
  return (
    <main className="min-h-screen pt-48 pb-16 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-xl font-medium transition-opacity duration-300 hover:opacity-50 cursor-default tracking-tight text-[#1a1a1a]">
            Photos
        </h1>
        <span className="text-sm text-gray-400 font-mono">
           {PHOTOS.length} shots
        </span>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {PHOTOS.map((src, i) => (
            <PhotoItem key={src} src={src} index={i} />
          ))}
      </div>
    </main>
  );
}
