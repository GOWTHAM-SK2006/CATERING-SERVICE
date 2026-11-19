"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Search, MapPin, Layers, ArrowRight } from "lucide-react";
import { CITIES_DATA, CATEGORIES_DATA } from "@/data/caterers";

interface SearchBarProps {
  initialQuery?: string;
  initialCity?: string;
  initialCategory?: string;
  onSearchSubmit?: (query: string, city: string, category: string) => void;
  variant?: "hero" | "compact";
}

export default function SearchBar({
  initialQuery = "",
  initialCity = "",
  initialCategory = "",
  onSearchSubmit,
  variant = "hero",
}: SearchBarProps) {
  const { language, t } = useLanguage();
  const router = useRouter();

  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState(initialCity);
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query, city, category);
    } else {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (city) params.set("city", city);
      if (category) params.set("category", category);

      router.push(`/caterers?${params.toString()}`);
    }
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-gray-200/90 shadow-xl transition-all ${
        isHero
          ? "p-2 sm:p-3 max-w-4xl mx-auto ring-4 ring-brand-700/5 hover:ring-brand-700/10"
          : "p-2 w-full"
      }`}
    >
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {/* Keyword Search */}
        <div className="flex-1 flex items-center px-3.5 py-2.5 bg-gray-50/70 hover:bg-gray-50 rounded-xl border border-gray-200/60 focus-within:border-brand-500 focus-within:bg-white transition">
          <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchKeywordPlaceholder")}
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* City Filter */}
        <div className="md:w-52 flex items-center px-3.5 py-2.5 bg-gray-50/70 hover:bg-gray-50 rounded-xl border border-gray-200/60 focus-within:border-brand-500 focus-within:bg-white transition">
          <MapPin className="w-4 h-4 text-accent-500 shrink-0 mr-2" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none cursor-pointer"
            aria-label="Filter by City"
          >
            <option value="">{t("allCities")}</option>
            {CITIES_DATA.map((c) => (
              <option key={c.slug} value={c.name}>
                {language === "ta" ? c.nameTa : c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="md:w-56 flex items-center px-3.5 py-2.5 bg-gray-50/70 hover:bg-gray-50 rounded-xl border border-gray-200/60 focus-within:border-brand-500 focus-within:bg-white transition">
          <Layers className="w-4 h-4 text-brand-600 shrink-0 mr-2" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none cursor-pointer"
            aria-label="Filter by Category"
          >
            <option value="">{t("allCategories")}</option>
            {CATEGORIES_DATA.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {language === "ta" ? cat.titleTa : cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-brand-700 hover:bg-brand-800 active:scale-[0.98] text-white font-semibold text-sm px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-brand-700/20"
        >
          <span>{t("searchBtn")}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Search Tag Suggestions below search bar */}
      {isHero && (
        <div className="mt-3 px-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="font-semibold text-gray-600">
            {language === "ta" ? "பிரபல தேடல்கள்:" : "Popular Searches:"}
          </span>
          <button
            type="button"
            onClick={() => {
              setQuery("Valam");
              setCity("Tirupur");
            }}
            className="text-brand-700 bg-brand-50 hover:bg-brand-100 px-2 py-0.5 rounded transition"
          >
            Valam Caterers (Tirupur)
          </button>
          <button
            type="button"
            onClick={() => {
              setCity("Tirupur");
              setQuery("P.N. Road");
            }}
            className="text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition"
          >
            P.N. Road Caterers
          </button>
          <button
            type="button"
            onClick={() => {
              setCategory("Wedding Caterers");
            }}
            className="text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition"
          >
            Wedding Caterers
          </button>
          <button
            type="button"
            onClick={() => {
              setCategory("Pure Veg Caterers");
            }}
            className="text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition"
          >
            Pure Vegetarian
          </button>
        </div>
      )}
    </form>
  );
}

