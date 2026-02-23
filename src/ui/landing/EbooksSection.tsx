'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Ebook {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    purchaseUrl: string;
    badge?: string;
    price?: string;
}

const defaultEbooks: Ebook[] = [
    {
        id: '1',
        title: 'Compêndio de Nutrição Clínica',
        subtitle: 'Igor Aires',
        description: 'Este é o guia completo que você precisa para entender como a alimentação impacta diretamente seu corpo, sua composição corporal e sua longevidade.',
        image: '/images/ebook-nutricao-clinica.png',
        purchaseUrl: 'https://payfast.greenn.com.br/t6djkev',
        badge: 'Mais Vendido',
    },
    {
        id: '2',
        title: 'Shape Definido O Ano Todo',
        subtitle: 'Igor Aires',
        description: 'Um guia passo a passo de como ficar trincado o ano todo e manter o shape de forma constante por longos períodos.',
        image: '/images/ebook-shape-definido.png',
        purchaseUrl: 'https://payfast.greenn.com.br/rdzgajr',
    },
    {
        id: '3',
        title: 'Manual de Manipulados',
        subtitle: 'Igor Aires',
        description: 'Domine a arte da prescrição inteligente com este guia técnico completo sobre formulações magistrais.',
        image: '/images/ebook-manual-manipulados.png',
        purchaseUrl: 'https://payfast.greenn.com.br/28fxrvf',
    },
    {
        id: '4',
        title: 'Potencialize Sua Caneta',
        subtitle: 'Igor Aires',
        description: 'Guia nutricional completo para uso inteligente de canetas como Mounjaro (tirzepatida), com estratégia e consistência.',
        image: '/images/ebook-potencialize-caneta.png',
        purchaseUrl: 'https://payfast.greenn.com.br/zwe4rcm',
        badge: 'Edição Premium',
    },
];

interface EbooksSectionProps {
    ebooks?: Ebook[];
}

export function EbooksSection({ ebooks = defaultEbooks }: EbooksSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 80,
                damping: 15,
            },
        },
    };

    return (
        <section id="ebooks" className="relative py-24 bg-zinc-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.06),transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-primary-400 font-semibold uppercase tracking-widest text-sm mb-4">
                        <BookOpen className="w-4 h-4" />
                        E-books
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Materiais Exclusivos
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Conhecimento transformado em guias práticos para sua evolução.
                        Conteúdo de qualidade para você aplicar no seu dia a dia.
                    </p>
                </motion.div>

                {/* Ebooks Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
                >
                    {ebooks.map((ebook) => (
                        <motion.a
                            key={ebook.id}
                            href={ebook.purchaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className="group relative w-full max-w-xs cursor-pointer"
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Card Container */}
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-800/95 to-zinc-900 border border-zinc-700/50 transition-all duration-500 group-hover:border-primary-500/50 group-hover:shadow-2xl group-hover:shadow-primary-500/10">

                                {/* Badge */}
                                {ebook.badge && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                                            {ebook.badge}
                                        </span>
                                    </div>
                                )}

                                {/* External Link Icon */}
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
                                        <ExternalLink className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />

                                    {/* Glow Effect on Hover */}
                                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500 z-5" />

                                    <Image
                                        src={ebook.image}
                                        alt={ebook.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-6 -mt-20">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors duration-300">
                                        {ebook.title}
                                    </h3>

                                    {ebook.subtitle && (
                                        <p className="text-primary-400 font-medium text-sm mb-3">
                                            {ebook.subtitle}
                                        </p>
                                    )}

                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {ebook.description}
                                    </p>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                                        {ebook.price && (
                                            <span className="text-2xl font-bold text-white">
                                                {ebook.price}
                                            </span>
                                        )}

                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                                            Comprar Agora
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                {/* Animated Border Glow */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-500/20 transition-colors duration-500 pointer-events-none" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-zinc-500 text-sm">
                        💳 Pagamento seguro • 📱 Acesso imediato após a compra • 📧 Suporte via e-mail
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
