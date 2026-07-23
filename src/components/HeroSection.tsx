"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Calendar, MapPin, Phone, MessageSquare, ShieldCheck, ArrowDown, Sparkles, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Family Flat Required Callout Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 border border-rose-500/40 text-rose-300 text-[10px] sm:text-sm font-extrabold mb-4 shadow-glass animate-pulse text-center max-w-full">
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
          <span>FAMILY FLAT REQUIRED — NOT FOR BACHELORS</span>
        </div>

        {/* Shifting Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-glass text-center">
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
          <span>Expected Shift Window: <strong className="text-white font-bold">{siteConfig.shiftWindow}</strong></span>
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-snug sm:leading-tight">
          Family Flat Required Near{" "}
          <span className="gradient-text-indigo relative inline-block">
            {siteConfig.primaryLocation}
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full opacity-80"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl font-normal leading-relaxed">
          Urgent requirement for a clean <strong className="text-indigo-300 font-semibold">1 BHK (₹6K–₹10K)</strong> or{" "}
          <strong className="text-cyan-300 font-semibold">2 BHK (₹10K–₹15K)</strong> flat in Noida for <strong className="text-rose-300 font-semibold">family stay (Not for bachelors)</strong>.
        </p>

        {/* Note Box */}
        <div className="mb-8 p-4 rounded-xl glass-panel max-w-2xl text-left flex items-start gap-3 border-l-4 border-indigo-500 shadow-glass">
          <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-gray-300 italic">
            &quot;{siteConfig.minimumRequirementsNote}&quot;
          </p>
        </div>

        {/* Quick Summary Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10">
          <div className="p-3.5 rounded-xl glass-panel text-center">
            <span className="block text-xs text-gray-400 font-medium">Budget Range</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-400">₹6K – ₹15K (Incl. Maint.)</span>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-center">
            <span className="block text-xs text-gray-400 font-medium">Tenant Category</span>
            <span className="text-xs sm:text-sm font-bold text-rose-300">Family Only</span>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-center">
            <span className="block text-xs text-gray-400 font-medium">Metro Limit</span>
            <span className="text-sm sm:text-base font-bold text-indigo-300">Within 5 KM</span>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-center">
            <span className="block text-xs text-gray-400 font-medium">Status</span>
            <span className="text-sm sm:text-base font-bold text-emerald-300 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 inline" /> Ready to Shift
            </span>
          </div>
        </div>

        {/* Primary CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneNumber}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-pill hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glass hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-indigo-400" />
            <span>Call {siteConfig.phoneNumber}</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#requirements"
          className="mt-12 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-indigo-300 transition-colors animate-bounce"
        >
          <span>Explore Detailed Specifications</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </section>
  );
};
