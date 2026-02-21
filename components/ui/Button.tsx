import Link from 'next/link'

interface ButtonProps {
    variant: 'solid' | 'ghost'
    href?: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export default function Button({ variant, href, children, className = '', onClick }: ButtonProps) {
    const base =
        'inline-flex items-center gap-2 px-8 py-3.5 font-mono text-[13px] uppercase tracking-[0.06em] rounded-full transition-colors duration-300'

    const variants = {
        solid:
            'bg-red-core text-text-DEFAULT animate-pulse-glow hover:bg-red-bright',
        ghost:
            'border border-red-core text-red-bright hover:bg-red-core hover:text-text-DEFAULT',
    }

    const classes = `${base} ${variants[variant]} ${className}`

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        )
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}
