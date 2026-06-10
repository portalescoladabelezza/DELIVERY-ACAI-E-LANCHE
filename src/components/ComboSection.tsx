import { combos, getWhatsappLink, businessConfig } from "../data";
import { MessageSquare, Flame, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ComboSection() {
  return (
    <section
      id="combos"
      className="py-20 bg-gradient-to-b from-brand-black to-brand-dark relative"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-yellow font-mono text-xs uppercase tracking-widest font-black">Economize mais</p>
          <h2 id="combos-title" className="text-3xl sm:text-4xl font-display font-black uppercase text-white mt-1 tracking-tighter">
            Combos Especiais
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-3 rounded-full" />
          <p id="combos-subtitle" className="text-neutral-400 mt-4 text-sm">
            Opções práticas e muito mais vantajosas para pedir sozinho, em casal ou para dividir com a galera.
          </p>
        </div>

        {/* Combos Grid */}
        <div id="combos-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, index) => {
            const waComboMsg = `Olá! Gostaria de pedir o "${combo.name}" por R$ ${combo.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} que vi no site. Está disponível?`;
            const comboWaUrl = getWhatsappLink(businessConfig.whatsappNumber, waComboMsg);

            return (
              <motion.div
                key={combo.id}
                id={`combo-card-${combo.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-brand-black border-2 border-white/5 rounded-3xl overflow-hidden hover:border-brand-yellow/30 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative"
              >
                {/* Popularity ribbon tag */}
                {combo.tag && (
                  <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md z-10 shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-red fill-current" />
                    {combo.tag}
                  </div>
                )}

                {/* Picture Block */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10 pointer-events-none" />
                  <img
                    id={`combo-img-${combo.id}`}
                    src={combo.image}
                    alt={`${combo.name} — lanches acompanhados por batatas fritas e refrigerante`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-5 z-20">
                    <span className="bg-brand-red text-white text-[10px] font-mono font-bold uppercase rounded px-2 py-0.5 tracking-wider">
                      Combo Promocional
                    </span>
                  </div>
                </div>

                {/* Details block */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 id={`combo-name-${combo.id}`} className="text-xl sm:text-2xl font-display font-black uppercase text-white group-hover:text-brand-yellow transition-colors duration-200 tracking-tight">
                      {combo.name}
                    </h3>
                    <p id={`combo-desc-${combo.id}`} className="text-neutral-400 text-sm mt-3 leading-relaxed">
                      {combo.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    {/* Price banner */}
                    <div className="flex flex-col mb-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">Valor Especial</span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-sm font-mono text-brand-red font-bold">R$</span>
                        <span id={`combo-price-${combo.id}`} className="text-3xl sm:text-4xl font-mono font-black text-brand-yellow leading-none tracking-tight">
                          {combo.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp request button */}
                    <a
                      id={`combo-order-btn-${combo.id}`}
                      href={comboWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-black text-xs tracking-wider uppercase py-4 px-4 rounded shadow transition-all duration-150"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      Pedir Combo no WhatsApp
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Small highlight footer note */}
        <div className="mt-12 bg-white/5 border border-white/5 rounded-2xl p-4 max-w-2xl mx-auto flex items-center justify-center gap-3 text-center sm:text-left">
          <Flame className="w-6 h-6 text-brand-yellow flex-shrink-0 pulse-indicator" />
          <p className="text-xs text-gray-300 font-sans tracking-wide">
            <strong>Dica de ouro:</strong> Todos os combos acompanham embalagem especial para viagem que mantém o lanche e as batatas crocantes e quentinhos até a sua casa!
          </p>
        </div>

      </div>
    </section>
  );
}
