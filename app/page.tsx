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
const Download = dynamic(() => import('@/components/sections/Download'));
const TrustStrip = dynamic(() => import('@/components/sections/TrustStrip'));
const Features = dynamic(() => import('@/components/sections/Features'));
const Validation = dynamic(() => import('@/components/sections/Validation'));
const Compare = dynamic(() => import('@/components/sections/Compare'));
const Quote = dynamic(() => import('@/components/sections/Quote'));
const Footer = dynamic(() => import('@/components/layout/Footer'));

export default function Home() {
  return (
    <>
      <Nav />
      {/* Hero loads immediately */}
      <Hero />
      
      {/* Lazily loaded sections below the fold. */}
      <LazySection fallback={<DownloadSkeleton />}>
        <Download />
      </LazySection>
      
      <LazySection fallback={<GenericSectionSkeleton />}>
        <TrustStrip />
      </LazySection>

      <LazySection fallback={<FeaturesSkeleton />}>
        <Features />
      </LazySection>

      <LazySection fallback={<GenericSectionSkeleton />}>
        <Validation />
      </LazySection>

      <LazySection fallback={<CompareSkeleton />}>
        <Compare />
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
