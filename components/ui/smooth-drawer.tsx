"use client";

import { Instagram, Github, Globe } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import type * as React from "react";
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

const drawerVariants: Variants = {
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

const itemVariants: Variants = {
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
                    className="w-auto px-8 py-[14px] border border-red-core text-red-bright font-ui text-[13px] uppercase tracking-[0.06em] bg-transparent hover:border-transparent hover:bg-white/5 hover:text-text-DEFAULT transition-all rounded-full cursor-pointer relative z-10"
                >
                    {triggerText}
                </button>
            </DrawerTrigger>
            <DrawerContent className="mx-auto max-w-fit rounded-t-3xl p-4 shadow-2xl border-t border-red-core/20 bg-bg-2">
                <motion.div
                    animate="visible"
                    className="mx-auto w-full max-w-[360px] space-y-4 flex flex-col items-center outline-none"
                    initial="hidden"
                    variants={drawerVariants}
                >
                    <motion.div variants={itemVariants} className="w-full">
                        <DrawerHeader className="space-y-2 px-0 pt-0 text-center flex flex-col items-center">
                            <DrawerTitle className="flex flex-col items-center gap-2 font-display font-light text-2xl tracking-wide text-text-DEFAULT">
                                <motion.div variants={itemVariants}>
                                    <div className="rounded-2xl bg-gradient-to-br from-red-core/20 to-bg p-2 shadow-inner ring-1 ring-red-core/30">
                                        <Globe className="w-6 h-6 text-red-bright" strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                                <motion.span variants={itemVariants}>
                                    {title}
                                </motion.span>
                            </DrawerTitle>
                            <motion.div variants={itemVariants}>
                                <DrawerDescription className="text-sm text-text-mid text-center leading-relaxed font-ui mt-0">
                                    {description}
                                </DrawerDescription>
                            </motion.div>
                        </DrawerHeader>
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full">
                        <DrawerFooter className="flex flex-col gap-3 px-2 pb-2">
                            <div className="flex flex-col gap-3 w-full">
                                <a
                                    className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-border-DEFAULT bg-bg-2 font-ui text-[11px] uppercase text-text-mid tracking-[0.14em] transition-all duration-300 hover:border-border-red hover:bg-red-dim hover:text-text-DEFAULT"
                                    href="https://discord.gg/4EHH7cp399"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaDiscord className="w-[16px] h-[16px] text-text-low group-hover:text-red-bright transition-colors duration-300" />
                                    Discord
                                </a>
                                <a
                                    className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-border-DEFAULT bg-bg-2 font-ui text-[11px] uppercase text-text-mid tracking-[0.14em] transition-all duration-300 hover:border-border-red hover:bg-red-dim hover:text-text-DEFAULT"
                                    href="https://github.com/Congneo-Org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-[16px] h-[16px] text-text-low group-hover:text-red-bright transition-colors duration-300" />
                                    GitHub
                                </a>
                                <a
                                    className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-border-DEFAULT bg-bg-2 font-ui text-[11px] uppercase text-text-mid tracking-[0.14em] transition-all duration-300 hover:border-border-red hover:bg-red-dim hover:text-text-DEFAULT"
                                    href="https://www.instagram.com/cogneoverse?igsh=NTFhMDRnbG9yOTNy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="w-[16px] h-[16px] text-text-low group-hover:text-red-bright transition-colors duration-300" />
                                    Instagram
                                </a>
                            </div>
                            <DrawerClose asChild>
                                <button
                                    className="mt-2 inline-flex h-[48px] w-full items-center justify-center rounded-full border border-border-DEFAULT bg-transparent font-ui text-[11px] uppercase text-text-low tracking-[0.14em] transition-all duration-300 hover:border-border-red hover:text-text-mid"
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
