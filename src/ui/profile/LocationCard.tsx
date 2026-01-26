'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import type { ProfileData } from '@/lib/types';
import { trackMapClick } from '@/lib/analytics';
import { useTheme } from '@/hooks/useTheme';

interface LocationCardProps {
  profile: ProfileData;
}

export const LocationCard: React.FC<LocationCardProps> = ({ profile }) => {
  const { isDark } = useTheme();
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadMap(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
      }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const mapUrl = "https://maps.google.com/maps?q=-2.4919558724491817,-44.274956905450246&t=m&z=15&output=embed&iwloc=near";

  // Ajustar filtro do mapa baseado no tema
  const mapFilter = isDark 
    ? 'grayscale(100%) invert(100%) brightness(0.8) contrast(1.2)' 
    : 'grayscale(20%) brightness(1.05) contrast(1.1)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 w-full p-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/50"
    >
      <div 
        ref={mapContainerRef}
        className="relative h-64 w-full rounded-[1.2rem] overflow-hidden group"
      >
        {/* Map Embed Container */}
        <div className="absolute inset-0 bg-white dark:bg-zinc-900">
          {shouldLoadMap ? (
            <iframe 
              title="Location Map"
              src={mapUrl}
              className="w-full h-full border-0 transition-all duration-700 pointer-events-none"
              style={{ 
                filter: mapFilter,
                opacity: mapLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
              loading="lazy"
              onLoad={() => setMapLoaded(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-zinc-900">
              <div className="flex flex-col items-center gap-3 text-zinc-500 dark:text-zinc-400">
                <Loader2 className="animate-spin" size={24} />
                <span className="text-sm">Carregando mapa...</span>
              </div>
            </div>
          )}
          
          {shouldLoadMap && !mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 z-5">
              <div className="flex flex-col items-center gap-3 text-zinc-500 dark:text-zinc-400">
                <Loader2 className="animate-spin" size={24} />
                <span className="text-sm">Carregando mapa...</span>
              </div>
            </div>
          )}
        </div>

        {/* Emerald Tint Overlay */}
        <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
        
        {/* Bottom Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 dark:to-transparent z-20 pointer-events-none"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-zinc-900 dark:text-white flex justify-between items-end z-30">
          <div className="pointer-events-auto">
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2 text-zinc-900 dark:text-emerald-50">
              <MapPin size={20} className="text-emerald-600 dark:text-emerald-500" fill="currentColor" fillOpacity={0.2} /> 
              Atendimento Presencial
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm">{profile.location.address}</p>
            <p className="text-emerald-600 dark:text-emerald-400/80 text-[10px] font-bold mt-1 uppercase tracking-widest">{profile.location.city}</p>
          </div>
          
          <a 
            href={profile.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackMapClick}
            className="group/btn bg-emerald-500 text-white p-3 rounded-full hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/40 active:scale-95 z-10 flex items-center justify-center"
            aria-label="Traçar rota"
          >
            <Navigation size={20} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

