import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Pricing Plans - Choose What Fits Your Business",
  description: "Compare our affordable pricing tiers and features. Find the perfect plan for your business needs and budget.",
  openGraph: {
    title: "Transparent Pricing Plans - Find Your Perfect Fit",
    description: "Explore our feature-packed pricing tiers designed to scale with your business growth.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple, Transparent Pricing for Every Business Size",
    description: "No hidden fees. See exactly what you get with each of our affordable plans.",
  },
};

export default async function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing",
    "description": "Compare pricing plans and features for our services",
    "url": "/pricing",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing"
      }]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PricingSection isPricingPage />
    </>
  );
}