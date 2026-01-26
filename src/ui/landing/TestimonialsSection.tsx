'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role?: string;
    content: string;
    rating: number;
    imageUrl?: string;
}

const defaultTestimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Marina Santos',
        role: 'Perdeu 15kg em 4 meses',
        content: 'O Igor mudou minha relação com a comida. Finalmente consegui emagrecer sem passar fome e mantendo uma alimentação que gosto. Recomendo demais!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    },
    {
        id: '2',
        name: 'Carlos Oliveira',
        role: 'Atleta amador',
        content: 'Como praticante de crossfit, precisava de uma nutrição específica para melhorar meu desempenho. Os resultados foram incríveis! Mais energia e melhor recuperação.',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
    },
    {
        id: '3',
        name: 'Ana Paula Ferreira',
        role: 'Empresária',
        content: 'O atendimento online foi perfeito para minha rotina corrida. O suporte pelo WhatsApp me ajuda muito a manter o foco. Já indiquei para várias amigas!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    },
];

interface TestimonialsSectionProps {
    testimonials?: Testimonial[];
}

export function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section id="depoimentos" className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-400 font-semibold uppercase tracking-widest text-sm">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        O que dizem meus pacientes
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Resultados reais de pessoas reais que transformaram suas vidas.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-400" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12"
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < current.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-xl md:text-2xl text-zinc-200 text-center leading-relaxed mb-8">
                                "{current.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                {current.imageUrl && (
                                    <img
                                        src={current.imageUrl}
                                        alt={current.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/30"
                                    />
                                )}
                                <div className="text-center md:text-left">
                                    <div className="text-white font-semibold">{current.name}</div>
                                    {current.role && (
                                        <div className="text-primary-400 text-sm">{current.role}</div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-primary-500/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-primary-500'
                                            : 'bg-zinc-600 hover:bg-zinc-500'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-primary-500/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
