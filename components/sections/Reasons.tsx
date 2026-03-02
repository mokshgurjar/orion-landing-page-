'use client'

const REASONS = [
    {
        num: '01',
        title: 'Same output, every time.',
        desc: "No other AI editor is deterministic. Orion runs the same 15-stage pipeline on every prompt. The result is always identical.",
    },
    {
        num: '02',
        title: 'Six hard validation layers.',
        desc: "Every change is blocked until it passes Syntax, Type, Security, Performance, Integration, and Formal checks. Nothing slips through.",
    },
    {
        num: '03',
        title: 'You control the cost.',
        desc: " Before any agent runs, Orion shows you the token cost. Adjust, approve, go. No surprise bills.",
    },
]

export default function Reasons() {
    return (
        <section style={{ padding: '120px 0', background: 'var(--color-bg-2)' }}>
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>

                {/* .reasons-grid: 3-col, gap 60px */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '60px',
                    }}
                    className="max-md:!grid-cols-1 max-md:!gap-[48px]"
                >
                    {REASONS.map((reason) => (
                        <div key={reason.num}>
                            {/* .reason-num: display, weight 300, 64px, red-deep, line-height 1, mb 16px */}
                            <div
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '64px',
                                    fontWeight: 300,
                                    color: 'var(--color-red-deep)',
                                    lineHeight: 1,
                                    marginBottom: '16px',
                                }}
                            >
                                {reason.num}
                            </div>

                            {/* .reason-title: display, weight 400, 22px, mb 12px */}
                            <h3
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 400,
                                    fontSize: '22px',
                                    marginBottom: '12px',
                                    color: 'var(--color-text-DEFAULT)',
                                }}
                            >
                                {reason.title}
                            </h3>

                            {/* .reason-desc: 12px, text-mid, line-height 1.8 */}
                            <p
                                style={{
                                    fontSize: '12px',
                                    color: 'var(--color-text-mid)',
                                    lineHeight: 1.8,
                                }}
                            >
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
