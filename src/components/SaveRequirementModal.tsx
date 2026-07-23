"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Copy, Check, MessageSquare, Share2, X, BookmarkCheck, Phone, Users, ShieldAlert, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SaveRequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaveRequirementModal: React.FC<SaveRequirementModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Formatted Full Requirement Text for Copying / Sharing
  const fullRequirementSummaryText = `🏠 FLAT REQUIREMENT SPECIFICATIONS (FOR FAMILY ONLY)

👨‍👩‍👧 TENANT TYPE: FOR FAMILY RESIDENCE ONLY (NOT FOR BACHELORS)
📍 TARGET LOCATION: Near Sector 59, Noida & Surrounding Hubs (Within 5 km of Metro)
📅 SHIFT TIMELINE: ${siteConfig.shiftWindow}

----------------------------------------
💰 1 BHK FAMILY FLAT REQUIREMENT:
- Rent Budget: ₹6,000 – ₹10,000 / month (Incl. Maintenance)
- 1 Bedroom with fitted Almirah / Wardrobe
- 1 Comfortable Living Hall
- Modular Kitchen equipped with RO & Exhaust Fan
- 1 Washroom fitted with Geyser

💰 2 BHK FAMILY FLAT REQUIREMENT:
- Rent Budget: ₹10,000 – ₹15,000 / month (Incl. Maintenance)
- 2 Bedrooms with fitted Almirahs
- 1 Generous Living Hall
- Modular Kitchen equipped with RO & Exhaust Fan
- 2 Washrooms fitted with Geysers

----------------------------------------
📍 PREFERRED LOCATIONS (Within 5 km Metro):
${siteConfig.preferredLocations.join(", ")}

📞 CONTACT SEEKER:
- Phone Line: ${siteConfig.phoneNumber}
- WhatsApp: ${siteConfig.phoneNumber}
- Note: ${siteConfig.minimumRequirementsNote}
`;

  const handleCopyFullText = () => {
    navigator.clipboard.writeText(fullRequirementSummaryText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // WhatsApp share links
  const sendToSeekerUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I am saving your flat requirement summary for FAMILY flat (1BHK/2BHK) near Sector 59, Noida:\n\n${fullRequirementSummaryText}`
  )}`;

  const shareToAnyWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    fullRequirementSummaryText
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#090D16]/80 backdrop-blur-2xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/95 via-indigo-950/90 to-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-indigo-500/20 text-white z-10 overflow-hidden my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full glass-pill hover:bg-white/20 text-gray-400 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>SAVE & SHARE SPECIFICATIONS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-extrabold animate-pulse">
                <Users className="w-3.5 h-3.5" />
                <span>FOR FAMILY ONLY (NOT BACHELORS)</span>
              </div>
            </div>

            {/* Modal Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Save My Flat Requirements
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6">
              Copy the complete structured requirement summary to your clipboard, send it directly to me, or save/share it to any WhatsApp chat or contact.
            </p>

            {/* Family Callout Banner */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-950/60 to-slate-900/60 border border-rose-500/40 flex items-center gap-3 mb-6 shadow-inner">
              <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="text-xs sm:text-sm text-rose-200 font-bold">
                FAMILY FLAT REQUIRED — This requirement is strictly for family residence. Not for bachelors.
              </p>
            </div>

            {/* Preview Box of Structured Text */}
            <div className="mb-6 p-4 rounded-2xl bg-black/50 border border-white/15 max-h-60 overflow-y-auto font-mono text-xs text-gray-200 leading-relaxed shadow-inner">
              <pre className="whitespace-pre-wrap font-sans text-xs">{fullRequirementSummaryText}</pre>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              
              {/* 1. Copy Text Button */}
              <button
                onClick={handleCopyFullText}
                className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 transition-all"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span className="text-emerald-300">Requirement Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Full Requirement Text</span>
                  </>
                )}
              </button>

              {/* 2. Share to Any WhatsApp */}
              <a
                href={shareToAnyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Save / Share on Any WhatsApp Chat</span>
              </a>

              {/* 3. Send to Seeker directly */}
              <a
                href={sendToSeekerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl glass-pill hover:bg-white/15 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send to Seeker (+916307922029)</span>
              </a>

              {/* 4. Copy Phone Number */}
              <button
                onClick={handleCopyPhone}
                className="w-full py-3.5 px-4 rounded-xl glass-pill hover:bg-white/15 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition-all"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span className="text-emerald-300">Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Copy Phone (+91 6307922029)</span>
                  </>
                )}
              </button>
            </div>

            {/* Dismiss Footer */}
            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
