'use client'

import React, { useEffect, useRef } from 'react';

interface OrionConstellationProps {
    onSettled?: () => void;
    startTrigger?: boolean;
}

export default function OrionConstellation({ onSettled, startTrigger = true }: OrionConstellationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const onSettledRef = useRef(onSettled);
    
    useEffect(() => {
        onSettledRef.current = onSettled;
    }, [onSettled]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        interface Star {
            x: number;
            y: number;
            size: number;
            alpha?: number;
            shimmer?: number;
            offset: number;
            id?: string;
        }

        let animationFrameId: number;
        let width: number = 0;
        let height: number = 0;
        let bgStars: Star[] = [];
        let constellationStars: Star[] = [];
        let state: 'STARS_IN' | 'CONNECTING' | 'SETTLED' = 'STARS_IN'; 
        let startTime = Date.now();

        // Constellation Data based on Orion structure
        const orionData = [
            { id: 'betelgeuse', rx: -0.18, ry: -0.35, size: 1.4 },
            { id: 'head',       rx: 0.05,  ry: -0.45, size: 0.6 },
            { id: 'bellatrix',  rx: 0.15,  ry: -0.28, size: 1.1 },
            { id: 'mintaka',    rx: 0.06,  ry: -0.05, size: 1.0 }, 
            { id: 'alnilam',    rx: -0.02, ry: -0.02, size: 1.2 }, 
            { id: 'alnitak',    rx: -0.1,  ry: 0.01,  size: 1.1 }, 
            { id: 'saiph',      rx: -0.15, ry: 0.35,  size: 1.0 },
            { id: 'rigel',      rx: 0.22,  ry: 0.28,  size: 1.6 }
        ];

        const connections = [
            ['betelgeuse', 'head'], ['head', 'bellatrix'],
            ['betelgeuse', 'alnitak'], ['bellatrix', 'mintaka'],
            ['alnitak', 'alnilam'], ['alnilam', 'mintaka'],
            ['alnitak', 'saiph'], ['mintaka', 'rigel'], ['saiph', 'rigel']
        ];

        function init() {
            if (!canvas) return;
            // Get parent element's dimensions
            const parent = canvas.parentElement;
            if (!parent) return;

            const dpr = window.devicePixelRatio || 1;
            width = parent.clientWidth;
            height = parent.clientHeight;
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            
            ctx?.scale(dpr, dpr);

            bgStars = [];
            constellationStars = [];

            // Background Stars (Small, sharp points) - Match Pipeline (55 stars)
            const count = 55;
            for (let i = 0; i < count; i++) {
                bgStars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: (i % 3) + 1, // Same sizing logic: 1 to 3
                    alpha: 0.29, // Midpoint between 0.08 and 0.5
                    shimmer: 0.21, // Swing size to reach 0.08 and 0.5
                    offset: Math.random() * Math.PI * 2
                });
            }

            // Map constellation to screen
            const centerX = width / 2;
            const centerY = height / 2;
            const scale = Math.min(width, height) * 0.8;

            orionData.forEach(s => {
                constellationStars.push({
                    ...s,
                    x: centerX + s.rx * scale,
                    y: centerY + s.ry * scale,
                    offset: Math.random() * Math.PI * 2
                });
            });
        }

        function animate() {
            if (!ctx) return;
            const now = Date.now();
            const elapsed = now - startTime;
            const time = now * 0.001;

            ctx.clearRect(0, 0, width, height);

            // 1. Logic Transitions
            if (state === 'STARS_IN' && elapsed > 1000) state = 'CONNECTING';
            if (state === 'CONNECTING' && elapsed > 4400) {
                state = 'SETTLED';
                if (onSettledRef.current) onSettledRef.current();
            }

            // 2. Draw Background Stars (Twinkling)
            bgStars.forEach(s => {
                // Slower twinkle, matching 4s duration (Math.PI / 2 roughly targets ~4s cycles)
                const baseAlpha = s.alpha || 0.29;
                const shimmerAmount = s.shimmer || 0.21;
                // use time instead of elapsed, slowed down
                const calculatedAlpha = baseAlpha + Math.sin(time * 0.785 + (s.offset || 0)) * shimmerAmount;
                const clampedAlpha = Math.max(0.08, Math.min(0.5, calculatedAlpha));
                
                ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`;
                ctx.fillRect(s.x, s.y, s.size, s.size);
            });

            // 3. Draw Lines
            if (state !== 'STARS_IN') {
                const connectProgress = Math.min(1, (elapsed - 1000) / 2500);
                connections.forEach((conn, i) => {
                    const s1 = constellationStars.find(s => s.id === conn[0]);
                    const s2 = constellationStars.find(s => s.id === conn[1]);
                    
                    if (!s1 || !s2) return;

                    const startAt = i / connections.length;
                    const endAt = (i + 0.8) / connections.length;
                    const p = state === 'SETTLED' ? 1 : Math.max(0, Math.min(1, (connectProgress - startAt) / (endAt - startAt)));

                    if (p > 0) {
                        ctx.lineWidth = state === 'SETTLED' ? 0.5 : 1.0;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${state === 'SETTLED' ? 0.05 : 0.35})`;
                        ctx.beginPath();
                        ctx.moveTo(s1.x, s1.y);
                        ctx.lineTo(s1.x + (s2.x - s1.x) * p, s1.y + (s2.y - s1.y) * p);
                        ctx.stroke();
                    }
                });
            }

            // 4. Draw Orion Stars
            const dimP = state === 'SETTLED' ? Math.min(1, (elapsed - 4400) / 2000) : 0;
            constellationStars.forEach(s => {
                const alpha = state === 'SETTLED' ? (1.0 * (1 - dimP) + 0.2 * dimP) : 1.0;
                const shimmer = Math.sin(time * 2 + s.offset) * 0.05;
                const currentSize = state === 'SETTLED' ? s.size : s.size * 1.5;

                // Sharp Core
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha + shimmer})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
                ctx.fill();

                // Fading Glow
                if (dimP < 1) {
                    const glowAlpha = 0.5 * (1 - dimP);
                    const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, currentSize * 5);
                    grad.addColorStop(0, `rgba(255, 255, 255, ${glowAlpha})`);
                    grad.addColorStop(1, 'transparent');
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, currentSize * 5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        
        if (startTrigger) {
            startTime = Date.now();
            animate();
        } else {
            // Draw initial frame if animation hasn't started
            if (width && height) {
                const initialTime = Date.now() * 0.001;
                ctx.clearRect(0, 0, width, height);
                bgStars.forEach(s => {
                    const baseAlpha = s.alpha || 0.29;
                    const shimmerAmount = s.shimmer || 0.21;
                    const calculatedAlpha = baseAlpha + Math.sin(initialTime * 0.785 + (s.offset || 0)) * shimmerAmount;
                    const clampedAlpha = Math.max(0.08, Math.min(0.5, calculatedAlpha));
                    
                    ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`;
                    ctx.fillRect(s.x, s.y, s.size, s.size);
                });
            }
        }

        window.addEventListener('resize', init);

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [startTrigger]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}
