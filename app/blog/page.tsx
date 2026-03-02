import dynamic from 'next/dynamic'
import Nav from '@/components/layout/Nav'
import LazySection from '@/components/ui/lazy-section'
import { GenericSectionSkeleton } from '@/components/ui/section-skeletons'
import BlogHero from '@/components/sections/BlogHero'

const ExecutionModes = dynamic(() => import('@/components/sections/ExecutionModes'))
const Mcp = dynamic(() => import('@/components/sections/Mcp'))
const Compare = dynamic(() => import('@/components/sections/Compare'))
const Reasons = dynamic(() => import('@/components/sections/Reasons'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

export const metadata = {
    title: 'How Orion Works — The Full Pipeline',
    description: 'A deep dive into Orion\'s 15-stage pipeline, execution modes, MCP integration, and the philosophy behind deterministic AI coding.',
}

export default function BlogPage() {
    return (
        <>
            <Nav />
            <BlogHero />

            <LazySection fallback={<GenericSectionSkeleton />}>
                <ExecutionModes />
            </LazySection>

            <LazySection fallback={<GenericSectionSkeleton />}>
                <Mcp />
            </LazySection>

            <LazySection fallback={<GenericSectionSkeleton />}>
                <Compare />
            </LazySection>

            <LazySection fallback={<GenericSectionSkeleton />}>
                <Reasons />
            </LazySection>

            <LazySection fallback={<GenericSectionSkeleton />}>
                <Footer />
            </LazySection>
        </>
    )
}
