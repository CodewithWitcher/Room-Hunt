"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Bell, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export const HeaderBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % siteConfig.bannerMessages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090D16]/80 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex items-center justify-between gap-3">
        {/* Left Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>URGENT REQUIREMENT</span>
        </div>

        {/* Animated Marquee / Ticker Message */}
        <div className="flex-1 overflow-hidden relative py-1">
          <div className="hidden sm:flex items-center justify-center gap-4 transition-all duration-500 ease-in-out">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {siteConfig.bannerMessages[activeIndex]}
            </span>
          </div>

          {/* Continuous scrolling marquee for mobile screens */}
          <div className="sm:hidden flex whitespace-nowrap animate-marquee">
            {siteConfig.bannerMessages.concat(siteConfig.bannerMessages).map((msg, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 text-xs text-indigo-200 font-medium mx-4">
                <Bell className="w-3 h-3 text-cyan-400 inline" />
                {msg}
              </span>
            ))}
          </div>
        </div>

        {/* Banner Controls for manual navigation */}
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? siteConfig.bannerMessages.length - 1 : prev - 1
              )
            }
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Previous update"
            aria-label="Previous update"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1">
            {siteConfig.bannerMessages.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                  i === activeIndex ? "w-5 bg-indigo-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % siteConfig.bannerMessages.length)
            }
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Next update"
            aria-label="Next update"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
