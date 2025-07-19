import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  return {
    title: 'Twitter Banner Generator - Create Stunning Banners with DALL·E',
    description: 'Instantly craft stunning Twitter banners with our free tool powered by DALL·E. Get started for free and enhance your Twitter profile!',
    openGraph: {
      title: 'Twitter Banner Generator - Create Stunning Banners with DALL·E',
      description: 'Instantly craft stunning Twitter banners with our free tool powered by DALL·E. Get started for free and enhance your Twitter profile!',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Twitter Banner Generator Preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Twitter Banner Generator - Create Stunning Banners with DALL·E',
      description: 'Instantly craft stunning Twitter banners with our free tool powered by DALL·E. Get started for free and enhance your Twitter profile!',
      images: [`${baseUrl}/twitter-image.png`],
    },
  };
}

export default async function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Twitter Banner Generator",
    "description": "Instantly craft stunning Twitter banners using DALL·E.",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      <ExamplesSection />
      <PricingSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section 
      className='relative overflow-hidden lg:overflow-visible'
      aria-label="Twitter Banner Generator Introduction"
    >
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              Generate banners with DALL·E
            </span>
          </div>
          <h1>Instantly craft stunning Twitter banners.</h1>
          <Button asChild variant='sexy'>
            <Link href='/signup'>Get started for free</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt='Abstract background design for Twitter banner generator'
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
      aria-label="Example Twitter Banners"
    >
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Abstract geometric pattern in blue and green'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Mountain landscape with sunset'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Futuristic cityscape at night'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Space exploration theme with planets'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Ocean waves with surfer at sunset'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Digital circuit board with glowing lines'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Artistic watercolor splash in vibrant colors'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Autumn forest with falling leaves'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='Example Twitter banner: Winter mountain scene with aurora borealis'
          quality={100}
        />
      </div>
    </section>
  );
}