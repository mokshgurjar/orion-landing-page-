import type { Feature } from '@/types'

// Original .feature-card: bg-card, border 1px border, padding 36px 32px, relative, overflow hidden
// ::before: absolute top 0, left/right 0, height 1px, bg red-bright, scaleX(0), transitions to scaleX(1) on hover
// :hover: bg red-dim, box-shadow 0 0 40px rgba(229,48,48,0.04)
// .feature-tag: inline-block, mono, 9px, uppercase, tracking 0.12em, red-bright, border 1px red-deep, padding 3px 10px, mb 16px, font-variant small-caps
// h3: display, weight 300, 26px, mb 14px
// p: 12px, text-mid, line-height 1.8, mb 18px
// .feature-vs: 10px, text-low, line-height 1.6
// .feature-vs span: red-bright

interface FeatureCardProps {
    feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <div className="group bg-bg-card border border-border p-[36px_32px] relative overflow-hidden transition-[background,box-shadow] duration-300 hover:bg-red-dim hover:shadow-[0_0_40px_rgba(229,48,48,0.04)]">
            {/* top sweep line */}
            <span className="absolute top-0 left-0 right-0 h-[1px] bg-red-bright scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

            {/* tag: 9px, tracking 0.12em, border red-deep, padding 3px 10px, mb 16px */}
            <span
                className="inline-block font-mono text-[9px] uppercase tracking-[0.12em] text-red-bright border border-red-deep px-[10px] py-[3px] mb-[16px]"
                style={{ fontVariant: 'small-caps' }}
            >
                {feature.tag}
            </span>

            {/* h3: display, 26px, weight 300, mb 14px */}
            <h3 className="font-display font-light text-[26px] mb-[14px] text-text-DEFAULT">
                {feature.title}
            </h3>

            {/* p: 12px, text-mid, line-height 1.8, mb 18px */}
            <p className="text-[12px] text-text-mid leading-[1.8] mb-[18px]">
                {feature.desc}
            </p>

            {/* vs: 10px, text-low, line-height 1.6 */}
            <div className="text-[10px] text-text-low leading-[1.6]">
                <span className="text-red-bright">vs</span> {feature.vs}
            </div>
        </div>
    )
}
