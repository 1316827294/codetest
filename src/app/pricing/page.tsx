import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Pricing Plans - Compare Options & Features",
  description: "Transparent pricing for all business sizes. Compare plans, features, and benefits to find the perfect solution for your needs.",
  openGraph: {
    title: "Pricing Plans - Compare Options & Features",
    description: "Transparent pricing for all business sizes. Compare plans, features, and benefits to find the perfect solution for your needs.",
    url: "/pricing",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Pricing Plans Comparison"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans - Compare Options & Features",
    description: "Find the perfect plan for your business with transparent pricing and feature comparisons.",
    images: ["/twitter-pricing.jpg"]
  }
};

export default async function PricingPage() {
  return (
    <main>
      <h1 className="sr-only">Our Pricing Plans</h1>
      <PricingSection isPricingPage />
    </main>
  );
}