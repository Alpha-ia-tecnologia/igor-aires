'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ClientConfig } from '@/config/clients';
import { ProfileHeader } from '@/ui/profile/ProfileHeader';
import { LinkCard } from '@/ui/cards/LinkCard';
import { Footer } from '@/ui/common/Footer';
import { ThemeToggle } from '@/ui/common/ThemeToggle';
import { DnaBackground } from '@/ui/layout/DnaBackground';
import { useTheme } from '@/hooks/useTheme';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Lazy load components below the fold
// ProductShowcase removido temporariamente - feature em desenvolvimento
const LocationCard = dynamic(() => import('@/ui/profile/LocationCard').then(mod => ({ default: mod.LocationCard })), {
  loading: () => (
    <div className="mt-8 w-full flex items-center justify-center py-16">
      <div className="animate-pulse text-zinc-500">Carregando localização...</div>
    </div>
  ),
});

interface SimpleLinksTemplateProps {
  client: ClientConfig;
}

// WEBFIT Section Component
function WebfitSection() {
  return (
    <motion.section
      className="mt-10 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/30 border border-zinc-800 p-6 md:p-8">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#CCFF00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
            </span>
            <span className="text-[#CCFF00] text-xs font-medium">Novo Projeto</span>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/webfit-logo.png"
              alt="WEBFIT"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Description */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Saúde Preditiva com IA
          </h3>
          <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
            Estou desenvolvendo o <strong className="text-white">WEBFIT</strong> — um Super App que une
            <span className="text-[#CCFF00]"> nutrição de precisão</span>,
            <span className="text-blue-400"> treino inteligente</span> e
            <span className="text-purple-400"> coaching multimodal com IA</span>.
            Tudo que aprendi atendendo pacientes, agora em tecnologia.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['📷 Snap Meal', '🎙️ Voice Logging', '🏋️ Treino Adaptativo', '🤖 Coach IA'].map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-300"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="/webfit"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#CCFF00] text-zinc-900 font-bold rounded-xl hover:bg-[#b8e600] transition-all shadow-lg shadow-[#CCFF00]/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🚀</span>
            Conhecer o WEBFIT
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default function SimpleLinksTemplate({ client }: SimpleLinksTemplateProps) {
  const { isDark, toggle, mounted } = useTheme();
  const profile = client.content.profile;
  const links = client.content.links || [];
  const footerConfig = client.content.footer;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-500 font-sans selection:bg-primary-500/30">
      {mounted && <ThemeToggle isDark={isDark} toggleTheme={toggle} />}
      <DnaBackground />

      {/* Main Container */}
      <main className="relative z-10 max-w-lg mx-auto px-5 py-10 md:py-16">
        {profile && <ProfileHeader profile={profile} />}

        {/* Stack Layout */}
        <div className="flex flex-col gap-3 mt-4 mb-8">
          {links.map((item, index) => (
            <LinkCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* WEBFIT Section */}
        <WebfitSection />

        {/* Location Card */}
        {profile && (
          <Suspense fallback={
            <div className="mt-8 w-full flex items-center justify-center py-16">
              <div className="animate-pulse text-zinc-500">Carregando localização...</div>
            </div>
          }>
            <LocationCard profile={profile} />
          </Suspense>
        )}

        <Footer
          copyrightText={footerConfig?.copyrightText || `© 2025. Todos os Direitos Reservados.`}
          developerCredit={footerConfig?.developerCredit}
        />
      </main>
    </div>
  );
}


