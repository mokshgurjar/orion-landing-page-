// Original .eyebrow:
// font-family: mono, 11px, uppercase, letter-spacing 0.15em, color red-bright,
// mb 20px, flex, align-items center, gap 12px, font-variant small-caps
// ::after: content '', width 40px, height 1px, background red-deep

export default function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-red-bright mb-[20px] flex items-center gap-[12px]"
            style={{ fontVariant: 'small-caps' }}
        >
            {children}
            <span className="block w-[40px] h-[1px] bg-red-deep flex-shrink-0" />
        </div>
    )
}
