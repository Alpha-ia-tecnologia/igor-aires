'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
    phoneNumber: string;
    message?: string;
}

export function FloatingWhatsApp({
    phoneNumber,
    message = 'Olá! Gostaria de agendar uma consulta.'
}: FloatingWhatsAppProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [hasShownTooltip, setHasShownTooltip] = useState(false);

    useEffect(() => {
        // Show button after scrolling down a bit
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Show tooltip after 3 seconds if hasn't been shown yet
        if (isVisible && !hasShownTooltip) {
            const timer = setTimeout(() => {
                setIsTooltipVisible(true);
                setHasShownTooltip(true);
                // Auto-hide after 5 seconds
                setTimeout(() => setIsTooltipVisible(false), 5000);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, hasShownTooltip]);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute bottom-full right-0 mb-3 w-64"
                            >
                                <div className="relative bg-white rounded-xl p-4 shadow-xl">
                                    <button
                                        onClick={() => setIsTooltipVisible(false)}
                                        className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-600"
                                    >
                                        <X size={16} />
                                    </button>
                                    <p className="text-zinc-700 text-sm font-medium pr-4">
                                        👋 Olá! Posso ajudar você a agendar sua consulta?
                                    </p>
                                    {/* Arrow */}
                                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110"
                    >
                        {/* Ping animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping" />

                        {/* Icon */}
                        <MessageCircle className="w-7 h-7 text-white relative z-10" fill="currentColor" />
                    </a>

                    {/* Label on hover */}
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="whitespace-nowrap bg-zinc-900 text-white text-sm font-medium px-3 py-2 rounded-lg">
                            Fale conosco
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
