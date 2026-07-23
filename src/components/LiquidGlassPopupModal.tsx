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

  const handleClose = () => {
    setIsOpen(false);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I saw your flat requirement showcase popup. I have a 1BHK/2BHK room available near Sector 59, Noida. Let's discuss!"
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Liquid Backdrop Overlay with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#090D16]/75 backdrop-blur-2xl transition-opacity"
          />

          {/* Liquid Glass Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 via-indigo-950/80 to-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-indigo-500/20 text-white z-10 overflow-hidden"
          >
            {/* Ambient Background Liquid Glow Blobs inside Modal */}
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-indigo-500/20 filter blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-cyan-500/20 filter blur-3xl pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full glass-pill hover:bg-white/20 text-gray-400 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-extrabold">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>FOR FAMILY ONLY (NOT BACHELORS)</span>
              </div>
            </div>

            {/* Modal Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 leading-snug">
              Have a Family Room or Flat Near <span className="gradient-text-indigo">Sector 59, Noida</span>?
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              I am actively looking for a clean <strong className="text-indigo-300 font-semibold">1 BHK (₹6K-₹10K)</strong> or <strong className="text-cyan-300 font-semibold">2 BHK (₹10K-₹15K)</strong> flat for <strong className="text-rose-300 font-semibold">family stay (Not for bachelors)</strong> with shifting by <strong className="text-emerald-300 font-semibold">August 2026</strong>. If you have an available option, let&apos;s connect directly!
            </p>

            {/* Quick Specs Highlight Box */}
            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 mb-6 flex flex-wrap items-center justify-around gap-2 text-xs text-gray-200">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-cyan-400" /> Sec 59 + 15 Hubs
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-emerald-400" /> Shift: Aug 2026
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-indigo-400" /> Ready Tenant
              </span>
            </div>

            {/* Action Buttons: WhatsApp & Call Directly */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Connect on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneNumber}`}
                onClick={handleClose}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-2xl glass-pill hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4.5 h-4.5 text-indigo-400" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Bottom Dismiss Link */}
            <div className="text-center mt-4">
              <button
                onClick={handleClose}
                className="text-xs text-gray-500 hover:text-gray-300 underline transition-colors"
              >
                Browse website requirements first
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
