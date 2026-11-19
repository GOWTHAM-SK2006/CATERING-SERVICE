"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CategoryCard from "@/components/CategoryCard";
import { CATEGORIES_DATA } from "@/data/caterers";
import { UtensilsCrossed, ChevronRight, Sparkles } from "lucide-react";

export default function CategoriesPage() {
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
          <span className="text-gray-900 font-semibold">{t("navCategories")}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
            <UtensilsCrossed className="w-3.5 h-3.5 text-accent-600" />
            <span>Service Classifications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {language === "ta"
              ? "கேட்டரிங் சேவைப் பிரிவுகள்"
              : "Catering Categories & Services"}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {language === "ta"
              ? "உங்கள் விசேஷத்தின் தேவைக்கேற்ப பொருத்தமான சமையல் மற்றும் விருந்து உணவு வகைகளைத் தேர்ந்தெடுங்கள்."
              : "Find specialized caterers suited for your specific event type, from traditional plantain leaf wedding feasts to contemporary corporate buffet banquets."}
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

