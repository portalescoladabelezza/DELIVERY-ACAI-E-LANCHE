import { useState } from "react";
import { categories, products, getWhatsappLink, businessConfig } from "../data";
import { MessageSquare, Heart, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtering products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  return (
    <section
      id="cardapio"
      className="py-20 bg-brand-black relative"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-brand-yellow font-mono text-xs uppercase tracking-widest font-bold">Faça sua escolha</p>
          <h2 id="categories-title" className="text-3xl sm:text-4xl font-display font-bold text-white mt-1 tracking-tight">
            Escolha sua categoria
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories Bar */}
        <div id="category-scroller-container" className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-16 scrollbar-thin scrollbar-track-brand-black scrollbar-thumb-brand-red/30 gap-3 px-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-dark text-brand-red border-2 border-brand-red scale-105"
                    : "bg-brand-dark text-neutral-400 hover:text-white border border-transparent"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Cardappio Grid Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 id="menu-title" className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white">
            Destaques do Dia
          </h3>
          <p id="menu-subtitle" className="text-neutral-400 mt-2 text-sm">
            Confira algumas de nossas opções de comida rápida preparadas com os melhores ingredientes.
          </p>
        </div>

        {/* Grid Area with animations */}
        <motion.div
          id="menu-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const waItemMsg = `Olá! Gostaria de pedir "${product.name}" que vi no site do Sabor Express. Está disponível?`;
              const itemWaUrl = getWhatsappLink(businessConfig.whatsappNumber, waItemMsg);

              return (
                <motion.div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-dark rounded-xl overflow-hidden border border-white/5 flex flex-col justify-between group shadow-lg hover:border-brand-red/40 transition-all duration-300"
                >
                  
                  {/* Photo Container */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-800 flex items-center justify-center">
                    {/* Background low-res shimmer */}
                    <div className="absolute inset-0 bg-neutral-900 pointer-events-none" />
                    
                    <img
                      id={`product-img-${product.id}`}
                      src={product.image}
                      alt={`${product.name} — ${product.description}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 text-xs text-neutral-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Tag label */}
                    {product.tag && (
                      <span
                        id={`product-tag-${product.id}`}
                        className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider shadow-md z-10 uppercase"
                      >
                        {product.tag}
                      </span>
                    )}

                    {/* Quick heart visual effect */}
                    <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/10 text-white/75 hover:text-brand-red transition-colors cursor-pointer z-10">
                      <Heart className="w-3.5 h-3.5 fill-current text-white/80 hover:text-brand-red" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & category tag */}
                      <div className="flex items-center justify-between gap-2">
                        <span id={`product-cat-label-${product.id}`} className="text-[9px] font-mono tracking-widest text-brand-red font-bold uppercase">
                          {product.category}
                        </span>
                        <span id={`product-price-${product.id}`} className="text-brand-yellow font-black font-mono text-sm sm:text-base">
                          R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      <h4 id={`product-name-${product.id}`} className="font-bold text-sm text-white mt-1.5 group-hover:text-brand-yellow transition-colors duration-200">
                        {product.name}
                      </h4>

                      <p id={`product-desc-${product.id}`} className="text-[11px] text-neutral-400 mt-1.5 line-clamp-2 leading-tight">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/5">
                      {/* Wide call to action button */}
                      <a
                        id={`product-order-btn-${product.id}`}
                        href={itemWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-black text-[10px] tracking-wider uppercase py-2.5 px-3 rounded shadow transition-all duration-150"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        Pedir no WhatsApp
                      </a>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center bg-brand-dark rounded-2xl border border-white/5">
              <AlertCircle className="w-12 h-12 text-brand-red mx-auto opacity-70" />
              <p className="text-gray-300 font-display font-medium text-lg mt-4">Nenhum produto encontrado nesta categoria.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-brand-yellow hover:underline mt-2 text-sm font-mono"
              >
                Ver tudo
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
