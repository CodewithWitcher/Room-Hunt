"use client";

import React, { useState } from "react";
import { RequirementSpec, BudgetTier } from "@/data/siteConfig";
import { CheckCircle2, XCircle, Sparkles, SlidersHorizontal, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BudgetScaleBarProps {
  item: RequirementSpec;
}

export const BudgetScaleBar: React.FC<BudgetScaleBarProps> = ({ item }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // default to middle tier (₹8K for 1BHK, ₹12K-13K for 2BHK)

  const currentTier: BudgetTier = item.scaleTiers[selectedTierIndex] || item.scaleTiers[0];

  return (
    <div className="mt-6 p-5 rounded-2xl glass-panel border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 shadow-glass">
      {/* Scale Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Interactive Budget Scale Bar</span>
              <span className="text-xs font-normal text-indigo-300">({item.id.toUpperCase()})</span>
            </h4>
            <p className="text-xs text-gray-400">
              Slide or click price points to see minimum requirements at each budget level.
            </p>
          </div>
        </div>

        {/* Selected Tier Badge */}
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold shrink-0 self-start sm:self-auto">
          {currentTier.priceLabel} → {currentTier.tierName}
        </div>
      </div>

      {/* Interactive Step Slider Controls */}
      <div className="mb-6 px-2">
        <div className="relative flex items-center justify-between my-4">
          {/* Background Connecting Rail */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 bg-white/10 rounded-full z-0"></div>

          {/* Glowing Active Progress Rail */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full z-0 transition-all duration-300"
            style={{
              width: `${(selectedTierIndex / (item.scaleTiers.length - 1)) * 100}%`,
            }}
          ></div>

          {/* Interactive Price Nodes */}
          {item.scaleTiers.map((tier, idx) => {
            const isSelected = idx === selectedTierIndex;
            const isPassed = idx <= selectedTierIndex;

            return (
              <button
                key={idx}
                onClick={() => setSelectedTierIndex(idx)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 scale-125 shadow-lg shadow-emerald-500/50 ring-4 ring-emerald-500/30"
                      : isPassed
                      ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                      : "bg-gray-800 text-gray-400 border border-white/20 hover:border-white/40"
                  }`}
                >
                  {idx + 1}
                </div>
                <span
                  className={`mt-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                    isSelected ? "text-emerald-300 font-bold" : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  {tier.priceLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tier Summary Description Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTierIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-4 flex items-start gap-2.5"
        >
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            <strong className="text-cyan-300 font-semibold">{currentTier.tierName}: </strong>
            {currentTier.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dynamically Unlocked Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {currentTier.amenitiesIncluded.map((amenity, idx) => (
          <div
            key={idx}
            className={`p-2.5 rounded-lg border flex items-center justify-between transition-all duration-200 ${
              amenity.included
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
                : "bg-white/5 border-white/5 text-gray-500 line-through opacity-60"
            }`}
          >
            <span className="font-medium">{amenity.name}</span>
            {amenity.included ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-gray-500 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
