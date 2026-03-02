'use client'

import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import InteractiveFeatureGrid from '@/components/ui/interactive-feature-grid'

export default function Features() {
    return (
        <section
            id="features"
            style={{ padding: '120px 0' }}
        >
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>

                <SectionEyebrow>What makes Orion different</SectionEyebrow>

                <SectionTitle subtitle="After studying Cursor, Windsurf, Antigravity, and Claude Code — these properties exist only in Orion.">
                    Capabilities no other IDE has built.
                </SectionTitle>

                <InteractiveFeatureGrid />

            </div>
        </section>
    )
}
