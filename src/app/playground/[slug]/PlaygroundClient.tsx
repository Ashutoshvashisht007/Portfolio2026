"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { componentRegistry } from "@/lib/registry";
import CodeBlock from "@/components/ui/CodeBlock";
import { cn } from "@/lib/utils";

interface PlaygroundClientProps {
  slug: string;
  name: string;
  description: string;
  code: { tsxCode: string, css?: string };
}

export default function PlaygroundClient({ slug, name, description, code }: PlaygroundClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const registryItem = componentRegistry[slug];
  const layout = registryItem?.layout || "standard";
  const SelectedComponent = registryItem.component;

  const widthClasses = {
    standard: "max-w-3xl",
    wide: "max-w-7xl",
    full: "max-w-[95vw]",
  };
  // "mt-24 space-y-12 pb-20 max-w-5xl mx-auto px-6"
  return (
    <div className={cn("mt-24 space-y-12 pb-20 mx-auto px-6 transition-all duration-500", widthClasses[layout as keyof typeof widthClasses])}>
      <div>
        <Link href="/playground" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs font-mono mb-4">
          <FiArrowLeft /> BACK_TO_LAB
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">{name}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>

      <div className="relative min-h-100 w-full rounded-3xl border border-border bg-card flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10">
          <SelectedComponent />
        </div>
      </div>

      <div className="space-y-6">
        <CodeBlock
          title="SOURCE_CODE"
          code={code.tsxCode}
          language="tsx"
        />

        {code.css && (
          <CodeBlock
            title="CSS"
            code={code.css}
            language="css"
          />
        )}
      </div>

    </div>
  );
}