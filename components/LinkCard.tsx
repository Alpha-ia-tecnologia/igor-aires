import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkItemData } from '../types';
import { ChevronRight, ChevronDown, ExternalLink, ArrowRight, ImageIcon } from 'lucide-react';
import { trackLinkClick, trackSubLinkClick } from '../utils/analytics';

interface LinkCardProps {
  item: LinkItemData;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;
  const hasSubLinks = item.subLinks && item.subLinks.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasSubLinks) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      // Track link click
      trackLinkClick(item.id, item.title, item.url);
    }
  };

  return (
    <div className="w-full">
        {/* Main Card */}
        <motion.a
        href={hasSubLinks ? undefined : item.url}
        onClick={handleClick}
        target={hasSubLinks ? undefined : "_blank"}
        rel={hasSubLinks ? undefined : "noopener noreferrer"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * index, type: "spring", stiffness: 300, damping: 24 }}
        whileHover={{ scale: 1.02, x: 0 }}
        whileTap={{ scale: 0.98 }}
        className={`
            group relative flex items-center w-full p-4 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer
            ${item.featured 
            ? 'bg-gradient-to-r from-emerald-700 to-primary-700 border-transparent shadow-lg shadow-primary-900/40' 
            : 'bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border-white/40 dark:border-emerald-900/20 hover:border-primary-500/30 dark:hover:border-primary-500/40 hover:shadow-md dark:hover:bg-zinc-800/90'
            }
        `}
        >
        {/* Icon Container */}
        <div className={`
            flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl mr-4 transition-colors
            ${item.featured 
            ? 'bg-white/20 text-white' 
            : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400'
            }
        `}>
            <Icon size={22} className={!item.featured && item.color ? item.color : ""} strokeWidth={1.5} />
        </div>

        {/* Text Content */}
        <div className="flex-grow min-w-0 pr-4 text-left">
            <h3 className={`font-semibold text-base truncate ${item.featured ? 'text-white' : 'text-zinc-800 dark:text-zinc-100'}`}>
            {item.title}
            </h3>
            {item.subtitle && (
            <p className={`text-xs truncate mt-0.5 ${item.featured ? 'text-emerald-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {item.subtitle}
            </p>
            )}
        </div>

        {/* Action Icon */}
        <div className={`
            flex-shrink-0 transition-transform duration-300
            ${item.featured ? 'text-white' : 'text-zinc-400 dark:text-zinc-600 group-hover:text-primary-500'}
        `}>
            {hasSubLinks ? (
                <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            ) : (
                item.featured ? <ExternalLink size={18} /> : <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            )}
        </div>
        </motion.a>

        {/* Dropdown / Sublinks */}
        <AnimatePresence>
            {hasSubLinks && isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="pt-3 space-y-3 pb-1 px-1">
                        {item.subLinks?.map((subLink, subIndex) => (
                            <motion.a
                                key={subLink.id}
                                href={subLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackSubLinkClick(subLink.id, subLink.title, subLink.url)}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: subIndex * 0.1 }}
                                className="flex items-center p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 hover:border-primary-500/50 hover:bg-white dark:hover:bg-zinc-800 transition-all group shadow-sm"
                            >
                                {/* Image Placeholder */}
                                <div className="w-16 h-16 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex-shrink-0 mr-4 overflow-hidden flex items-center justify-center">
                                    {subLink.imageUrl ? (
                                        <img 
                                          src={subLink.imageUrl} 
                                          alt={subLink.title}
                                          width={64}
                                          height={64}
                                          loading="lazy"
                                          className="w-full h-full object-cover" 
                                        />
                                    ) : (
                                        <ImageIcon className="text-zinc-400" size={20} />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-grow min-w-0">
                                    <h4 className="font-medium text-zinc-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {subLink.title}
                                    </h4>
                                    {subLink.subtitle && (
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                                            {subLink.subtitle}
                                        </p>
                                    )}
                                </div>
                                
                                <div className="ml-2 bg-zinc-200 dark:bg-zinc-700 p-1.5 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default LinkCard;