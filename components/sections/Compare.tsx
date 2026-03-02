'use client'

import { useState } from 'react'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import { COMPARISON_COLS, COMPARISON_ROWS } from '@/lib/data'

// Shared cell style
const cellBase: React.CSSProperties = {
    padding: '16px 20px',
    border: '1px solid var(--color-border-DEFAULT)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
}

function CompareRow({ row }: { row: (typeof COMPARISON_ROWS)[number] }) {
    const [hovered, setHovered] = useState(false)

    return (
        <tr
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* td:first-child — text-align left, text, 12px */}
            <td
                style={{
                    ...cellBase,
                    textAlign: 'left',
                    color: 'var(--color-text-DEFAULT)',
                    fontSize: '12px',
                    background: hovered ? 'var(--color-red-dim)' : 'transparent',
                }}
            >
                {row.feature}
            </td>
            {row.values.map((val, i) => (
                <td
                    key={i}
                    style={{
                        ...cellBase,
                        background: hovered ? 'var(--color-red-dim)' : 'transparent',
                    }}
                >
                    {val === true ? (
                        /* .check: red-bright */
                        <span style={{ color: 'var(--color-red-bright)' }}>✦</span>
                    ) : val === false ? (
                        /* .dash: text-low */
                        <span style={{ color: 'var(--color-text-low)' }}>—</span>
                    ) : (
                        <span style={{ color: 'var(--color-text-mid)' }}>{val}</span>
                    )}
                </td>
            ))}
        </tr>
    )
}

export default function Compare() {
    return (
        <section
            id="compare"
            style={{ padding: '120px 0', background: 'var(--color-bg)' }}
        >
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>

                <SectionEyebrow>Honest comparison</SectionEyebrow>
                <SectionTitle>
                    How Orion stacks up.
                </SectionTitle>

                {/* .compare-table-wrapper: overflow-x auto */}
                <div style={{ overflowX: 'auto' }}>
                    {/* .compare-table: width 100%, border-collapse collapse, mono, 12px */}
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                        }}
                    >
                        <thead>
                            <tr>
                                {/* first header — "Feature" label */}
                                <th
                                    style={{
                                        ...cellBase,
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: 'var(--color-text-mid)',
                                        background: 'var(--color-bg-2)',
                                        fontWeight: 500,
                                        textAlign: 'left',
                                    }}
                                >
                                    Feature
                                </th>
                                {COMPARISON_COLS.map((col) => (
                                    <th
                                        key={col}
                                        style={{
                                            ...cellBase,
                                            fontSize: '11px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            /* th.orion-header: red-bright */
                                            color: col === 'Orion'
                                                ? 'var(--color-red-bright)'
                                                : 'var(--color-text-mid)',
                                            background: 'var(--color-bg-2)',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON_ROWS.map((row) => (
                                <CompareRow key={row.feature} row={row} />
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}
