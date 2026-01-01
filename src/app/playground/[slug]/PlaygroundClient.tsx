"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft, FiCode, FiCheck, FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { componentRegistry } from "@/lib/registry";

interface PlaygroundClientProps {
  slug: string;
  name: string;
  description: string;
  code: string;
}

export default function PlaygroundClient({ slug, name, description, code }: PlaygroundClientProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const SelectedComponent = componentRegistry[slug].component;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-24 space-y-12 pb-20 max-w-5xl mx-auto px-6">
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

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <FiCode className="text-blue-500" /> SOURCE_CODE
          </div>
          
          <button 
            onClick={copyToClipboard}
            className={`flex items-center gap-2 text-xs font-mono transition-all active:scale-95
                       bg-secondary text-secondary-foreground hover:bg-muted 
                       px-4 py-2 rounded-xl border border-border shadow-sm ${!copied ? "cursor-pointer": ""}`}
          >
            {copied ? (
              <><FiCheck className="text-green-500" /> COPIED</>
            ) : (
              <><FiCopy className="text-muted-foreground" /> COPY_CODE</>
            )}
          </button>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden shadow-xl bg-card">
          {mounted && (
            <SyntaxHighlighter
              language="tsx"
              style={resolvedTheme === "dark" ? vscDarkPlus : prism}
              customStyle={{
                margin: 0,
                padding: '24px',
                fontSize: '13px',
                lineHeight: '1.6',
                background: 'transparent', 
              }}
              showLineNumbers={true}
            >
              {code}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
}