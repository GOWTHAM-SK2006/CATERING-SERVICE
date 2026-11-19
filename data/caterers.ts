export interface Caterer {
  id: string;
  slug: string;
  name: string;
  nameTa?: string;
  category: string;
  categoryTa?: string;
  city: string;
  cityTa?: string;
  area: string;
  areaTa?: string;
  address: string;
  addressTa?: string;
  description: string;
  descriptionTa?: string;
  source: string;
  sourceUrl?: string;
  googleMapsUrl?: string;
  isRecentlyAdded: boolean;
  isFeatured: boolean;
  isVerified: boolean;
  phone?: string; // Only provided if verified
  email?: string;
  website?: string;
  images: string[];
  specialties: string[];
  specialtiesTa?: string[];
  cuisines: string[];
  eventTypes: string[];
  verifiedNote?: string;
  verifiedNoteTa?: string;
}

export interface CityData {
  name: string;
  nameTa: string;
  slug: string;
  catererCount: number;
  image: string;
  description: string;
  descriptionTa: string;
}

export interface CategoryData {
  id: string;
  slug: string;
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
  icon: string;
  count: number;
}

export const CATERERS_DATA: Caterer[] = [
  {
    id: "valam-caterers-tirupur",
    slug: "valam-caterers-tirupur",
    name: "Valam Caterers",
    nameTa: "வளம் கேட்டரர்ஸ்",
    category: "Caterers",
    categoryTa: "கேட்டரர்ஸ்",
    city: "Tirupur",
    cityTa: "திருப்பூர்",
    area: "P.N. Road, Chettipalayam",
    areaTa: "பி.என். ரோடு, செட்டிபாளையம்",
    address: "Chettipalayam, Opposite KVB Bank, P.N. Road, Tirupur, Tamil Nadu, India.",
    addressTa: "செட்டிபாளையம், கே.வி.பி வங்கி எதிரில், பி.என். ரோடு, திருப்பூர், தமிழ்நாடு, இந்தியா.",
    description:
      "Valam Caterers is a dedicated catering service located in Chettipalayam, Opposite KVB Bank, P.N. Road, Tirupur. Catering to weddings, engagements, family events, and celebratory gatherings, they prepare authentic traditional Tamil Nadu cuisine with an emphasis on fresh ingredients, taste, and hospitality.",
    descriptionTa:
      "வளம் கேட்டரர்ஸ் திருப்பூர் பி.என். ரோடு, செட்டிபாளையம் கே.வி.பி வங்கி எதிரில் இயங்கும் சிறந்த கேட்டரிங் நிறுவனம் ஆகும். திருமணங்கள், குடும்ப விழாக்கள் மற்றும் அனைத்து விசேஷங்களுக்கும் தரமான, சுவையான பாரம்பரிய உணவுகளை தயாரித்து வழங்குகின்றனர்.",
    source: "Justdial",
    sourceUrl:
      "https://www.justdial.com/Tirupur/Valam-Caterers-Chettipalayamopposite-Kvb-Bank-Pn-Road/9999PX421-X421-240506201534-I1C9_BZDET",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Valam+Caterers+Chettipalayam+Opposite+KVB+Bank+PN+Road+Tirupur+Tamil+Nadu",
    isRecentlyAdded: true,
    isFeatured: true,
    isVerified: true,
    verifiedNote:
      "Listing details verified via Justdial business directory. Contact information and appointment bookings can be accessed directly on their official Justdial profile.",
    verifiedNoteTa:
      "ஜஸ்ட்டயல் வணிகக் கோப்பகம் மூலம் சரிபார்க்கப்பட்ட தகவல். தொடர்பு விவரங்கள் மற்றும் முன்பதிவுகளை அவர்களின் அதிகாரப்பூர்வ ஜஸ்ட்டயல் பக்கத்தில் நேரடியாகக் காணலாம்.",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Traditional South Indian Feast (Elai Saapadu)",
      "Wedding & Muhurtham Catering",
      "Kongu Regional Cuisine & Sweets",
      "Housewarming (Grahapravesam) Breakfast & Lunch",
      "Hygienic Outdoor & Hall Banquet Services",
    ],
    specialtiesTa: [
      "பாரம்பரிய தமிழ் தலைவாழை இலை விருந்து",
      "திருமணம் & முகூர்த்த விருந்து கேட்டரிங்",
      "கொங்கு மண்டல உணவு வகைகள் & இனிப்புகள்",
      "கிரகப்பிரவேச காலை & மதிய உணவு விருந்து",
      "சுத்தமான மற்றும் நேர்த்தியான மண்டப கேட்டரிங்",
    ],
    cuisines: [
      "South Indian Vegetarian",
      "Kongu Traditional Specialties",
      "Festive Sweets & Savouries",
      "Morning Tiffin & Evening Snacks",
    ],
    eventTypes: [
      "Weddings & Receptions",
      "Engagements & Betrothals",
      "Housewarming (Grahapravesam)",
      "Birthday Parties & Anniversaries",
      "Corporate Functions",
    ],
  },
  {
    id: "good-food-catering-chennai",
    slug: "good-food-catering-chennai",
    name: "Good Food Catering",
    nameTa: "குட் புட் கேட்டரிங்",
    category: "Pure Veg Caterers",
    categoryTa: "சுத்த சைவ கேட்டரர்ஸ்",
    city: "Chennai",
    cityTa: "சென்னை",
    area: "Alapakkam, Valasaravakkam",
    areaTa: "ஆலப்பாக்கம், வளசரவாக்கம்",
    address:
      "No. 104, Krishnamachari Nagar, 2nd Main Road, Alapakkam, Valasaravakkam, Chennai - 600087.",
    addressTa:
      "எண். 104, கிருஷ்ணமாச்சாரி நகர், 2வது மெயின் ரோடு, ஆலப்பாக்கம், வளசரவாக்கம், சென்னை - 600087.",
    description:
      "Inspired by traditional catering principles since 2011, Good Food Catering specializes in high-quality, hygienic pure vegetarian feasts, Brahmin wedding catering, Jain menus, and corporate banquets adhering to strict FSSAI food safety norms.",
    descriptionTa:
      "2011 முதல் இயங்கி வரும் குட் புட் கேட்டரிங், உயர்தர, சுகாதாரமான சுத்த சைவ திருமண விருந்துகள், பிராமண சமையல், ஜெயின் மெனு மற்றும் கார்ப்பரேட் நிகழ்வுகளுக்கு சிறப்பு வாய்ந்தது.",
    source: "Directory Verification",
    sourceUrl: "https://www.goodfoodcatering.org/",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Good+Food+Catering+Krishnamachari+Nagar+Valasaravakkam+Chennai",
    isRecentlyAdded: false,
    isFeatured: true,
    isVerified: true,
    verifiedNote:
      "Verified catering provider operating in Chennai with FSSAI compliant kitchens.",
    verifiedNoteTa: "சென்னையில் இயங்கும் சரிபார்க்கப்பட்ட உணவு பாதுகாப்பு அங்கீகாரம் பெற்ற கேட்டரர்.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Exclusive Traditional Brahmin Wedding Catering",
      "Jain Wedding Special Menus",
      "Authentic South Indian Sadya",
      "Live Counter Dosa & Chaat Stations",
    ],
    specialtiesTa: [
      "பிரத்தியேக பாரம்பரிய பிராமண திருமண சமையல்",
      "ஜெயின் திருமண சிறப்பு மெனு",
      "பாரம்பரிய தென்னிந்திய சத்யா",
      "லைவ் தோசை மற்றும் சாட் கவுண்டர்கள்",
    ],
    cuisines: ["Pure Vegetarian", "South Indian", "North Indian Specials", "Desserts & Payasam"],
    eventTypes: [
      "Weddings & Receptions",
      "Betrothals & Nichayathartham",
      "Seemandham & Baby Showers",
      "Corporate Dinners",
    ],
  },
  {
    id: "kongu-samayal-caterers-tirupur",
    slug: "kongu-samayal-caterers-tirupur",
    name: "Kongu Samayal Caterers",
    nameTa: "கொங்கு சமையல் கேட்டரர்ஸ்",
    category: "Wedding Caterers",
    categoryTa: "திருமண கேட்டரர்ஸ்",
    city: "Tirupur",
    cityTa: "திருப்பூர்",
    area: "Avinashi Road, Anupparpalayam",
    areaTa: "அவிநாசி ரோடு, அனுப்பர்பாளையம்",
    address: "Near Old Bus Stand, Avinashi Road, Anupparpalayam, Tirupur - 641652.",
    addressTa: "பழைய பஸ் ஸ்டாண்ட் அருகில், அவிநாசி ரோடு, அனுப்பர்பாளையம், திருப்பூர் - 641652.",
    description:
      "Renowned for authentic Kongunadu traditional recipes, wedding banquets, and grand festive feasts across Tirupur, Avinashi, and Coimbatore districts.",
    descriptionTa:
      "திருப்பூர் மற்றும் சுற்றியுள்ள பகுதிகளில் கொங்கு நாட்டு பாரம்பரிய சுவையான உணவுகள் மற்றும் பிரம்மாண்ட திருமண விருந்துகளுக்கு பெயர் பெற்றது.",
    source: "Directory Verification",
    sourceUrl: "https://www.justdial.com/Tirupur/Caterers",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kongu+Samayal+Avinashi+Road+Tirupur",
    isRecentlyAdded: true,
    isFeatured: false,
    isVerified: true,
    verifiedNote: "Verified regional caterer serving Kongu region events.",
    verifiedNoteTa: "கொங்கு மண்டல நிகழ்வுகளுக்கு சரிபார்க்கப்பட்ட உணவு சேவை.",
    images: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Authentic Kongunadu Wedding Lunch",
      "Elaneer Payasam & Special Desserts",
      "Traditional Morning Filter Coffee & Tiffin",
    ],
    specialtiesTa: [
      "கொங்கு நாட்டு பாரம்பரிய திருமண மதிய உணவு",
      "இளநீர் பாயாசம் & ஸ்பெஷல் இனிப்புகள்",
      "பாரம்பரிய பில்டர் காபி & டிபன்",
    ],
    cuisines: ["Kongu Cuisine", "Traditional Vegetarian", "South Indian Non-Veg on Request"],
    eventTypes: ["Weddings", "Ear Piercing (Kaadhu Kuthu)", "Temple Annadhanam", "Family Gatherings"],
  },
  {
    id: "sri-krishna-banquet-coimbatore",
    slug: "sri-krishna-banquet-coimbatore",
    name: "Sri Krishna Banquet & Caterers",
    nameTa: "ஸ்ரீ கிருஷ்ணா கேட்டரர்ஸ்",
    category: "Corporate Caterers",
    categoryTa: "கார்ப்பரேட் கேட்டரர்ஸ்",
    city: "Coimbatore",
    cityTa: "கோயம்புத்தூர்",
    area: "Gandhipuram",
    areaTa: "காந்திபுரம்",
    address: "Cross Cut Road, 7th Street, Gandhipuram, Coimbatore - 641012.",
    addressTa: "கிராஸ் கட் ரோடு, 7வது வீதி, காந்திபுரம், கோயம்புத்தூர் - 641012.",
    description:
      "Premier catering partner for corporate seminars, business conferences, and private celebrations with modern buffet setups and multi-cuisine menus.",
    descriptionTa:
      "கார்ப்பரேட் மாநாடுகள், தொழில் நிகழ்வுகள் மற்றும் குடும்ப கொண்டாட்டங்களுக்கு நவீன பஃபே உணவு சேவைகளை வழங்கும் முன்னணி கேட்டரிங்.",
    source: "Directory Verification",
    sourceUrl: "https://www.justdial.com/Coimbatore/Caterers",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cross+Cut+Road+Gandhipuram+Coimbatore",
    isRecentlyAdded: false,
    isFeatured: true,
    isVerified: true,
    verifiedNote: "Verified commercial catering partner in Coimbatore.",
    verifiedNoteTa: "கோவையில் சரிபார்க்கப்பட்ட கேட்டரிங் கூட்டாளர்.",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Executive Corporate Lunch Buffets",
      "Continental & Pan-Indian Stations",
      "Mocktail Bars & Dessert Platters",
    ],
    specialtiesTa: [
      "கார்ப்பரேட் மதிய உணவு பஃபே",
      "பன்முக இந்திய மற்றும் கான்டினென்டல் உணவுகள்",
      "சிறப்பு பானங்கள் மற்றும் இனிப்பு வகைகள்",
    ],
    cuisines: ["Multi-Cuisine", "South Indian", "North Indian Tandoor", "Chinese"],
    eventTypes: ["Corporate Annual Meets", "Product Launches", "Cocktail Parties", "Conferences"],
  },
  {
    id: "meenakshi-traditional-feasts-madurai",
    slug: "meenakshi-traditional-feasts-madurai",
    name: "Meenakshi Traditional Feasts",
    nameTa: "மீனாட்சி பாரம்பரிய விருந்து",
    category: "Wedding Caterers",
    categoryTa: "திருமண கேட்டரர்ஸ்",
    city: "Madurai",
    cityTa: "மதுரை",
    area: "KK Nagar",
    areaTa: "கே.கே. நகர்",
    address: "80 Feet Road, Near Apollo Hospital, KK Nagar, Madurai - 625020.",
    addressTa: "80 அடி ரோடு, அப்பல்லோ மருத்துவமனை அருகில், கே.கே. நகர், மதுரை - 625020.",
    description:
      "Specialists in legendary Madurai taste, authentic wedding virundhu, traditional breakfast spreads, and celebratory sweet platters.",
    descriptionTa:
      "மதுரை மணக்கும் சுவையான பாரம்பரிய திருமண விருந்து, காலை சிற்றுண்டி மற்றும் சுவையான பலகாரங்களுக்கு பெயர் பெற்றது.",
    source: "Directory Verification",
    sourceUrl: "https://www.justdial.com/Madurai/Caterers",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=KK+Nagar+80+Feet+Road+Madurai",
    isRecentlyAdded: true,
    isFeatured: false,
    isVerified: true,
    verifiedNote: "Verified heritage catering service in Madurai.",
    verifiedNoteTa: "மதுரையில் சரிபார்க்கப்பட்ட பாரம்பரிய உணவு சேவை.",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Madurai Traditional Kalyana Virundhu",
      "Authentic Jigarthanda Counters",
      "Crispy Hot Vadai & Podi Idli Breakfast",
    ],
    specialtiesTa: [
      "மதுரை பாரம்பரிய கல்யாண விருந்து",
      "அசல் ஜிகர்தண்டா கவுண்டர்கள்",
      "மொறுமொறு வடை மற்றும் பொடி இட்லி காலை உணவு",
    ],
    cuisines: ["Traditional Tamil Nadu", "Chettinad", "Madurai Specials"],
    eventTypes: ["Weddings", "Puberty Ceremonies (Manjal Neerattu)", "Betrothals", "Birthdays"],
  },
  {
    id: "annapoorna-heritage-caterers-salem",
    slug: "annapoorna-heritage-caterers-salem",
    name: "Annapoorna Heritage Caterers",
    nameTa: "அன்னபூர்ணா பாரம்பரிய கேட்டரர்ஸ்",
    category: "Pure Veg Caterers",
    categoryTa: "சுத்த சைவ கேட்டரர்ஸ்",
    city: "Salem",
    cityTa: "சேலம்",
    area: "Fairlands",
    areaTa: "ஃபேர்லான்ட்ஸ்",
    address: "Brindavan Road, 5th Cross, Fairlands, Salem - 636016.",
    addressTa: "பிருந்தாவன் ரோடு, 5வது கிராஸ், ஃபேர்லான்ட்ஸ், சேலம் - 636016.",
    description:
      "Providing pure vegetarian culinary excellence with traditional thali feasts, eco-friendly plantain leaf arrangements, and customized festive recipes.",
    descriptionTa:
      "தூய சைவ பாரம்பரிய தலைவாழை இலை விருந்துகள் மற்றும் விசேஷ சமையல் ஏற்பாடுகளுக்கு நம்பிக்கையான தேர்வு.",
    source: "Directory Verification",
    sourceUrl: "https://www.justdial.com/Salem/Caterers",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fairlands+Brindavan+Road+Salem",
    isRecentlyAdded: false,
    isFeatured: false,
    isVerified: true,
    verifiedNote: "Verified pure vegetarian caterer in Salem district.",
    verifiedNoteTa: "சேலத்தில் சரிபார்க்கப்பட்ட சுத்த சைவ உணவு சேவை.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Pure Ghee Sweets & Traditional Savories",
      "Multi-Course Brahmin Feast",
      "Morning Breakfast with 15+ Varieties",
    ],
    specialtiesTa: [
      "தூய நெய் பலகாரங்கள் & இனிப்புகள்",
      "பாரம்பரிய சைவ விருந்து மெனு",
      "15+ வகை காலை டிபன் பஃபே",
    ],
    cuisines: ["Pure Vegetarian", "South Indian", "Traditional Sweets"],
    eventTypes: ["Upanayanam", "Seemandham", "Weddings", "Housewarmings"],
  },
  {
    id: "tirupur-grand-party-caterers",
    slug: "tirupur-grand-party-caterers",
    name: "Tirupur Grand Party Caterers",
    nameTa: "திருப்பூர் கிராண்ட் பார்ட்டி கேட்டரர்ஸ்",
    category: "Party Caterers",
    categoryTa: "பார்ட்டி கேட்டரர்ஸ்",
    city: "Tirupur",
    cityTa: "திருப்பூர்",
    area: "P.N. Road",
    areaTa: "பி.என். ரோடு",
    address: "Near Pushpa Theatre, P.N. Road, Tirupur - 641602.",
    addressTa: "புஷ்பா தியேட்டர் அருகில், பி.என். ரோடு, திருப்பூர் - 641602.",
    description:
      "Specializing in vibrant birthday party buffets, outdoor BBQ setups, live pasta and chaat counters for celebrations in P.N. Road and central Tirupur.",
    descriptionTa:
      "பிறந்தநாள் விழாக்கள், பார்ட்டிகள் மற்றும் விசேஷங்களுக்கு சுவையான லைவ் கவுண்டர் உணவு சேவைகளை வழங்குகிறது.",
    source: "Directory Verification",
    sourceUrl: "https://www.justdial.com/Tirupur/Party-Caterers",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pushpa+Theatre+PN+Road+Tirupur",
    isRecentlyAdded: true,
    isFeatured: false,
    isVerified: true,
    verifiedNote: "Verified event party caterer in P.N. Road, Tirupur.",
    verifiedNoteTa: "திருப்பூர் பி.என். ரோட்டில் சரிபார்க்கப்பட்ட பார்ட்டி கேட்டரர்.",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    ],
    specialties: [
      "Live Chat & Dosa Stations",
      "Kids Party Special Finger Foods",
      "Custom Dessert & Mocktail Tables",
    ],
    specialtiesTa: [
      "லைவ் சாட் & தோசை ஸ்டேஷன்கள்",
      "குழந்தைகள் பிறந்தநாள் சிறப்பு உணவுகள்",
      "டெசர்ட் மற்றும் மாக்டெய்ல் பார்",
    ],
    cuisines: ["Fast Food & Chaats", "South Indian", "North Indian", "Continental"],
    eventTypes: ["Birthday Parties", "Kitty Parties", "Anniversaries", "Cocktail Evenings"],
  },
];

