import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Pricing Plans - Transparent Pricing for All Business Needs",
  description: "Compare our competitive pricing tiers and find the perfect plan for your business. All features included with no hidden fees.",
  keywords: ["pricing", "plans", "subscription", "cost", "tiers"],
  openGraph: {
    title: "Transparent Pricing Plans | Choose Your Perfect Tier",
    description: "See all features and pricing options for our services. Find the best fit for your business needs.",
    images: [
      {
        url: '/og-pricing-image.jpg',
        width: 1200,
        height: 630,
        alt: "Pricing Plans Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple, Transparent Pricing | Find Your Plan",
    description: "Compare all features and pricing tiers for our services. No hidden fees, no surprises.",
    images: ['/twitter-pricing-image.jpg'],
  },
};

export default async function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing",
    "description": "Detailed pricing information for all service tiers",
    "url": "https://www.yourdomain.com/pricing",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.yourdomain.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing"
      }]
    }
  };

  return (
    <main role="main" aria-label="Pricing information">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingSection isPricingPage />
    </main>
  );
}