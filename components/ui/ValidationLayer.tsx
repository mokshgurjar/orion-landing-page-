'use client'

import { useState } from 'react'
import type { ValidationLayer } from '@/types'

interface ValidationLayerProps {
    layer: ValidationLayer
}

export default function ValidationLayerComponent({ layer }: ValidationLayerProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            style={{
                background: hovered ? 'var(--color-red-dim)' : 'var(--color-bg-card)',
                border: '1px solid var(--color-border-DEFAULT)',
                padding: '36px 28px',
                transition: 'background 0.3s',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* .validation-num: display, weight 300, 48px, red-deep, line-height 1, mb 12px */}
            <div
                style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: '48px',
                    color: 'var(--color-red-deep)',
                    lineHeight: 1,
                    marginBottom: '12px',
                }}
            >
                {layer.num}
            </div>

            {/* .validation-name: mono, 12px, uppercase, tracking 0.1em, text, mb 10px */}
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-text-DEFAULT)',
                    marginBottom: '10px',
                }}
            >
                {layer.name}
            </div>

            {/* .validation-desc: mono, 11px, text-mid, line-height 1.7 */}
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-mid)',
                    lineHeight: 1.7,
                }}
            >
                {layer.desc}
            </div>
        </div>
    )
}
