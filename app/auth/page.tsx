'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubscribe = async () => {
        // Basic regex check before API call
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
             setErrorMessage('Please enter a valid email');
             setStatus('error');
             return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else if (res.status === 409) {
                setStatus('error');
                setErrorMessage('Email already subscribed.');
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Try again.');
            }

        } catch {
             setStatus('error');
             setErrorMessage('Something went wrong. Try again.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubscribe();
    };

    return (
        <div className="min-h-screen bg-bg text-text-DEFAULT flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-bright/5 blur-[120px]" />
                <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-red-core/10 blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-red-deep/20 blur-[120px]" />
                
                {/* Subtle Grid */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-border-DEFAULT) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-DEFAULT) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Back Home Link */}
            <Link
                href="/"
                className={cn(
                    "absolute top-8 left-8 z-20 group inline-flex items-center gap-2 px-4 py-2 rounded-full",
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

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md z-10"
            >
                {/* Logo */}
                <div className="text-center mb-12">
                     <Link
                        href="/"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 300,
                            fontSize: '42px',
                            color: 'var(--color-text-DEFAULT)',
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                        }}
                    >
                        Orion<span style={{ color: 'var(--color-red-bright)' }}>.</span>
                    </Link>
                </div>

                <div className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 opacity-50 rounded-tl-[24px]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 opacity-50 rounded-br-[24px]" />
                    
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="font-display text-3xl font-light mb-2">
                                Stay Informed
                            </h1>
                            <p className="font-ui text-xs text-text-mid uppercase tracking-widest">
                                Join the newsletter
                            </p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-ui text-[10px] text-text-mid uppercase tracking-widest ml-1">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className={cn(
                                    "w-full bg-[#030101] border rounded-xl px-4 py-3 min-h-[52px] text-sm text-text-DEFAULT placeholder:text-text-low focus:outline-none transition-colors font-ui",
                                    status === 'error' ? "border-red-bright focus:border-red-bright" : "border-white/10 focus:border-red-core/50 focus:bg-black"
                                )}
                            />
                            {status === 'error' && (
                                <p className="text-red-bright text-xs font-ui mt-2 ml-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    {errorMessage}
                                </p>
                            )}
                            {status === 'success' && (
                                <p className="text-green-500 text-xs font-ui mt-2 ml-1 flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Subscribed! Check your email.
                                </p>
                            )}
                        </div>

                        <div className="pt-4">
                            <button 
                                onClick={handleSubmit}
                                disabled={status === 'loading'}
                                className="w-full bg-red-core hover:bg-red-bright disabled:opacity-50 disabled:cursor-not-allowed text-text-DEFAULT font-ui text-xs uppercase tracking-[0.1em] py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(192,40,42,0.15)] hover:shadow-[0_0_30px_rgba(229,48,48,0.3)] relative overflow-hidden group min-h-[52px]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            Subscribe
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer text */}
                <div className="mt-12 text-center text-text-low font-ui text-[10px] flex items-center justify-center gap-4">
                    <Link href="#" className="hover:text-text-mid transition-colors">Privacy Policy</Link>
                    <span className="w-1 h-1 rounded-full bg-border-DEFAULT" />
                    <Link href="#" className="hover:text-text-mid transition-colors">Terms of Service</Link>
                </div>
            </motion.div>
        </div>
    )
}
