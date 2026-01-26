'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClientConfig } from '@/config/clients';
import { ThemeToggle } from '@/ui/common/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '@/ui/landing/Navbar';
import { HeroSection } from '@/ui/landing/HeroSection';
import { ServicesSection } from '@/ui/landing/ServicesSection';
import { ResultsSection } from '@/ui/landing/ResultsSection';
import { AboutSection } from '@/ui/landing/AboutSection';
import { TestimonialsSection } from '@/ui/landing/TestimonialsSection';
import { FAQSection } from '@/ui/landing/FAQSection';
import { ContactSection } from '@/ui/landing/ContactSection';
import { LandingFooter } from '@/ui/landing/LandingFooter';
import { FloatingWhatsApp } from '@/ui/landing/FloatingWhatsApp';

interface LandingPageTemplateProps {
    client: ClientConfig;
}

// WEBFIT Section Component
function WebfitSection() {
    return (
        <section className="py-20 bg-zinc-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.03),transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-800 to-emerald-950/30 border border-zinc-700 p-8 md:p-12">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-60 h-60 bg-[#CCFF00]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            {/* Left Content */}
                            <div className="flex-1">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-full mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
                                    </span>
                                    <span className="text-[#CCFF00] text-sm font-medium">Novo Projeto</span>
                                </div>

                                {/* Logo */}
                                <div className="flex items-center gap-3 mb-6">
                                    <Image
                                        src="/images/webfit-logo.png"
                                        alt="WEBFIT"
                                        width={180}
                                        height={60}
                                        className="h-12 w-auto"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Saúde Preditiva com IA
                                </h3>
                                <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed">
                                    Estou desenvolvendo o <strong className="text-white">WEBFIT</strong> — um Super App que une
                                    <span className="text-[#CCFF00]"> nutrição de precisão</span>,
                                    <span className="text-blue-400"> treino inteligente</span> e
                                    <span className="text-purple-400"> coaching multimodal com IA</span>.
                                    Tudo que aprendi atendendo pacientes, agora em tecnologia.
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['📷 Snap Meal', '🎙️ Voice Logging', '🏋️ Treino Adaptativo', '🤖 Coach IA'].map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-sm text-zinc-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.a
                                    href="/webfit"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#CCFF00] text-zinc-900 font-bold rounded-xl hover:bg-[#b8e600] transition-all shadow-lg shadow-[#CCFF00]/20 text-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>🚀</span>
                                    Conhecer o WEBFIT
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                            </div>

                            {/* Right Image */}
                            <div className="flex-shrink-0 hidden md:block">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-[#CCFF00]/20 rounded-full blur-2xl" />
                                    <Image
                                        src="/images/hero-nutrition-ai.png"
                                        alt="WEBFIT App Preview"
                                        width={300}
                                        height={300}
                                        className="relative rounded-2xl shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function LandingPageTemplate({ client }: LandingPageTemplateProps) {
    const { isDark, toggle, mounted } = useTheme();
    const profile = client.content.profile;
    const footerConfig = client.content.footer;

    // Extract WhatsApp URL from links if available
    const whatsappUrl = client.content.links?.find(
        link => link.url?.includes('whatsapp') || link.url?.includes('wa.me')
    )?.url || 'https://api.whatsapp.com/send/?phone=559899074282&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.';

    // Phone number for floating button
    const phoneNumber = '559899074282';

    if (!profile) {
        return <div>Perfil não configurado</div>;
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Fixed Navbar */}
            <Navbar whatsappUrl={whatsappUrl} />

            {/* Theme Toggle */}
            {mounted && <ThemeToggle isDark={isDark} toggleTheme={toggle} />}

            {/* Hero Section */}
            <HeroSection
                profile={profile}
                whatsappUrl={whatsappUrl}
                appointmentUrl="#servicos"
            />

            {/* Services Section */}
            <ServicesSection ctaUrl="#resultados" />

            {/* Results/Before-After Section */}
            <ResultsSection />

            {/* About Section */}
            <AboutSection profile={profile} />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* WEBFIT Section */}
            <WebfitSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Section */}
            <ContactSection
                profile={profile}
                whatsappUrl={whatsappUrl}
                phoneNumber="(98) 99907-4282"
                email="contato@igoraires.com.br"
            />

            {/* Footer */}
            <LandingFooter
                copyrightText={footerConfig?.copyrightText || `© 2025 ${profile.name}. Todos os Direitos Reservados.`}
                developerCredit={footerConfig?.developerCredit}
            />

            {/* Floating WhatsApp Button */}
            <FloatingWhatsApp
                phoneNumber={phoneNumber}
                message="Olá! Vi seu site e gostaria de agendar uma consulta."
            />
        </div>
    );
}

