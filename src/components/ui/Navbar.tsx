"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import {
    motion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const navItems = [
    { path: "/", name: "Home" },
    { path: "/playground", name: "Playground" },
];



export default function Navbar() {
    const pathname = usePathname() || "/";
    const { scrollY } = useScroll();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none pt-1">
            <motion.header
                initial={false}
                animate={{
                    width: isMobile ? "98%" : isScrolled ? "50%" : "100%",
                    maxWidth: isMobile ? "98%" : isScrolled ? "600px" : "720px",
                    paddingLeft: isScrolled ? "8px" : "16px",
                    paddingRight: isScrolled ? "8px" : "16px",
                    paddingTop: isScrolled ? "4px" : "12px",
                    paddingBottom: isScrolled ? "4px" : "12px",
                    borderRadius: isScrolled ? "24px" : "12px",
                    backgroundColor: isScrolled
                        ? "rgba(var(--background), 0.7)"
                        : "transparent",
                    borderWidth: isScrolled ? "1px" : "0px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "pointer-events-auto backdrop-blur-xl border-border flex items-center justify-between transition-colors",
                    isScrolled ? "shadow-lg bg-background/70" : "bg-transparent"
                )}
            >
                <nav className="flex items-center justify-between w-full">
                    <Link href="/" className="font-bold text-lg tracking-tight px-2">
                        <span className="text-foreground flex gap-1">
                            Ashutosh
                            <span className="hidden sm:inline text-muted-foreground">
                                Anand Sharma
                            </span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-2">
                        <motion.div className="flex gap-1 bg-secondary/30 px-1 py-2 rounded-full border border-border/40 backdrop-blur-md">
                            {navItems.map((item) => {
                                const isActive = item.path === pathname;

                                return (
                                    <Magnetic key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                "relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors",
                                                isActive
                                                    ? "text-primary shadow-xs shadow-white/90"
                                                    : "text-muted-foreground hover:text-primary"
                                            )}
                                        >
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-bubble"
                                                    className="absolute inset-0 rounded-full"
                                                    style={{
                                                        zIndex: -1,
                                                        background: "var(--background)",
                                                    }}
                                                    animate={{
                                                        boxShadow:
                                                            "0px 4px 12px rgba(0,0,0,0.15)",
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                            {item.name}
                                        </Link>
                                    </Magnetic>
                                );
                            })}
                        </motion.div>

                        <Magnetic strength={0.25}>
                            <div className="ml-1">
                                <ThemeToggle />
                            </div>
                        </Magnetic>
                    </div>
                </nav>
            </motion.header>
        </div>
    );
}
