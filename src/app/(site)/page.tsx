"use client";

import { motion } from "motion/react";
import Hero from "@/components/ui/Hero";
import StackList from "@/components/ui/StackList";
import { sectionVariants, projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";



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
          className="rounded-lg text-center text-muted-foreground"
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
          {
            projects.map((project,idx) => (
              <ProjectCard key={`${project.title}-${idx}`} {...project} />
            ))
          }
        </motion.div>
      </motion.section>
    </div>
  );
}
