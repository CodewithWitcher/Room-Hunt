"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare, Phone, MapPin } from "lucide-react";

export const FloatingQuickContact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="p-2 rounded-2xl glass-panel backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.phoneNumber}`}
          className="flex-1 py-3 px-4 rounded-xl glass-pill hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/15"
        >
          <Phone className="w-4 h-4 text-indigo-400" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};
