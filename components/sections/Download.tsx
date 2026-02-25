'use client'

import { useState } from 'react'
import { PLATFORMS } from '@/lib/data'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Image from 'next/image'

const iconMap: Record<string, React.ReactNode> = {
    Windows: <Image src="/microsoft.png" alt="Windows" width={40} height={40} className="object-contain p-2.5 w-full h-full brightness-0 invert" />,
    macOS: <Image src="/apple-logo.png" alt="Apple" width={40} height={40} className="object-contain p-1 w-full h-full brightness-0 invert" />,
    Linux: <Image src="/linux.png" alt="Linux" width={40} height={40} className="object-contain w-full h-full brightness-0 invert" />,
}

const envUrlMap: Record<string, string | undefined> = {
    macOS: process.env.NEXT_PUBLIC_DOWNLOAD_URL_MAC,
    Windows: process.env.NEXT_PUBLIC_DOWNLOAD_URL_WIN,
    Linux: process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX,
}

import HighlightCard from '@/components/ui/highlight-card'

function DownloadCard({ platform }: { platform: typeof PLATFORMS[number] }) {
    const [btnHovered, setBtnHovered] = useState(false)
    const icon = iconMap[platform.os] || <Image src="/linux.png" alt="Linux" width={40} height={40} className="object-contain w-full h-full brightness-0 invert" />
    const downloadUrl = envUrlMap[platform.os] || '#'

    return (
        <HighlightCard
            title={platform.os}
            description={[
                `${platform.arch}`
            ]}
            icon={<div className="flex items-center justify-center w-14 h-14 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">{icon}</div>}
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
