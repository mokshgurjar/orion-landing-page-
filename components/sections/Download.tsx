'use client'

import { useState, useEffect } from 'react'
import { PLATFORMS } from '@/lib/data'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
import { ReactNode } from 'react'

const reqs: Record<string, ReactNode> = {
    Windows: (
        <div className="text-gray-300 font-ui text-[13px] text-balance flex flex-col gap-4 w-full text-left leading-relaxed">
            <h4 className="text-lg font-bold text-white mb-2 font-display text-center">Minimum Requirements</h4>
            <div className="flex flex-col gap-2">
                <p><span className="text-red-bright">OS:</span> Windows 10/11 (64-bit)</p>
                <p><span className="text-red-bright">CPU:</span> 4-core processor</p>
                <p><span className="text-red-bright">RAM:</span> 8 GB memory</p>
                <p><span className="text-red-bright">Disk:</span> 1 GB available space</p>
            </div>
        </div>
    ),
    macOS: (
        <div className="text-gray-300 font-ui text-[13px] text-balance flex flex-col gap-4 w-full text-left leading-relaxed">
            <h4 className="text-lg font-bold text-white mb-2 font-display text-center">Minimum Requirements</h4>
            <div className="flex flex-col gap-2">
                <p><span className="text-red-bright">OS:</span> macOS 12 Monterey+</p>
                <p><span className="text-red-bright">CPU:</span> Apple Silicon or Intel Core i5</p>
                <p><span className="text-red-bright">RAM:</span> 8 GB memory</p>
                <p><span className="text-red-bright">Disk:</span> 1 GB available space</p>
            </div>
        </div>
    ),
    Linux: (
        <div className="text-gray-300 font-ui text-[13px] text-balance flex flex-col gap-4 w-full text-left leading-relaxed">
            <h4 className="text-lg font-bold text-white mb-2 font-display text-center">Minimum Requirements</h4>
            <div className="flex flex-col gap-2">
                <p><span className="text-red-bright">OS:</span> Ubuntu 20.04+, Debian 11+</p>
                <p><span className="text-red-bright">CPU:</span> x86_64, 4-core processor</p>
                <p><span className="text-red-bright">RAM:</span> 8 GB memory</p>
                <p><span className="text-red-bright">Disk:</span> 1 GB available space</p>
            </div>
        </div>
    ),
}

function DownloadCard({ platform }: { platform: typeof PLATFORMS[number] }) {
    const icon = iconMap[platform.os] || <Image src="/linux.png" alt="Linux" width={40} height={40} className="object-contain w-full h-full brightness-0 invert" />
    const downloadUrl = envUrlMap[platform.os] || '#'

    return (
        <HighlightCard
            title={platform.os}
            description={[
                `${platform.arch}`
            ]}
            icon={<div className="flex items-center justify-center w-14 h-14 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">{icon}</div>}
            backContent={reqs[platform.os]}
        >
            <a
                href={downloadUrl}
                className="btn-download transition-colors duration-300 ease-in-out"
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '14px',
                    background: 'var(--color-red-core)',
                    color: 'var(--color-text-DEFAULT)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    textAlign: 'center',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 30, // Make sure download button is clickable over highlights
                }}
            >
                Download
            </a>
        </HighlightCard>
    )
}

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Download() {
    const [orderedPlatforms, setOrderedPlatforms] = useState(PLATFORMS)

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        let detectedOS = ''

        if (userAgent.indexOf('mac') !== -1) {
            detectedOS = 'macOS'
        } else if (userAgent.indexOf('win') !== -1) {
            detectedOS = 'Windows'
        } else if (userAgent.indexOf('linux') !== -1) {
            detectedOS = 'Linux'
        }

        if (detectedOS) {
            const detectedPlatform = PLATFORMS.find(p => p.os === detectedOS)
            const otherPlatforms = PLATFORMS.filter(p => p.os !== detectedOS)

            if (detectedPlatform && otherPlatforms.length === 2) {
                const newOrder = [
                    otherPlatforms[0],
                    detectedPlatform,
                    otherPlatforms[1]
                ]
                // Use setTimeout to avoid synchronous setState within the effect
                if (newOrder[1].os !== PLATFORMS[1].os) {
                    setTimeout(() => {
                        setOrderedPlatforms(newOrder)
                    }, 0)
                }
            }
        }
    }, [])

    return (
        /* #download: background var(--bg) */
        <section id="download" style={{ background: 'var(--color-bg)', padding: '80px 0' }} className="relative">
            <div className="w-[90%] max-w-[1200px] mx-auto">

                {/* Back to home breadcrumb */}
                <div className="mb-12 w-full flex justify-center">
                    <Link
                        href="/"
                        className={cn(
                            "group inline-flex items-center gap-2 px-4 py-2 rounded-full",
                            "border border-border-DEFAULT bg-bg-card",
                            "transition-all duration-300 hover:border-red-deep hover:bg-red-dim",
                            "shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        )}
                    >
                        <ArrowLeft className="w-3.5 h-3.5 text-text-low group-hover:text-red-bright transition-colors" />
                        <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-text-low group-hover:text-text-mid transition-colors mt-[1px]">
                            Back to Home
                        </span>
                    </Link>
                </div>

                <div className="flex justify-center w-full">
                    <SectionEyebrow>Choose your platform</SectionEyebrow>
                </div>

                {/* .download-grid: 3-col, gap 24px, mb 32px */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    marginBottom: '32px',
                }}>
                    {orderedPlatforms.map((platform) => (
                        <DownloadCard key={platform.os} platform={platform} />
                    ))}
                </div>


            </div>
        </section>
    )
}
