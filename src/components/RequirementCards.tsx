"use client";

import React, { useState } from "react";
import { siteConfig, RequirementSpec } from "@/data/siteConfig";
import { GlassCard } from "./GlassCard";
import { BedDouble, CheckCircle2, IndianRupee, Sparkles, Home, Bath, ChefHat, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BudgetScaleBar } from "./BudgetScaleBar";

export const RequirementCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "1bhk" | "2bhk">("all");

  const filteredRequirements =
    activeTab === "all"
      ? siteConfig.requirements
      : siteConfig.requirements.filter((r) => r.id === activeTab);

  return (
    <section id="requirements" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DETAILED SPECIFICATIONS & BUDGET TIERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Flat Requirements & Budget Scale Bar
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Explore requirements for both 1 BHK (₹6K–₹10K) and 2 BHK (₹10K–₹15K) flats. Use the interactive scale bar below to check minimum amenities required at each budget level.
        </p>
      </div>

      {/* Tab Filter Control (Mobile & Desktop responsive switcher) */}
      <div className="w-full flex justify-center mb-8 px-2">
        <div className="p-1 sm:p-1.5 rounded-xl sm:rounded-2xl glass-panel flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 shadow-glass border border-white/10 w-full max-w-md sm:w-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/30"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Both (1 & 2 BHK)</span>
          </button>
          <button
            onClick={() => setActiveTab("1bhk")}
            className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "1bhk"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/30"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">1 BHK Only</span>
          </button>
          <button
            onClick={() => setActiveTab("2bhk")}
            className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "2bhk"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/30"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">2 BHK Only</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className={`grid gap-8 ${
          filteredRequirements.length === 1
            ? "max-w-3xl mx-auto grid-cols-1"
            : "grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filteredRequirements.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <RequirementCardItem item={req} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const RequirementCardItem: React.FC<{ item: RequirementSpec }> = ({ item }) => {
  const is2Bhk = item.id === "2bhk";

  return (
    <GlassCard accent={is2Bhk} className="relative overflow-hidden group border border-white/15 flex flex-col justify-between">
      <div>
        {/* Card Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
              {item.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{item.title}</h3>
          </div>
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
            <Home className="w-7 h-7 text-indigo-300" />
          </div>
        </div>

        {/* Budget Banner */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 to-slate-900/60 border border-indigo-500/30 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-emerald-400" />
            <span className="text-xs sm:text-sm text-gray-300 font-medium">Monthly Rent Budget</span>
          </div>
          <span className="text-base sm:text-xl font-extrabold text-emerald-400 tracking-tight">
            {item.budgetFormatted}
          </span>
        </div>

        {/* Itemized Feature Checklist */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0">
              <BedDouble className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">Bedrooms & Wardrobe</span>
              <span className="text-sm font-semibold text-white">{item.bedroomDetail}</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">Living Area</span>
              <span className="text-sm font-semibold text-white">{item.halls} Living Room / Hall</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <ChefHat className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">Modular Kitchen</span>
              <span className="text-sm font-semibold text-white">{item.kitchenDetail}</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-rose-500/20 text-rose-300 shrink-0">
              <Bath className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">Washrooms</span>
              <span className="text-sm font-semibold text-white">{item.washroomDetail}</span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div className="border-t border-white/10 pt-4 mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
            Key Highlights
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
            {item.keyHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Budget Scale Bar Component */}
      <BudgetScaleBar item={item} />
    </GlassCard>
  );
};
