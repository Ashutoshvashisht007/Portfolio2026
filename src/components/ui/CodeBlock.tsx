"use client";

import { FiCheck, FiCopy, FiCode } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useState } from "react";

interface CodeBlockProps {
  title: string;
  code: string;
  language: "tsx" | "css" | "js" | "json";
}

export default function CodeBlock({ title, code, language }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
          <FiCode className="text-blue-500" /> {title}
        </div>

        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 text-xs font-mono transition-all active:scale-95
                       bg-secondary text-secondary-foreground hover:bg-muted 
                       px-4 py-2 rounded-xl border border-border shadow-sm ${!copied ? "cursor-pointer" : ""}`}
        >
          {copied ? (
            <><FiCheck className="text-green-800" /> <span className="hover:text-black">COPIED</span></>
          ) : (
            <><FiCopy className="text-muted-foreground" /> <span className="hover:text-black">COPY_CODE</span></>
          )}
        </button>
      </div>

      <div className="rounded-2xl border border-border overflow-hidden shadow-xl bg-card">
        <SyntaxHighlighter
          language={language}
          style={resolvedTheme === "dark" ? vscDarkPlus : prism}
          customStyle={{
            margin: 0,
            padding: "24px",
            fontSize: "13px",
            lineHeight: "1.6",
            background: "transparent",
          }}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
