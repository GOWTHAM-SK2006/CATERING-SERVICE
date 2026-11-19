"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "918870012756";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Valam Caterers, I would like to inquire about catering services for my upcoming event."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-gray-200 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <p className="font-bold text-gray-900">
              {language === "ta" ? "வாட்ஸ்அப் உதவி & முன்பதிவு" : "Quick Catering Inquiry"}
            </p>
            <p className="text-[11px] text-gray-500">+91 88700 12756</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +91 88700 12756"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-emerald-500/20"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
