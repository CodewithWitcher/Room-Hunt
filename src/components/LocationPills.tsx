"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Navigation, Search, TrainTrack, ShieldCheck, Check } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const LocationPills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = siteConfig.preferredLocations.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="locations" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <GlassCard className="border border-white/15 overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-indigo-300 mb-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>PREFERRED SECTORS & LOCATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Target Locations in Noida & Surroundings
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Open for flat options in any of the listed sectors below.
            </p>
          </div>

          {/* Search Input for Sectors */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sector (e.g. 62)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Metro Connectivity Highlight Note */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900/40 border border-cyan-500/30 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
              Essential Requirement
            </span>
            <p className="text-xs sm:text-sm text-gray-200 font-semibold">
              {siteConfig.metroConnectivityNote}
            </p>
          </div>
        </div>

        {/* Location Pills Grid */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl glass-pill flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200 hover:text-white cursor-pointer group"
              >
                <MapPin className="w-3.5 h-3.5 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                <span>{loc}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100"></span>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-6 text-gray-400 text-sm">
              No sector matching &quot;{searchQuery}&quot; found in primary priority list, but nearby sectors can be considered if metro connectivity is within 5 km.
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" /> Total 15+ Target Sectors Tagged
          </span>
          <span className="text-indigo-300 font-medium">Noida / Greater Noida / Indirapuram</span>
        </div>
      </GlassCard>
    </section>
  );
};
