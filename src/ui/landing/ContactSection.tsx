'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { ProfileData } from '@/lib/types';

interface ContactSectionProps {
    profile: ProfileData;
    whatsappUrl?: string;
    phoneNumber?: string;
    email?: string;
}

export function ContactSection({ profile, whatsappUrl, phoneNumber, email }: ContactSectionProps) {
    return (
        <section id="contato" className="relative py-24 bg-zinc-900/50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent" />
            <motion.div
                className="absolute top-10 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary-400 font-semibold uppercase tracking-widest text-sm">
                        Vamos Conversar?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Pronto para transformar sua vida?
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10">
                        Entre em contato e agende sua consulta. O primeiro passo para uma vida mais saudável começa agora!
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href={whatsappUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                    >
                        <MessageCircle size={24} />
                        <span>Chamar no WhatsApp</span>
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-green-400/20"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </a>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-4"
                >
                    {/* Location */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mx-auto mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Localização</h3>
                        <p className="text-zinc-400 text-sm">{profile.location.address}</p>
                        <p className="text-zinc-400 text-sm">{profile.location.city}</p>
                    </div>

                    {/* Phone */}
                    {phoneNumber && (
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mx-auto mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-semibold mb-1">Telefone</h3>
                            <p className="text-zinc-400 text-sm">{phoneNumber}</p>
                        </div>
                    )}

                    {/* Email */}
                    {email && (
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mx-auto mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-semibold mb-1">E-mail</h3>
                            <p className="text-zinc-400 text-sm">{email}</p>
                        </div>
                    )}

                    {/* Appointment */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mx-auto mb-4">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Atendimento</h3>
                        <p className="text-zinc-400 text-sm">Presencial e Online</p>
                        <p className="text-zinc-400 text-sm">Seg - Sex</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
