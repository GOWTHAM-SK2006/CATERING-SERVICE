export type Language = "en" | "ta";

export interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

export const UI_STRINGS: Translations = {
  // Brand
  siteName: {
    en: "Valam Food Directory",
    ta: "வளம் உணவு வழிகாட்டி",
  },
  siteTagline: {
    en: "Catering & Banquet Business Directory",
    ta: "கேட்டரிங் மற்றும் விருந்து வழிகாட்டி",
  },

  // Navigation
  navHome: {
    en: "Home",
    ta: "முகப்பு",
  },
  navCaterers: {
    en: "All Caterers",
    ta: "அனைத்து கேட்டரிங்",
  },
  navCities: {
    en: "Cities",
    ta: "நகரங்கள்",
  },
  navCategories: {
    en: "Categories",
    ta: "பிரிவுகள்",
  },
  navListBusiness: {
    en: "Free Business Listing",
    ta: "இலவச வணிகப் பதிவு",
  },
  navAbout: {
    en: "About",
    ta: "எங்களைப் பற்றி",
  },
  navContact: {
    en: "Contact",
    ta: "தொடர்புக்கு",
  },

  // Hero
  heroHeading: {
    en: "Find the Best Catering Services Near You",
    ta: "உங்கள் அருகில் சிறந்த கேட்டரிங் சேவைகளைக் கண்டறியுங்கள்",
  },
  heroSubtitle: {
    en: "Discover trusted catering services for weddings, parties and special occasions.",
    ta: "திருமணங்கள், விழாக்கள் மற்றும் விசேஷங்களுக்கான நம்பகமான கேட்டரிங் சேவைகள்.",
  },

  // Search
  searchKeywordPlaceholder: {
    en: "Search by business name or specialty...",
    ta: "வணிகப் பெயர் அல்லது உணவு வகை தேடுக...",
  },
  searchCityPlaceholder: {
    en: "Select City",
    ta: "நகரத்தைத் தேர்வுசெய்க",
  },
  searchCategoryPlaceholder: {
    en: "Select Category",
    ta: "பிரிவைத் தேர்வுசெய்க",
  },
  searchBtn: {
    en: "Search Caterers",
    ta: "கேட்டரர்களைத் தேடுக",
  },
  allCities: {
    en: "All Cities",
    ta: "அனைத்து நகரங்கள்",
  },
  allCategories: {
    en: "All Categories",
    ta: "அனைத்து பிரிவுகள்",
  },

  // Home Sections
  popularCategoriesTitle: {
    en: "Popular Catering Categories",
    ta: "பிரபலமான கேட்டரிங் பிரிவுகள்",
  },
  popularCategoriesSubtitle: {
    en: "From traditional banana leaf wedding feasts to contemporary corporate buffets",
    ta: "பாரம்பரிய தலைவாழை இலை விருந்து முதல் நவீன பஃபே உணவு வரை",
  },
  featuredBusinessesTitle: {
    en: "Featured Caterers",
    ta: "சிறப்பு கேட்டரர்ஸ்",
  },
  featuredBusinessesSubtitle: {
    en: "Hand-picked reliable catering professionals for grand occasions",
    ta: "முக்கிய நிகழ்வுகளுக்கு தேர்வு செய்யப்பட்ட நம்பகமான கேட்டரிங் வல்லுநர்கள்",
  },
  recentlyAddedTitle: {
    en: "Recently Added Businesses",
    ta: "சமீபத்தில் சேர்க்கப்பட்டவை",
  },
  recentlyAddedSubtitle: {
    en: "Latest verified caterers listed in your locality",
    ta: "உங்கள் பகுதியில் சமீபத்தில் சரிபார்க்கப்பட்ட புதிய கேட்டரிங் சேவைகள்",
  },
  browseByCityTitle: {
    en: "Browse Caterers by City",
    ta: "நகர வாரியாக கேட்டரர்களைக் காண்க",
  },
  browseByCitySubtitle: {
    en: "Find top-rated food catering services across major cities in Tamil Nadu",
    ta: "தமிழ்நாட்டின் முக்கிய நகரங்களில் உள்ள முன்னணி கேட்டரிங் சேவைகளைத் தேடுங்கள்",
  },

  // CTA & Banner
  bannerTitle: {
    en: "Are You a Catering Service Provider?",
    ta: "நீங்கள் ஒரு கேட்டரிங் சேவை நிறுவனமா?",
  },
  bannerSubtitle: {
    en: "Reach thousands of customers planning weddings, birthdays, and corporate events across Tamil Nadu. Add your business today for free.",
    ta: "திருமணம், பிறந்தநாள் மற்றும் விழாக்கள் திட்டமிடும் ஆயிரக்கணக்கான வாடிக்கையாளர்களை எளிதில் அடையுங்கள். இன்றே உங்கள் வணிகத்தை இலவசமாகப் பதிவு செய்யுங்கள்.",
  },
  bannerBtn: {
    en: "List Your Business For Free",
    ta: "இலவசமாக வணிகத்தைப் பதிவு செய்க",
  },

  // Business Card & Details
  viewDetails: {
    en: "View Details",
    ta: "விவரங்களைக் காண்க",
  },
  verifiedDirectoryBadge: {
    en: "Verified Listing",
    ta: "சரிபார்க்கப்பட்ட வணிகம்",
  },
  sourceAttribution: {
    en: "Source:",
    ta: "மூலம்:",
  },
  location: {
    en: "Location",
    ta: "இடம்",
  },
  address: {
    en: "Address",
    ta: "முகவரி",
  },
  openInGoogleMaps: {
    en: "Open in Google Maps",
    ta: "கூகுள் மேப்ஸில் திறக்க",
  },
  viewOnJustdial: {
    en: "View on Justdial",
    ta: "ஜஸ்ட்டயலில் காண்க",
  },
  specialties: {
    en: "Specialties & Menu Highlights",
    ta: "சிறப்பு உணவு வகைகள்",
  },
  cuisines: {
    en: "Cuisines Catered",
    ta: "வழங்கப்படும் சமையல் வகைகள்",
  },
  eventTypes: {
    en: "Suitable Events",
    ta: "பொருத்தமான விழாக்கள்",
  },
  verifiedNoticeHeading: {
    en: "Verified Directory Notice",
    ta: "சரிபார்க்கப்பட்ட வணிக அறிவிப்பு",
  },
  verifiedNoticeBody: {
    en: "To ensure maximum authenticity, this directory displays verified location and public catalog details from official sources like Justdial. No unverified ratings, timings, or unofficial numbers are shown.",
    ta: "நம்பகத்தன்மையை உறுதிப்படுத்த, ஜஸ்ட்டயல் போன்ற அதிகாரப்பூர்வ ஆதாரங்களிலிருந்து பெறப்பட்ட உண்மை விவரங்கள் மட்டுமே இங்கு வெளியிடப்படுகின்றன.",
  },
  requestQuote: {
    en: "Inquire / Request Callback",
    ta: "விசாரணை செய்க",
  },
  shareListing: {
    en: "Share",
    ta: "பகிர்க",
  },

  // Listings page
  directoryTitle: {
    en: "Catering Services Directory",
    ta: "கேட்டரிங் சேவைகள் பட்டியல்",
  },
  directorySubtitle: {
    en: "Filter and find trusted caterers in Tirupur, Coimbatore, Chennai, and beyond",
    ta: "திருப்பூர், கோவை, சென்னை உள்ளிட்ட நகரங்களில் நம்பகமான கேட்டரர்களைத் தேடுங்கள்",
  },
  filterByCity: {
    en: "Filter by City",
    ta: "நகர வாரியாக வடிகட்டு",
  },
  filterByCategory: {
    en: "Filter by Category",
    ta: "பிரிவு வாரியாக வடிகட்டு",
  },
  filterByArea: {
    en: "Filter by Area",
    ta: "பகுதி வாரியாக வடிகட்டு",
  },
  clearFilters: {
    en: "Reset Filters",
    ta: "வடிகட்டல்களை மீட்டமைக்க",
  },
  showingResults: {
    en: "Showing businesses",
    ta: "வணிகங்கள் காட்டப்படுகின்றன",
  },
  noResultsFound: {
    en: "No catering services match your selected filters.",
    ta: "உங்கள் தேடலுக்கு ஏற்ற கேட்டரிங் சேவைகள் ஏதும் கிடைக்கவில்லை.",
  },
  resetSearch: {
    en: "Clear All Filters",
    ta: "அனைத்து வடிகட்டல்களையும் நீக்குக",
  },

  // Footer
  footerAbout: {
    en: "Valam Food Directory is a premium, static regional catering business directory inspired by authentic South Indian culinary excellence, connecting event planners with trusted caterers.",
    ta: "வளம் உணவு வழிகாட்டி என்பது தமிழ்நாட்டின் பாரம்பரிய சுவை மற்றும் விசேஷங்களுக்கு நம்பகமான கேட்டரிங் சேவைகளை இணைக்கும் பிரீமியம் வணிக வழிகாட்டி ஆகும்.",
  },
  quickLinks: {
    en: "Quick Links",
    ta: "முக்கிய இணைப்புகள்",
  },
  popularCities: {
    en: "Popular Cities",
    ta: "முக்கிய நகரங்கள்",
  },
  copyright: {
    en: "All rights reserved. Data verified via Justdial and public catering directories.",
    ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. ஜஸ்ட்டயல் மற்றும் பொது கோப்பகங்கள் மூலம் சரிபார்க்கப்பட்டது.",
  },
};

