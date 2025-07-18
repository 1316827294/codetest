import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export const metadata = {
  title: 'Instant Twitter Banner Generator with DALL·E',
  description: 'Create stunning Twitter banners instantly using AI. Generate professional social media headers with DALL·E in seconds.',
  openGraph: {
    title: 'Instant Twitter Banner Generator with DALL·E',
    description: 'Create stunning Twitter banners instantly using AI. Generate professional social media headers with DALL·E in seconds.',
    images: [
      {
        url: '/example1.png',
        width: 1200,
        height: 630,
        alt: 'AI-generated Twitter banner example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Twitter Banner Generator with DALL·E',
    description: 'Create stunning Twitter banners instantly using AI.',
    images: ['/example1.png'],
  },
};

export default async function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Twitter Banner Generator',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-powered Twitter banner generator using DALL·E technology',
  };

  return (
    <main className='flex flex-col gap-8 lg:gap-32' itemScope itemType="https://schema.org/WebApplication">
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
    <section 
      className='relative overflow-hidden lg:overflow-visible'
      aria-label="Main banner generator introduction"
    >
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              Generate banners with DALL·E
            </span>
          </div>
          <h1 itemProp="name">Instantly craft stunning Twitter banners.</h1>
          <Button asChild variant='sexy'>
            <Link href='/signup' aria-label="Get started for free with Twitter banner generator">Get started for free</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt="Decorative background pattern"
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ExamplesSection() {
  return (
    <section 
      className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-8'
      aria-labelledby="examples-heading"
    >
      <h2 id="examples-heading" className="sr-only">Examples of Generated Twitter Banners</h2>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='Twitter banner example with abstract blue design'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='Twitter banner example with mountain landscape'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='Twitter banner example with futuristic cityscape'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='Twitter banner example with vibrant geometric patterns'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='Twitter banner example with cosmic nebula theme'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='Twitter banner example with minimalist typography'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='Twitter banner example with tropical beach scene'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='Twitter banner example with cyberpunk aesthetics'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='Twitter banner example with watercolor art style'
          quality={100}
        />
      </div>
    </section>
  );
}