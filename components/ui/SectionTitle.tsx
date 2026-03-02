// Original .section-title: display font, weight 300, clamp(32px,5vw,56px), line-height 1.15, mb 16px
// Original .section-subtitle: mono, 13px, text-mid, max-width 600px, line-height 1.7, mb 60px

interface SectionTitleProps {
    children: React.ReactNode
    subtitle?: string
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
    return (
        <>
            <h2 className="font-display font-light text-[clamp(32px,5vw,56px)] leading-[1.15] mb-[16px] text-text-DEFAULT">
                {children}
            </h2>
            {subtitle && (
                <p className="font-mono text-[13px] text-text-mid max-w-[600px] leading-[1.7] mb-[60px]">
                    {subtitle}
                </p>
            )}
        </>
    )
}
