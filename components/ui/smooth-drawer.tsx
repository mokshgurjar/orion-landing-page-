"use client";

import { Instagram, Github, Globe } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import type * as React from "react";
import { Button } from "@/components/ui/Button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

interface SmoothDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    triggerText?: string;
    title?: string;
    description?: string;
}

const drawerVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
        rotateX: 5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        y: 20,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
        },
    },
};

export default function SmoothDrawer({
    triggerText = "Join Community",
    title = "Let's Connect",
    description = "Join our community to get the latest updates on Orion and chat directly with the creators.",
}: SmoothDrawerProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button
                    className="w-auto px-8 py-[14px] border border-red-core text-red-bright font-mono text-[13px] uppercase tracking-[0.06em] bg-transparent hover:border-transparent hover:bg-white/5 hover:text-text-DEFAULT transition-all rounded-full cursor-pointer relative z-10"
                >
                    {triggerText}
                </button>
            </DrawerTrigger>
            <DrawerContent className="mx-auto max-w-fit rounded-t-3xl p-4 shadow-2xl border-t border-red-core/20 bg-bg-2">
                <motion.div
                    animate="visible"
                    className="mx-auto w-full max-w-[360px] space-y-4 flex flex-col items-center outline-none"
                    initial="hidden"
                    variants={drawerVariants as any}
                >
                    <motion.div variants={itemVariants as any} className="w-full">
                        <DrawerHeader className="space-y-2 px-0 pt-0 text-center flex flex-col items-center">
                            <DrawerTitle className="flex flex-col items-center gap-2 font-display font-light text-2xl tracking-wide text-text-DEFAULT">
                                <motion.div variants={itemVariants as any}>
                                    <div className="rounded-2xl bg-gradient-to-br from-red-core/20 to-bg p-2 shadow-inner ring-1 ring-red-core/30">
                                        <Globe className="w-6 h-6 text-red-bright" strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                                <motion.span variants={itemVariants as any}>
                                    {title}
                                </motion.span>
                            </DrawerTitle>
                            <motion.div variants={itemVariants as any}>
                                <DrawerDescription className="text-sm text-text-mid text-center leading-relaxed font-mono mt-0">
                                    {description}
                                </DrawerDescription>
                            </motion.div>
                        </DrawerHeader>
                    </motion.div>

                    <motion.div variants={itemVariants as any} className="w-full">
                        <DrawerFooter className="flex flex-col gap-3 px-2 pb-2">
                            <div className="flex flex-col gap-3 w-full">
                                <Link
                                    className="group relative inline-flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-red-bright to-red-core font-mono font-medium text-[13px] uppercase text-white tracking-widest shadow-lg shadow-red-core/20 transition-all duration-500 hover:from-red-500 hover:to-red-700 hover:shadow-red-core/40"
                                    href="https://discord.com"
                                    target="_blank"
                                >
                                    <FaDiscord className="w-4 h-4" />
                                    Discord
                                </Link>
                                <Link
                                    className="group relative inline-flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 font-mono font-medium text-[13px] uppercase text-white tracking-widest border border-zinc-700 shadow-lg transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                                    href="https://github.com"
                                    target="_blank"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </Link>
                                <Link
                                    className="group relative inline-flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 font-mono font-medium text-[13px] uppercase text-white tracking-widest shadow-lg transition-all duration-500 hover:opacity-90"
                                    href="https://www.instagram.com/cogneoverse?igsh=NTFhMDRnbG9yOTNy"
                                    target="_blank"
                                >
                                    <Instagram className="w-4 h-4" />
                                    Instagram
                                </Link>
                            </div>
                            <DrawerClose asChild>
                                <button
                                    className="mt-4 h-11 w-full rounded-xl border border-border-DEFAULT text-text-low font-mono text-[12px] uppercase tracking-widest transition-colors hover:bg-white/5 hover:text-text-mid"
                                >
                                    Maybe Later
                                </button>
                            </DrawerClose>
                        </DrawerFooter>
                    </motion.div>
                </motion.div>
            </DrawerContent>
        </Drawer>
    );
}
