import { businessConfig, getWhatsappLink } from "../data";
import { MessageSquare, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function CtaSection() {
  const ctaWaMsg = "Olá! Vi o cardápio do Sabor Express e gostaria de fazer um pedido.";
  const waUrl = getWhatsappLink(businessConfig.whatsappNumber, ctaWaMsg);

  return (
    <section
      id="cta-fome"
      className="py-20 bg-gradient-to-r from-brand-red via-[#9f1239] to-brand-red relative overflow-hidden"
    >
      {/* Decorative absolute element circles */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-brand-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Pulsing icon indicator */}
        <div className="inline-flex p-3 rounded-full bg-brand-black/20 text-brand-yellow mb-6 pulse-indicator">
          <Flame className="w-8 h-8 text-brand-yellow fill-current" />
        </div>

        <h2 id="cta-fome-title" className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter leading-none mb-4">
          Bateu aquela fome?
        </h2>

        <p id="cta-fome-text" className="text-white/85 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed mb-8">
          Não fique esperando! Clique no botão abaixo para conversar conosco no WhatsApp, tirar suas dúvidas e fazer seu pedido de forma rápida e segura.
        </p>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <a
            id="cta-whatsapp-btn"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-display font-black text-sm sm:text-base tracking-wider uppercase py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-2xl transition-all duration-150"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-brand-red" />
            Pedir pelo WhatsApp
          </a>
        </motion.div>

        {/* Small detail */}
        <p className="text-white/50 text-[11px] font-mono mt-4 uppercase tracking-widest uppercase">
          Sem taxas extras de aplicativo • Resposta rápida
        </p>

      </div>
    </section>
  );
}
