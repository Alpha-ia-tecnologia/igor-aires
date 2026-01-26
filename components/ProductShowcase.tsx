import React from 'react';
import { motion } from 'framer-motion';
import { ProductItem } from '../types';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { trackProductClick } from '../utils/analytics';

interface ProductShowcaseProps {
  products: ProductItem[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 mb-4 px-2 opacity-90">
        <ShoppingBag size={18} className="text-emerald-400" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
          Loja & Conteúdos
        </h2>
      </div>

      {/* Scroll Container - Hiding scrollbar for clean look but keeping functionality */}
      <div 
        className="flex overflow-x-auto gap-4 pb-6 px-2 snap-x snap-mandatory -mx-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <motion.a
            key={product.id}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductClick(product.id, product.title, product.url)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, type: "spring" }}
            whileTap={{ scale: 0.98 }}
            // Responsive width: 85% of screen width on mobile, 280px on desktop
            className="relative flex-shrink-0 w-[85vw] max-w-[280px] snap-center group"
          >
            <div className="h-full flex flex-col bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-emerald-900/20">
              
              {/* Cover Image Area - Slightly reduced height for better vertical density */}
              <div className="relative h-36 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                <img 
                  src={product.coverUrl} 
                  alt={product.title}
                  width={280}
                  height={144}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tag Badge */}
                {product.tag && (
                  <div className="absolute top-3 left-3 z-20 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm backdrop-blur-sm">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-emerald-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Footer: Price & Action */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-800">
                  <span className="text-white font-semibold">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>ACESSAR</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
        
        {/* Spacer for right padding in scroll */}
        <div className="w-2 flex-shrink-0" />
      </div>
    </div>
  );
};

export default ProductShowcase;