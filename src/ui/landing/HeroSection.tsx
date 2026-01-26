'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '@/lib/types';
import { Calendar, MessageCircle, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  profile: ProfileData;
  whatsappUrl?: string;
  appointmentUrl?: string;
}

export function HeroSection({ profile, whatsappUrl, appointmentUrl }: HeroSectionProps) {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/20 to-zinc-950" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative mx-auto mb-8 w-40 h-40 md:w-52 md:h-52"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-primary-400 via-emerald-500 to-primary-600 rounded-full blur-lg opacity-60 animate-pulse" />
          <div className="relative w-full h-full rounded-full p-1.5 bg-zinc-900 overflow-hidden shadow-2xl">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Online Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-400">Disponível</span>
          </div>
        </motion.div>

        {/* Name & Role */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            🔥 Vagas Limitadas para Janeiro
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Transforme Seu Corpo em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
              90 Dias
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Emagreça de forma saudável <span className="text-primary-400 font-semibold">sem dietas restritivas</span> com acompanhamento nutricional personalizado
          </p>
          <p className="text-zinc-500 max-w-xl mx-auto mb-4 flex items-center justify-center gap-2">
            <span className="text-primary-400">✓</span> +500 pacientes atendidos
            <span className="mx-2">•</span>
            <span className="text-primary-400">✓</span> 5+ anos de experiência
          </p>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-10">
            Por <span className="text-white font-semibold">{profile.name}</span>, Nutricionista especialista em Alta Performance
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>Agende sua Consulta</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href={appointmentUrl || '#servicos'}
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 hover:border-primary-500/50 rounded-full text-zinc-200 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
          >
            <Calendar size={22} />
            <span>Ver Serviços</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-primary-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
