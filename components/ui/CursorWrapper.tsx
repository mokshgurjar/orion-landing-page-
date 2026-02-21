'use client'

import { useCursor } from '@/hooks/useCursor'

export default function CursorWrapper() {
    const { dotRef, ringRef } = useCursor()

    return (
        <>
            <div
                ref={dotRef}
                className="fixed w-2 h-2 bg-red-bright rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 [&.hover]:w-3.5 [&.hover]:h-3.5 max-md:hidden"
            />
            <div
                ref={ringRef}
                className="fixed w-9 h-9 border-[1.5px] border-red-bright rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-[width,height,opacity] duration-200 [&.hover]:w-[50px] [&.hover]:h-[50px] [&.hover]:opacity-80 max-md:hidden"
            />
        </>
    )
}
