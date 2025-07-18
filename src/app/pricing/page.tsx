import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Pricing Plans - Compare Options & Features",
  description: "Explore our transparent pricing options. Find the perfect plan for your business needs with detailed feature comparisons.",
  keywords: "pricing, plans, features, comparison, subscription, cost",
  openGraph: {
    title: "Pricing Plans - Compare Options & Features",
    description: "Explore our transparent pricing options. Find the perfect plan for your business needs with detailed feature comparisons.",
    url: "/pricing",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-pricing-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans - Compare Options & Features",
    description: "Explore our transparent pricing options. Find the perfect plan for your business needs with detailed feature comparisons.",
    images: ["/twitter-pricing-image.jpg"],
  },
};

export default async function PricingPage() {
  return (
    <main>
      <PricingSection isPricingPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Service Plans",
            description: "Transparent pricing for business solutions",
            offers: {
              "@type": "AggregateOffer",
              offerCount: 3,
              lowPrice: "0",
              highPrice: "99",
              priceCurrency: "USD",
              offers: [
                {
                  "@type": "Offer",
                  name: "Basic Plan",
                  price: "0",
                },
                {
                  "@type": "Offer",
                  name: "Pro Plan",
                  price: "49",
                },
                {
                  "@type": "Offer",
                  name: "Enterprise Plan",
                  price: "99",
                }
              ]
            }
          })
        }}
      />
    </main>
  );
}