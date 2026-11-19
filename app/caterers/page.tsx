"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import CatererCard from "@/components/CatererCard";
import {
  CATERERS_DATA,
  CITIES_DATA,
  CATEGORIES_DATA,
  Caterer,
} from "@/data/caterers";
import {
  Search,
  MapPin,
  Layers,
  Filter,
  X,
  LayoutGrid,
  List,
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

function CaterersListingContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();

  // Read initial query params safely
  const initialQ = searchParams?.get("q") || "";
  const initialCity = searchParams?.get("city") || "";
  const initialCategory = searchParams?.get("category") || "";
  const initialArea = searchParams?.get("area") || "";
  const initialRecent = searchParams?.get("recent") === "true";

  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [onlyRecent, setOnlyRecent] = useState(initialRecent);
  const [sortBy, setSortBy] = useState<"recent" | "name">("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract distinct areas across all caterers
  const allAreas = useMemo(() => {
    const set = new Set<string>();
    CATERERS_DATA.forEach((c) => {
      // split area like "P.N. Road, Chettipalayam"
      c.area.split(",").forEach((a) => set.add(a.trim()));
    });
    return Array.from(set).sort();
  }, []);

  // Filtered & sorted caterers
  const filteredCaterers = useMemo(() => {
    return CATERERS_DATA.filter((caterer) => {
      // 1. Search query (matches business name, specialties, cuisines, area)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName =
          caterer.name.toLowerCase().includes(q) ||
          (caterer.nameTa && caterer.nameTa.toLowerCase().includes(q));
        const matchesArea = caterer.area.toLowerCase().includes(q);
        const matchesAddress = caterer.address.toLowerCase().includes(q);
        const matchesSpecialty = caterer.specialties.some((s) =>
          s.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesArea && !matchesAddress && !matchesSpecialty) {
          return false;
        }
      }

      // 2. Filter by city
      if (selectedCity && selectedCity !== "") {
        if (caterer.city.toLowerCase() !== selectedCity.toLowerCase()) {
          return false;
        }
      }

      // 3. Filter by category
      if (selectedCategory && selectedCategory !== "") {
        const catLow = selectedCategory.toLowerCase();
        const matchesCategory =
          caterer.category.toLowerCase().includes(catLow) ||
          catLow.includes(caterer.category.toLowerCase());
        if (!matchesCategory) {
          return false;
        }
      }

      // 4. Filter by area
      if (selectedArea && selectedArea !== "") {
        if (
          !caterer.area.toLowerCase().includes(selectedArea.toLowerCase())
        ) {
          return false;
        }
      }

      // 5. Filter by recently added
      if (onlyRecent && !caterer.isRecentlyAdded) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      // Sort by recent / featured priority
      if (a.isRecentlyAdded && !b.isRecentlyAdded) return -1;
      if (!a.isRecentlyAdded && b.isRecentlyAdded) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [
    searchQuery,
    selectedCity,
    selectedCategory,
    selectedArea,
    onlyRecent,
    sortBy,
  ]);

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedCity("");
    setSelectedCategory("");
    setSelectedArea("");
    setOnlyRecent(false);
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCity ||
      selectedCategory ||
      selectedArea ||
      onlyRecent
  );

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md inline-flex mb-2">
            <span>{language === "ta" ? "வணிகப் பட்டியல்" : "Directory Index"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t("directoryTitle")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1 max-w-2xl">
            {t("directorySubtitle")}
          </p>
        </div>

        {/* Search & Top Action Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200/90 shadow-sm mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Real-time search bar */}
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchKeywordPlaceholder")}
              className="w-full bg-gray-50 hover:bg-gray-100/70 focus:bg-white pl-11 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 p-1 text-gray-400 hover:text-gray-600 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick controls: mobile filter trigger, sort, view toggles */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-600" />
              <span>{language === "ta" ? "வடிகட்டிகள்" : "Filters"}</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-accent-500" />
              )}
            </button>

            {/* Sort selector */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-gray-500 hidden sm:inline">
                {language === "ta" ? "வரிசைப்படுத்து:" : "Sort:"}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "name")}
                className="bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="recent">
                  {language === "ta" ? "சமீபத்தில் சேர்க்கப்பட்டது" : "Recently Added"}
                </option>
                <option value="name">
                  {language === "ta" ? "பெயர் (A - Z)" : "Name (A - Z)"}
                </option>
              </select>
            </div>

            {/* View mode buttons */}
            <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "grid"
                    ? "bg-white text-brand-700 shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "list"
                    ? "bg-white text-brand-700 shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Filter Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Filter Sidebar - Desktop & Mobile Drawer */}
          <aside
            className={`bg-white rounded-2xl border border-gray-200/90 p-5 shadow-sm space-y-6 ${
              mobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-base">
                <Filter className="w-4 h-4 text-brand-600" />
                <span>{language === "ta" ? "வடிகட்டிகள்" : "Filters"}</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-accent-600 hover:text-accent-700 font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t("clearFilters")}</span>
                </button>
              )}
            </div>

            {/* Filter by City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("filterByCity")}
              </label>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedCity("")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                    selectedCity === ""
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{t("allCities")}</span>
                  <span className="text-xs text-gray-400">
                    {CATERERS_DATA.length}
                  </span>
                </button>

                {CITIES_DATA.map((city) => (
                  <button
                    key={city.slug}
                    type="button"
                    onClick={() =>
                      setSelectedCity(
                        selectedCity === city.name ? "" : city.name
                      )
                    }
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      selectedCity.toLowerCase() === city.name.toLowerCase()
                        ? "bg-brand-50 text-brand-700 font-bold border border-brand-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-500" />
                      <span>{language === "ta" ? city.nameTa : city.name}</span>
                    </span>
                    <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                      {city.catererCount}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Category */}
            <div className="pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("filterByCategory")}
              </label>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                    selectedCategory === ""
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{t("allCategories")}</span>
                  <span className="text-xs text-gray-400">
                    {CATERERS_DATA.length}
                  </span>
                </button>

                {CATEGORIES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === cat.title ? "" : cat.title
                      )
                    }
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      selectedCategory.toLowerCase() === cat.title.toLowerCase()
                        ? "bg-brand-50 text-brand-700 font-bold border border-brand-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{language === "ta" ? cat.titleTa : cat.title}</span>
                    <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Area */}
            <div className="pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("filterByArea")}
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-xs sm:text-sm py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="">
                  {language === "ta" ? "அனைத்து பகுதிகளும்" : "All Areas"}
                </option>
                <option value="P.N. Road">P.N. Road (Tirupur)</option>
                <option value="Chettipalayam">Chettipalayam (Tirupur)</option>
                <option value="Valasaravakkam">Valasaravakkam (Chennai)</option>
                <option value="Gandhipuram">Gandhipuram (Coimbatore)</option>
                <option value="KK Nagar">KK Nagar (Madurai)</option>
                <option value="Fairlands">Fairlands (Salem)</option>
              </select>
            </div>

            {/* Recently Added Checkbox */}
            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyRecent}
                  onChange={(e) => setOnlyRecent(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                  <span>
                    {language === "ta"
                      ? "சமீபத்தில் சேர்க்கப்பட்டவை மட்டும்"
                      : "Recently Added Only"}
                  </span>
                </span>
              </label>
            </div>
          </aside>

          {/* Business Listing Results */}
          <main className="lg:col-span-3 space-y-5">
            {/* Active filter badges bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  {filteredCaterers.length} {t("showingResults")}
                </span>
                {selectedCity && (
                  <span className="bg-brand-50 text-brand-800 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-brand-200">
                    <span>{selectedCity}</span>
                    <button
                      onClick={() => setSelectedCity("")}
                      className="hover:text-brand-950"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="bg-brand-50 text-brand-800 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-brand-200">
                    <span>{selectedCategory}</span>
                    <button
                      onClick={() => setSelectedCategory("")}
                      className="hover:text-brand-950"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedArea && (
                  <span className="bg-accent-50 text-accent-800 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-accent-200">
                    <span>Area: {selectedArea}</span>
                    <button
                      onClick={() => setSelectedArea("")}
                      className="hover:text-accent-950"
                    >
                      ×
                    </button>
                  </span>
                )}
                {onlyRecent && (
                  <span className="bg-accent-50 text-accent-800 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-accent-200">
                    <span>Recently Added</span>
                    <button
                      onClick={() => setOnlyRecent(false)}
                      className="hover:text-accent-950"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-brand-700 hover:underline font-semibold"
                >
                  {t("resetSearch")}
                </button>
              )}
            </div>

            {/* Listings Grid or List */}
            {filteredCaterers.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {filteredCaterers.map((caterer) => (
                  <CatererCard
                    key={caterer.id}
                    caterer={caterer}
                    variant={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("noResultsFound")}
                </h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  {language === "ta"
                    ? "தயவுசெய்து உங்கள் வடிகட்டல்களை மாற்றி அல்லது பிற நகரங்களை தெரிவு செய்து பார்க்கவும்."
                    : "Try broadening your search keyword, changing the city filter, or clearing your current filters."}
                </p>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t("clearFilters")}</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function CaterersListingPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
          Loading caterers directory...
        </div>
      }
    >
      <CaterersListingContent />
    </Suspense>
  );
}

