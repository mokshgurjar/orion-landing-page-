interface OrionLogoProps {
    width?: number
    className?: string
}

export default function OrionLogo({ width = 110, className = '' }: OrionLogoProps) {
    return (
        <svg
            width={width}
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <defs>
                <circle id="orion-dot" cx="0" cy="0" r="3.5" fill="currentColor" stroke="none" />
                <path id="orion-star" d="M 0,-12 Q 0,-1 12,0 Q 0,1 0,12 Q 0,1 -12,0 Q 0,-1 0,-12 Z" fill="currentColor" stroke="none" />
            </defs>

            {/* O (first) */}
            <circle cx="45" cy="50" r="25" />
            <use href="#orion-dot" x="45" y="75" />
            <use href="#orion-dot" x="20" y="50" />
            <use href="#orion-dot" x="70" y="50" />
            <use href="#orion-star" x="45" y="25" />
            <use href="#orion-star" x="45" y="50" />

            {/* R */}
            <path d="M 90,75 L 90,25 h 18 a 12.5 12.5 0 0 1 0,25 h -18" />
            <path d="M 90,50 L 120,75" />
            <use href="#orion-dot" x="90" y="75" />
            <use href="#orion-dot" x="90" y="50" />
            <use href="#orion-dot" x="120.5" y="37.5" />
            <use href="#orion-dot" x="120" y="75" />
            <use href="#orion-star" x="90" y="25" />

            {/* I */}
            <path d="M 146,25 L 146,75" />
            <use href="#orion-dot" x="146" y="75" />
            <use href="#orion-star" x="146" y="25" />

            {/* O (second) */}
            <circle cx="196" cy="50" r="25" />
            <use href="#orion-dot" x="196" y="25" />
            <use href="#orion-dot" x="196" y="75" />
            <use href="#orion-dot" x="171" y="50" />
            <use href="#orion-dot" x="221" y="50" />
            <use href="#orion-star" x="196" y="50" />

            {/* N */}
            <path d="M 241,75 L 241,25 L 281,75 L 281,25" />
            <use href="#orion-dot" x="241" y="75" />
            <use href="#orion-dot" x="241" y="25" />
            <use href="#orion-dot" x="281" y="75" />
            <use href="#orion-star" x="281" y="25" />
        </svg>
    )
}
