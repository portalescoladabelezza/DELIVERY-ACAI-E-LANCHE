/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import HighlightStripe from "./components/HighlightStripe";
import MenuSection from "./components/MenuSection";
import ComboSection from "./components/ComboSection";
import HowToOrder from "./components/HowToOrder";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div id="root-container" className="min-h-screen bg-brand-black text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Header (Floating) */}
      <Header />

      {/* Main Structural Wrapper */}
      <main id="main-content-layout">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Highlight Accent Stripe */}
        <HighlightStripe />

        {/* 4 & 5. Filterable Menu & Showcase Gallery */}
        <MenuSection />

        {/* 6. Special Combo Tiers section */}
        <ComboSection />

        {/* 7. How to Order Pipe flowchart */}
        <HowToOrder />

        {/* 8. About Sabor Express Context */}
        <AboutSection />

        {/* 9. Hunger High-Impact Call to Action Block */}
        <CtaSection />

        {/* 10. Operational Grid: Local map router & Operating Hours */}
        <LocationSection />
      </main>

      {/* 11. Footer Branding */}
      <Footer />

      {/* 12. Floating Quick Contact WhatsApp Badge */}
      <FloatingWhatsApp />
    </div>
  );
}

