import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Instant Twitter Banner Generator | Create Stunning Banners with AI",
  description: "Generate beautiful Twitter banners instantly using DALL·E AI technology. Free to start, no design skills needed.",
  openGraph: {
    title: "Instant Twitter Banner Generator | Create Stunning Banners with AI",
    description: "Generate beautiful Twitter banners instantly using DALL·E AI technology. Free to start, no design skills needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twitter Banner Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Twitter Banner Generator | Create Stunning Banners with AI",
    description: "Generate beautiful Twitter banners instantly using DALL·E AI technology. Free to start, no design skills needed.",
    images: ["/twitter-image.png"],
  },
};

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instant Twitter Banner Generator",
    "description": "AI-powered tool for creating stunning Twitter banners instantly using DALL·E technology",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className='flex flex-col gap-8 lg:gap-32'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ExamplesSection />
      <PricingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className='relative overflow-hidden lg:overflow-visible'>
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              Generate banners with DALL·E
            </span>
          </div>
          <h1 id="hero-heading">Instantly craft stunning Twitter banners.</h1>
          <Button asChild variant='sexy'>
            <Link href='/signup'>Get started for free</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt="Decorative abstract background shape"
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ExamplesSection() {
  return (
    <section aria-label="Examples of generated Twitter banners" className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-8'>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='Modern geometric Twitter banner design example'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='Abstract blue and purple Twitter banner example'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='Vibrant gradient Twitter banner example'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='Minimalist landscape Twitter banner example'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='Dark mode space-themed Twitter banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='Neon futuristic Twitter banner design'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='Nature-inspired Twitter banner example'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='Pattern-based Twitter banner design'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='Artistic painting style Twitter banner'
          quality={100}
        />
      </div>
    </section>
  );
}