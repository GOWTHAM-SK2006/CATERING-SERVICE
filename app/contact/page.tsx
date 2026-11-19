"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
          <span className="text-gray-900 font-semibold">{t("navContact")}</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
            <Mail className="w-3.5 h-3.5 text-accent-600" />
            <span>Support & Corrections</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {language === "ta" ? "தொடர்பு கொள்க" : "Get in Touch with Valam Directory"}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Have questions about directory listings, verification requests, or want to suggest updates for caterer profiles? Send us a message.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {language === "ta" ? "செய்தி அனுப்பப்பட்டது!" : "Message Sent Successfully!"}
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {name}. Your inquiry has been received. Our directory team will review your message promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                    setSubject("");
                  }}
                  className="bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anand@example.com"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Listing update / Inquiry about Valam Caterers"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide details about your inquiry or feedback..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm py-3.5 rounded-xl transition shadow-md shadow-brand-700/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Directory Info & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 space-y-4">
              <h3 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">
                Directory Hub Locations
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 block">Tirupur Regional Hub:</strong>
                    <span>P.N. Road, Chettipalayam, Tirupur - 641602, Tamil Nadu.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 block">Chennai Network:</strong>
                    <span>Valasaravakkam & Alapakkam, Chennai - 600087.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 space-y-3">
              <div className="flex items-center gap-2 text-brand-800 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Verification Policy</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                We strictly adhere to genuine public directory verification. If you are a business owner wishing to claim or update your listing, please submit a verification request via our Free Listing portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

