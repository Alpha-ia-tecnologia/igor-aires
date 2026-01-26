'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export const DnaBackground = React.memo(() => {
    const elementCount = 8;
    const strandA = [...Array(elementCount)].map((_, i) => i);
    const strandB = [...Array(elementCount)].map((_, i) => i);
    
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
        
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const molecules = useMemo(() => 
        [...Array(3)].map((_, i) => ({
            id: i,
            width: 60 + i * 20,
            height: 60 + i * 20,
            top: 20 + i * 25,
            left: 15 + i * 30,
            duration: 20 + i * 5
        })), []
    );

    if (prefersReducedMotion) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-emerald-950/10 to-zinc-950 z-10" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl z-0" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-emerald-950/10 to-zinc-950 z-10" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl z-0" />

            <div className="absolute inset-0 flex items-center justify-center opacity-30 transform -rotate-12 scale-150 z-10">
                {strandA.map((i) => (
                    <motion.div
                        key={`a-${i}`}
                        className="absolute w-3 h-3 rounded-full bg-emerald-500 blur-sm"
                        style={{
                            top: `${(i * 12.5)}%`,
                            willChange: 'transform, opacity',
                        }}
                        animate={{
                            x: [-80, 80, -80],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25
                        }}
                    />
                ))}

                {strandB.map((i) => (
                    <motion.div
                        key={`b-${i}`}
                        className="absolute w-3 h-3 rounded-full bg-primary-400 blur-sm"
                        style={{
                            top: `${(i * 12.5)}%`,
                            willChange: 'transform, opacity',
                        }}
                        animate={{
                            x: [80, -80, 80],
                            opacity: [0.7, 0.3, 0.7],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25
                        }}
                    />
                ))}

                {strandA.map((i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-[1px] bg-emerald-500/30"
                        style={{
                            top: `${(i * 12.5) + 1}%`,
                            left: '50%',
                            willChange: 'transform, opacity',
                        }}
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25
                        }}
                    />
                ))}
            </div>
            
            {molecules.map((mol) => (
                <motion.div
                    key={`mol-${mol.id}`}
                    className="absolute rounded-full border border-emerald-500/20"
                    style={{
                        width: mol.width,
                        height: mol.height,
                        top: `${mol.top}%`,
                        left: `${mol.left}%`,
                        willChange: 'transform',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: mol.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
});

DnaBackground.displayName = 'DnaBackground';

