import { BookOpen, MessageSquare, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Escolha no cardápio",
      text: "Navegue pelo nosso cardápio e escolha seus lanches, açaís, combos, porções e bebidas favoritas.",
      icon: BookOpen,
      iconColor: "text-brand-yellow",
      bgColor: "bg-brand-yellow/10"
    },
    {
      number: "02",
      title: "Clique no WhatsApp",
      text: "Clique no botão 'Pedir pelo WhatsApp'. O pedido já é gerado com os detalhes do produto escolhido automaticamente.",
      icon: MessageSquare,
      iconColor: "text-brand-red",
      bgColor: "bg-brand-red/10"
    },
    {
      number: "03",
      title: "Confirme os detalhes",
      text: "Com a nossa equipe no chat, defina fáceis adicionais, formas de pagamento, e informe se prefere retirada ou entrega rápida.",
      icon: CheckSquare,
      iconColor: "text-brand-yellow",
      bgColor: "bg-brand-yellow/10"
    },
    {
      number: "04",
      title: "Receba ou retire",
      text: "A nossa cozinha prepara tudo na hora e com a máxima higiene. Aí é só aguardar o entregador ou retirar quentinho no local!",
      icon: Sparkles,
      iconColor: "text-brand-red",
      bgColor: "bg-brand-red/10"
    }
  ];

  return (
    <section
      id="como-pedir"
      className="py-20 bg-brand-black relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-yellow font-mono text-xs uppercase tracking-widest font-black">Passo a passo</p>
          <h2 id="order-steps-title" className="text-3xl sm:text-4xl font-display font-black uppercase text-white mt-1 tracking-tighter">
            Como fazer seu pedido
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-3 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div id="order-steps-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting line for desktop layouts */}
          <div className="hidden lg:block absolute top-[28%] left-8 right-8 h-0.5 bg-gradient-to-r from-brand-yellow/30 via-brand-red/30 to-brand-yellow/30 -z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                id={`order-step-card-${step.number}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-dark border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center relative z-10 hover:border-brand-yellow/20 transition-all duration-300 shadow-lg group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 bg-brand-yellow text-brand-black font-mono font-black text-xs px-3 py-1 rounded-full shadow-md">
                  PASSO {step.number}
                </div>

                {/* Icon wrapper */}
                <div className={`p-4 rounded-xl ${step.bgColor} ${step.iconColor} mb-5 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 id={`order-step-title-${step.number}`} className="text-white font-display font-black uppercase text-sm sm:text-base tracking-tight">
                  {step.title}
                </h3>

                {/* Paragraph */}
                <p id={`order-step-desc-${step.number}`} className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
