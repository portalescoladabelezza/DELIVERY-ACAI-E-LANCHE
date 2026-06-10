import { MessageSquare } from "lucide-react";

export default function HighlightStripe() {
  const words = [
    "Lanches Artesanais",
    "Açaí Cremoso",
    "Batatas & Porções",
    "Bebidas Geladas",
    "Combos Promocionais",
    "Pedido pelo WhatsApp",
  ];

  return (
    <div
      id="highlight-stripe-container"
      className="bg-brand-yellow py-4 w-full overflow-hidden border-y-2 border-brand-red select-none relative z-20 shadow-md transform -skew-y-1"
    >
      <div className="flex whitespace-nowrap justify-around items-center w-full">
        {/* Repeating text structure for robust coverage and consistency */}
        <div id="stripe-scroller" className="flex gap-8 px-4 items-center animate-none flex-wrap justify-center md:justify-around w-full">
          {words.map((word, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-brand-black"
            >
              <span className="font-display font-black italic uppercase text-xs sm:text-sm tracking-tighter">
                {word}
              </span>
              {idx !== words.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-brand-red opacity-85 pulse-indicator" />
              )}
            </div>
          ))}
          {/* A tiny subtle badge helper inline */}
          <div className="hidden lg:flex items-center gap-1 bg-brand-red text-white text-[10px] font-mono font-bold uppercase rounded px-2.5 py-0.5 animate-pulse">
            <MessageSquare className="w-3 h-3 fill-current" />
            Clique &amp; Peça
          </div>
        </div>
      </div>
    </div>
  );
}
