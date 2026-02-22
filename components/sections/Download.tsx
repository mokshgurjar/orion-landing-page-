'use client'

import { useState } from 'react'
import { PLATFORMS } from '@/lib/data'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

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

import HighlightCard from '@/components/ui/highlight-card'

function DownloadCard({ platform }: { platform: typeof PLATFORMS[number] }) {
    const [btnHovered, setBtnHovered] = useState(false)
    const icon = iconMap[platform.os] || '⬡'
    const downloadUrl = envUrlMap[platform.os] || '#'

    return (
        <HighlightCard
            title={platform.os}
            description={[
                `${platform.version} · ${platform.arch} · ${platform.size}`
            ]}
            icon={<span style={{ fontSize: '36px', color: 'var(--color-text-DEFAULT)' }}>{icon}</span>}
        >
            <a
                href={downloadUrl}
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '14px',
                    background: btnHovered ? 'var(--color-red-bright)' : 'var(--color-red-core)',
                    color: 'var(--color-text-DEFAULT)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    textAlign: 'center',
                    transition: 'background 0.3s',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 30, // Make sure download button is clickable over highlights
                }}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
            >
                Download
            </a>
        </HighlightCard>
    )
}

export default function Download() {
    return (
        /* #download: background var(--bg) */
        <section id="download" style={{ background: 'var(--color-bg)', padding: '120px 0' }}>
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>

                <SectionEyebrow>Choose your platform</SectionEyebrow>

                {/* .download-grid: 3-col, gap 24px, mb 32px */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    marginBottom: '32px',
                }}>
                    {PLATFORMS.map((platform) => (
                        <DownloadCard key={platform.os} platform={platform} />
                    ))}
                </div>


            </div>
        </section>
    )
}
