"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare, Phone } from "lucide-react";

export const FloatingQuickContact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="sm:hidden fixed bottom-3 left-2.5 right-2.5 inset-x-0 max-w-sm mx-auto z-40 pointer-events-auto">
      <div className="p-1.5 rounded-2xl glass-panel backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/60 flex items-center justify-between gap-1.5 w-full box-border overflow-hidden">
        {/* WhatsApp Action Box */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 py-2.5 px-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-[0.97] transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Call Now Action Box */}
        <a
          href={`tel:${siteConfig.phoneNumber}`}
          className="flex-1 min-w-0 py-2.5 px-2 rounded-xl glass-pill bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 border border-white/15 active:scale-[0.97] transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="truncate whitespace-nowrap">Call Now</span>
        </a>
      </div>
    </div>
  );
};

