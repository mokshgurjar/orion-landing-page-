import type { ValidationLayer } from '@/types'

// Original .validation-cell: bg-card, border 1px border, padding 36px 28px, transition bg 0.3s
// :hover: bg red-dim
// .validation-num: display font, weight 300, 48px, red-deep, line-height 1, mb 12px
// .validation-name: mono, 12px, uppercase, tracking 0.1em, text, mb 10px
// .validation-desc: mono, 11px, text-mid, line-height 1.7

interface ValidationLayerProps {
    layer: ValidationLayer
}

export default function ValidationLayer({ layer }: ValidationLayerProps) {
    return (
        <div className="bg-bg-card border border-border py-[36px] px-[28px] transition-[background] duration-300 hover:bg-red-dim">
            <div className="font-display font-light text-[48px] text-red-deep leading-none mb-[12px]">
                {layer.num}
            </div>
            <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-DEFAULT mb-[10px]">
                {layer.name}
            </div>
            <div className="font-mono text-[11px] text-text-mid leading-[1.7]">
                {layer.desc}
            </div>
        </div>
    )
}
