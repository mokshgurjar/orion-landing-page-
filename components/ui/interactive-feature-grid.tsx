'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, ShieldCheck, DatabaseBackup, Wallet, SearchCheck, Layers, Cpu, Zap } from 'lucide-react';
import { FEATURES } from '@/lib/data';

// Maps our feature titles to Lucide icons
const featureAssets: Record<string, { icon: React.ReactNode }> = {
  'Deterministic Pipeline': {
    icon: <Target className="w-5 h-5" />
  },
  'IISG — Intent Contracts': {
    icon: <ShieldCheck className="w-5 h-5" />
  },
  '6-Layer Validation Gate': {
    icon: <Layers className="w-5 h-5" />
  },
  'Atomic Executor + Rollback': {
    icon: <DatabaseBackup className="w-5 h-5" />
  },
  'Cost Preview': {
    icon: <Wallet className="w-5 h-5" />
  },
  'Full AI Auditability': {
    icon: <SearchCheck className="w-5 h-5" />
  },
  'Planning Mode vs Fast Mode': {
    icon: <Zap className="w-5 h-5" />
  },
  'MCP Inside the Pipeline': {
    icon: <Cpu className="w-5 h-5" />
  }
};

export default function InteractiveFeatureGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedId(null); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full mt-12 font-mono text-text-DEFAULT relative">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {FEATURES.map((feature) => {
          const id = feature.title.toLowerCase().replace(/\s+/g, '-');
          const assets = featureAssets[feature.title] || {
             icon: <Zap className="w-5 h-5" />
          };

          return (
            <motion.div
              layoutId={`card-${id}`}
              key={id}
              onClick={() => setSelectedId(id)}
              className="cursor-pointer bg-[#0f0f11] rounded-[24px] overflow-hidden group border border-[#1a1a1d] hover:border-red-core/50 transition-colors shadow-lg"
            >
              {/* Card Content */}
              <div className="p-8 flex items-center gap-5 min-h-[140px]">
                <div className="p-4 bg-red-core/5 group-hover:bg-red-core/10 transition-colors text-red-bright border border-red-core/10 rounded-[16px] shrink-0">
                  {assets.icon}
                </div>
                <div>
                  <motion.h3 layoutId={`title-${id}`} className="text-[22px] font-display font-light text-text-DEFAULT mb-2">
                    {feature.title}
                  </motion.h3>
                  <motion.p layoutId={`subtitle-${id}`} className="text-red-bright/80 text-[10px] uppercase tracking-[0.1em] font-medium">
                    {feature.tag}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            {FEATURES.map((feature) => {
              const id = feature.title.toLowerCase().replace(/\s+/g, '-');
              if (id !== selectedId) return null;

              const assets = featureAssets[feature.title] || {
                 icon: <Zap className="w-6 h-6" />
              };

              return (
                <motion.div
                  layoutId={`card-${id}`}
                  key="modal"
                  className="bg-[#121214] rounded-[32px] overflow-hidden w-full max-w-2xl relative z-10 border border-border-DEFAULT shadow-[0_0_80px_rgba(229,48,48,0.05)] p-10"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <div className="p-4 bg-red-core/10 text-red-bright border border-red-core/20 shadow-[0_0_20px_rgba(229,48,48,0.1)] rounded-[16px] shrink-0">
                      {assets.icon}
                    </div>
                    <div>
                      <motion.h3 layoutId={`title-${id}`} className="text-3xl font-display font-medium text-text-DEFAULT mb-2">
                        {feature.title}
                      </motion.h3>
                      <motion.p layoutId={`subtitle-${id}`} className="text-red-bright text-[11px] uppercase tracking-[0.1em] font-medium mt-1">
                        {feature.tag}
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* Additional details that only appear in modal */}
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-5 border-t border-[#1a1a1d] pt-8"
                  >
                    <li className="text-text-low flex items-start gap-4 text-[14px] leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-red-core rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(229,48,48,0.5)]" />
                      <div>{feature.desc}</div>
                    </li>
                    <li className="text-text-low flex items-start gap-4 text-[14px] leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-red-deep rounded-full mt-2 shrink-0" />
                      <div><strong className="text-red-core font-medium">VS Competitor:</strong> {feature.vs}</div>
                    </li>
                  </motion.ul>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 px-8 py-4 bg-red-core text-text-DEFAULT rounded-full font-mono text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-red-bright hover:shadow-[0_0_20px_rgba(229,48,48,0.3)] transition-all w-full block text-center"
                    onClick={() => { setSelectedId(null); window.location.href='#download'; }}
                  >
                    Get Orion Now
                  </motion.button>

                  {/* Close button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                    className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 text-white/50 hover:text-white hover:bg-black/50 transition-colors backdrop-blur-md"
                  >
                    <X className="w-6 h-6" />
                  </button>

                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
