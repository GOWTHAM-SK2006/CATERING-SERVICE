"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { CityData } from "@/data/caterers";
import { MapPin, ArrowRight } from "lucide-react";

export default function CityCard({ city }: { city: CityData }) {
  const { language } = useLanguage();

  return (
    <Link
      href={`/caterers?city=${encodeURIComponent(city.name)}`}
      className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 block bg-gray-900"
    >
      <div className="h-52 w-full relative overflow-hidden">
        <Image
          src={city.image}
          alt={city.name}
          width={500}
          height={350}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
      </div>

      <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
        <div className="flex justify-end">
          <span className="bg-brand-600/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-brand-400/30">
            {city.catererCount} {language === "ta" ? "கேட்டரர்ஸ்" : "Caterers"}
          </span>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-accent-400 text-xs font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tamil Nadu</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-accent-300 transition flex items-center justify-between">
            <span>{language === "ta" ? city.nameTa : city.name}</span>
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-400" />
          </h3>

          <p className="text-xs text-gray-300 line-clamp-1 mt-1 font-light">
            {language === "ta" ? city.descriptionTa : city.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

