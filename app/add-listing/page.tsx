"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  Building,
  MapPin,
  Utensils,
  ChevronRight,
  Eye,
  Sparkles,
} from "lucide-react";

export default function AddListingPage() {
  const { language, t } = useLanguage();

  const [name, setName] = useState("");
  const [city, setCity] = useState("Tirupur");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("Caterers");
  const [specialties, setSpecialties] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-700 transition">
            {t("navHome")}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold">{t("navListBusiness")}</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 bg-accent-50 px-3 py-1 rounded-full">
            <PlusCircle className="w-3.5 h-3.5 text-accent-600" />
            <span>{language === "ta" ? "100% இலவச பதிவு" : "100% Free Listing Submission"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t("bannerTitle")}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {language === "ta"
              ? "உங்கள் கேட்டரிங் சேவையை எங்கள் பிரீமியம் வணிக வழிகாட்டியில் இலவசமாக இணைக்கவும்."
              : "Grow your regional catering business. Submit your verified business profile to be featured among top Tamil Nadu caterers."}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-5 max-w-lg mx-auto">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {language === "ta"
                  ? "வணிகப் பதிவு பெறப்பட்டது!"
                  : "Listing Request Received!"}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === "ta"
                  ? `நன்றி! "${name}" வணிகத்தின் விவரங்கள் பெறப்பட்டுள்ளன. எங்கள் குழு இருப்பிடம் மற்றும் ஆதாரங்களை சரிபார்த்த பிறகு இணையதளத்தில் நேரலையாக சேர்க்கப்படும்.`
                  : `Thank you! The listing for "${name}" in ${city} has been queued. Our verification team checks local address and directory sources (such as Justdial) before publishing.`}
              </p>

              {/* Preview Box */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-left space-y-1">
                <span className="text-[11px] font-bold uppercase text-brand-700 tracking-wider">
                  Submitted Profile Summary
                </span>
                <p className="text-sm font-bold text-gray-900">{name}</p>
                <p className="text-xs text-gray-600">{area}, {city}</p>
                <p className="text-xs text-gray-500">{address}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/caterers"
                  className="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition"
                >
                  Browse Directory
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setArea("");
                    setAddress("");
                  }}
                  className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl transition"
                >
                  Submit Another Listing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Valam Caterers"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Primary Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    <option value="Caterers">Caterers (Full-Service)</option>
                    <option value="Wedding Caterers">Wedding Caterers</option>
                    <option value="Pure Veg Caterers">Pure Veg Caterers</option>
                    <option value="Corporate Caterers">Corporate Caterers</option>
                    <option value="Party Caterers">Party Caterers</option>
                  </select>
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    <option value="Tirupur">Tirupur</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Salem">Salem</option>
                    <option value="Other">Other City (Tamil Nadu)</option>
                  </select>
                </div>

                {/* Area */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Locality / Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. P.N. Road, Chettipalayam"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Full Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Full Business Address & Landmark *
                </label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Chettipalayam, Opposite KVB Bank, P.N. Road, Tirupur, Tamil Nadu, India."
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Specialties */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Key Specialties / Menu Highlights
                </label>
                <input
                  type="text"
                  value={specialties}
                  onChange={(e) => setSpecialties(e.target.value)}
                  placeholder="e.g. Traditional Banana Leaf Wedding Feasts, Kongu Cuisine, Morning Tiffin"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Verification source URL */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Directory or Justdial Link (For Verification)
                </label>
                <input
                  type="url"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="https://www.justdial.com/Tirupur/..."
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <p className="text-xs text-gray-500">
                  Helps us verify your location and legitimate presence in the directory.
                </p>
              </div>

              {/* Verification Notice */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex items-start gap-3 text-xs text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Directory Quality Standards:</strong> We do not publish fake reviews or unverified phone numbers. All listings are verified against genuine local references such as Justdial and Google Maps to ensure authentic visitor experience.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold text-base py-4 rounded-xl transition shadow-lg shadow-accent-600/30 flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Submit Free Catering Listing</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

