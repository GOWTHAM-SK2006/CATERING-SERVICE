"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, ChefHat } from "lucide-react";

interface AdBannerProps {
  variant?: "listing-cta" | "event-quote" | "sponsor";
}

export default function AdBanner({ variant = "listing-cta" }: AdBannerProps) {
  const { language, t } = useLanguage();

  if (variant === "event-quote") {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-900 text-white p-8 sm:p-10 shadow-xl border border-brand-700/50">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-400 bg-accent-950/60 px-3 py-1 rounded-full border border-accent-800">
              <ChefHat className="w-3.5 h-3.5" />
              <span>
                {language === "ta" ? "விழா உணவு வழிகாட்டி" : "Event Planning Made Simple"}
              </span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === "ta"
                ? "உங்கள் திருமணத்திற்கு சரியான கேட்டரரைத் தேர்ந்தெடுக்க வேண்டுமா?"
                : "Looking for Tailored Feast Menus for Your Special Occasion?"}
            </h3>
            <p className="text-brand-100 text-sm sm:text-base leading-relaxed">
              {language === "ta"
                ? "திருப்பூர், கோவை மற்றும் சென்னை உள்ளிட்ட நகரங்களில் சிறந்த சைவ & அசைவ கேட்டரிங் சேவைகளை ஒப்பிட்டுப் பாருங்கள்."
                : "Explore verified catering listings, compare local specialties, and locate nearby food caterers in Tirupur, Coimbatore, and Chennai."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/caterers"
              className="bg-accent-600 hover:bg-accent-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-accent-600/30 hover:shadow-accent-600/50 transition flex items-center gap-2"
            >
              <span>{language === "ta" ? "அனைத்து கேட்டரர்களைக் காண்க" : "Browse All Caterers"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default Listing CTA Banner
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-accent-600 text-white p-8 sm:p-12 shadow-2xl">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/20 text-orange-100 px-3 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>{language === "ta" ? "100% இலவச பதிவு" : "Free Business Promotion"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("bannerTitle")}
          </h2>
          <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
            {t("bannerSubtitle")}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-orange-50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{language === "ta" ? "சரிபார்க்கப்பட்ட பேட்ஜ்" : "Verified Directory Badge"}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-yellow-200" />
              <span>{language === "ta" ? "அதிக வாடிக்கையாளர் பார்வை" : "High Local Visibility"}</span>
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/add-listing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-accent-700 hover:bg-orange-50 font-bold px-7 py-4 rounded-xl shadow-lg transition active:scale-[0.98] text-base"
          >
            <span>{t("bannerBtn")}</span>
            <ArrowRight className="w-5 h-5 text-accent-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}

