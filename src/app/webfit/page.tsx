'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Camera, Mic, Brain, Activity, Shield, Smartphone,
    TrendingUp, Heart, Zap, Users, Bell, FileText,
    Apple, Dumbbell, MessageSquare, Lock, ChevronRight,
    Sparkles, Target, Clock, CheckCircle2, ArrowRight,
    Play, Star, Menu, X, ChevronDown, Eye, Droplets,
    Moon, Award, BarChart3, Headphones, Globe, Cpu,
    Fingerprint, CloudOff, MapPin
} from 'lucide-react';
import Image from 'next/image';

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
};

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Solução', href: '#solution' },
        { label: 'Tecnologia', href: '#technology' },
        { label: 'Gamificação', href: '#gamification' },
        { label: 'Sobre', href: '#about' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-webfit-darker/80 backdrop-blur-xl border-b border-webfit-border/50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <Image
                            src="/images/webfit-logo.png"
                            alt="WEBFIT"
                            width={120}
                            height={48}
                            className="h-10 w-auto"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-6 py-2.5 bg-webfit-neon text-webfit-darker font-semibold rounded-lg hover:bg-webfit-neon-dark transition-all text-sm">
                            Acesso Antecipado
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-webfit-dark border-t border-webfit-border"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container mx-auto px-6 py-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-zinc-400 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="w-full px-6 py-3 bg-webfit-neon text-webfit-darker font-semibold rounded-lg">
                                Acesso Antecipado
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

// ============================================
// HERO SECTION - Premium Design
// ============================================
function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-webfit-darker pt-20">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient orb */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-webfit-neon/10 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Floating particles - fixed positions to avoid hydration mismatch */}
                {[
                    { left: 10, top: 15, duration: 4, delay: 0 },
                    { left: 25, top: 45, duration: 3.5, delay: 0.5 },
                    { left: 40, top: 20, duration: 4.5, delay: 1 },
                    { left: 55, top: 70, duration: 3, delay: 1.5 },
                    { left: 70, top: 35, duration: 5, delay: 0.3 },
                    { left: 85, top: 60, duration: 4, delay: 0.8 },
                    { left: 15, top: 80, duration: 3.5, delay: 1.2 },
                    { left: 35, top: 55, duration: 4.2, delay: 0.7 },
                    { left: 60, top: 25, duration: 3.8, delay: 1.8 },
                    { left: 90, top: 85, duration: 4.5, delay: 0.2 },
                    { left: 5, top: 50, duration: 3.2, delay: 1.4 },
                    { left: 75, top: 10, duration: 4.8, delay: 0.6 },
                ].map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-webfit-neon/30 rounded-full"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-webfit-neon/10 border border-webfit-neon/30 rounded-full mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-webfit-neon opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-webfit-neon"></span>
                            </span>
                            <span className="text-webfit-neon text-sm font-medium">MVP em Desenvolvimento</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            <span className="block">Saúde</span>
                            <span className="text-webfit-neon">Preditiva</span>
                            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-zinc-300">com IA e Visão Computacional</span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            O <strong className="text-white">Super App</strong> que elimina a barreira de entrada na saúde através da
                            <strong className="text-webfit-neon"> automação inteligente</strong>. Nutrição de precisão,
                            treino adaptativo e coaching multimodal em uma única plataforma.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <motion.button
                                className="group px-8 py-4 bg-webfit-neon text-webfit-darker font-bold rounded-xl hover:bg-webfit-neon-dark transition-all flex items-center justify-center gap-3 text-lg shadow-[0_0_30px_rgba(204,255,0,0.3)]"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(204,255,0,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Zap size={22} />
                                Entrar na Lista de Espera
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                className="group px-8 py-4 border-2 border-webfit-border text-white rounded-xl hover:bg-webfit-card hover:border-webfit-neon/50 transition-all flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Play size={20} className="text-webfit-neon" />
                                Ver Demonstração
                            </motion.button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                            {[
                                { icon: Shield, label: 'FDA/SaMD', desc: 'Compliance' },
                                { icon: Lock, label: 'Privacy', desc: 'ε ≤ 1.0' },
                                { icon: Cpu, label: 'Edge ML', desc: 'On-device' },
                            ].map((item, i) => (
                                <div key={i} className="text-center p-3 bg-webfit-card/30 rounded-xl border border-webfit-border/50">
                                    <item.icon size={20} className="text-webfit-neon mx-auto mb-1" />
                                    <div className="text-xs text-white font-medium">{item.label}</div>
                                    <div className="text-[10px] text-zinc-500">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Hero Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-8 bg-gradient-radial from-webfit-neon/20 via-webfit-neon/5 to-transparent blur-2xl opacity-60" />

                            {/* Main image */}
                            <motion.div
                                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-webfit-neon/10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/hero-nutrition-ai.png"
                                    alt="WEBFIT - Nutrição com IA"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                />
                            </motion.div>

                            {/* Floating stats cards */}
                            <motion.div
                                className="absolute -left-8 top-1/4 bg-webfit-card/90 backdrop-blur-xl border border-webfit-border rounded-2xl p-4 shadow-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-webfit-neon/20 rounded-lg flex items-center justify-center">
                                        <Camera className="text-webfit-neon" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">≥ 80%</div>
                                        <div className="text-zinc-500 text-xs">Acurácia</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -right-4 bottom-1/4 bg-webfit-card/90 backdrop-blur-xl border border-webfit-border rounded-2xl p-4 shadow-xl"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <Mic className="text-emerald-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">≤ 1.5s</div>
                                        <div className="text-zinc-500 text-xs">Voice Logging</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-zinc-600" size={32} />
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// PROBLEM SECTION
// ============================================
function ProblemSection() {
    const stats = [
        { value: '60%', label: 'dos brasileiros', sublabel: 'com sobrepeso/obesidade' },
        { value: '85%', label: 'abandonam', sublabel: 'apps em 2 semanas' },
        { value: 'R$ 0', label: 'apps reconhecem', sublabel: 'culinária regional' },
    ];

    return (
        <section className="py-24 bg-webfit-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                        O DESAFIO
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Por que os apps atuais <span className="text-red-400">falham</span>?
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                        O Brasil enfrenta uma epidemia de obesidade e doenças crônicas. A principal barreira
                        para o tratamento preventivo é o alto <strong className="text-white">"atrito de uso"</strong> dos aplicativos.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-2xl p-8 text-center hover:border-red-500/40 transition-all"
                            variants={fadeInUp}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-red-400 mb-2">{stat.value}</div>
                            <div className="text-white font-medium mb-1">{stat.label}</div>
                            <div className="text-zinc-500 text-sm">{stat.sublabel}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Problems Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="bg-webfit-card/50 border border-webfit-border rounded-2xl p-8 hover:border-red-500/30 transition-all"
                        variants={fadeInLeft}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Globe className="text-red-400" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Desconexão Cultural</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Apps estrangeiros como MyFitnessPal não reconhecem a culinária local brasileira.
                                    Pratos maranhenses, nordestinos e regionais são ignorados, tornando o uso frustrante.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-webfit-card/50 border border-webfit-border rounded-2xl p-8 hover:border-red-500/30 transition-all"
                        variants={fadeInRight}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Brain className="text-red-400" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Insegurança Clínica</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    IAs genéricas "alucinam" dados nutricionais e não seguem diretrizes médicas.
                                    Isso oferece riscos reais à saúde dos usuários que confiam nas informações.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// SOLUTION SECTION - 3 PILLARS WITH IMAGES
// ============================================
function SolutionSection() {
    const pillars = [
        {
            icon: Camera,
            title: 'Nutrição sem Atrito',
            subtitle: 'Snap Meal + Voice Logging',
            description: 'Fotografe sua refeição e nossa IA identifica cada alimento com precisão. Ou simplesmente diga "comi dois ovos e uma fatia de pão" em português natural.',
            image: '/images/brazilian-food-scan.png',
            features: [
                { icon: Eye, text: 'Identificação de 3+ itens por foto' },
                { icon: Mic, text: 'Transcrição de voz em PT-BR' },
                { icon: CloudOff, text: 'Funciona offline' },
                { icon: MapPin, text: 'Culinária regional brasileira' },
            ],
            color: 'from-emerald-500 to-teal-500',
            accent: 'emerald'
        },
        {
            icon: Dumbbell,
            title: 'Treino Inteligente',
            subtitle: 'Adaptativo F.I.T.T-V.P.',
            description: 'Planos baseados nas diretrizes ACSM que se ajustam em tempo real. Se você dormiu mal ou está estressado, a IA reduz a intensidade automaticamente.',
            image: '/images/smart-training.png',
            features: [
                { icon: Heart, text: 'Monitoramento de HRV' },
                { icon: Moon, text: 'Ajuste baseado em sono' },
                { icon: Activity, text: 'Periodização adaptativa' },
                { icon: Play, text: 'Vídeos 4K demonstrativos' },
            ],
            color: 'from-blue-500 to-indigo-500',
            accent: 'blue'
        },
        {
            icon: MessageSquare,
            title: 'Coach Multimodal',
            subtitle: 'IA Verificada por Especialistas',
            description: 'Converse por texto ou voz com seu coach pessoal que correlaciona dieta e treino. Se a confiança for baixa, um nutricionista humano responde.',
            image: '/images/ai-coach.png',
            features: [
                { icon: Headphones, text: 'Chat texto e voz' },
                { icon: Users, text: 'Backup de nutricionistas' },
                { icon: TrendingUp, text: 'Previsão de platôs' },
                { icon: Bell, text: 'Lembretes inteligentes' },
            ],
            color: 'from-purple-500 to-pink-500',
            accent: 'purple'
        },
    ];

    return (
        <section id="solution" className="py-24 bg-webfit-darker relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <span className="inline-block px-4 py-1.5 bg-webfit-neon/10 border border-webfit-neon/30 rounded-full text-webfit-neon text-sm font-medium mb-6">
                        A SOLUÇÃO
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Os <span className="text-webfit-neon">3 Pilares</span> do WEBFIT
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                        Uma plataforma integral que resolve a fragmentação do cuidado unindo nutrição de precisão,
                        treinamento adaptativo e coaching inteligente.
                    </p>
                </motion.div>

                {/* Pillars */}
                <div className="space-y-32">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {/* Content */}
                            <motion.div
                                className={index % 2 === 1 ? 'lg:order-2' : ''}
                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                            >
                                <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${pillar.color} bg-opacity-10 rounded-full mb-6`}>
                                    <pillar.icon size={20} className="text-white" />
                                    <span className="text-white font-medium">{pillar.subtitle}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{pillar.title}</h3>
                                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">{pillar.description}</p>

                                <div className="grid grid-cols-2 gap-4">
                                    {pillar.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-webfit-card/50 rounded-xl border border-webfit-border/50">
                                            <div className={`w-8 h-8 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center`}>
                                                <feature.icon size={16} className="text-white" />
                                            </div>
                                            <span className="text-sm text-zinc-300">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                            >
                                <div className={`absolute -inset-4 bg-gradient-to-r ${pillar.color} opacity-20 blur-3xl rounded-3xl`} />
                                <div className="relative rounded-3xl overflow-hidden border border-webfit-border/50 shadow-2xl">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// ============================================
// TECHNOLOGY SECTION WITH IMAGE
// ============================================
function TechnologySection() {
    const technologies = [
        {
            icon: Brain,
            title: 'IA Híbrida e Segura',
            description: 'Modelos especializados com verificação por HealthBench'
        },
        {
            icon: Fingerprint,
            title: 'Differential Privacy',
            description: 'ε ≤ 1.0 para todas métricas agregadas'
        },
        {
            icon: Shield,
            title: 'Conformidade FDA/SaMD',
            description: 'PCCP e diretrizes ACSM implementados'
        },
        {
            icon: Cpu,
            title: 'Edge ML',
            description: 'Processamento local, sem upload de dados'
        },
        {
            icon: Activity,
            title: 'Health Connect',
            description: 'Integração nativa Google/Apple'
        },
        {
            icon: MapPin,
            title: 'Hiper-localização',
            description: 'Culinária regional Nordeste/Maranhão'
        },
    ];

    return (
        <section id="technology" className="py-24 bg-webfit-darker relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -inset-8 bg-webfit-neon/10 blur-3xl rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden border border-webfit-border/50 shadow-2xl">
                            <Image
                                src="/images/privacy-shield.png"
                                alt="Segurança e Privacidade WEBFIT"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            className="inline-block px-4 py-1.5 bg-webfit-neon/10 border border-webfit-neon/30 rounded-full text-webfit-neon text-sm font-medium mb-6"
                            variants={fadeInUp}
                        >
                            TECNOLOGIA
                        </motion.span>
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                            variants={fadeInUp}
                        >
                            Arquitetura de <span className="text-webfit-neon">IA Segura</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-zinc-400 mb-10"
                            variants={fadeInUp}
                        >
                            Desenvolvido com as mais rígidas diretrizes de privacidade e segurança clínica.
                            Seus dados nunca saem do dispositivo sem criptografia.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 p-4 bg-webfit-card/30 rounded-xl border border-webfit-border/50 hover:border-webfit-neon/30 transition-all"
                                    variants={fadeInUp}
                                >
                                    <div className="w-10 h-10 bg-webfit-neon/10 rounded-lg flex items-center justify-center shrink-0">
                                        <tech.icon className="text-webfit-neon" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{tech.title}</h4>
                                        <p className="text-sm text-zinc-500">{tech.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// GAMIFICATION SECTION
// ============================================
function GamificationSection() {
    return (
        <section id="gamification" className="py-24 bg-webfit-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            className="inline-block px-4 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium mb-6"
                            variants={fadeInUp}
                        >
                            GAMIFICAÇÃO
                        </motion.span>
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                            variants={fadeInUp}
                        >
                            Motivação que <span className="text-pink-400">funciona</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-zinc-400 mb-8"
                            variants={fadeInUp}
                        >
                            Sistema de recompensas baseado em evidências científicas de adesão.
                            Cada ação positiva gera XP e progresso visível, criando hábitos duradouros.
                        </motion.p>

                        <motion.div className="space-y-4" variants={staggerContainer}>
                            {[
                                { icon: Award, title: 'Missões Personalizadas', desc: 'Clusterização por perfil (idade, objetivo, engajamento)' },
                                { icon: BarChart3, title: 'Sistema de XP', desc: 'Fórmula baseada em consistência (dias consecutivos)' },
                                { icon: Users, title: 'Leaderboard por Afinidade', desc: 'Grupos equilibrados evitando efeito "baleia azul"' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 p-5 bg-webfit-card/50 rounded-xl border border-webfit-border/50"
                                    variants={fadeInUp}
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-sm text-zinc-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden border border-webfit-border/50 shadow-2xl">
                            <Image
                                src="/images/gamification.png"
                                alt="Gamificação WEBFIT"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// FOUNDER SECTION
// ============================================
function FounderSection() {
    return (
        <section className="py-24 bg-webfit-darker relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(204,255,0,0.03),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="text-center mb-12" variants={fadeInUp}>
                        <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
                            FUNDADOR
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Quem está por trás do <span className="text-webfit-neon">WEBFIT</span>?
                        </h2>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-webfit-card to-webfit-card/50 border border-webfit-border rounded-3xl p-8 md:p-12"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Avatar */}
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-webfit-neon to-emerald-500 rounded-full blur-lg opacity-30" />
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-webfit-neon/30">
                                    <Image
                                        src="/images/igor-aires.png"
                                        alt="Igor Aires"
                                        width={160}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Igor Aires
                                </h3>
                                <p className="text-webfit-neon font-medium mb-4">
                                    Nutricionista • Alta Performance e Emagrecimento
                                </p>
                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    Com anos de experiência ajudando pessoas a alcançarem seus objetivos de saúde,
                                    Igor decidiu criar o WEBFIT para democratizar o acesso à nutrição de precisão
                                    e treino inteligente através da tecnologia.
                                </p>

                                <motion.a
                                    href="/"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Users size={20} />
                                    Conhecer Igor Aires
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
    return (
        <section id="about" className="py-32 bg-webfit-darker relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-webfit-neon/10 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-webfit-neon/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/images/webfit-logo.png"
                        alt="WEBFIT"
                        width={180}
                        height={72}
                        className="mx-auto mb-10"
                    />

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                        Pronto para revolucionar sua{' '}
                        <span className="text-webfit-neon">jornada fitness</span>?
                    </h2>

                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Seja um dos primeiros a experimentar o futuro da saúde preditiva.
                        Entre na nossa lista de espera e receba acesso antecipado ao MVP.
                    </p>

                    <motion.button
                        className="group px-12 py-5 bg-webfit-neon text-webfit-darker font-bold rounded-2xl hover:bg-webfit-neon-dark transition-all flex items-center justify-center gap-3 text-xl mx-auto shadow-[0_0_50px_rgba(204,255,0,0.3)]"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 80px rgba(204,255,0,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Zap size={28} />
                        Quero Acesso Antecipado
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>

                    <p className="text-sm text-zinc-500 mt-8">
                        Sem compromisso • Dados protegidos • Cancele quando quiser
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        {[
                            '🔒 Differential Privacy',
                            '🏥 FDA/SaMD Compliance',
                            '🇧🇷 Culinária Regional',
                            '📱 Edge ML'
                        ].map((badge, i) => (
                            <span key={i} className="px-4 py-2 bg-webfit-card/50 rounded-full text-sm text-zinc-400 border border-webfit-border/50">
                                {badge}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
    return (
        <footer className="py-16 bg-webfit-darker border-t border-webfit-border">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Image
                            src="/images/webfit-logo.png"
                            alt="WEBFIT"
                            width={120}
                            height={48}
                            className="mb-4"
                        />
                        <p className="text-zinc-500 max-w-md mb-6">
                            WEBFIT: Saúde Preditiva com IA e Visão Computacional.
                            O Super App que une nutrição de precisão, treino adaptativo e coaching multimodal.
                        </p>
                        <div className="flex gap-4">
                            {['instagram', 'linkedin', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-webfit-card rounded-lg flex items-center justify-center text-zinc-400 hover:text-webfit-neon hover:bg-webfit-card-hover transition-all"
                                >
                                    <span className="sr-only">{social}</span>
                                    <Globe size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Produto</h4>
                        <ul className="space-y-3">
                            {['Funcionalidades', 'Tecnologia', 'Segurança', 'Roadmap'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-webfit-neon transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {['Privacidade', 'Termos de Uso', 'Compliance', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 hover:text-webfit-neon transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-webfit-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-zinc-600">
                            © 2026 WEBFIT. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-zinc-600 text-center md:text-right max-w-xl">
                            WEBFIT segue as diretrizes FDA para Software as a Medical Device (SaMD) e ACSM para prescrição de exercícios.
                            Consulte sempre um profissional de saúde.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ============================================
// MAIN PAGE
// ============================================
export default function WebfitPage() {
    return (
        <main className="min-h-screen bg-webfit-darker">
            <Navigation />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TechnologySection />
            <GamificationSection />
            <FounderSection />
            <CTASection />
            <Footer />
        </main>
    );
}

