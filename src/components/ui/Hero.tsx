"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Add your image to /public/images/your-dp.jpg

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-16 mt-16"
    >
      <div className="flex-1 space-y-4">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold tracking-tighter"
        >
          Hey, I'm Your Name.
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-xl text-muted-foreground"
        >
          Full-stack Developer & UI Enthusiast.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-125 leading-relaxed"
        >
          I build pixel-perfect, engaging, and accessible digital experiences.
          Focusing on the intersection of design and engineering using the modern React ecosystem.
          {/* Add the "I build from zero" style text here */}
        </motion.p>
      </div>
      <div className="relative">
         {/* Micro-interaction: subtle hover glow or scale */}
        <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-border grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with your actual image path */}
          <Image
            src="/images/luffy.jpeg" 
            alt="Your Name"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}