"use client";

import { useEffect, useRef, useState } from "react";
import {motion} from "motion/react"

const CHARS = "ASHUTOSH";

type Props = {
    text: string;
    duration?: number; // ms
    className?: string;
    maxBlur?: number;
};

export default function TextScramble({
    text,
    duration = 450,
    maxBlur = 4,
    className,
}: Props) {
    const [display, setDisplay] = useState(text);
    const rafRef = useRef<number | null>(null);
    const [blur, setBlur] = useState(0);

    const scramble = () => {
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const revealed = Math.floor(progress * text.length);

            let output = "";
            for (let i = 0; i < text.length; i++) {
                if (i < revealed) {
                    output += text[i];
                } else {
                    output += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplay(output);
            setBlur((1 - progress) * maxBlur);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                setDisplay(text);
                setBlur(0);
            }
        };

        cancelAnimationFrame(rafRef.current!);
        rafRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        setDisplay(text);
        setBlur(0);

        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [text]);


    return (
        <motion.span
            style={{
                filter: `blur${blur}px`,
                transition: "filter 120ms ease-out"
            }}
            onMouseEnter={scramble}
            className={`cursor-pointer select-none ${className}`}
        >
            {display}
        </motion.span>
    );
}
