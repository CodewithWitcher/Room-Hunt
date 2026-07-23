"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Navigation, Search, MessageSquare, PlusCircle, Check, Send, Sparkles, Home } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { motion, AnimatePresence } from "framer-motion";

export const LocationPills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [selectedFlatType, setSelectedFlatType] = useState<"1 BHK" | "2 BHK">("1 BHK");
  const [selectedPillLocation, setSelectedPillLocation] = useState<string | null>(null);

  const filteredLocations = siteConfig.preferredLocations.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to trigger WhatsApp for any location pill
  const handlePillClick = (locationName: string) => {
    const message = `Hi! I saw your flat requirement showcase. I have an available flat option in ${locationName}, Noida. Let's discuss details!`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Helper to trigger WhatsApp for custom user-entered location
  const handleCustomLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customLocation.trim()) return;

    const message = `Hi! I saw your flat requirement showcase. I have a ${selectedFlatType} flat available in ${customLocation.trim()} near Noida. Let's connect!`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="locations" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <GlassCard className="border border-white/15 overflow-hidden shadow-glass-glow">
        
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
              Click any sector below or enter a custom location to send flat details directly via WhatsApp.
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
              Metro Connectivity Requirement
            </span>
            <p className="text-xs sm:text-sm text-gray-200 font-semibold">
              {siteConfig.metroConnectivityNote}
            </p>
          </div>
        </div>

        {/* Location Pills Grid (Clicking triggers direct WhatsApp message for that location) */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
            Primary Target Sectors (Click to message via WhatsApp)
          </span>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePillClick(loc)}
                  title={`Click to notify about a flat in ${loc}`}
                  className="px-4 py-2.5 rounded-xl glass-pill flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 cursor-pointer group transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
                  <span>{loc}</span>
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                </button>
              ))
            ) : (
              <div className="w-full text-center py-4 text-gray-400 text-sm">
                No sector matching &quot;{searchQuery}&quot; found in primary list. You can suggest a custom location below!
              </div>
            )}
          </div>
        </div>

        {/* Custom Location Submission Box */}
        <div className="p-6 rounded-2xl glass-panel border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-slate-950/80 shadow-glass mb-6">
          <div className="flex items-center gap-2 mb-3">
            <PlusCircle className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Have a Flat in Another Location / Sector?</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-4">
            Enter your flat location below and click <strong>&quot;Confirm & Send via WhatsApp&quot;</strong> to send me a direct pre-filled WhatsApp message with your location!
          </p>

          <form onSubmit={handleCustomLocationSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
            {/* Flat Type Selector */}
            <div className="flex items-center gap-1 p-1 rounded-xl glass-panel border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedFlatType("1 BHK")}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedFlatType === "1 BHK"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                1 BHK
              </button>
              <button
                type="button"
                onClick={() => setSelectedFlatType("2 BHK")}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedFlatType === "2 BHK"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                2 BHK
              </button>
            </div>

            {/* Custom Location Input */}
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter custom location/sector (e.g. Sector 63, Vasundhara, Gaur City)..."
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-xs sm:text-sm placeholder:text-gray-500 focus:outline-none"
              />
            </div>

            {/* Submit WhatsApp Button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Send via WhatsApp</span>
            </button>
          </form>
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
