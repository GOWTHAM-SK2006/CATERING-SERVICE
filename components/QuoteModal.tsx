"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Caterer } from "@/data/caterers";
import { X, Send, CheckCircle2, Phone, Calendar, Users, Utensils } from "lucide-react";

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
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 text-white p-6 relative">
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
            {caterer.area}, {caterer.city}
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {language === "ta" ? "விசாரணை சமர்ப்பிக்கப்பட்டது!" : "Inquiry Saved Successfully!"}
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                {language === "ta"
                  ? `நன்றி ${name}! உங்கள் நிகழ்வு விவரங்கள் பதிவு செய்யப்பட்டுள்ளன. மேலும் நேரடி முன்பதிவுக்கு அதிகாரப்பூர்வ ஜஸ்ட்டயல் தளத்தையும் அணுகலாம்.`
                  : `Thank you, ${name}! Your event details have been noted. You can also view their verified Justdial profile for direct directory contact.`}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition"
              >
                {language === "ta" ? "மூடுக" : "Close"}
              </button>
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
                  placeholder="e.g. Pure vegetarian traditional banana leaf meal preferred"
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-accent-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === "ta" ? "விசாரணை அனுப்புக" : "Submit Quote Inquiry"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

