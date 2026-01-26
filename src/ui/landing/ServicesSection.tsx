'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Activity, Users, Video, Dumbbell, Heart } from 'lucide-react';

interface Service {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
}

const defaultServices: Service[] = [
    {
        id: '1',
        icon: <Apple className="w-8 h-8" />,
        title: 'Reeducação Alimentar',
        description: 'Plano alimentar personalizado para alcançar seus objetivos de forma saudável e sustentável.',
    },
    {
        id: '2',
        icon: <Dumbbell className="w-8 h-8" />,
        title: 'Alta Performance',
        description: 'Nutrição esportiva para atletas e praticantes de atividade física que buscam resultados máximos.',
        highlight: true,
    },
    {
        id: '3',
        icon: <Activity className="w-8 h-8" />,
        title: 'Emagrecimento',
        description: 'Estratégias eficazes para perda de peso com saúde, sem dietas restritivas.',
    },
    {
        id: '4',
        icon: <Heart className="w-8 h-8" />,
        title: 'Saúde & Bem-estar',
        description: 'Acompanhamento nutricional para melhoria da qualidade de vida e prevenção de doenças.',
    },
    {
        id: '5',
        icon: <Video className="w-8 h-8" />,
        title: 'Atendimento Online',
        description: 'Consultas por videochamada para você que mora longe ou prefere a comodidade de casa.',
    },
    {
        id: '6',
        icon: <Users className="w-8 h-8" />,
        title: 'Acompanhamento Contínuo',
        description: 'Suporte via WhatsApp e retornos frequentes para garantir sua evolução.',
    },
];

interface ServicesSectionProps {
    services?: Service[];
    ctaUrl?: string;
}

export function ServicesSection({ services = defaultServices, ctaUrl }: ServicesSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="servicos" className="relative py-24 bg-zinc-950">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-950/20 via-transparent to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-400 font-semibold uppercase tracking-widest text-sm">
                        Serviços
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Como posso te ajudar?
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Atendimento personalizado para cada objetivo. Descubra qual modalidade é ideal para você.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer
                ${service.highlight
                                    ? 'bg-gradient-to-br from-primary-500/20 to-emerald-600/10 border-2 border-primary-500/50 hover:border-primary-400'
                                    : 'bg-zinc-900/50 border border-zinc-800 hover:border-primary-500/30'
                                }`}
                        >
                            {/* Highlight Badge */}
                            {service.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                                    Mais Procurado
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-colors duration-300
                ${service.highlight
                                    ? 'bg-primary-500/20 text-primary-400 group-hover:bg-primary-500/30'
                                    : 'bg-zinc-800 text-zinc-400 group-hover:bg-primary-500/20 group-hover:text-primary-400'
                                }`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Arrow */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href={ctaUrl || '#contato'}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-primary-500/50 rounded-full text-white font-semibold transition-all duration-300"
                    >
                        Quero saber mais
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
