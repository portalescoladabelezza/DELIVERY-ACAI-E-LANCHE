import { businessConfig, getWhatsappLink } from "../data";
import { Instagram, Facebook, MessageSquare, Flame } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerWaMsg = "Olá! Vi o cardápio do Sabor Express e gostaria de fazer um pedido.";
  const waUrl = getWhatsappLink(businessConfig.whatsappNumber, footerWaMsg);

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Combos", href: "#combos" },
    { name: "Como Pedir", href: "#como-pedir" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer
      id="app-footer"
      className="bg-brand-black border-t border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="footer-top-grid" className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="flex flex-col">
              <span className="text-2xl font-display font-black italic tracking-tighter leading-none text-white uppercase">
                Sabor <span className="text-brand-yellow">Express</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mt-1">
                Lanches • Açaí • Delivery
              </span>
            </a>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed font-normal">
              Os melhores lanches artesanais, porções sequinhas e o açaí mais completo de Nova Iguaçu e região, preparados sempre com ingredientes frescos selecionados e embalados com a máxima proteção para entrega expressa.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-display font-black uppercase text-xs tracking-wider">
              Links Rápidos
            </h4>
            <ul id="footer-navigation" className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    id={`footer-nav-link-${link.href.replace("#", "")}`}
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-yellow text-sm transition-colors duration-150 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Delivery Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-display font-black uppercase text-xs tracking-wider">
              Atendimento Direto
            </h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>📍 {businessConfig.address}</p>
              <p>🕒 {businessConfig.hours}</p>
              <p>🚚 {businessConfig.serviceType}</p>
            </div>
            
            {/* Social channels flex banner */}
            <div id="footer-social-media" className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-instagram"
                href={`https://instagram.com/${businessConfig.instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-red hover:text-white transition-colors duration-200"
                title="Siga no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                id="footer-social-facebook"
                href={`https://facebook.com/${businessConfig.facebookUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#1877f2] hover:text-white transition-colors duration-200"
                title="Curta no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                id="footer-social-whatsapp"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#25d366] hover:text-brand-black transition-colors duration-200"
                title="Peça no WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div id="footer-bottom" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500 font-mono">
          <p>© {currentYear} Sabor Express Delivery — Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 text-gray-500">
            <span>Preparações feitas com amor</span>
            <Flame className="w-3.5 h-3.5 text-brand-red fill-current" />
            <span>&amp; higiene</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