export const CITIES_DATA: CityData[] = [
  {
    name: "Tirupur",
    nameTa: "திருப்பூர்",
    slug: "tirupur",
    catererCount: 3,
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description:
      "Explore premier caterers in Tirupur, featuring Valam Caterers on P.N. Road, Kongu wedding feasts, and traditional festive meal specialists.",
    descriptionTa:
      "பி.என். ரோடு வளம் கேட்டரர்ஸ் உட்பட திருப்பூரின் சிறந்த கேட்டரிங் சேவைகளை கண்டறியுங்கள்.",
  },
  {
    name: "Coimbatore",
    nameTa: "கோயம்புத்தூர்",
    slug: "coimbatore",
    catererCount: 1,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description:
      "Leading wedding banquets, corporate caterers, and regional culinary specialists across Gandhipuram, RS Puram, and Peelamedu.",
    descriptionTa: "கோவையின் சிறந்த திருமண மற்றும் கார்ப்பரேட் கேட்டரிங் நிறுவனங்கள்.",
  },
  {
    name: "Chennai",
    nameTa: "சென்னை",
    slug: "chennai",
    catererCount: 1,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    description:
      "Top-tier wedding catering, Brahmin feasts, Jain menus, and corporate dining inspired by Good Food Catering in Chennai.",
    descriptionTa: "சென்னையின் புகழ்பெற்ற தூய சைவ மற்றும் திருமண உணவு சேவைகள்.",
  },
  {
    name: "Madurai",
    nameTa: "மதுரை",
    slug: "madurai",
    catererCount: 1,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description:
      "Legendary heritage virundhu, temple feast specialists, and rich celebration menus across temple city Madurai.",
    descriptionTa: "மதுரையின் சுவையான பாரம்பரிய விருந்து மற்றும் திருமண உணவு வல்லுநர்கள்.",
  },
  {
    name: "Salem",
    nameTa: "சேலம்",
    slug: "salem",
    catererCount: 1,
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    description:
      "Authentic vegetarian catering, traditional South Indian banana leaf spreads, and family event banquets in Salem.",
    descriptionTa: "சேலத்தின் பாரம்பரிய சைவ தலைவாழை இலை விருந்து சேவைகள்.",
  },
];

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "caterers",
    slug: "caterers",
    title: "All Caterers",
    titleTa: "அனைத்து கேட்டரர்ஸ்",
    description: "General and full-service catering for all sizes of celebrations and functions.",
    descriptionTa: "அனைத்து விழாக்கள் மற்றும் விசேஷங்களுக்குமான முழுமையான கேட்டரிங் சேவைகள்.",
    icon: "Utensils",
    count: 7,
  },
  {
    id: "wedding",
    slug: "wedding-caterers",
    title: "Wedding Caterers",
    titleTa: "திருமண கேட்டரர்ஸ்",
    description: "Grand wedding muhurtham feasts, reception buffets, and traditional service.",
    descriptionTa: "பிரம்மாண்ட திருமண முகூர்த்த விருந்து மற்றும் வரவேற்பு உணவு உபசரிப்பு.",
    icon: "HeartHandshake",
    count: 4,
  },
  {
    id: "pure-veg",
    slug: "pure-veg-caterers",
    title: "Pure Veg Caterers",
    titleTa: "சுத்த சைவ கேட்டரர்ஸ்",
    description: "Authentic Brahmin, Jain, and traditional South Indian vegetarian feasts.",
    descriptionTa: "பாரம்பரிய பிராமண, ஜெயின் மற்றும் தென்னிந்திய சுத்த சைவ விருந்துகள்.",
    icon: "Leaf",
    count: 3,
  },
  {
    id: "corporate",
    slug: "corporate-caterers",
    title: "Corporate Caterers",
    titleTa: "கார்ப்பரேட் கேட்டரர்ஸ்",
    description: "Professional business lunch, conference setups, and multi-cuisine banquets.",
    descriptionTa: "தொழில்நுட்ப மாநாடுகள் மற்றும் கார்ப்பரேட் நிகழ்வுகளுக்கான உணவு சேவைகள்.",
    icon: "Briefcase",
    count: 2,
  },
  {
    id: "party",
    slug: "party-caterers",
    title: "Party & Social Caterers",
    titleTa: "பார்ட்டி கேட்டரர்ஸ்",
    description: "Live counters, chaats, finger foods, and customized menus for birthdays.",
    descriptionTa: "பிறந்தநாள், இல்ல விழாக்கள் மற்றும் பார்ட்டிகளுக்கான லைவ் கவுண்டர் உணவு.",
    icon: "PartyPopper",
    count: 2,
  },
];

// Helper functions for static lookups
export function getAllCaterers(): Caterer[] {
  return CATERERS_DATA;
}

export function getCatererBySlug(slug: string): Caterer | undefined {
  return CATERERS_DATA.find((c) => c.slug === slug);
}

export function getRecentlyAddedCaterers(): Caterer[] {
  return CATERERS_DATA.filter((c) => c.isRecentlyAdded);
}

export function getFeaturedCaterers(): Caterer[] {
  return CATERERS_DATA.filter((c) => c.isFeatured);
}

export function getCaterersByCity(cityName: string): Caterer[] {
  return CATERERS_DATA.filter(
    (c) => c.city.toLowerCase() === cityName.toLowerCase()
  );
}

export function getCaterersByArea(areaKeyword: string): Caterer[] {
  return CATERERS_DATA.filter((c) =>
    c.area.toLowerCase().includes(areaKeyword.toLowerCase())
  );
}

