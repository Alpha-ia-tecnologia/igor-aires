'use client';

import React, { useState, useEffect } from 'react';

interface FooterProps {
  copyrightText?: string;
  developerCredit?: {
    enabled: boolean;
    whatsappUrl?: string;
    companyName?: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ 
  copyrightText = '© 2025. Todos os Direitos Reservados.',
  developerCredit 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sempre renderizar a mesma estrutura no servidor e cliente
  // Developer credit apenas aparece visualmente após mount no cliente usando CSS
  return (
    <footer className="mt-16 pb-8 text-center">
      <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium">
        {copyrightText}
      </p>

      {/* Developer Credit - Sempre renderizado para consistência servidor/cliente */}
      {developerCredit?.enabled && (
        <div 
          className={`developer-credit-container mt-4 ${!mounted ? 'developer-credit-hidden' : ''}`}
          suppressHydrationWarning
        >
          <div className="developer-credit">
            <a 
              href={developerCredit.whatsappUrl || '#'} 
              target="_blank" 
              title="Quer um site como este? Fale comigo!" 
              rel="noopener noreferrer"
            >
              <span>Desenvolvido por <strong>{developerCredit.companyName || 'Nano'}</strong></span>
              <span className="cta-text">| Peça um Orçamento</span>
              <div className="whatsapp-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.75 13.96c.25.13.42.2.55.38.13.18.13.35.08.53-.05.18-.25.33-.5.48-.25.15-.55.28-.9.4s-.75.2-1.2.23c-.45.03-.93.03-1.43-.03-.5-.05-1-.2-1.55-.43-.55-.2-1.1-.5-1.65-.85-.55-.35-1.05-.75-1.5-1.2-.45-.45-.85-.9-1.2-1.4-.35-.5-.65-1-.9-1.5s-.45-1-.6-1.5c-.15-.5-.2-1-.2-1.5s.03-1 .1-1.5c.08-.5.23-1 .45-1.45.2-.45.5-.85.8-1.2.3-.35.6-.65.9-.9.3-.25.55-.45.8-.6s.45-.25.6-.3c.15-.05.28-.05.38-.05.1 0 .2.03.25.08.05.05.1.1.1.2s-.03.2-.08.3c-.05.1-.1.18-.15.25-.05.08-.1.15-.15.2s-.1.1-.15.15c-.05.05-.08.1-.08.1s-.05.1-.05.15c0 .05.02.1.05.15.03.05.05.1.1.15s.1.1.15.15c.05.05.1.1.15.15s.1.1.15.15c.05.05.1.08.15.1.05.03.1.05.15.05s.12-.02.18-.05c.05-.03.1-.08.15-.13.05-.05.1-.1.15-.18.05-.08.1-.15.1-.25s.03-.15.05-.2c.03-.05.08-.1.13-.1s.12.03.18-.05c.05.03.1.08.15.13.05.05.08.13.1.2.03.08.05.18.05.28s0 .2-.03.3c-.03.1-.05.2-.1.3-.05.1-.1.2-.15.3s-.1.18-.15.25c-.05.08-.08.15-.08.23s.02.15.05.22c.03.08.08.13.15.18.08.05.15.1.25.13.1.03.2.05.3.05.15 0 .3-.03.45-.08.15-.05.3-.13.45-.23.15-.1.3-.2.4-.3s.2-.2.25-.3c.05-.1.1-.2.1-.3s0-.2-.05-.28c-.05-.08-.1-.15-.15-.2-.05-.05-.1-.1-.15-.15s-.1-.1-.1-.15c0-.05.02-.1.05-.13.03-.03.08-.05.13-.05.25 0 .5.07.7.2z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

