"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import VantaBadge from "./VantaBadge";

const VantaBackground = dynamic(() => import("./VantaBackground"), { ssr: false });

export default function ProjectCard({ imageSrc, imageAlt, title, description, chips = [], href, visitLabel = 'Visit Project', vantaEffect = "fog", vantaOptions = {} }) {
  const [hovered, setHovered] = useState(true);

  return (
    <div
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(true)}
    >
      <div className="relative w-full h-48">
        {hovered && (
          <div className="absolute inset-0 -z-10 opacity-80">
            <VantaBackground effect={vantaEffect} options={vantaOptions} />
          </div>
        )}
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" priority />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        {chips?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {chips.map((chip) => (
              <VantaBadge key={chip}>{chip}</VantaBadge>
            ))}
          </div>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-200 hover:text-white"
          >
            {visitLabel}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}


