"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  tags: string[];
}

export default function ProjectCard({ title, description, videoSrc, tags }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl border border-border bg-card/50 overflow-hidden cursor-pointer transition-colors hover:bg-card"
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {
            videoSrc === "NA" ? <div className="h-full w-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">Coming Soon......</div> : <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        }
        
        <div className={`absolute inset-0 bg-linear-to-t from-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
          <FiArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}