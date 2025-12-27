"use client";

import { motion } from "motion/react";
// import StackList from "@/components/StackList";
// import ProjectList from "@/components/ProjectList";

import Hero from "@/components/ui/Hero";
import StackList from "@/components/ui/StackList";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={sectionVariants}
          className="text-2xl font-bold mb-6"
        >
          Tech Stack
        </motion.h3>
        <motion.div
          variants={sectionVariants}
          className="border border-dashed border-border rounded-lg text-center text-muted-foreground"
        >
            <StackList />
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
         <motion.h3
           variants={sectionVariants}
           className="text-2xl font-bold mb-6"
         >
           Featured Projects
         </motion.h3>
         <motion.div
           variants={sectionVariants}
           className="grid grid-cols-1 md:grid-cols-2 gap-6"
         >
            <motion.div
              variants={sectionVariants}
              className="h-64 rounded-xl border border-border bg-card/50 p-6"
            >
              Project 1 Card
            </motion.div>
            <motion.div
              variants={sectionVariants}
              className="h-64 rounded-xl border border-border bg-card/50 p-6"
            >
              Project 2 Card
            </motion.div>
         </motion.div>
      </motion.section>
    </div>
  );
}
