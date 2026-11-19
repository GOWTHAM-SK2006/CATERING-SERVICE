"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  UtensilsCrossed,
  Menu,
  X,
  Languages,
  PlusCircle,
  MapPin,
  Layers,
  PhoneCall,
  Search,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("navHome") },
    { href: "/caterers", label: t("navCaterers") },
    { href: "/cities", label: t("navCities") },
    { href: "/categories", label: t("navCategories") },
    { href: "/about", label: t("navAbout") },
    { href: "/contact", label: t("navContact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top micro banner */}
      <div className="bg-brand-900 text-white text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-brand-200">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-400 mr-2 animate-pulse" />
              {language === "ta"
                ? "தமிழ்நாட்டின் நம்பகமான கேட்டரிங் வணிக வழிகாட்டி"
                : "Tamil Nadu's Trusted Catering & Event Food Directory"}
            </span>
            <span className="text-brand-300">|</span>
            <span className="text-brand-100">
              {language === "ta"
                ? "திருப்பூர், கோவை, சென்னை, மதுரை கேட்டரர்ஸ்"
                : "Featuring Valam Caterers, Tirupur & Regional Specialists"}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/918870012756?text=Hi%20Valam%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 88700 12756</span>
            </a>
            <span className="text-brand-700 hidden md:inline">|</span>
            <Link
              href="/caterers?city=Tirupur"
              className="text-brand-200 hover:text-white transition hidden md:flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-accent-400" />
              <span>Tirupur</span>
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs bg-brand-800 hover:bg-brand-700 text-brand-100 px-2.5 py-0.5 rounded-full transition border border-brand-700"
              title="Change Language / மொழியை மாற்றுக"
            >
              <Languages className="w-3 h-3 text-accent-300" />
              <span className="font-medium">
                {language === "en" ? "தமிழ் (Tamil)" : "English"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-700/20 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-brand-700 transition">
                  VALAM
                </span>
                <span className="text-xl font-bold text-accent-600">
                  FOOD
                </span>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                {language === "ta" ? "கேட்டரிங் டைரக்டரி" : "Caterers Directory"}
              </p>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "text-brand-700 bg-brand-50 font-semibold"
                      : "text-gray-600 hover:text-brand-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle for mobile/tablet */}
            <button
              onClick={toggleLanguage}
              className="lg:hidden flex items-center gap-1.5 text-xs text-gray-700 border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4 text-brand-600" />
              <span>{language === "en" ? "தமிழ்" : "EN"}</span>
            </button>

            {/* Free Business Listing CTA */}
            <Link
              href="/add-listing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-accent-600/30 hover:shadow-md transition-all active:scale-[0.98]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t("navListBusiness")}</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs text-gray-700 border border-gray-200 px-2 py-1.5 rounded-md hover:bg-gray-50"
            >
              <Languages className="w-3.5 h-3.5 text-brand-600" />
              <span className="font-semibold">
                {language === "en" ? "தமிழ்" : "EN"}
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                    active
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href="https://wa.me/918870012756?text=Hi%20Valam%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg shadow transition"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>WhatsApp: +91 88700 12756</span>
            </a>

            <Link
              href="/add-listing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-accent-600 text-white font-semibold py-3 px-4 rounded-lg shadow transition"
            >
              <PlusCircle className="w-5 h-5" />
              <span>{t("navListBusiness")}</span>
            </Link>

            <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-500 bg-gray-50 rounded-lg">
              <span>{language === "ta" ? "மொழி மாற்றி" : "Language"}</span>
              <button
                onClick={toggleLanguage}
                className="font-bold text-brand-700 hover:underline flex items-center gap-1"
              >
                <Languages className="w-3.5 h-3.5" />
                {language === "en" ? "தமிழ் (Tamil)" : "English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

