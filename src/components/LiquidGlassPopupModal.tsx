"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare, Phone, X, Sparkles, Building2, Calendar, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const LiquidGlassPopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show liquid glass popup modal 5 seconds after website loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when modal is open to prevent page layout shift on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I saw your flat requirement showcase popup. I have a 1BHK/2BHK room available near Sector 59, Noida. Let's discuss!"
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          
          {/* Liquid Backdrop Overlay with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#090D16]/85 backdrop-blur-xl transition-opacity"
          />

          {/* Mobile-Optimized Liquid Glass Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-md max-h-[85vh] max-h-[85dvh] flex flex-col rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900/98 via-indigo-950/95 to-slate-950/98 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-indigo-500/25 text-white z-10 overflow-hidden my-auto"
          >
            {/* Ambient Background Liquid Glow Blobs inside Modal (Clipped by overflow-hidden) */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-500/20 filter blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/20 filter blur-3xl pointer-events-none"></div>

            {/* Top Close Button (Mobile Friendly Tap Target) */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full glass-pill bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all z-20"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Inner Scrollable Container */}
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex flex-col justify-between flex-1">
              <div>
                {/* Header Badge */}
                <div className="pr-8 mb-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[10px] sm:text-xs font-extrabold">
                    <Sparkles className="w-3 h-3 text-rose-400 shrink-0 animate-pulse" />
                    <span>FOR FAMILY ONLY (NOT BACHELORS)</span>
                  </div>
                </div>

                {/* Modal Title */}
                <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white mb-2 leading-snug">
                  Have a Family Flat Near <span className="gradient-text-indigo">Sector 59, Noida</span>?
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  I am looking for a clean <strong className="text-indigo-300 font-semibold">1 BHK (₹6K-₹10K)</strong> or <strong className="text-cyan-300 font-semibold">2 BHK (₹10K-₹15K)</strong> flat for <strong className="text-rose-300 font-semibold">family stay</strong> with shifting by <strong className="text-emerald-300 font-semibold">August 2026</strong>. If you have an option, let&apos;s connect!
                </p>

                {/* Quick Specs Highlight Box */}
                <div className="p-2.5 rounded-xl glass-panel border border-white/10 mb-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] sm:text-xs text-gray-200">
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Sec 59 + 15 Hubs
                  </span>
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Shift: Aug 2026
                  </span>
                  <span className="flex items-center gap-1 font-medium truncate col-span-2 sm:col-span-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Ready Family
                  </span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call Directly */}
              <div className="pt-1">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="w-full sm:w-1/2 py-2.5 sm:py-3 px-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneNumber}`}
                    onClick={handleClose}
                    className="w-full sm:w-1/2 py-2.5 sm:py-3 px-3.5 rounded-xl glass-pill bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Call Directly</span>
                  </a>
                </div>

                {/* Bottom Dismiss Link */}
                <div className="text-center mt-3">
                  <button
                    onClick={handleClose}
                    className="text-[11px] sm:text-xs text-gray-400 hover:text-gray-200 underline transition-colors"
                  >
                    Browse website requirements first
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

