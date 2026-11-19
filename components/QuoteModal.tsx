"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Caterer } from "@/data/caterers";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Calendar,
  Users,
  MessageCircle,
} from "lucide-react";

interface QuoteModalProps {
  caterer: Caterer;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({
  caterer,
  isOpen,
  onClose,
}: QuoteModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [guestCount, setGuestCount] = useState("200");
  const [eventDate, setEventDate] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const targetWhatsApp = caterer.whatsappRaw || "918870012756";
  const displayPhone = caterer.phone || "+91 88700 12756";

  const getWhatsAppMessage = () => {
    return (
      `*New Catering Inquiry for ${caterer.name}*\n` +
      `• *Name:* ${name || "Customer"}\n` +
      `• *Phone:* ${phone || "Direct"}\n` +
      `• *Event:* ${eventType}\n` +
      `• *Guests:* ${guestCount}\n` +
      (eventDate ? `• *Date:* ${eventDate}\n` : "") +
      (notes ? `• *Notes:* ${notes}\n` : "") +
      `\n(Sent via Valam Food Directory)`
    );
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(
      getWhatsAppMessage()
    )}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase font-bold tracking-wider text-accent-300 bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
            {language === "ta" ? "விசாரணை படிவம்" : "Inquiry / Quote Request"}
          </span>
          <h3 className="text-xl font-bold">{caterer.name}</h3>
          <p className="text-xs text-brand-200 mt-1">
            {caterer.area}, {caterer.city} • WhatsApp: {displayPhone}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {language === "ta" ? "விசாரணை பதிவு செய்யப்பட்டது!" : "Inquiry Saved Successfully!"}
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                {language === "ta"
                  ? `நன்றி ${name}! உங்கள் நிகழ்வு விவரங்கள் பதிவு செய்யப்பட்டுள்ளன. உடனடி பதிலுக்கு வாட்ஸ்அப் வழியாகவும் தொடர்பு கொள்ளலாம்.`
                  : `Thank you, ${name}! Your event details have been noted. For an immediate quote and menu catalog, connect via WhatsApp.`}
              </p>

              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(
                    getWhatsAppMessage()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp (+91 88700 12756)</span>
                </a>

                <a
                  href={`tel:${displayPhone.replace(/\s+/g, "")}`}
                  className="w-full bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold py-2.5 px-4 rounded-xl transition border border-brand-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Call {displayPhone}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="mt-2 text-xs text-gray-500 hover:text-gray-800 underline"
                >
                  {language === "ta" ? "மூடுக" : "Close"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {language === "ta" ? "உங்கள் பெயர் *" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {language === "ta" ? "தொடர்பு எண் *" : "Your Contact Phone Number *"}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {language === "ta" ? "நிகழ்வு வகை" : "Occasion / Event"}
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full text-sm px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    <option value="Wedding">Wedding / Reception</option>
                    <option value="Engagement">Engagement / Betrothal</option>
                    <option value="Housewarming">Housewarming (Grahapravesam)</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Corporate">Corporate Meeting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {language === "ta" ? "விருந்தினர்கள் எண்ணிக்கை" : "Est. Guests"}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="e.g. 250"
                      className="w-full text-sm pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {language === "ta" ? "நிகழ்வு தேதி" : "Tentative Date"}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {language === "ta" ? "குறிப்புகள் / சிறப்பு விருப்பங்கள்" : "Special Dietary Notes"}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Traditional banana leaf meal, Kongu sweets"
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="pt-2 space-y-2">
                {/* Instant WhatsApp Send Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Send via WhatsApp (+91 88700 12756)</span>
                </button>

                <button
                  type="submit"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white font-semibold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === "ta" ? "வலைதளத்தில் பதிவு செய்க" : "Submit Form on Website"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
