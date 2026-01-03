// 'use client'

// interface DiagonalPatternProps {
//   side: 'left' | 'right'
//   className?: string
//   topOffset?: string
// }

// export default function DiagonalPattern({ side, className = '', topOffset = '0' }: DiagonalPatternProps) {
//   return (
//     <div className={`absolute ${side}-0 w-15 h-full z-50 overflow-hidden sm:block hidden ${className}`} style={{ top: topOffset }}>
//       <div 
//         className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-15 h-full border dark:border-[#eee] border-white"
//         style={{
//           backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, red 3px, transparent 3px, transparent 6px)'
//         }}
//       />
//     </div>
//   )
// }

type Props = {
  side: "left" | "right";
  className?: string;
};

export default function DiagonalPattern({ side, className }: Props) {
  return (
    <div
      className={`pointer-events-none absolute top-0 ${
        side === "left" ? "-left-16" : "-right-16"
      } min-h-full w-[60px] overflow-hidden sm:block hidden ${className}`}
    >
      <div className="h-full w-full bg-[repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.12),
        rgba(255,255,255,0.12) 10px,
        transparent 10px,
        transparent 20px
      )]" />
    </div>
  );
}
