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
  whatsappMessage: "Hi! I saw your flat requirement showcase for FAMILY FLAT (1BHK/2BHK) near Sector 59, Noida. I have an available option for family.",
  
  bannerMessages: [
    "👨‍👩‍👧 REQUIRED FOR FAMILY ONLY (NOT FOR BACHELORS)",
    "⚡ Looking for 1 BHK / 2 BHK Family Flat near Sector 59, Noida",
    "💰 Budget Range: ₹6,000 – ₹15,000 / month (Incl. Maintenance)",
    "📅 Shift Deadline: 15th August 2026 to 23rd August 2026",
    "🚇 Preferred Locations within 5 km of Metro Stations",
    "📞 Contact Seeker: +91 6307922029"
  ],

  minimumRequirementsNote: "If budget is lower, these are the minimum requirements; if budget allows, I can consider extra amenities.",
  
  familyNotice: "🏠 FAMILY FLAT REQUIRED — This requirement is strictly for family residence. NOT FOR BACHELORS.",

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
      title: "1 BHK Family Requirement",
      badge: "Family Flat Only",
      budgetMin: 6000,
      budgetMax: 10000,
      budgetFormatted: "₹6,000 – ₹10,000 / month (Incl. Maintenance)",
      bedrooms: 1,
      bedroomDetail: "1 Bedroom with fitted Almirah",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 1,
      washroomDetail: "1 Washroom with Geyser fitted",
      keyHighlights: [
        "👨‍👩‍👧 For Family Stay (Not for Bachelors)",
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
          tierName: "Basic Tier (Entry)",
          description: "Minimum essential setup for ₹6,000 - ₹7,000 budget.",
          amenitiesIncluded: [
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Bedroom Almirah / Wardrobe", included: true },
            { name: "Washroom Geyser", included: false },
            { name: "Kitchen Exhaust Fan", included: false },
            { name: "Full Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹8K",
          priceValue: 8000,
          tierName: "Standard Tier",
          description: "Standard complete setup for ₹8,000 budget.",
          amenitiesIncluded: [
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Bedroom Almirah / Wardrobe", included: true },
            { name: "Washroom Geyser", included: true },
            { name: "Kitchen Exhaust Fan", included: false },
            { name: "Full Living Hall", included: true },
          ]
        },
        {
          priceLabel: "₹9K – ₹10K",
          priceValue: 9500,
          tierName: "Premium Complete Tier",
          description: "All amenities included for ₹9,000 - ₹10,000 budget.",
          amenitiesIncluded: [
            { name: "Modular Kitchen", included: true },
            { name: "RO Water Purifier", included: true },
            { name: "Bedroom Almirah / Wardrobe", included: true },
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
      badge: "Spacious Family Home",
      budgetMin: 10000,
      budgetMax: 15000,
      budgetFormatted: "₹10,000 – ₹15,000 / month (Incl. Maintenance)",
      bedrooms: 2,
      bedroomDetail: "2 Bedrooms with fitted Almirahs",
      halls: 1,
      kitchenDetail: "Modular kitchen equipped with Exhaust Fan & RO water purifier",
      washrooms: 2,
      washroomDetail: "2 Washrooms with Geysers fitted",
      keyHighlights: [
        "👨‍👩‍👧 For Family Stay (Not for Bachelors)",
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
          tierName: "Basic 2 BHK Tier",
          description: "Essential 2 BHK setup for ₹10,000 - ₹11,000 budget.",
          amenitiesIncluded: [
            { name: "2 Bedrooms with Almirah", included: true },
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
          tierName: "Standard 2 BHK Tier",
          description: "Standard 2 BHK setup for ₹12,000 - ₹13,000 budget.",
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
          tierName: "Premium Complete 2 BHK Tier",
          description: "Full premium 2 BHK setup for ₹14,000 - ₹15,000 budget.",
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
