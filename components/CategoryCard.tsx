"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CategoryData } from "@/data/caterers";
import {
  Utensils,
  HeartHandshake,
  Leaf,
  Briefcase,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  PartyPopper: <PartyPopper className="w-6 h-6" />,
};

export default function CategoryCard({ category }: { category: CategoryData }) {
  const { language } = useLanguage();
  const icon = ICON_MAP[category.icon] || <Utensils className="w-6 h-6" />;

  return (
    <Link
      href={`/caterers?category=${encodeURIComponent(category.title)}`}
      className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-brand-500/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 text-brand-700 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-700 transition">
          {language === "ta" ? category.titleTa : category.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
          {language === "ta" ? category.descriptionTa : category.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="font-semibold text-gray-400 group-hover:text-brand-700 transition">
          {category.count} {language === "ta" ? "பட்டியல்கள்" : "Listings"}
        </span>

        <span className="text-brand-700 group-hover:text-accent-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>{language === "ta" ? "காண்க" : "Explore"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

