'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true)

    const toggleMode = () => setIsSignIn(!isSignIn)

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
                className="absolute top-8 left-8 z-20 flex items-center gap-2 text-text-mid hover:text-text-DEFAULT transition-colors font-mono text-xs uppercase tracking-widest group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back
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

                {/* Form Container */}
                <div className="bg-bg-card/80 backdrop-blur-xl border border-border-DEFAULT rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-border-red opacity-50 rounded-tl-[24px]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-border-red opacity-50 rounded-br-[24px]" />
                    
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="font-display text-3xl font-light mb-2">
                                {isSignIn ? 'Welcome Back' : 'Join Orion'}
                            </h1>
                            <p className="font-mono text-xs text-text-mid uppercase tracking-widest">
                                {isSignIn ? 'Enter the system' : 'Request access'}
                            </p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        
                        <AnimatePresence mode="popLayout">
                            {!isSignIn && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    <label htmlFor="name" className="block font-mono text-[10px] text-text-mid uppercase tracking-widest ml-1">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-bg/50 border border-border-DEFAULT rounded-xl px-4 py-3 min-h-[52px] text-sm text-text-DEFAULT placeholder:text-text-low focus:outline-none focus:border-red-core/50 focus:bg-bg transition-colors font-mono"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-mono text-[10px] text-text-mid uppercase tracking-widest ml-1">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="name@example.com"
                                className="w-full bg-bg/50 border border-border-DEFAULT rounded-xl px-4 py-3 min-h-[52px] text-sm text-text-DEFAULT placeholder:text-text-low focus:outline-none focus:border-red-core/50 focus:bg-bg transition-colors font-mono"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label htmlFor="password" className="block font-mono text-[10px] text-text-mid uppercase tracking-widest">
                                    Password
                                </label>
                                {isSignIn && (
                                    <a href="#" className="font-mono text-[10px] text-red-core hover:text-red-bright transition-colors uppercase tracking-widest">
                                        Forgot?
                                    </a>
                                )}
                            </div>
                            <input 
                                type="password" 
                                id="password"
                                placeholder="••••••••"
                                className="w-full bg-bg/50 border border-border-DEFAULT rounded-xl px-4 py-3 min-h-[52px] text-sm text-text-DEFAULT placeholder:text-text-low focus:outline-none focus:border-red-core/50 focus:bg-bg transition-colors tracking-widest font-mono"
                            />
                        </div>

                        <div className="pt-4">
                            <button 
                                className="w-full bg-red-core hover:bg-red-bright text-text-DEFAULT font-mono text-xs uppercase tracking-[0.1em] py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(192,40,42,0.15)] hover:shadow-[0_0_30px_rgba(229,48,48,0.3)] relative overflow-hidden group min-h-[52px]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSignIn ? 'Sign In' : 'Create Account'}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="font-mono text-[11px] text-text-mid">
                            {isSignIn ? "Don't have an account?" : "Already have an account?"}
                            <button 
                                onClick={toggleMode}
                                className="ml-2 text-text-DEFAULT hover:text-red-bright transition-colors uppercase tracking-wide focus:outline-none"
                            >
                                {isSignIn ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Footer text */}
                <div className="mt-12 text-center text-text-low font-mono text-[10px] flex items-center justify-center gap-4">
                    <Link href="#" className="hover:text-text-mid transition-colors">Privacy Policy</Link>
                    <span className="w-1 h-1 rounded-full bg-border-DEFAULT" />
                    <Link href="#" className="hover:text-text-mid transition-colors">Terms of Service</Link>
                </div>
            </motion.div>
        </div>
    )
}
