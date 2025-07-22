import { PricingSection } from '@/features/pricing/components/pricing-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Explore our competitive pricing options and find the perfect plan for your needs. Compare features and choose the best solution for your business.",
  openGraph: {
    title: "Pricing Plans",
    description: "Discover our flexible pricing options designed to scale with your business needs.",
    url: "/pricing",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-pricing-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pricing Plans Overview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans",
    description: "Find the perfect plan with our transparent pricing structure.",
    images: ["/twitter-pricing-image.jpg"],
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default async function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Service Plans",
    "description": "Our service pricing plans",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "99",
      "priceCurrency": "USD",
      "offerCount": "3"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingSection isPricingPage />
    </main>
  );
}