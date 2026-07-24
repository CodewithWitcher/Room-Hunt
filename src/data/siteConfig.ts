export interface BudgetTier {
  priceLabel: string;
  priceValue: number;
  tierName: string;
  description: string;
  amenitiesIncluded: {
    name: string;
    included: boolean;
  }[];
}

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
  scaleTiers: BudgetTier[];
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
  familyNotice: string;
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
  whatsappMessage: "Hi! I saw your flat requirement showcase for FAMILY FLAT (1BHK/2BHK - Raw with Almirah / Semi-Furnished) near Sector 59, Noida. I have an available option for family.",
  
  bannerMessages: [
    "👨‍👩‍👧 REQUIRED FOR FAMILY ONLY (NOT FOR BACHELORS)",
    "🛋️ REQUIREMENT: Raw Flat with Almirah OR Semi-Furnished Flat",
    "🚫 NOT LOOKING FOR FULLY FURNISHED FLAT",
    "⚡ 1 BHK / 2 BHK Family Flat near Sector 59, Noida",
    "💰 Budget Range: ₹6,000 – ₹15,000 / month (Incl. Maintenance)",
    "📅 Shift Deadline: 15th August 2026 to 23rd August 2026",
    "🚇 Preferred Locations within 5 km of Metro Stations",
    "📞 Contact Seeker: +91 6307922029"
  ],

  minimumRequirementsNote: "Requirement: Raw flat with fitted Almirah OR Semi-Furnished flat. We do NOT want a fully furnished flat. Basic minimum setup required: modular kitchen (with RO), geyser, and bedroom wardrobe/almirah.",
  
  familyNotice: "🏠 FAMILY FLAT REQUIRED — Raw flat with Almirah OR Semi-Furnished flat for family residence only. NOT FOR BACHELORS. NO FULLY FURNISHED FLAT NEEDED.",

  preferredLocations: [
    "Sector 62",
    "Sector 59",
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
    "Indrapuram",
    "Ghaziabad",
    "Mamura",
    "Bishanpura Khora"
  ],

  metroConnectivityNote: "All preferred locations must have metro connectivity within 5 km.",

  requirements: [
    {
      id: "1bhk",
      title: "1 BHK Family Requirement",
      badge: "Family Flat Only • Raw + Almirah / Semi-Furnished",
      budgetMin: 6000,
      budgetMax: 10000,
      budgetFormatted: "₹6,000 – ₹10,000 / month (Incl. Maintenance)",
      bedrooms: 1,
      bedroomDetail: "1 Bedroom with fitted Almirah / Wardrobe (Raw + Almirah or Semi-Furnished)",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 1,
      washroomDetail: "1 Washroom with Geyser fitted",
      keyHighlights: [
        "👨‍👩‍👧 For Family Stay (Not for Bachelors)",
        "🛋️ Raw Flat with Almirah OR Semi-Furnished",
        "🚫 DO NOT WANT Fully Furnished Flat",
        "1 Bedroom with wardrobe / almirah",
        "1 Comfortable Hall",
        "Modular Kitchen (RO + Exhaust)",
        "1 Geyser-equipped Washroom",
        "Budget Scale: ₹6K to ₹10K/mo (Incl. Maintenance)"
      ],
      scaleTiers: [
        {
          priceLabel: "₹6K – ₹7K",
          priceValue: 6500,
          tierName: "Basic Tier (Raw + Almirah)",
          description: "Raw flat with Almirah & essential kitchen setup for ₹6,000 - ₹7,000 budget.",
          amenitiesIncluded: [
            { name: "Raw Flat + Bedroom Almirah", included: true },
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Washroom Geyser", included: false },
            { name: "Kitchen Exhaust Fan", included: false },
            { name: "Full Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹8K",
          priceValue: 8000,
          tierName: "Standard Semi-Furnished Tier",
          description: "Semi-furnished setup with Geyser, RO & Wardrobe for ₹8,000 budget.",
          amenitiesIncluded: [
            { name: "Raw Flat + Bedroom Almirah", included: true },
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Washroom Geyser", included: true },
            { name: "Kitchen Exhaust Fan", included: false },
            { name: "Full Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹9K – ₹10K",
          priceValue: 9500,
          tierName: "Complete Semi-Furnished Tier",
          description: "Complete semi-furnished setup (All essential fixtures, RO, Geyser, Exhaust) for ₹9,000 - ₹10,000.",
          amenitiesIncluded: [
            { name: "Raw Flat + Bedroom Almirah", included: true },
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Washroom Geyser", included: true },
            { name: "Kitchen Exhaust Fan", included: true },
            { name: "Spacious Living Hall", included: true },
          ]
        }
      ]
    },
    {
      id: "2bhk",
      title: "2 BHK Family Requirement",
      badge: "Spacious Family Home • Raw + Almirah / Semi-Furnished",
      budgetMin: 10000,
      budgetMax: 15000,
      budgetFormatted: "₹10,000 – ₹15,000 / month (Incl. Maintenance)",
      bedrooms: 2,
      bedroomDetail: "2 Bedrooms with fitted Almirahs / Wardrobes (Raw + Almirah or Semi-Furnished)",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 2,
      washroomDetail: "2 Washrooms with Geysers fitted",
      keyHighlights: [
        "👨‍👩‍👧 For Family Stay (Not for Bachelors)",
        "🛋️ Raw Flat with Almirahs OR Semi-Furnished",
        "🚫 DO NOT WANT Fully Furnished Flat",
        "2 Bedrooms with wardrobes",
        "1 Generous Living Hall",
        "Modular Kitchen (RO + Exhaust)",
        "2 Geyser-equipped Washrooms",
        "Budget Scale: ₹10K to ₹15K/mo (Incl. Maintenance)"
      ],
      scaleTiers: [
        {
          priceLabel: "₹10K – ₹11K",
          priceValue: 10500,
          tierName: "Basic 2 BHK Tier (Raw + Almirahs)",
          description: "Essential Raw 2 BHK setup with 2 Almirahs for ₹10,000 - ₹11,000 budget.",
          amenitiesIncluded: [
            { name: "Raw Flat + 2 Bedroom Almirahs", included: true },
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Washroom Geyser", included: false },
            { name: "Kitchen Exhaust Fan", included: false },
            { name: "Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹12K – ₹13K",
          priceValue: 12500,
          tierName: "Standard 2 BHK Semi-Furnished",
          description: "Standard Semi-Furnished 2 BHK setup for ₹12,000 - ₹13,000 budget.",
          amenitiesIncluded: [
            { name: "2 Bedrooms with Almirahs", included: true },
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "1 Geyser fitted", included: true },
            { name: "Kitchen Exhaust Fan", included: true },
            { name: "Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹14K – ₹15K",
          priceValue: 14500,
          tierName: "Complete 2 BHK Semi-Furnished",
          description: "Complete Semi-Furnished 2 BHK setup (Geysers, RO, Exhaust, Almirahs) for ₹14,000 - ₹15,000.",
          amenitiesIncluded: [
            { name: "2 Bedrooms with 2 Almirahs", included: true },
            { name: "Complete Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "2 Geysers fitted in Washrooms", included: true },
            { name: "Kitchen Exhaust Fan", included: true },
            { name: "Generous Living Hall", included: true },
          ]
        }
      ]
    }
  ]
};
