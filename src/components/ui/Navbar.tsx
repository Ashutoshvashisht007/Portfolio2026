"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { path: "/", name: "Home" },
    { path: "/components", name: "Components" },
];

export default function Navbar() {
    const pathname = usePathname() || "/";
    const { scrollY } = useScroll();

    // State to trigger the "scrolled" version of the navbar
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 1. Detect Screen Size (Mobile check)
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint
        };

        checkMobile(); // Check on mount
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        // Fixed or Sticky container to hold the floating navbar
        <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none pt-1">
            <motion.header
                initial={false}
                animate={{
                    // Decrease width slightly
                    width: isMobile ? "98%" : isScrolled ? "50%" : "100%",
                    maxWidth: isMobile ? "98%" : isScrolled ? "600px" : "720px",
                    // Update padding as requested
                    paddingLeft: isScrolled ? "8px" : "16px",
                    paddingRight: isScrolled ? "8px" : "16px",
                    paddingTop: isScrolled ? "4px" : "12px",
                    paddingBottom: isScrolled ? "4px" : "12px",
                    // Visual styling
                    borderRadius: isScrolled ? "24px" : "12px",
                    backgroundColor: isScrolled ? "rgba(var(--background), 0.7)" : "transparent",
                    borderWidth: isScrolled ? "1px" : "0px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "pointer-events-auto backdrop-blur-xl border-border flex items-center justify-between transition-colors",
                    isScrolled ? "shadow-lg bg-background/70" : "bg-transparent"
                )}
            >
                <nav className="flex items-center justify-between w-full">
                    {/* Logo / Name */}
                    <Link href="/" className="font-bold text-lg tracking-tight px-2">
                        <span className="text-foreground transition-opacity hover:opacity-70">
                            Ashutosh <span className="hidden sm:inline text-muted-foreground">Anand Sharma</span>
                        </span>
                    </Link>

                    {/* Nav Links & Theme Toggle */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 bg-secondary/30 p-1 rounded-full border border-border/40 backdrop-blur-md">
                            {navItems.map((item) => {
                                const isActive = item.path === pathname;
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={cn(
                                            "relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors",
                                            isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-bubble"
                                                className="absolute inset-0 bg-background rounded-full shadow-sm"
                                                style={{ zIndex: -1 }}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Themed Toggle Component */}
                        <div className="ml-1">
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            </motion.header>
        </div>
    );
}