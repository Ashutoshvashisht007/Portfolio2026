"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// 1. Data Structure for your Playground
const categories = [
  {
    title: "Buttons",
    description: "Interactive triggers with custom hover states and physics.",
    items: [
      { name: "Swapping Button", status: "Stable", id: "btn-1", slug: "swapping-button" },
      { name: "Upload Button", status: "New", id: "btn-2", slug: "upload-button" },
      { name: "Elastic Bounce", status: "Beta", id: "btn-3", slug: "swapping-button" },
    ],
  },
  {
    title: "Scrollbar Animations",
    description: "Smooth reveal effects and custom track styling.",
    items: [
      { name: "Progress Tracker", status: "Stable", id: "scroll-1", slug: "swapping-button" },
      { name: "Parallax Reveal", status: "Beta", id: "scroll-2" , slug: "swapping-button"},
    ],
  },
  {
    title: "Bento Grids",
    description: "Complex layouts inspired by modern dashboards.",
    items: [
      { name: "Linear Style", status: "New", id: "bento-1", slug: "swapping-button" },
      { name: "Feature Highlight", status: "Stable", id: "bento-2", slug: "swapping-button" },
    ],
  },
];

export default function PlaygroundPage() {
  return (
    <div className="space-y-20 mt-24 mb-20 px-4 md:px-0">
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <h1 className="text-4xl font-bold tracking-tight">AshUI Lab</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-lg">
          A curated collection of micro-interactions, layout experiments, and reusable UI bits built with <span className="text-foreground font-medium">Motion & Tailwind</span>.
        </p>
      </header>

      <div className="space-y-24">
        {categories.map((category, index) => (
          <section key={category.title} className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1} //</span>
                  {category.title}
                </h2>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {category.items.length} items
                </span>
              </div>
              <div className="h-0.5 w-full bg-border" /> 
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <ComponentCard key={item.id} name={item.name} status={item.status} slug={item.slug} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// 2. The Interactive Component Card
function ComponentCard({ name, status, slug }: { name: string; status: string, slug: string }) {
  return (
    <Link href={`/playground/${slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/80 hover:border-muted transition-all cursor-pointer overflow-hidden"
      >
        <div className="absolute -inset-px bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 flex flex-col justify-between h-24">
          <div className="flex justify-between items-start">
            <span className={cn(
              "text-[10px] font-mono px-2 py-0.5 rounded-full border",
              status === "New" ? "border-blue-500/50 text-blue-500 bg-blue-500/5" :
                status === "Beta" ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/5" :
                  "border-border text-muted-foreground"
            )}>
              {status}
            </span>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              →
            </motion.div>
          </div>

          <h3 className="text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}