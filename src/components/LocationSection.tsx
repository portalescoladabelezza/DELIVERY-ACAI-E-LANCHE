import { businessConfig } from "../data";
import { MapPin, Clock, Truck, Store, ExternalLink } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="contato"
      className="py-20 bg-brand-black relative"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-yellow font-mono text-xs uppercase tracking-widest font-black">Onde estamos e horários</p>
          <h2 id="location-title" className="text-3xl sm:text-4xl font-display font-black uppercase text-white mt-1 tracking-tighter">
            Funcionamento e Entrega
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Informational Cards (Left) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div id="location-address-card" className="bg-brand-dark p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-brand-yellow/20 transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-brand-yellow/10 text-brand-yellow flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-display font-black uppercase text-xs sm:text-sm tracking-tight">Endereço</h3>
                <p id="info-address-text" className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {businessConfig.address}
                </p>
                <p id="info-city-text" className="text-neutral-400 text-xs font-mono font-bold uppercase">
                  {businessConfig.cityState}
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div id="location-hours-card" className="bg-brand-dark p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-brand-red/20 transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-brand-red/10 text-brand-red flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-display font-black uppercase text-xs sm:text-sm tracking-tight">Horário de Atendimento</h3>
                <p id="info-hours-text" className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {businessConfig.hours}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 rounded text-emerald-400 text-[10px] uppercase font-mono font-bold mt-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Hoje abriremos às 18:00h
                </div>
              </div>
            </div>

            {/* Logistics Status Card */}
            <div id="location-logistics-card" className="bg-brand-dark p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-brand-yellow/20 transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-brand-yellow/10 text-brand-yellow flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-grow">
                <h3 className="text-white font-display font-black uppercase text-xs sm:text-sm tracking-tight">Métodos e Taxas</h3>
                <p id="info-service-type" className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {businessConfig.serviceType}
                </p>
                <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                  <strong>Taxa de entrega:</strong> <span id="info-delivery-fee" className="text-brand-yellow font-mono font-bold">{businessConfig.deliveryFee}</span>
                </p>
                <p className="text-neutral-500 text-[11px] leading-relaxed">
                  Consulte os bairros atendidos com a nossa equipe no chat do WhatsApp.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Routing block (Right) */}
          <div className="lg:col-span-6 flex">
            <div className="bg-brand-dark rounded-xl border border-white/5 p-6 w-full flex flex-col justify-between hover:border-brand-red/20 transition-all duration-300">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Store className="w-5 h-5 text-brand-yellow" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-yellow font-mono font-black">Retiradas Locais</span>
                </div>
                <h3 className="text-white font-display font-black uppercase text-xl sm:text-2xl tracking-tighter">
                  Venha retirar ou combine entrega expressa
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Prefere buscar seu lanche quentinho direto no balcão e economizar a taxa de entrega? Siga pelo mapa no celular clicando no link abaixo! Nós preparamos tudo e deixamos embalado esperando você chegar.
                </p>
              </div>

              {/* Decorative Mock Map Drawing/Placeholder */}
              <div className="relative h-44 rounded-xl overflow-hidden my-6 border border-white/5 group bg-neutral-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Visual compass ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-32 h-32 rounded-full border border-dashed border-brand-red animate-[spin_60s_linear_infinite]" />
                  <div className="w-24 h-24 rounded-full border border-brand-yellow/30 absolute" />
                </div>

                <div className="relative text-center z-10 px-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-white font-display font-bold text-sm">{businessConfig.address}</p>
                  <p className="text-neutral-400 text-[10px] mt-0.5 uppercase tracking-wider font-bold">{businessConfig.cityState}</p>
                </div>
              </div>

              <a
                id="maps-routing-btn"
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-display font-black text-xs tracking-wider uppercase py-4 px-6 rounded shadow transition-all duration-150"
              >
                Como Chegar
                <ExternalLink className="w-4 h-4 stroke-[3]" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
