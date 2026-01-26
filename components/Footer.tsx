import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pb-8 text-center"
        >
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium">
                © 2025 Igor Aires. Todos os Direitos Reservados.
            </p>

            {/* Nano Developer Credit - As requested */}
            <div className="developer-credit-container mt-4">
                <style>{`
                  .developer-credit {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0;
                  }
                  
                  .developer-credit a {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    color: #a0a0a0; 
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    transition: color 0.3s ease;
                  }
                  
                  .developer-credit a:hover {
                    color: #E0C56E;
                  }
                  
                  .developer-credit strong {
                    font-weight: 600;
                    color: #ccc;
                    transition: color 0.3s ease;
                  }

                  .developer-credit a:hover strong {
                    color: #fff;
                  }
                  
                  .cta-text {
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 0;
                    opacity: 0;
                    transition: max-width 0.5s ease-out, opacity 0.3s ease-in, margin-left 0.5s ease-out;
                  }
                  
                  .developer-credit a:hover .cta-text {
                    max-width: 200px;
                    opacity: 1;
                    margin-left: 4px;
                  }

                  .whatsapp-icon-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #E0C56E;
                    z-index: 1;
                  }
                  
                  .whatsapp-icon-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    transform: translate(-50%, -50%);
                    background-color: #E0C56E;
                    border-radius: 50%;
                    z-index: -1;
                    animation: pulse-icon 2.5s ease-out infinite;
                  }
                  
                  @keyframes pulse-icon {
                    0% {
                      transform: translate(-50%, -50%) scale(0.9);
                      opacity: 0.6;
                    }
                    70% {
                      transform: translate(-50%, -50%) scale(3);
                      opacity: 0;
                    }
                    100% {
                      transform: translate(-50%, -50%) scale(0.9);
                      opacity: 0;
                    }
                  }
                `}</style>

                <div className="developer-credit">
                  <a href="https://wa.me/5598988026776?text=Olá!%20Vi%20o%20site%20do%20Igor%20Aires%20desenvolvido%20pela%20Nano%20e%20fiquei%20interessado(a).%20Gostaria%20de%20um%20orçamento." target="_blank" title="Quer um site como este? Fale comigo!">
                    
                    <span>Desenvolvido por <strong>Nano</strong></span>
                    
                    <span className="cta-text">| Peça um Orçamento</span>
                    
                    <div className="whatsapp-icon-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.75 13.96c.25.13.42.2.55.38.13.18.13.35.08.53-.05.18-.25.33-.5.48-.25.15-.55.28-.9.4s-.75.2-1.2.23c-.45.03-.93.03-1.43-.03-.5-.05-1-.2-1.55-.43-.55-.2-1.1-.5-1.65-.85-.55-.35-1.05-.75-1.5-1.2-.45-.45-.85-.9-1.2-1.4-.35-.5-.65-1-.9-1.5s-.45-1-.6-1.5c-.15-.5-.2-1-.2-1.5s.03-1 .1-1.5c.08-.5.23-1 .45-1.45.2-.45.5-.85.8-1.2.3-.35.6-.65.9-.9.3-.25.55-.45.8-.6s.45-.25.6-.3c.15-.05.28-.05.38-.05.1 0 .2.03.25.08.05.05.1.1.1.2s-.03.2-.08.3c-.05.1-.1.18-.15.25-.05.08-.1.15-.15.2s-.1.1-.15.15c-.05.05-.08.1-.08.1s-.05.1-.05.15c0 .05.02.1.05.15.03.05.05.1.1.15s.1.1.15.15c.05.05.1.1.15.15s.1.1.15.15c.05.05.1.08.15.1.05.03.1.05.15.05s.12-.02.18-.05c.05-.03.1-.08.15-.13.05-.05.1-.1.15-.18.05-.08.1-.15.1-.25s.03-.15.05-.2c.03-.05.08-.1.13-.1s.12.03.18-.05c.05.03.1.08.15.13.05.05.08.13.1.2.03.08.05.18.05.28s0 .2-.03.3c-.03.1-.05.2-.1.3-.05.1-.1.2-.15.3s-.1.18-.15.25c-.05.08-.08.15-.08.23s.02.15.05.22c.03.08.08.13.15.18.08.05.15.1.25.13.1.03.2.05.3.05.15 0 .3-.03.45-.08.15-.05.3-.13.45-.23.15-.1.3-.2.4-.3s.2-.2.25-.3c.05-.1.1-.2.1-.3s0-.2-.05-.28c-.05-.08-.1-.15-.15-.2-.05-.05-.1-.1-.15-.15s-.1-.1-.1-.15c0-.05.02-.1.05-.13.03-.03.08-.05.13-.05.25 0 .5.07.7.2z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;