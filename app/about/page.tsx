"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  UtensilsCrossed,
  ShieldCheck,
  Award,
  Users,
  ChevronRight,
  MapPin,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-700 transition">
            {t("navHome")}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold">{t("navAbout")}</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
            <UtensilsCrossed className="w-3.5 h-3.5 text-accent-600" />
            <span>Regional Catering Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {language === "ta"
              ? "வளம் உணவு வழிகாட்டி பற்றி"
              : "Connecting Celebrations with Authentic Caterers"}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Inspired by authentic catering traditions and services like Good Food Catering,
            Valam Food Directory is a dedicated regional portal spotlighting trusted food and banquet
            caterers across Tamil Nadu.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Verified Public Records
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We cross-verify addresses and local existence against established records like Justdial and Google Maps. No fictitious reviews or synthetic phone numbers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Regional Culinary Focus
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              From Kongu region specialties in Tirupur (featuring Valam Caterers) to pure vegetarian Brahmin wedding feasts in Chennai, we highlight authentic food heritage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Fast, Static & Privacy-First
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Built as a pure Next.js static site deployed on Vercel with lightning-fast load times, zero trackers, and no server-side bottlenecks.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Spotlight on Valam Caterers & Tirupur Hospitality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Tirupur’s culinary identity is shaped by the rich Kongu region cuisine—known for its subtle spicing, freshness, and generous hospitality. At the heart of P.N. Road, Chettipalayam stands <strong>Valam Caterers</strong>, conveniently situated opposite KVB Bank.
              </p>
              <p>
                Whether it is a sacred muhurtham breakfast with steaming hot idlis and crisp vadas, or a grand festive wedding lunch served on traditional banana leaves, Valam Caterers represents the dedication to flavor and hygiene that defines Tamil Nadu catering.
              </p>
              <div className="pt-2">
                <Link
                  href="/caterers/valam-caterers-tirupur"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700 underline"
                >
                  <span>View Official Valam Caterers Profile</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
                alt="Traditional South Indian Banquet Catering"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

