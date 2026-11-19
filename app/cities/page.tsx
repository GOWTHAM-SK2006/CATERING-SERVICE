"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CityCard from "@/components/CityCard";
import { CITIES_DATA } from "@/data/caterers";
import { MapPin, ChevronRight, Building } from "lucide-react";

export default function CitiesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-700 transition">
            {t("navHome")}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold">{t("navCities")}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-accent-600" />
            <span>Tamil Nadu Regional Hubs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {language === "ta"
              ? "நகர வாரியாக கேட்டரிங் சேவைகள்"
              : "Explore Caterers by City"}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {language === "ta"
              ? "திருப்பூர், கோவை, சென்னை, மதுரை மற்றும் சேலம் போன்ற முக்கிய நகரங்களின் நம்பகமான கேட்டரிங் சேவைகளை உடனுக்குடன் கண்டறியுங்கள்."
              : "Discover top-rated catering services tailored to your city, from Kongu banquet feasts in Tirupur to traditional Brahmin sadya in Chennai."}
          </p>
        </div>

        {/* Grid of Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES_DATA.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>

        {/* City Highlight: Tirupur */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-2.5 py-0.5 rounded">
                Special City Focus
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Tirupur Caterers & P.N. Road Localities
              </h2>
              <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
                Tirupur is a bustling industrial hub with a rich tradition of Kongunadu feasts.
                Discover verified caterers like <strong>Valam Caterers</strong> in Chettipalayam,
                Opposite KVB Bank, P.N. Road, serving grand muhurtham meals and celebration banquets.
              </p>
            </div>

            <Link
              href="/caterers?city=Tirupur"
              className="bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>Explore Tirupur Caterers</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

