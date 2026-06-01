"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full border bg-muted text-muted-foreground font-mono">
          ⚡ Integrations
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Tools I Work With
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          I build automated pipelines and voice receptionists that integrate seamlessly with your favorite apps.
        </p>
        <Link href="#contact">
          <Button variant="default" className="mt-8 px-6 py-3 rounded-3xl">
            Get started
          </Button>
        </Link>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
