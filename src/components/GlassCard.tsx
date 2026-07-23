"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accent?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  accent = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
        accent
          ? "glass-card-accent"
          : "glass-panel"
      } ${hoverEffect ? "glass-panel-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
