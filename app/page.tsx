"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SearchBar from "@/components/SearchBar";
import CatererCard from "@/components/CatererCard";
import CityCard from "@/components/CityCard";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";
import {
  CATERERS_DATA,
  CITIES_DATA,
  CATEGORIES_DATA,
  getRecentlyAddedCaterers,
  getFeaturedCaterers,
} from "@/data/caterers";
import {
  ShieldCheck,
  Sparkles,
  MapPin,
  ArrowRight,
  UtensilsCrossed,
  CheckCircle,
  Building,
  Heart,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const { language, t } = useLanguage();

  const featuredCaterers = getFeaturedCaterers();
  const recentlyAddedCaterers = getRecentlyAddedCaterers();

  // Highlighted Valam Caterers
  const valamCaterers = CATERERS_DATA.find(
    (c) => c.slug === "valam-caterers-tirupur"
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-gray-100">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-brand-200/30 via-accent-100/30 to-brand-100/20 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-ping" />
              <span>
                {language === "ta"
                  ? "தமிழ்நாட்டின் பிரீமியம் கேட்டரிங் வணிக வழிகாட்டி"
                  : "Authentic Catering Directory & Banquet Guide"}
              </span>
            </div>

            {/* Hero Heading - Exact prompt requirement */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              {language === "ta"
                ? "உங்கள் அருகில் சிறந்த கேட்டரிங் சேவைகளைக் கண்டறியுங்கள்"
                : "Find the Best Catering Services Near You"}
            </h1>

            {/* Subtitle - Exact prompt requirement */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
              {language === "ta"
                ? "திருமணங்கள், விழாக்கள் மற்றும் விசேஷங்களுக்கான நம்பகமான கேட்டரிங் சேவைகள்."
                : "Discover trusted catering services for weddings, parties and special occasions."}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10">
            <SearchBar variant="hero" />
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-6 border-t border-gray-200/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-black text-brand-800">
                100%
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {language === "ta" ? "சரிபார்க்கப்பட்ட முகவரிகள்" : "Verified Listings"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-black text-accent-600">
                Tirupur & Beyond
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {language === "ta" ? "முக்கிய நகரங்கள்" : "Tamil Nadu Coverage"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-black text-brand-800">
                Sadya & Banquets
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {language === "ta" ? "பாரம்பரிய விருந்துகள்" : "Authentic Menus"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-black text-accent-600">
                Free
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {language === "ta" ? "இலவச வணிக பதிவு" : "Caterer Submissions"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIAL SPOTLIGHT: VALAM CATERERS (TIRUPUR / P.N. ROAD) */}
      {valamCaterers && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Tirupur Caterer</span>
                  </span>
                  <span className="bg-brand-950/60 text-brand-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-brand-700/60">
                    Caterers in P.N. Road
                  </span>
                  <span className="bg-emerald-950/60 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-700/60 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Justdial Verified</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {language === "ta" ? valamCaterers.nameTa : valamCaterers.name}
                </h2>

                <div className="flex items-start gap-2 text-brand-100 text-sm">
                  <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>
                    {language === "ta" ? valamCaterers.addressTa : valamCaterers.address}
                  </span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {language === "ta" ? valamCaterers.descriptionTa : valamCaterers.description}
                </p>

                {/* Specialties preview */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {(language === "ta" && valamCaterers.specialtiesTa
                    ? valamCaterers.specialtiesTa
                    : valamCaterers.specialties
                  ).map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-white px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/caterers/${valamCaterers.slug}`}
                    className="bg-accent-600 hover:bg-accent-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-accent-600/30 flex items-center gap-2"
                  >
                    <span>{t("viewDetails")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={valamCaterers.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-3 rounded-xl transition border border-white/20 flex items-center gap-1.5"
                  >
                    <MapPin className="w-4 h-4 text-accent-400" />
                    <span>{t("openInGoogleMaps")}</span>
                  </a>

                  <a
                    href={valamCaterers.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-200 hover:text-white underline flex items-center gap-1 ml-auto"
                  >
                    <span>Source: Justdial Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3]">
                  <Image
                    src={valamCaterers.images[0]}
                    alt={valamCaterers.name}
                    width={700}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="text-[11px] text-accent-300 uppercase tracking-widest font-bold">
                        P.N. Road, Chettipalayam • Tirupur
                      </span>
                      <h4 className="text-white text-lg font-bold">
                        Wedding & Festive Feast Specialists
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. POPULAR CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-accent-600" />
              <span>{language === "ta" ? "தேர்ந்தெடுக்கப்பட்ட வகைகள்" : "Browse by Need"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {t("popularCategoriesTitle")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {t("popularCategoriesSubtitle")}
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-600 transition self-start sm:self-end"
          >
            <span>{language === "ta" ? "அனைத்து பிரிவுகள்" : "View All Categories"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 4. RECENTLY ADDED BUSINESSES (FEATURING VALAM CATERERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 bg-accent-50 px-2.5 py-1 rounded-md mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accent-600" />
              <span>{language === "ta" ? "புதிய சேவைகள்" : "Fresh on Directory"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {t("recentlyAddedTitle")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {t("recentlyAddedSubtitle")}
            </p>
          </div>

          <Link
            href="/caterers?recent=true"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-600 transition self-start sm:self-end"
          >
            <span>{language === "ta" ? "அனைத்தையும் காண்க" : "View All Recently Added"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentlyAddedCaterers.map((caterer) => (
            <CatererCard key={caterer.id} caterer={caterer} />
          ))}
        </div>
      </section>

      {/* 5. ADVERTISEMENT / PROMOTIONAL BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner variant="event-quote" />
      </section>

      {/* 6. FEATURED BUSINESSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              <span>{language === "ta" ? "சிறந்த தேர்வுகள்" : "Editor's Choice"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {t("featuredBusinessesTitle")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {t("featuredBusinessesSubtitle")}
            </p>
          </div>

          <Link
            href="/caterers"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-600 transition self-start sm:self-end"
          >
            <span>{language === "ta" ? "அனைத்து கேட்டரர்ஸ்" : "Explore All"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCaterers.map((caterer) => (
            <CatererCard key={caterer.id} caterer={caterer} />
          ))}
        </div>
      </section>

      {/* 7. BROWSE BY CITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md mb-2">
              <MapPin className="w-3.5 h-3.5 text-accent-600" />
              <span>{language === "ta" ? "நகரங்கள்" : "Regional Directory"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {t("browseByCityTitle")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {t("browseByCitySubtitle")}
            </p>
          </div>

          <Link
            href="/cities"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-600 transition self-start sm:self-end"
          >
            <span>{language === "ta" ? "அனைத்து நகரங்கள்" : "View All Cities"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CITIES_DATA.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* 8. FREE BUSINESS LISTING CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner variant="listing-cta" />
      </section>
    </div>
  );
}

