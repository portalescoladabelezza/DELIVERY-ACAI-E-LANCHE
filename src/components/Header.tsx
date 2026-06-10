import { useState, useEffect } from "react";
import { businessConfig, getWhatsappLink } from "../data";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waHeaderMsg = "Olá! Vi o cardápio do Sabor Express e gostaria de fazer o meu pedido.";
  const waUrl = getWhatsappLink(businessConfig.whatsappNumber, waHeaderMsg);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Combos", href: "#combos" },
    { name: "Como Pedir", href: "#como-pedir" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b-2 border-brand-red py-3 shadow-lg shadow-brand-black/20"
          : "bg-brand-black/80 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <a id="header-logo-container" href="#inicio" className="flex flex-col group">
            <span id="header-logo-text" className="text-2xl sm:text-3xl font-display font-black italic tracking-tighter leading-none text-white group-hover:text-brand-yellow transition-colors duration-200 uppercase">
              Sabor <span className="text-brand-yellow">Express</span>
            </span>
            <span id="header-logo-badge" className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-bold">
              Lanches • Açaí • Delivery
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.href.replace("#", "")}`}
                href={item.href}
                className="text-gray-300 hover:text-brand-yellow font-medium text-sm transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-350 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <a
              id="header-cta-whatsapp"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-display font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-brand-red/30 hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Pedir pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              id="mobile-header-whatsapp-icon"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black p-2 rounded-full shadow-md animate-bounce"
              title="Pedir pelo WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-yellow focus:outline-none p-2 rounded-md bg-white/5"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-black border-b border-brand-red/20 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  id={`mobile-nav-link-${item.href.replace("#", "")}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-brand-yellow hover:bg-white/5 px-3 py-2.5 rounded-lg text-base font-semibold transition-all duration-150"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  id="mobile-drawer-cta-whatsapp"
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-display font-bold py-3.5 px-4 rounded-xl shadow-lg text-center"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
