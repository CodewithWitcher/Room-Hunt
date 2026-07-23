"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import QRCode from "react-qr-code";
import { Phone, MessageSquare, Mail, Copy, Check, QrCode, Sparkles, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const ContactQRSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-extrabold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>FAMILY FLAT REQUIREMENT — NOT FOR BACHELORS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Have a Family Flat Available? Let&apos;s Connect!
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          If you are an owner or direct broker with a matching 1 BHK or 2 BHK family flat near Sector 59, Noida, please reach out via Call or WhatsApp.
        </p>
      </div>

      <GlassCard accent className="max-w-4xl mx-auto border border-white/20 overflow-hidden shadow-glass-glow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Phone & Actions */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                Primary Contact
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-white flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="tracking-tight">{siteConfig.phoneNumber}</span>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1.5 rounded-xl glass-pill hover:bg-white/20 text-gray-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
                  title="Copy Phone Number"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-indigo-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel text-sm text-gray-200">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">WhatsApp Number</span>
                  <span className="font-medium">{siteConfig.phoneNumber}</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  Chat <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel text-sm text-gray-200">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">Direct Phone Line</span>
                  <span className="font-medium">{siteConfig.phoneNumber}</span>
                </div>
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="text-xs text-indigo-300 hover:text-indigo-200 font-semibold flex items-center gap-1"
                >
                  Call <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneNumber}`}
                className="flex-1 px-6 py-3.5 rounded-xl glass-pill hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glass hover:scale-[1.02] transition-all"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic WhatsApp QR Code */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl glass-panel border border-white/15 text-center shadow-glass">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
              <QrCode className="w-3.5 h-3.5" />
              <span>SCAN TO WHATSAPP</span>
            </div>

            {/* QR Code Container with Glowing Frame */}
            <div className="p-4 rounded-2xl bg-white shadow-2xl relative group transition-transform duration-300 hover:scale-105">
              <QRCode
                value={whatsappUrl}
                size={160}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>

            <p className="text-xs text-gray-300 mt-4 max-w-xs font-medium">
              Scan with your phone camera or WhatsApp scanner to open chat instantly.
            </p>
          </div>

        </div>
      </GlassCard>
    </section>
  );
};
