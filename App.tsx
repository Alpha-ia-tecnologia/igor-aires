import React, { Suspense, useState, useEffect } from 'react';
import { Youtube, Instagram, BookOpen, Calendar, MessageCircle, Utensils, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { LinkItemData, ProfileData, ProductItem } from './types';
import { getInitialTheme, applyTheme, toggleTheme, Theme } from './utils/theme';

// Lazy load components below the fold for better initial load performance
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase'));
const LocationCard = React.lazy(() => import('./components/LocationCard'));

// Custom TikTok Icon Component since it's not in standard Lucide set used here
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- Configuration Data ---
const profileData: ProfileData = {
  name: "Igor Aires",
  role: "Alta Performance e Emagrecimento",
  bio: "Apaixonado por ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar.",
  avatarUrl: "/images/igor-aires.png",
  location: {
    address: "Av. dos Holandeses, 10 - Calhau",
    city: "São Luís, MA",
    mapUrl: "https://maps.app.goo.gl/7R9LQMiBCmAdzVPn8"
  }
};

const productsData: ProductItem[] = [
  {
    id: 'p1',
    title: "Desafio 30 Dias",
    description: "Protocolo completo de treino e dieta para secar em 4 semanas.",
    price: "R$ 97,00",
    coverUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400",
    url: "#",
    tag: "Mais Vendido"
  },
  {
    id: 'p2',
    title: "E-book: Receitas Fit",
    description: "50 receitas práticas, saborosas e anabólicas para o dia a dia.",
    price: "R$ 49,90",
    coverUrl: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=400",
    url: "#",
    tag: "E-book"
  },
  {
    id: 'p3',
    title: "Mentoria Alta Performance",
    description: "Acompanhamento exclusivo para destravar seus resultados.",
    price: "Vagas Limitadas",
    coverUrl: "https://images.unsplash.com/photo-1552674605-469555942c77?auto=format&fit=crop&q=80&w=400",
    url: "#",
    tag: "Lançamento"
  }
];

const linksData: LinkItemData[] = [
  {
    id: '1',
    title: "Agendar Consulta",
    subtitle: "Escolha a melhor modalidade para você.",
    url: "#",
    icon: Calendar,
    featured: true,
    subLinks: [
      {
        id: '1-a',
        title: "Clínica Nava (Presencial)",
        subtitle: "Atendimento completo com bioimpedância e avaliação física.",
        url: "https://maps.app.goo.gl/7R9LQMiBCmAdzVPn8",
        imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        id: '1-b',
        title: "Atendimento Online",
        subtitle: "Consultoria via videochamada para todo o mundo.",
        url: "https://api.whatsapp.com/send/?phone=559899074282&text=Ol%C3%A1%2C+gostaria+de+um+atendimento+nutricional+personalizado%21&type=phone_number&app_absent=0",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    id: '2',
    title: "Canal de Receitas",
    subtitle: "Aprenda a cozinhar de forma saudável no YouTube.",
    url: "https://www.youtube.com/@igoraires5539",
    icon: Youtube,
    color: "text-red-500" // Custom accent for YouTube
  },
  {
    id: '4',
    title: "Monte sua Marmita",
    subtitle: "Cardápio prático e saudável para a semana toda.",
    url: "https://api.whatsapp.com/send/?phone=559899074282&text=Ol%C3%A1%2C+gostaria+de+um+protocolo+de+marmitas+personalizadas%21&type=phone_number&app_absent=0",
    icon: Utensils,
  },
  {
    id: '5',
    title: "Clínica Nava",
    subtitle: "Conheça a estrutura do nosso atendimento.",
    url: "https://www.instagram.com/navaclinica/",
    icon: Building2,
  },
  {
    id: '6',
    title: "Instagram",
    subtitle: "Dicas diárias e resultados de pacientes.",
    url: "https://www.instagram.com/igorairesnutricionista/",
    icon: Instagram,
    color: "text-pink-500"
  },
  {
    id: '7',
    title: "TikTok",
    subtitle: "Conteúdos rápidos sobre nutrição.",
    url: "https://www.tiktok.com/@igorairesnutricionista",
    icon: TikTokIcon,
  },
];

// --- DNA Helix Background Component (Optimized) ---
const DnaBackground = React.memo(() => {
  // Reduced from 20 to 8 elements for better performance
  const elementCount = 8;
  const strandA = [...Array(elementCount)].map((_, i) => i);
  const strandB = [...Array(elementCount)].map((_, i) => i);

  // Check for reduced motion preference using useState/useEffect
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Memoize molecule positions to avoid recalculation
  const molecules = React.useMemo(() =>
    [...Array(3)].map((_, i) => ({
      id: i,
      width: 60 + i * 20,
      height: 60 + i * 20,
      top: 20 + i * 25,
      left: 15 + i * 30,
      duration: 20 + i * 5
    })), []
  );

  if (prefersReducedMotion) {
    // Simplified static version for accessibility
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-emerald-950/10 to-zinc-950 z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl z-0" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-emerald-950/10 to-zinc-950 z-10" />

      {/* Central Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl z-0" />

      <div className="absolute inset-0 flex items-center justify-center opacity-30 transform -rotate-12 scale-150 z-10">
        {/* DNA Strand A - Optimized with will-change */}
        {strandA.map((i) => (
          <motion.div
            key={`a-${i}`}
            className="absolute w-3 h-3 rounded-full bg-emerald-500 blur-sm"
            style={{
              top: `${(i * 12.5)}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              x: [-80, 80, -80],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25
            }}
          />
        ))}

        {/* DNA Strand B (Opposite Phase) */}
        {strandB.map((i) => (
          <motion.div
            key={`b-${i}`}
            className="absolute w-3 h-3 rounded-full bg-primary-400 blur-sm"
            style={{
              top: `${(i * 12.5)}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              x: [80, -80, 80],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25
            }}
          />
        ))}

        {/* Connecting Bonds (Lines) - Reduced and optimized */}
        {strandA.map((i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-emerald-500/30"
            style={{
              top: `${(i * 12.5) + 1}%`,
              left: '50%',
              willChange: 'transform, opacity',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25
            }}
          />
        ))}
      </div>

      {/* Ambient Floating Molecules - Reduced from 5 to 3 */}
      {molecules.map((mol) => (
        <motion.div
          key={`mol-${mol.id}`}
          className="absolute rounded-full border border-emerald-500/20"
          style={{
            width: mol.width,
            height: mol.height,
            top: `${mol.top}%`,
            left: `${mol.left}%`,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: mol.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
});

DnaBackground.displayName = 'DnaBackground';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    // Apply initial theme
    applyTheme(theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem('igor-aires-theme');
      if (!storedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-500 font-sans selection:bg-primary-500/30">

      <ThemeToggle isDark={theme === 'dark'} toggleTheme={handleToggleTheme} />

      <DnaBackground />

      {/* Main Container - Narrower max-width for "App" feel */}
      <main className="relative z-10 max-w-lg mx-auto px-5 py-10 md:py-16">

        <ProfileHeader profile={profileData} />

        {/* Stack Layout - No Grid */}
        <div className="flex flex-col gap-3 mt-4 mb-8">
          {linksData.map((item, index) => (
            <LinkCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Feature: Product Showcase (Vitrine) - Moved below links */}
        <Suspense fallback={
          <div className="w-full mb-6 flex items-center justify-center py-8">
            <div className="animate-pulse text-zinc-500">Carregando produtos...</div>
          </div>
        }>
          <ProductShowcase products={productsData} />
        </Suspense>

        {/* WEBFIT Section */}
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
                <img
                  src="/images/webfit-logo.png"
                  alt="WEBFIT"
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

        <Suspense fallback={
          <div className="mt-8 w-full flex items-center justify-center py-16">
            <div className="animate-pulse text-zinc-500">Carregando localização...</div>
          </div>
        }>
          <LocationCard profile={profileData} />
        </Suspense>

        <Footer />

      </main>
    </div>
  );
};

export default App;