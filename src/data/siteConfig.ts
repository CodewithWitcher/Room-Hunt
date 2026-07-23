export interface RequirementSpec {
  id: "1bhk" | "2bhk";
  title: string;
  badge: string;
  budgetMin: number;
  budgetMax: number;
  budgetFormatted: string;
  bedrooms: number;
  bedroomDetail: string;
  halls: number;
  kitchenDetail: string;
  washrooms: number;
  washroomDetail: string;
  keyHighlights: string[];
}

export interface SiteConfig {
  seekerName: string;
  primaryLocation: string;
  targetArea: string;
  shiftWindow: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  whatsappMessage: string;
  bannerMessages: string[];
  minimumRequirementsNote: string;
  preferredLocations: string[];
  metroConnectivityNote: string;
  requirements: RequirementSpec[];
}

export const siteConfig: SiteConfig = {
  seekerName: "Personal Flat Requirement",
  primaryLocation: "Sector 59, Noida",
  targetArea: "Near Sector 59, Noida & Surrounding Hubs",
  shiftWindow: "15th August 2026 – 23rd August 2026",
  phoneNumber: "+916307922029",
  whatsappNumber: "916307922029",
  email: "contact@flatrequirement.in",
  whatsappMessage: "Hi! I saw your flat requirement showcase for 1BHK/2BHK near Sector 59, Noida. I have an available option to share.",
  
  bannerMessages: [
    "⚡ Looking for 1 BHK / 2 BHK Flat near Sector 59, Noida",
    "💰 Budget Range: ₹8,000 – ₹15,000 / month",
    "📅 Shift Deadline: 15th August 2026 to 23rd August 2026",
    "🚇 Preferred Locations within 5 km of Metro Stations",
    "📞 Contact immediately via Phone / WhatsApp: +91 6307922029"
  ],

  minimumRequirementsNote: "If budget is lower, these are the minimum requirements; if budget allows, I can consider extra amenities.",

  preferredLocations: [
    "Sector 62",
    "Sector 64",
    "Sector 65",
    "Sector 58",
    "Sector 57",
    "Sector 56",
    "Sector 55",
    "Sector 53",
    "Sector 60",
    "Sector 61",
    "Sector 71",
    "Sector 81",
    "Sector 76",
    "Indrapuram Mamura",
    "Bishanpura Khora"
  ],

  metroConnectivityNote: "All preferred locations must have metro connectivity within 5 km.",

  requirements: [
    {
      id: "1bhk",
      title: "1 BHK Requirement",
      badge: "Compact & Cozy",
      budgetMin: 8000,
      budgetMax: 11000,
      budgetFormatted: "₹8,000 – ₹11,000 / month",
      bedrooms: 1,
      bedroomDetail: "1 Bedroom with fitted Almirah",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 1,
      washroomDetail: "1 Washroom with Geyser fitted",
      keyHighlights: [
        "1 Spacious Bedroom with wardrobe",
        "1 Comfortable Hall",
        "Modular Kitchen (RO + Exhaust)",
        "1 Geyser-equipped Washroom",
        "Budget: ₹8,000 – ₹11,000/mo"
      ]
    },
    {
      id: "2bhk",
      title: "2 BHK Requirement",
      badge: "Spacious & Ideal",
      budgetMin: 11000,
      budgetMax: 15000,
      budgetFormatted: "₹11,000 – ₹15,000 / month",
      bedrooms: 2,
      bedroomDetail: "2 Bedrooms with fitted Almirahs",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 2,
      washroomDetail: "2 Washrooms with Geysers fitted",
      keyHighlights: [
        "2 Bedrooms with wardrobes",
        "1 Generous Living Hall",
        "Modular Kitchen (RO + Exhaust)",
        "2 Geyser-equipped Washrooms",
        "Budget: ₹11,000 – ₹15,000/mo"
      ]
    }
  ]
};
