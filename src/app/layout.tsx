import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/ui/Navbar";
import PhysicsScene from "@/components/physics/PhysicsScene";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <Providers>
          {/* <PhysicsScene /> */}
          <Navbar />
          <div className="relative z-20">
            {/* <div className="max-w-3xl mx-auto px-6 py-2">
              <Navbar /> */}
              {children}
            {/* </div> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}