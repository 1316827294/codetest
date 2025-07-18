import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: "Instant Twitter Banner Generator with DALL·E | Create Stunning Banners",
  description: "Craft stunning Twitter banners instantly using AI. Free to get started. Enhance your social media presence with custom DALL·E generated artwork.",
  robots: 'index, follow',
  openGraph: {
    title: "Instant Twitter Banner Generator with DALL·E",
    description: "Craft stunning Twitter banners instantly using AI. Free to get started.",
    type: 'website',
  },
};

export default async function HomePage() {
  return (
    <main className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      <ExamplesSection />
      <PricingSection />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Twitter Banner Generator",
          "description": "AI-powered tool for creating custom Twitter banners using DALL·E",
          "applicationCategory": "DesignApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </main>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden lg:overflow-visible' aria-label="Hero Section">
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              Generate banners with DALL·E
            </span>
          </div>
          <h1>Instantly craft stunning Twitter banners.</h1>
          <Button asChild variant='sexy'>
            <Link href='/signup' aria-label="Get started for free">Get started for free</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt="Abstract background pattern for Twitter banner generator"
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ExamplesSection() {
  return (
    <section className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-8' aria-label="Example Banners">
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='AI-generated Twitter banner featuring futuristic cityscape'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='Abstract geometric Twitter banner with vibrant colors'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='Minimalist Twitter banner with modern typography design'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='Nature-inspired Twitter banner with mountain landscape'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='Gradient Twitter banner with smooth color transitions'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='Space-themed Twitter banner with cosmic elements'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='Artistic Twitter banner with paint splash effect'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='Neon Twitter banner with cyberpunk aesthetic'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='Pattern-based Twitter banner with intricate details'
          quality={100}
        />
      </div>
    </section>
  );
}