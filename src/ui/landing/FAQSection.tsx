'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const defaultFAQs: FAQItem[] = [
    {
        id: '1',
        question: 'Como funciona a primeira consulta?',
        answer: 'Na primeira consulta, realizamos uma avaliação completa do seu histórico de saúde, hábitos alimentares, rotina e objetivos. Fazemos medidas antropométricas e, no atendimento presencial, bioimpedância. A partir disso, elaboramos um plano alimentar 100% personalizado.',
    },
    {
        id: '2',
        question: 'O atendimento online é tão eficaz quanto o presencial?',
        answer: 'Sim! O atendimento online oferece os mesmos resultados. Utilizamos ferramentas digitais para acompanhar sua evolução, envio de fotos de progresso, e mantemos contato constante via WhatsApp. Muitos pacientes preferem pela praticidade.',
    },
    {
        id: '3',
        question: 'Em quanto tempo vou ver resultados?',
        answer: 'Os primeiros resultados visíveis costumam aparecer entre 2 a 4 semanas, incluindo mais disposição, menos inchaço e melhora na qualidade do sono. Resultados estéticos significativos são notados a partir do segundo mês de acompanhamento.',
    },
    {
        id: '4',
        question: 'Vou precisar fazer dieta restritiva?',
        answer: 'Não! Trabalhamos com reeducação alimentar, não com dietas restritivas. O objetivo é criar hábitos saudáveis que você consiga manter a longo prazo, incluindo alimentos que você gosta na sua rotina.',
    },
    {
        id: '5',
        question: 'Com que frequência são os retornos?',
        answer: 'Os retornos são geralmente a cada 2 a 4 semanas, dependendo do seu caso e objetivos. Entre as consultas, você tem suporte via WhatsApp para tirar dúvidas e fazer ajustes quando necessário.',
    },
    {
        id: '6',
        question: 'Qual é o investimento para o acompanhamento?',
        answer: 'O valor varia de acordo com o tipo de acompanhamento escolhido (presencial ou online) e a duração do plano. Entre em contato pelo WhatsApp para conhecer as opções e condições especiais de pagamento.',
    },
];

interface FAQSectionProps {
    faqs?: FAQItem[];
}

export function FAQSection({ faqs = defaultFAQs }: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="relative py-24 bg-zinc-950">
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 font-semibold text-sm mb-4">
                        <HelpCircle size={16} />
                        Dúvidas Frequentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-zinc-400">
                        Encontre respostas para as dúvidas mais comuns sobre o atendimento.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                >
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
                        >
                            <button
                                onClick={() => toggle(faq.id)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="text-white font-medium pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 text-primary-400"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-5 pb-5 pt-0">
                                            <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <p className="text-zinc-500 mb-4">Ainda tem dúvidas?</p>
                    <a
                        href="#contato"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                        Fale conosco pelo WhatsApp
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
