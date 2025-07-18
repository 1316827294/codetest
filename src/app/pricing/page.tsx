import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Pricing Plans - Choose the Right Option",
  description: "Compare our pricing tiers and features to find the perfect solution for your needs. Transparent pricing with no hidden fees.",
  keywords: ["pricing", "plans", "subscription", "cost", "features", "tiers"],
  openGraph: {
    title: "Transparent Pricing Plans",
    description: "View our competitive pricing options and select the best plan for your requirements",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Pricing Options",
    description: "Explore our affordable pricing tiers and feature comparisons"
  }
};

export default async function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing",
    "description": "Detailed pricing information for our products and services",
    "url": "https://yourdomain.com/pricing",
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "Service Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "See website for latest pricing"
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "See website for latest pricing"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan",
          "price": "See website for latest pricing"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main aria-label="Pricing information">
        <PricingSection isPricingPage />
      </main>
    </>
  );
}