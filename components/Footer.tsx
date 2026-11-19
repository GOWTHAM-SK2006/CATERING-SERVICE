"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  UtensilsCrossed,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Heart,
  ChevronRight,
  Info,
  MessageCircle,
} from "lucide-react";
import { CITIES_DATA, CATEGORIES_DATA } from "@/data/caterers";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 border-t border-gray-800">
      {/* Top Value Banner */}
      <div className="border-b border-gray-800/80 bg-brand-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-900/60 text-brand-400 rounded-xl border border-brand-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">
                  {language === "ta" ? "சரிபார்க்கப்பட்ட வணிகங்கள்" : "Verified Catering Profiles"}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {language === "ta"
                    ? "ஜஸ்ட்டயல் மற்றும் பொது ஆதாரங்கள் மூலம் இருப்பிடம் சரிபார்க்கப்பட்டது."
                    : "Authentic caterer listings with verified locations and real regional sources."}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent-950/60 text-accent-400 rounded-xl border border-accent-900">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">
                  {language === "ta" ? "பாரம்பரிய தென்னிந்திய சுவை" : "Authentic Regional Cuisines"}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {language === "ta"
                    ? "கொங்கு, பிராமண தலைவாழை இலை விருந்து முதல் கார்ப்பரேட் பஃபே வரை."
                    : "Kongunadu feasts, traditional Brahmin sadya, Jain menus & corporate spreads."}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-800 text-brand-300 rounded-xl border border-gray-700">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">
                  {language === "ta" ? "நேரடி தொடர்பு & மேப் வழிகாட்டல்" : "Direct Maps & Sourcing"}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {language === "ta"
                    ? "கூகுள் மேப்ஸ் மூலம் எளிதாகக் கண்டறியும் துல்லியமான முகவரிகள்."
                    : "One-click Google Maps navigation and direct official source links."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-600 flex items-center justify-center text-white shadow-md">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">
                  VALAM
                </span>
                <span className="text-xl font-bold text-accent-400">
                  FOOD
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t("footerAbout")}
            </p>

            {/* Special Valam Caterers Callout */}
            <div className="p-3.5 bg-gray-800/80 rounded-xl border border-gray-700/80 max-w-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-400">
                  Featured Tirupur Caterer
                </span>
                <span className="text-[10px] bg-accent-500/20 text-accent-300 px-2 py-0.5 rounded font-medium">
                  Verified
                </span>
              </div>
              <Link
                href="/caterers/valam-caterers-tirupur"
                className="mt-1 block text-sm font-semibold text-white hover:text-accent-400 transition"
              >
                Valam Caterers &rarr; Chettipalayam, P.N. Road
              </Link>
              <p className="text-xs text-gray-400 mt-1">
                Opposite KVB Bank, P.N. Road, Tirupur, Tamil Nadu.
              </p>
              <div className="mt-2.5 pt-2 border-t border-gray-700/60 flex items-center justify-between text-xs">
                <span className="text-gray-400">WhatsApp / Call:</span>
                <a
                  href="https://wa.me/918870012756?text=Hi%20Valam%20Caterers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>+91 88700 12756</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t("quickLinks")}
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t("navHome")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/caterers"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t("navCaterers")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/add-listing"
                  className="text-accent-400 hover:text-accent-300 font-medium transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent-500" />
                  <span>{t("navListBusiness")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t("navAbout")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t("navContact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t("popularCities")}
            </h5>
            <ul className="space-y-2.5 text-sm">
              {CITIES_DATA.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/caterers?city=${encodeURIComponent(city.name)}`}
                    className="hover:text-white transition flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-500 group-hover:text-accent-400 transition" />
                      <span>{language === "ta" ? city.nameTa : city.name}</span>
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">
                      {city.catererCount}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {language === "ta" ? "சேவை வகைகள்" : "Catering Services"}
            </h5>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/caterers?category=${encodeURIComponent(cat.title)}`}
                    className="hover:text-white transition flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    <span>{language === "ta" ? cat.titleTa : cat.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="https://www.justdial.com/Tirupur/Valam-Caterers-Chettipalayamopposite-Kvb-Bank-Pn-Road/9999PX421-X421-240506201534-I1C9_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-accent-400 flex items-center gap-1 transition"
                >
                  <span>Justdial Source Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-gray-800 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Valam Caterers Directory. {t("copyright")}
          </p>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400">
              Inspired by Good Food Catering & South Indian Hospitality
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Next.js Static Export</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

