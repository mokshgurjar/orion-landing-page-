'use client'

import { useState } from 'react'
import type { Feature } from '@/types'

interface FeatureCardProps {
    feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            style={{
                background: hovered ? 'var(--color-red-dim)' : 'var(--color-bg-card)',
                border: '1px solid var(--color-border-DEFAULT)',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s, box-shadow 0.3s',
                boxShadow: hovered ? '0 0 40px rgba(229, 48, 48, 0.04)' : 'none',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* .feature-card::before — top sweep line, scaleX 0→1 on hover */}
            <span
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'var(--color-red-bright)',
                    display: 'block',
                    transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s ease',
                }}
            />

            {/* .feature-tag: mono 9px, uppercase, tracking 0.12em, red-bright, border red-deep, padding 3px 10px, mb 16px, small-caps */}
            <span
                style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-red-bright)',
                    border: '1px solid var(--color-red-deep)',
                    padding: '3px 10px',
                    marginBottom: '16px',
                    fontVariant: 'small-caps',
                }}
            >
                {feature.tag}
            </span>

            {/* h3: display font, weight 300, 26px, mb 14px */}
            <h3
                style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: '26px',
                    marginBottom: '14px',
                    color: 'var(--color-text-DEFAULT)',
                }}
            >
                {feature.title}
            </h3>

            {/* p: 12px, text-mid, line-height 1.8, mb 18px */}
            <p
                style={{
                    fontSize: '12px',
                    color: 'var(--color-text-mid)',
                    lineHeight: 1.8,
                    marginBottom: '18px',
                }}
            >
                {feature.desc}
            </p>

            {/* .feature-vs: 10px, text-low, line-height 1.6 */}
            {feature.vs && (
                <div
                    style={{
                        fontSize: '10px',
                        color: 'var(--color-text-low)',
                        lineHeight: 1.6,
                    }}
                >
                    <span style={{ color: 'var(--color-red-bright)' }}>vs</span>{' '}
                    {feature.vs}
                </div>
            )}
        </div>
    )
}
