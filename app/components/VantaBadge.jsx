"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), { ssr: false });

export default function VantaBadge({ children, effect = "fog", options = {} }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-white/90 bg-white/5 hover:bg-white/10 transition-colors duration-200 overflow-hidden"
    >
      {hovered && (
        <div className="absolute inset-0 -z-10 rounded-full opacity-80">
          <VantaBackground
            effect={effect}
            options={{
              highlightColor: 0x93c5fd,
              midtoneColor: 0x3b82f6,
              lowlightColor: 0x1e3a8a,
              baseColor: 0xd976,
              blurFactor: 0.1,
              ...options,
            }}
          />
        </div>
      )}
      <span className="relative z-10">{children}</span>
    </div>
  );
}


