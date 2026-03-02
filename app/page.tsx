import dynamic from 'next/dynamic'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import LazySection from '@/components/ui/lazy-section'

// import skeletal loaders
import {
  DownloadSkeleton,
  FeaturesSkeleton,
  CompareSkeleton,
  GenericSectionSkeleton
} from '@/components/ui/section-skeletons'

// Dynamic imports for below-the-fold sections
const TrustStrip = dynamic(() => import('@/components/sections/TrustStrip'));
const Features = dynamic(() => import('@/components/sections/Features'));
const Pipeline = dynamic(() => import('@/components/sections/Pipeline'));
const Validation = dynamic(() => import('@/components/sections/Validation'));
const Quote = dynamic(() => import('@/components/sections/Quote'));
const Footer = dynamic(() => import('@/components/layout/Footer'));

export default function Home() {
  return (
    <>
      <Nav />
      {/* Hero loads immediately */}
      <Hero />

      {/* Lazily loaded sections below the fold. */}

      <LazySection fallback={<GenericSectionSkeleton />}>
        <TrustStrip />
      </LazySection>

      <LazySection fallback={<FeaturesSkeleton />}>
        <Features />
      </LazySection>

      <LazySection fallback={<GenericSectionSkeleton />}>
        <Pipeline />
      </LazySection>

      <LazySection fallback={<GenericSectionSkeleton />}>
        <Validation />
      </LazySection>

      <LazySection fallback={<GenericSectionSkeleton />}>
        <Quote />
      </LazySection>

      <LazySection fallback={<GenericSectionSkeleton />}>
        <Footer />
      </LazySection>
    </>
  )
}
