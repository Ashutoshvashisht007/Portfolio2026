"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import useSound from "use-sound";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [playSwitch] = useSound("/sounds/switch.mp3"); // Place in public/sounds/

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        playSwitch();
      }}
      className="p-3 rounded-xl border border-border bg-card hover:bg-muted/10 transition-colors"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </motion.button>
  );
}