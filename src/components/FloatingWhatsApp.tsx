import { businessConfig, getWhatsappLink } from "../data";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const floatWaMsg = "Olá! Vi o cardápio do Sabor Express e gostaria de fazer um pedido.";
  const waUrl = getWhatsappLink(businessConfig.whatsappNumber, floatWaMsg);

  return (
    <motion.div
      id="floating-whatsapp-container"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group-not-first"
    >
      {/* Expanded attention text label - reveals on hover */}
      <span className="hidden sm:inline-flex bg-brand-black/90 backdrop-blur-md text-white font-mono font-bold text-xs tracking-wider uppercase py-2 px-3.5 border border-emerald-500/30 rounded-full shadow-xl pointer-events-none transition-all duration-300 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 select-none">
        Faça seu Pedido!
      </span>

      {/* Floating Button Bubble */}
      <a
        id="floating-whatsapp-anchor"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative ring-4 ring-emerald-500/20"
        title="Fale conosco no WhatsApp"
      >
        {/* Pulsing ring visual */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />

        <MessageSquare className="w-7 h-7 fill-current" />
        
        {/* Small Active dot indicator badge */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white pulse-indicator" />
      </a>
    </motion.div>
  );
}
