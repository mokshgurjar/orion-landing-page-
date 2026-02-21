'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import { PLATFORMS } from '@/lib/data'

const iconMap: Record<string, string> = {
    Windows: '⊞',
    macOS: '⌘',
    Linux: '⬡',
}

const envUrlMap: Record<string, string | undefined> = {
    macOS: process.env.NEXT_PUBLIC_DOWNLOAD_URL_MAC,
    Windows: process.env.NEXT_PUBLIC_DOWNLOAD_URL_WIN,
    Linux: process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX,
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Download() {
    return (
        <section id="download" className="py-[120px] bg-bg">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    <motion.div variants={item}>
                        <SectionEyebrow>Choose your platform</SectionEyebrow>
                    </motion.div>
                </motion.div>

                {/* download-grid: 3 cols, gap 24px, mb 32px */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[32px]">
                    {PLATFORMS.map((platform) => {
                        const icon = iconMap[platform.os] || '⬡'
                        const downloadUrl = envUrlMap[platform.os] || '#'
                        return (
                            <motion.div
                                key={platform.os}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.7, ease: 'easeOut' as const }}
                                className={`bg-bg-card border py-[40px] px-[28px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_-4px_30px_rgba(229,48,48,0.08)] hover:border-border-red ${platform.featured ? 'border-border-red' : 'border-border'
                                    }`}
                            >
                                {/* os-icon: 36px, mb 16px */}
                                <span className="text-[36px] mb-[16px] block">{icon}</span>
                                {/* os-name: display font, 24px, weight 300, mb 8px */}
                                <div className="font-display text-[24px] font-light mb-[8px]">{platform.os}</div>
                                {/* os-meta: mono, 11px, text-low, mb 28px */}
                                <div className="font-mono text-[11px] text-text-low mb-[28px]">
                                    {platform.version} · {platform.arch} · {platform.size}
                                </div>
                                {/* download-btn: block, width 100%, padding 14px, bg red-core, mono 13px, uppercase, tracking 0.06em, pill */}
                                <a
                                    href={downloadUrl}
                                    className="block w-full py-[14px] bg-red-core text-text-DEFAULT font-mono text-[13px] uppercase tracking-[0.06em] text-center rounded-full transition-colors duration-300 hover:bg-red-bright"
                                >
                                    Download
                                </a>
                            </motion.div>
                        )
                    })}
                </div>

                {/* download-note: center, 12px, text-low */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center text-[12px] text-text-low"
                >
                    Free forever. No account required.
                </motion.p>
            </div>
        </section>
    )
}
