"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Caterer, getCaterersByCity } from "@/data/caterers";
import QuoteModal from "@/components/QuoteModal";
import CatererCard from "@/components/CatererCard";
import {
  MapPin,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Share2,
  Utensils,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  PhoneCall,
  Calendar,
  Layers,
  Building2,
  Clock,
  Info,
  MessageCircle,
} from "lucide-react";

export default function BusinessDetailClient({ caterer }: { caterer: Caterer }) {
  const { language, t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Related caterers in same city (excluding current)
  const relatedCaterers = getCaterersByCity(caterer.city)
    .filter((c) => c.id !== caterer.id)
    .slice(0, 2);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: `${caterer.name} - ${caterer.city} Caterers`,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500"
        >
          <Link href="/" className="hover:text-brand-700 transition">
            {t("navHome")}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link href="/caterers" className="hover:text-brand-700 transition">
            {t("navCaterers")}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link
            href={`/caterers?city=${encodeURIComponent(caterer.city)}`}
            className="hover:text-brand-700 transition font-medium text-gray-700"
          >
            {caterer.city} Caterers
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold truncate max-w-[200px]">
            {language === "ta" ? caterer.nameTa || caterer.name : caterer.name}
          </span>
        </nav>

        {/* Business Hero Header Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Utensils className="w-3.5 h-3.5 text-brand-600" />
                  <span>
                    {language === "ta"
                      ? caterer.categoryTa || caterer.category
                      : caterer.category}
                  </span>
                </span>

                {caterer.isRecentlyAdded && (
                  <span className="bg-accent-50 border border-accent-200 text-accent-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                    <span>{language === "ta" ? "சமீபத்தில் சேர்க்கப்பட்டது" : "Recently Added"}</span>
                  </span>
                )}

                {caterer.isVerified && (
                  <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t("verifiedDirectoryBadge")}</span>
                  </span>
                )}

                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded font-mono">
                  {caterer.source} Verified
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {language === "ta" ? caterer.nameTa || caterer.name : caterer.name}
              </h1>

              {/* Location & Area Tagging */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1.5 text-brand-800 font-medium">
                  <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>
                    {language === "ta"
                      ? `${caterer.areaTa || caterer.area}, ${caterer.cityTa || caterer.city}`
                      : `${caterer.area}, ${caterer.city}`}
                  </span>
                </div>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="text-gray-500">
                  Tamil Nadu, India
                </span>
              </div>

              {/* Full Address */}
              <p className="text-xs sm:text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 leading-relaxed">
                <strong className="text-gray-800 font-semibold">{t("address")}: </strong>
                {language === "ta"
                  ? caterer.addressTa || caterer.address
                  : caterer.address}
              </p>
            </div>

            {/* Quick Actions Panel */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={`https://wa.me/${caterer.whatsappRaw || "918870012756"}?text=${encodeURIComponent(
                  `Hi ${caterer.name}, I would like to inquire about catering services for my upcoming event.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp Response</span>
              </a>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 lg:flex-none bg-accent-600 hover:bg-accent-700 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition shadow-md shadow-accent-600/30 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t("requestQuote")}</span>
              </button>

              {caterer.phone && (
                <a
                  href={`tel:${caterer.phone.replace(/\s+/g, "")}`}
                  className="flex-1 lg:flex-none bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  <span>Call {caterer.phone}</span>
                </a>
              )}

              {caterer.googleMapsUrl && (
                <a
                  href={caterer.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:flex-none bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-accent-500" />
                  <span>{t("openInGoogleMaps")}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              )}

              <button
                onClick={handleShare}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs sm:text-sm px-3 py-3 rounded-xl transition flex items-center justify-center gap-1.5"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? "Copied!" : t("shareListing")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery & Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Gallery & Description */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-4 sm:p-6 shadow-sm space-y-4">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                <Image
                  src={caterer.images[selectedImageIndex] || caterer.images[0]}
                  alt={caterer.name}
                  width={1200}
                  height={700}
                  priority
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails */}
              {caterer.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {caterer.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition ${
                        selectedImageIndex === idx
                          ? "border-brand-600 ring-2 ring-brand-600/30"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${caterer.name} preview ${idx + 1}`}
                        width={200}
                        height={130}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About & Overview */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                {language === "ta" ? "வணிகக் கண்ணோட்டம்" : "About the Business"}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {language === "ta"
                  ? caterer.descriptionTa || caterer.description
                  : caterer.description}
              </p>

              {/* Specialties */}
              {caterer.specialties && caterer.specialties.length > 0 && (
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-brand-600" />
                    <span>{t("specialties")}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(language === "ta" && caterer.specialtiesTa
                      ? caterer.specialtiesTa
                      : caterer.specialties
                    ).map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cuisines & Event Types */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    {t("cuisines")}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {caterer.cuisines.map((c, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-brand-800 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    {t("eventTypes")}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {caterer.eventTypes.map((e, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Google Maps Section */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent-600" />
                  <span>
                    {language === "ta" ? "இருப்பிடம் மற்றும் வழித்தடம்" : "Location & Navigation"}
                  </span>
                </h2>

                {caterer.googleMapsUrl && (
                  <a
                    href={caterer.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-700 hover:text-accent-600 underline"
                  >
                    <span>{t("openInGoogleMaps")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-brand-100 text-brand-800 rounded-xl mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      {caterer.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {caterer.address}
                    </p>
                    <p className="text-xs text-brand-700 font-medium mt-1">
                      Area Landmark: {caterer.area} (Opposite KVB Bank / Key Highway Hub)
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={caterer.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm py-3 px-4 rounded-xl transition shadow"
                  >
                    <MapPin className="w-4 h-4 text-accent-400" />
                    <span>Open Detailed Route in Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Source Attribution & Direct Verified Profiles */}
          <div className="lg:col-span-4 space-y-6">
            {/* Verified Source Card */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {language === "ta" ? "சரிபார்க்கப்பட்ட தகவல்" : "Source Attribution"}
                  </h3>
                  <span className="text-xs text-gray-500">
                    Directory Source: {caterer.source}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {caterer.verifiedNote ||
                  "This business profile has been cataloged using authentic public directory records."}
              </p>

              {/* Justdial Direct Button if available */}
              {caterer.sourceUrl && (
                <div className="pt-2">
                  <a
                    href={caterer.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition shadow-md shadow-orange-600/20"
                  >
                    <span>{t("viewOnJustdial")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Official profile on Justdial portal
                  </p>
                </div>
              )}
            </div>

            {/* Verification & Compliance Notice */}
            <div className="bg-amber-50/70 border border-amber-200/70 rounded-3xl p-5 space-y-3 text-amber-900">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
                <Info className="w-4 h-4 text-amber-600" />
                <span>{t("verifiedNoticeHeading")}</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {t("verifiedNoticeBody")}
              </p>
            </div>

            {/* Quick Inquiry CTA card */}
            <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-emerald-950 text-white rounded-3xl p-6 shadow-md space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent-300 bg-black/20 px-2.5 py-0.5 rounded-full inline-block">
                Event Catering Quote
              </span>
              <h3 className="text-lg font-bold">
                Planning an Event with {caterer.name}?
              </h3>
              <p className="text-xs text-brand-200 leading-relaxed">
                Leave your celebration requirements, expected guest count, and date.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/${caterer.whatsappRaw || "918870012756"}?text=${encodeURIComponent(
                    `Hi ${caterer.name}, I would like to inquire about catering services for my upcoming event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp: +91 88700 12756</span>
                </a>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition shadow-lg shadow-accent-600/30 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t("requestQuote")}</span>
                </button>
              </div>
            </div>

            {/* Related Caterers in the same city */}
            {relatedCaterers.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-sm space-y-4">
                <h3 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">
                  Other {caterer.city} Caterers
                </h3>
                <div className="space-y-4">
                  {relatedCaterers.map((rc) => (
                    <Link
                      key={rc.id}
                      href={`/caterers/${rc.slug}`}
                      className="group block p-3 rounded-xl bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 transition"
                    >
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-brand-700 transition">
                        {rc.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {rc.area} • {rc.category}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quote Inquiry Modal */}
      <QuoteModal
        caterer={caterer}
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

