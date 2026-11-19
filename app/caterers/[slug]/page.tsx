import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATERERS_DATA, getCatererBySlug } from "@/data/caterers";
import BusinessDetailClient from "@/components/BusinessDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for static export
export function generateStaticParams() {
  return CATERERS_DATA.map((caterer) => ({
    slug: caterer.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caterer = getCatererBySlug(slug);

  if (!caterer) {
    return {
      title: "Business Not Found | Valam Food Directory",
      description: "The requested catering service could not be found.",
    };
  }

  const pageTitle = `${caterer.name} - ${caterer.city} Caterers (${caterer.area})`;
  const pageDescription = `${caterer.name} in ${caterer.area}, ${caterer.city}. ${caterer.description.slice(0, 150)}... Category: ${caterer.category}. Verified on Justdial.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      caterer.name,
      `${caterer.city} Caterers`,
      `Caterers in ${caterer.area}`,
      caterer.category,
      "Wedding Catering",
      "Event Food Services",
      caterer.source,
    ],
    openGraph: {
      title: `${pageTitle} | Valam Food Directory`,
      description: pageDescription,
      url: `https://valam-caterers-directory.vercel.app/caterers/${caterer.slug}`,
      siteName: "Valam Food Directory",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: caterer.images[0] || "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: `${caterer.name} - ${caterer.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [caterer.images[0]],
    },
  };
}

export default async function CatererDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caterer = getCatererBySlug(slug);

  if (!caterer) {
    notFound();
  }

  return <BusinessDetailClient caterer={caterer} />;
}

