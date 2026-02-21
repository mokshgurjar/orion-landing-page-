'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import { COMPARISON_COLS, COMPARISON_ROWS } from '@/lib/data'

// Original: py 120px
// .compare-table-wrapper: overflow-x auto
// .compare-table: width 100%, border-collapse collapse, mono, 12px
// th,td: padding 16px 20px, border 1px border, text-align center, white-space nowrap
// th: 11px, uppercase, tracking 0.08em, text-mid, bg-2, font-weight 500
// th.orion-header: red-bright
// td:first-child: text-align left, text, 12px
// tr:hover td: bg red-dim
// .check: red-bright
// .dash: text-low
// Mobile: font-size 10px, th/td padding 10px 8px

export default function Compare() {
    return (
        <section id="compare" className="py-[120px] bg-bg-2">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>Competitive landscape</SectionEyebrow>
                    <SectionTitle subtitle="Every feature below is exclusive to Orion unless explicitly marked otherwise.">
                        How Orion compares.
                    </SectionTitle>
                </motion.div>

                {/* compare-table-wrapper: overflow-x auto */}
                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <table className="w-full border-collapse font-mono text-[12px] max-md:text-[10px]">
                        <thead>
                            <tr>
                                {/* empty first header */}
                                <th className="text-[11px] uppercase tracking-[0.08em] text-text-mid bg-bg-2 font-[500] px-[20px] py-[16px] border border-border text-center whitespace-nowrap max-md:px-[8px] max-md:py-[10px]" />
                                {COMPARISON_COLS.map((col) => (
                                    <th
                                        key={col}
                                        className={`text-[11px] uppercase tracking-[0.08em] bg-bg-2 font-[500] px-[20px] py-[16px] border border-border text-center whitespace-nowrap max-md:px-[8px] max-md:py-[10px] ${col === 'Orion' ? 'text-red-bright' : 'text-text-mid'
                                            }`}
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON_ROWS.map((row) => (
                                <tr key={row.feature} className="group">
                                    <td className="text-left text-text-DEFAULT text-[12px] px-[20px] py-[16px] border border-border whitespace-nowrap group-hover:bg-red-dim max-md:px-[8px] max-md:py-[10px]">
                                        {row.feature}
                                    </td>
                                    {row.values.map((val, i) => (
                                        <td
                                            key={i}
                                            className="text-center px-[20px] py-[16px] border border-border whitespace-nowrap group-hover:bg-red-dim max-md:px-[8px] max-md:py-[10px]"
                                        >
                                            {val === true ? (
                                                <span className="text-red-bright">✦</span>
                                            ) : val === false ? (
                                                <span className="text-text-low">—</span>
                                            ) : (
                                                <span className="text-text-mid">{val}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    )
}
