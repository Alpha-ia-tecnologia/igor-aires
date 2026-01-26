'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, Heart } from 'lucide-react';

// TikTok Icon
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

interface SocialLink {
    platform: string;
    url: string;
    icon: React.ReactNode;
}

interface LandingFooterProps {
    copyrightText?: string;
    socialLinks?: SocialLink[];
    developerCredit?: {
        enabled: boolean;
        whatsappUrl?: string;
        companyName?: string;
    };
}

const defaultSocialLinks: SocialLink[] = [
    {
        platform: 'Instagram',
        url: 'https://www.instagram.com/igorairesnutricionista/',
        icon: <Instagram size={20} />,
    },
    {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@igoraires5539',
        icon: <Youtube size={20} />,
    },
    {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@igorairesnutricionista',
        icon: <TikTokIcon size={20} />,
    },
];

export function LandingFooter({
    copyrightText = '© 2025. Todos os Direitos Reservados.',
    socialLinks = defaultSocialLinks,
    developerCredit,
}: LandingFooterProps) {
    return (
        <footer className="relative bg-zinc-950 border-t border-zinc-800/50">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Social Links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 mb-8"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-primary-500/50 rounded-xl flex items-center justify-center text-zinc-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            title={link.platform}
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="w-24 h-px bg-zinc-800 mx-auto mb-8" />

                {/* Copyright */}
                <div className="text-center text-zinc-500 text-sm mb-6">
                    {copyrightText}
                </div>

                {/* Developer Credit */}
                {developerCredit?.enabled && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <a
                            href={developerCredit.whatsappUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-zinc-600 hover:text-primary-400 text-sm transition-colors duration-300"
                        >
                            <span>Desenvolvido com</span>
                            <Heart size={14} className="text-red-500 fill-red-500" />
                            <span>por</span>
                            <span className="font-semibold text-zinc-400 hover:text-white">
                                {developerCredit.companyName || 'Nano'}
                            </span>
                        </a>
                    </motion.div>
                )}
            </div>
        </footer>
    );
}
