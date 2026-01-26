'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
    whatsappUrl?: string;
}

const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#resultados', label: 'Resultados' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
];

export function Navbar({ whatsappUrl }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800/50 shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-2"
                        >
                            <span className="text-xl font-bold text-white">
                                Igor <span className="text-primary-400">Aires</span>
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-zinc-400 hover:text-white font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <a
                                href={whatsappUrl || '#contato'}
                                target={whatsappUrl ? '_blank' : undefined}
                                rel={whatsappUrl ? 'noopener noreferrer' : undefined}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <Calendar size={16} />
                                Agendar
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-lg pt-20 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 p-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-xl text-zinc-300 hover:text-primary-400 font-medium transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href={whatsappUrl || '#contato'}
                                target={whatsappUrl ? '_blank' : undefined}
                                rel={whatsappUrl ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-full text-white font-semibold text-lg"
                            >
                                <Calendar size={20} />
                                Agendar Consulta
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
