import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const highlights = [
    { title: "Lanches preparados na hora", desc: "Montados com carinho assim que você faz o pedido" },
    { title: "Açaí cremoso legítimo", desc: "Sabor autêntico com acompanhamentos selecionados" },
    { title: "Combos muito especiais", desc: "Opções econômicas sob medida para qualquer tamanho de fome" },
    { title: "Pedidos práticos pelo WhatsApp", desc: "Sem cadastros complexos, atendimento ágil e amigável" },
    { title: "Retirada ou entrega local rápida", desc: "Seu lanche quentinho embalado para viagem perfeita" },
    { title: "Ingredientes sempre frescos", desc: "Hortifrúti selecionado diariamente e queijos de primeira" },
  ];

  return (
    <section
      id="sobre-nos"
      className="py-20 bg-gradient-to-b from-brand-dark to-brand-black relative"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo side */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-[420px] aspect-3/4 w-full">
              {/* Offset decorative element */}
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
              <div className="absolute inset-0 border-2 border-brand-red rounded-2xl transform -translate-x-2 -translate-y-2 -z-10" />
              
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full border border-white/5 relative group">
                <img
                  id="about-showcase-img"
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800"
                  alt="Hambúrguer artesanal Sabor Express montado na hora com muito queijo, bacon e salada"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Floating active badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-black/95 backdrop-blur-sm border border-brand-red/30 rounded-xl p-4 shadow-xl text-center pointer-events-none">
                  <p className="text-brand-yellow font-display font-extrabold text-lg leading-tight">Desde o primeiro dia</p>
                  <p className="text-gray-300 text-xs mt-1">Garantindo a receita perfeita e o mate geladinho que você ama.</p>
                </div>
              </div>
            </div>
          </div>

           {/* Copy details side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <p className="text-brand-yellow font-mono text-xs uppercase tracking-widest font-black">Quem somos nós</p>
              <h2 id="about-title" className="text-3xl sm:text-4xl font-display font-black uppercase text-white mt-1 tracking-tighter">
                Sobre o Sabor Express
              </h2>
              <div className="w-16 h-1 bg-brand-red mt-3 rounded-full" />
            </div>

            <p id="about-desc-paragraph" className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              O <strong>Sabor Express</strong> é uma lanchonete criada com um único objetivo claro: atender quem busca comida rápida, extremamente saborosa e com um atendimento prático feito diretamente pelo WhatsApp. Trabalhamos com lanches artesanais suculentos, porções sequinhas, açaís completos e bebidas geladas prontas para entrega ou retirada local.
            </p>

            {/* Checklist of differentiators */}
            <div id="about-features-container" className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((hl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-3 bg-white/5 border border-white/5 p-4 rounded-xl hover:border-brand-yellow/10 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-black uppercase text-xs tracking-tight">
                      {hl.title}
                    </h4>
                    <p className="text-neutral-400 text-xs mt-0.5">
                      {hl.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
