import { businessConfig, getWhatsappLink } from "../data";
import { ArrowRight, MessageSquare, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const heroWaMsg = "Olá! Vi o cardápio no site do Sabor Express e gostaria de fazer um pedido agora.";
  const waUrl = getWhatsappLink(businessConfig.whatsappNumber, heroWaMsg);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-brand-black via-brand-dark to-brand-black overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-red filter blur-[120px]" />
        <div className="absolute bottom-10 right-20 w-[300px] h-[300px] rounded-full bg-brand-yellow filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Columns */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promo Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black text-xs font-mono font-black tracking-widest uppercase px-4 py-2 rounded shadow-md"
            >
              <Flame className="w-4 h-4 text-brand-red fill-current pulse-indicator" />
              ENTREGA RÁPIDA • SABOR REAL
            </motion.div>

            {/* Main Title */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[0.9] uppercase"
            >
              Seu lanche, açaí ou combo favorito <br/>
              <span className="text-brand-yellow font-black">
                direto no WhatsApp!
              </span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Escolha no cardápio, envie seu pedido pelo WhatsApp e receba no conforto da sua casa ou retire direto na nossa lanchonete. Ingredientes frescos e sabor irresistível!
            </motion.p>

            {/* Interaction Buttons */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                id="hero-cta-menu"
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-brand-black font-display font-black uppercase text-sm tracking-wide px-8 py-4 rounded shadow-lg transition-all duration-250 hover:scale-[1.03] active:scale-[0.98]"
              >
                Ver Cardápio Completo
                <ArrowRight className="w-5 h-5 text-brand-red stroke-[3]" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-display font-black uppercase text-sm tracking-wide px-8 py-4 rounded shadow-lg transition-all duration-250 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Pedir Agora
              </a>
            </motion.div>

            {/* Tiny Trust Element */}
            <motion.div
              id="hero-trust-elements"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-mono text-gray-400"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator" />
                Ingredientes frescos do dia
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>Entrega rápida &amp; quentinha</span>
            </motion.div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              id="hero-image-frame"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[460px] aspect-square"
            >
              {/* Decorative dynamic circles/borders */}
              <div className="absolute inset-x-0 inset-y-0 border-2 border-brand-yellow/30 rounded-3xl -rotate-3 scale-[1.02] pointer-events-none" />
              <div className="absolute inset-x-0 inset-y-0 border-2 border-brand-red/30 rounded-3xl rotate-6 scale-[0.99] pointer-events-none" />
              
              {/* Hero appetising food image */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-brand-black/80 border-4 border-brand-red relative group">
                <img
                  id="hero-showcase-img"
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
                  alt="Hambúrguer artesanal gourmet Sabor Express com cheddar derretido e batatas fritas crocantes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating promo card */}
                <div className="absolute bottom-4 right-4 bg-brand-black/90 backdrop-blur-md border border-brand-yellow/40 rounded-xl p-3 shadow-xl max-w-[200px] pointer-events-none">
                  <p className="text-[10px] uppercase tracking-wider text-brand-yellow font-mono font-bold">Promoção Ativa</p>
                  <p className="text-white font-display font-extrabold text-sm leading-tight mt-0.5">X-Burger + Batata + Refri por apenas</p>
                  <p className="text-brand-yellow font-mono font-extrabold text-lg mt-1">R$ 32,90</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
