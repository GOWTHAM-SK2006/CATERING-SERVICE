"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Caterer } from "@/data/caterers";
import {
  MapPin,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Utensils,
  CheckCircle2,
} from "lucide-react";

interface CatererCardProps {
  caterer: Caterer;
  variant?: "grid" | "list";
}

export default function CatererCard({
  caterer,
  variant = "grid",
}: CatererCardProps) {
  const { language, t } = useLanguage();

  const isList = variant === "list";

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-200/80 hover:border-brand-500/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden ${
        isList ? "md:flex-row" : ""
      }`}
    >
      {/* Image container */}
      <div
        className={`relative overflow-hidden bg-gray-100 ${
          isList ? "md:w-72 md:shrink-0 h-60 md:h-auto" : "h-56 w-full"
        }`}
      >
        <Image
          src={caterer.images[0] || "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"}
          alt={caterer.name}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-brand-700/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Utensils className="w-3 h-3 text-brand-200" />
            <span>{language === "ta" ? caterer.categoryTa || caterer.category : caterer.category}</span>
          </span>

          {caterer.isRecentlyAdded && (
            <span className="bg-accent-600/95 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-accent-200" />
              <span>{language === "ta" ? "புதியது" : "Recently Added"}</span>
            </span>
          )}
        </div>

        {/* Verified Badge */}
        {caterer.isVerified && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-emerald-800 text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "ta" ? "சரிபார்க்கப்பட்டது" : "Verified"}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* City / Area metadata */}
          <div className="flex items-center text-xs text-brand-700 font-medium mb-1.5 gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
            <span>{language === "ta" ? caterer.cityTa || caterer.city : caterer.city}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600 font-normal truncate">
              {language === "ta" ? caterer.areaTa || caterer.area : caterer.area}
            </span>
          </div>

          {/* Business Title */}
          <Link href={`/caterers/${caterer.slug}`}>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-brand-700 transition line-clamp-1">
              {language === "ta" ? caterer.nameTa || caterer.name : caterer.name}
            </h3>
          </Link>

          {/* Address */}
          <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {language === "ta" ? caterer.addressTa || caterer.address : caterer.address}
          </p>

          {/* Specialties preview pills */}
          {caterer.specialties && caterer.specialties.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(language === "ta" && caterer.specialtiesTa
                ? caterer.specialtiesTa
                : caterer.specialties
              )
                .slice(0, 2)
                .map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] text-gray-600 bg-gray-50 border border-gray-200/80 px-2 py-0.5 rounded-md"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-brand-600" />
                    <span className="truncate max-w-[200px]">{spec}</span>
                  </span>
                ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-medium text-gray-700">{t("sourceAttribution")}</span>
            <span className="inline-flex items-center gap-0.5 bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-semibold text-[11px]">
              {caterer.source}
            </span>
          </div>

          <Link
            href={`/caterers/${caterer.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-700 group-hover:text-accent-600 hover:underline transition"
          >
            <span>{t("viewDetails")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

