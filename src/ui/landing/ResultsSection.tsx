'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, TrendingDown } from 'lucide-react';

interface Result {
    id: string;
    name: string;
    age?: number;
    beforeImage: string;
    afterImage: string;
    weightLost: string;
    duration: string;
    testimonial?: string;
}

const defaultResults: Result[] = [
    {
        id: '1',
        name: 'Marina S.',
        age: 32,
        beforeImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&h=500',
        afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&h=500',
        weightLost: '-15kg',
        duration: '4 meses',
        testimonial: 'Mudou minha vida! Me sinto mais disposta e confiante.',
    },
    {
        id: '2',
        name: 'Carlos O.',
        age: 28,
        beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&h=500',
        afterImage: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=400&h=500',
        weightLost: '-12kg',
        duration: '3 meses',
        testimonial: 'Ganhei massa muscular e perdi gordura ao mesmo tempo!',
    },
    {
        id: '3',
        name: 'Ana Paula F.',
        age: 45,
        beforeImage: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&h=500',
        afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=500',
        weightLost: '-20kg',
        duration: '6 meses',
        testimonial: 'Aos 45 anos, estou na melhor forma da minha vida!',
    },
];

interface ResultsSectionProps {
    results?: Result[];
}

export function ResultsSection({ results = defaultResults }: ResultsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAfter, setShowAfter] = useState(true);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % results.length);
        setShowAfter(true);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
        setShowAfter(true);
    };

    const current = results[currentIndex];

    return (
        <section id="resultados" className="relative py-24 bg-zinc-900/50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-950/30 via-transparent to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 font-semibold text-sm mb-4">
                        <TrendingDown size={16} />
                        Resultados Reais
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Transformações dos Meus Pacientes
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Casos reais de pessoas que transformaram suas vidas com acompanhamento nutricional personalizado.
                    </p>
                </motion.div>

                {/* Results Carousel */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Image Comparison */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-800">
                            {/* Before/After Toggle */}
                            <div className="absolute top-4 left-4 z-20 flex gap-2">
                                <button
                                    onClick={() => setShowAfter(false)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!showAfter
                                            ? 'bg-white text-zinc-900'
                                            : 'bg-zinc-800/80 text-white hover:bg-zinc-700'
                                        }`}
                                >
                                    Antes
                                </button>
                                <button
                                    onClick={() => setShowAfter(true)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${showAfter
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-zinc-800/80 text-white hover:bg-zinc-700'
                                        }`}
                                >
                                    Depois
                                </button>
                            </div>

                            {/* Images */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`${current.id}-${showAfter ? 'after' : 'before'}`}
                                    src={showAfter ? current.afterImage : current.beforeImage}
                                    alt={`${current.name} - ${showAfter ? 'Depois' : 'Antes'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Result Badge */}
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="bg-gradient-to-r from-primary-500 to-emerald-500 px-4 py-2 rounded-full">
                                    <span className="text-2xl font-bold text-white">{current.weightLost}</span>
                                </div>
                            </div>

                            {/* Verified Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <div className="bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="text-xs text-white font-medium">Caso Real</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-all"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-2">
                                {results.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setShowAfter(true);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary-500' : 'bg-zinc-600'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-all"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:pl-8"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {current.name}{current.age && `, ${current.age} anos`}
                                </h3>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-primary-400">
                                        <TrendingDown size={20} />
                                        <span className="font-semibold">{current.weightLost}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Clock size={20} />
                                        <span>{current.duration}</span>
                                    </div>
                                </div>

                                {current.testimonial && (
                                    <blockquote className="text-xl text-zinc-300 italic mb-8 border-l-4 border-primary-500 pl-4">
                                        "{current.testimonial}"
                                    </blockquote>
                                )}

                                {/* Stats Summary */}
                                <div className="grid grid-cols-3 gap-4 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-400">{results.length * 150}+</div>
                                        <div className="text-zinc-500 text-sm">Transformações</div>
                                    </div>
                                    <div className="text-center border-x border-zinc-700">
                                        <div className="text-2xl font-bold text-primary-400">98%</div>
                                        <div className="text-zinc-500 text-sm">Satisfação</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-400">4.9★</div>
                                        <div className="text-zinc-500 text-sm">Avaliação</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
