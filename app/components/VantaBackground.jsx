"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground({ effect = "waves", color = 0x1e3a8a, options = {} }) {
  const containerRef = useRef(null);
  const vantaRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    let destroyed = false;
    const tryInit = async () => {
      if (destroyed) return;
      const el = containerRef.current;
      if (!el || vantaRef.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        rafRef.current = requestAnimationFrame(tryInit);
        return;
      }

      const THREE = await import("three");
      let vantaModule;
      switch (effect) {
        case "birds":
          vantaModule = (await import("vanta/dist/vanta.birds.min"))?.default;
          break;
        case "clouds":
          vantaModule = (await import("vanta/dist/vanta.clouds.min"))?.default;
          break;
        case "fog":
          vantaModule = (await import("vanta/dist/vanta.fog.min"))?.default;
          break;
        case "cells":
          vantaModule = (await import("vanta/dist/vanta.cells.min"))?.default;
          break;
        case "net":
          vantaModule = (await import("vanta/dist/vanta.net.min"))?.default;
          break;
        case "waves":
        default:
          vantaModule = (await import("vanta/dist/vanta.waves.min"))?.default;
          break;
      }

      if (vantaModule && !destroyed && el) {
        vantaRef.current = vantaModule({
          THREE,
          el,
          color,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          ...options,
        });
      }
    };

    rafRef.current = requestAnimationFrame(tryInit);

    return () => {
      destroyed = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try { vantaRef.current?.destroy?.(); } catch (_) {}
      vantaRef.current = null;
    };
  }, [effect, color]);

  return <div ref={containerRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}


