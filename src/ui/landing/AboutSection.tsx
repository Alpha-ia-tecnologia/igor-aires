'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '@/lib/types';
import { Award, Users, Calendar, MapPin } from 'lucide-react';

interface Stat {
    icon: React.ReactNode;
    value: string;
    label: string;
}

const defaultStats: Stat[] = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Pacientes Atendidos' },
    { icon: <Award className="w-6 h-6" />, value: '5+', label: 'Anos de Experiência' },
    { icon: <Calendar className="w-6 h-6" />, value: '1000+', label: 'Consultas Realizadas' },
];

interface AboutSectionProps {
    profile: ProfileData;
    stats?: Stat[];
    extendedBio?: string;
}

export function AboutSection({ profile, stats = defaultStats, extendedBio }: AboutSectionProps) {
    const bio = extendedBio || `Sou ${profile.name}, nutricionista especializado em ajudar pessoas a transformarem suas vidas através de uma alimentação equilibrada e personalizada. 
  
Minha missão é desmistificar a nutrição e mostrar que comer bem pode ser prazeroso, prático e sustentável. Acredito que cada pessoa é única e merece um plano alimentar que respeite sua rotina, preferências e objetivos.

Com formação sólida e experiência em diversas áreas da nutrição, ofereço um atendimento humanizado e baseado em evidências científicas, sempre buscando os melhores resultados para meus pacientes.`;

    return (
        <section id="sobre" className="relative py-24 bg-zinc-900/50">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/30 to-emerald-600/20 rounded-3xl blur-2xl" />
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800">
                                <img
                                    src={profile.avatarUrl}
                                    alt={profile.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Floating Card - Location */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 md:right-6 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{profile.location.city}</p>
                                    <p className="text-zinc-400 text-sm">Atendimento Presencial</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary-400 font-semibold uppercase tracking-widest text-sm">
                            Sobre Mim
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            Prazer, {profile.name.split(' ')[0]}!
                        </h2>

                        {/* Bio Text */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {bio.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-zinc-300 leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-800">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 mb-2">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-zinc-500 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
