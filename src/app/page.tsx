import React from "react";
import { HeaderBanner } from "@/components/HeaderBanner";
import { HeroSection } from "@/components/HeroSection";
import { RequirementCards } from "@/components/RequirementCards";
import { LocationPills } from "@/components/LocationPills";
import { ContactQRSection } from "@/components/ContactQRSection";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import { LiquidGlassPopupModal } from "@/components/LiquidGlassPopupModal";
import { siteConfig } from "@/data/siteConfig";
import { Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative z-10 pb-20 sm:pb-12 w-full max-w-full overflow-x-hidden">
      {/* 1. Header Rolling Banner */}
      <HeaderBanner />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 my-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* 3. Requirement Cards (1BHK & 2BHK) */}
      <RequirementCards />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 my-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* 4. Preferred Locations */}
      <LocationPills />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 my-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* 5. Contact & WhatsApp QR Section */}
      <ContactQRSection />

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-300 font-semibold">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span>Noida Flat Requirement Showcase</span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <span>Target Area:</span>
            <span className="text-cyan-300 font-medium">{siteConfig.targetArea}</span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Shift Timeline:</span>
            <span className="text-emerald-400 font-semibold">{siteConfig.shiftWindow}</span>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Quick Contact Bar */}
      <FloatingQuickContact />

      {/* 5-Second Automatic Liquid Blur Glass Popup Modal */}
      <LiquidGlassPopupModal />
    </main>
  );
}
