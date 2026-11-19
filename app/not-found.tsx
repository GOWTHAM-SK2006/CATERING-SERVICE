import React from "react";
import Link from "next/link";
import { UtensilsCrossed, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50/50">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 text-center shadow-sm space-y-5">
        <div className="w-16 h-16 bg-brand-50 text-brand-700 rounded-2xl flex items-center justify-center mx-auto">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
            404 Error
          </span>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            The catering listing or page you were looking for could not be found. It may have moved or been updated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/caterers"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition"
          >
            <Search className="w-4 h-4" />
            <span>Search Directory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

