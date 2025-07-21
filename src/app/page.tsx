import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata: Metadata = {
  title: "AI Twitter Banner Generator | Create Stunning Banners with DALL·E",
  description: "Instantly generate beautiful Twitter banners using AI. Create unique, eye-catching social media headers in seconds with DALL·E technology.",
  keywords: ["Twitter banner", "DALL·E", "AI banner generator", "social media header", "free banner maker"],
  openGraph: {
    title: "AI Twitter Banner Generator | Create Stunning Banners with DALL·E",
    description: "Instantly generate beautiful Twitter banners using AI technology",
    images: [{
      url: "/example1.png",
      width: 1200,
      height: 630,
      alt: "AI-generated Twitter banner example",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Twitter Banner Generator | Create Stunning Banners with DALL·E",
    description: "Instantly generate beautiful Twitter banners using AI",
    images: ["/example1.png"]
  }
};

export default async function HomePage() {
  return (
    <main className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      <ExamplesSection />
      <PricingSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Twitter Banner Generator",
            "description": "AI-powered tool for creating stunning Twitter banners using DALL·E technology",
            "brand": {
              "@type": "Brand",
              "name": "Twitter Banner Generator"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </main>
  );
}

function HeroSection() {
  return (
    <section aria-label="Main banner generator introduction" className='relative overflow-hidden lg:overflow-visible'>
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              Generate banners with DALL·E
            </span>
          </div>
          <h1>Instantly craft stunning Twitter banners.</h1>
          <Button asChild variant='sexy' aria-label="Get started with free account">
            <Link href='/signup'>Get started for free</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt="Decorative background element"
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ExamplesSection() {
  return (
    <section aria-labelledby="examples-heading" className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-8'>
      <h2 id="examples-heading" className="sr-only">Example AI-generated banners</h2>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: futuristic cityscape'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: mountain landscape with aurora'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: abstract geometric patterns'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: cyberpunk street scene'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: tropical beach sunset'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: minimalist modern design'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: space exploration theme'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: neon-lit city night'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner example: vibrant abstract art'
          quality={100}
        />
      </div>
    </section>
  );
}