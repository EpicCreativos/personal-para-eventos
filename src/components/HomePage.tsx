import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronUp, 
  ChevronDown 
} from "lucide-react";

interface ServiceProfile {
  id: string;
  title: string;
  description: string;
  detailText: string;
  hourlyRate: number;
  microAccent: string;
  accentColorClass: string;
  bgAccentClass: string;
  icon: React.ReactNode;
  imageUrl: string;
}

interface MethodologyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  accent: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface HomePageProps {
  services: ServiceProfile[];
  methodologies: MethodologyItem[];
  faqs: FaqItem[];
  activeFaqIndex: number | null;
  setActiveFaqIndex: (idx: number | null) => void;
  setSelectedService: (service: ServiceProfile | null) => void;
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsBudgetSubmitted: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  setIsApplySubmitted: (open: boolean) => void;
  setIsAcademyModalOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
  navigateTo?: (page: string, sectionId?: string) => void;
}

export default function HomePage({
  services,
  methodologies,
  faqs,
  activeFaqIndex,
  setActiveFaqIndex,
  setSelectedService,
  setIsBudgetModalOpen,
  setIsBudgetSubmitted,
  setIsApplyModalOpen,
  setIsApplySubmitted,
  setIsAcademyModalOpen,
  scrollTo,
  navigateTo
}: HomePageProps) {
  return (
    <>
      {/* HERO SECTION (Full-bleed content aligned to the immaculate 80% screen width structure) */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Imagen de fondo a color con contraste optimizado */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat contrast-[1.15] brightness-[0.88] z-0 pointer-events-none"
          style={{ backgroundImage: "url('/images/Imagen de WhatsApp 2025-09-25 a las 11.33.jpg')" }}
        />
        {/* Fusión de degradado violeta corporativo profundo para tintar sombras y contrastes (mix-blend-multiply) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A64ECE]/30 via-transparent to-[#222222]/90 z-0 pointer-events-none mix-blend-multiply" />
        {/* Micro-destellos cromáticos premium de cian y magenta fusionados con el fondo (mix-blend-overlay) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00EAEA]/10 via-transparent to-[#FF57DF]/15 z-0 pointer-events-none mix-blend-overlay" />
        {/* Capa de overlay oscuro matemático obligatorio para garantizar contraste absoluto y accesibilidad de textos blancos */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: "rgba(34, 34, 34, 0.45)" }} />

        <section
          id="hero-section"
          className="relative w-full z-10"
        >
          {/* Contenedor de contenido - Regla estricta del 80% */}
          <div className="w-4/5 max-w-[1200px] mx-auto flex flex-col items-center text-center justify-center h-full space-y-8 md:space-y-10">
            
            {/* Tag decorative premium */}
            <div
              id="hero-tag"
              className="inline-flex items-center gap-2 bg-[#A64ECE]/25 border border-[#A64ECE]/35 text-white rounded-full px-5 py-2 text-xs font-semibold tracking-wider leading-none justify-center backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00EAEA] animate-pulse" />
              <span>GESTIÓN INTELIGENTE DE STAFF</span>
            </div>
            
            {/* Titular Principal Massivo H1 */}
            <div className="space-y-3">
              <p
                id="hero-pre-title"
                className="text-[#00EAEA] font-mono text-xs sm:text-sm tracking-[0.3em] font-black uppercase text-center"
              >
                PERSONAL PARA EVENTOS
              </p>
              
              <h1
                id="hero-title"
                className="font-sans text-[2.25rem] sm:text-[3.5rem] md:text-[4.75rem] lg:text-[6rem] xl:text-[6.75rem] font-black text-white leading-[0.95] tracking-tighter uppercase text-center"
              >
                TRANSFORMA TU <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                  EVENTO
                </span>
              </h1>
            </div>



            {/* Botonera Dual en Píldora */}
            <div id="hero-actions" className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto pt-2">
              <button
                onClick={() => {
                  setIsBudgetModalOpen(true);
                  setIsBudgetSubmitted(false);
                }}
                className="bg-[#A64ECE] text-white shadow-[0_15px_30px_rgba(166,78,206,0.3)] hover:-translate-y-1 hover:bg-[#b058da] transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 rounded-[50px] text-sm sm:text-base font-bold text-center select-none cursor-pointer w-full sm:w-auto"
              >
                Diseñar Presupuesto Presencial
              </button>
              
              <button
                onClick={() => scrollTo("servicios-bento")}
                className="border border-white/60 text-white hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:-translate-y-1 transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 rounded-[50px] text-sm sm:text-base font-bold text-center select-none cursor-pointer w-full sm:w-auto backdrop-blur-sm"
              >
                Ver Personal Disponible
              </button>
            </div>

            {/* Fila de Estadísticas/Contadores perfectamente alineada */}
            <div id="hero-metrics" className="grid grid-cols-3 gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/20 w-full font-sans">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl sm:text-[2.75rem] md:text-[3.5rem] font-black text-white tracking-tight leading-none mb-2">
                  + de 100
                </p>
                <p className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest leading-none">
                  Eventos Cubiertos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl sm:text-[2.75rem] md:text-[3.5rem] font-black text-white tracking-tight leading-none mb-2">
                  100%
                </p>
                <p className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest leading-none">
                  Legalidad Certificada
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl sm:text-[2.75rem] md:text-[3.5rem] font-black text-[#00EAEA] tracking-tight leading-none mb-2">
                  24/7
                </p>
                <p className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest leading-none">
                  Soporte Activo
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* SERVICES SECTION (Bento Grid Layout) */}
      <section id="servicios-bento" className="bg-[#F8F9FA] py-24 sm:py-32 relative">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF57DF]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00EAEA]/5 blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          {/* Section Heading Text and Descriptor */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-xs font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 rounded-full px-4 py-1.5 inline-block mb-4">
              PORTFOLIO DE SERVICIOS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#333333] tracking-tighter leading-tight mb-6">
              ¿QUÉ PERSONAL NECESITAS PARA TU EVENTO?
            </h2>
            <p className="text-lg text-[#555555] font-normal leading-relaxed">
              Seleccionamos y formamos de manera independiente cada categoría para garantizar especialización absoluta, 
              presentación de alta gama y sincronización total con los organizadores.
            </p>
          </div>

          {/* Bento Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              // Accent styling depending on index/type to assign micro-accents
              let borderAccentClass = "";
              let iconBgClass = "";
              if (service.microAccent === "cyan") {
                borderAccentClass = "hover:border-[#00EAEA]/50 border-t-4 border-t-[#00EAEA]";
                iconBgClass = "bg-[#00EAEA]/10 text-cyan-600";
              } else if (service.microAccent === "magenta") {
                borderAccentClass = "hover:border-[#FF57DF]/50 border-t-4 border-t-[#FF57DF]";
                iconBgClass = "bg-[#FF57DF]/10 text-pink-600";
              } else if (service.microAccent === "yellow") {
                borderAccentClass = "hover:border-[#FFF312]/70 border-t-4 border-t-[#FFF312]";
                iconBgClass = "bg-[#FFF312]/20 text-yellow-600";
              } else {
                borderAccentClass = "hover:border-[#A64ECE]/50 border-t-4 border-t-[#A64ECE]";
                iconBgClass = "bg-[#A64ECE]/10 text-[#A64ECE]";
              }

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => {
                    if (navigateTo) {
                      navigateTo(service.id);
                    }
                  }}
                  className={`bg-white rounded-[2rem] overflow-hidden shadow-soft border border-gray-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full ${borderAccentClass}`}
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-50">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 pb-4">
                      {/* Badge + Icon corner */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBgClass}`}>
                          {service.icon}
                        </div>
                        <span className="font-mono text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                          Desde {service.hourlyRate}€/h
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-[#333333] text-xl sm:text-2xl mb-4 hover:text-[#A64ECE] transition-colors uppercase">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                        <span className="font-semibold text-[#333333]">{service.title === "AUXILIARES" ? "AUXILIARES" : service.title.toUpperCase()}:</span> {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navigateTo) {
                          navigateTo(service.id);
                        }
                      }}
                      className="flex items-center gap-1 text-sm font-semibold text-[#A64ECE] hover:underline group pt-4 border-t border-gray-50"
                    >
                      <span>Ir a {service.title === "AUXILIARES" ? "Auxiliares" : service.title.charAt(0).toUpperCase() + service.title.slice(1).toLowerCase()} →</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bento Grid Sub-actions */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setIsBudgetModalOpen(true);
                setIsBudgetSubmitted(false);
              }}
              className="inline-flex items-center gap-2 border-2 border-[#A64ECE] text-[#A64ECE] hover:bg-[#A64ECE] hover:text-white transition-all duration-300 px-8 py-4 rounded-full text-base font-bold select-none cursor-pointer"
            >
              <span>Diseñar Pack Personalizado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* METHODOLOGY SECTION (Overlapping, Zig-Zag, Visual asymmetric patterns) */}
      <section id="metodologia-sec" className="py-12 sm:py-20 lg:py-32 relative overflow-hidden bg-white">
        {/* Soft dopamine blurred background elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#FF57DF]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#00EAEA]/5 blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
            <span className="font-mono text-xs font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 rounded-full px-4 py-1.5 inline-block mb-4">
              Agencia de eventos para toda España
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#333333] tracking-tighter leading-tight mb-6 sm:mb-8">
              METODOLOGÍA ORIENTADA A TU ÉXITO
            </h2>
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.02)] text-left mb-8 sm:mb-12">
              <h3 className="font-display font-extrabold text-[#333333] text-lg sm:text-xl mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#A64ECE] rounded-full inline-block"></span>
                ¿CÓMO SOMOS?
              </h3>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                En Personal Para Eventos entendemos que la estética es esencial para tu éxito. Nuestro equipo de azafatas, camareros o auxiliares se presentará completamente uniformado. Su impecable presentación garantizará que cada invitado se sienta bienvenido y disfrute de una experiencia memorable desde que ponga un pie en el evento.
              </p>
            </div>
            
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-dashed border-gray-200"></div>
              <span className="flex-shrink mx-4 font-mono text-[10px] sm:text-xs font-bold text-[#A64ECE] tracking-wider uppercase bg-[#A64ECE]/5 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#A64ECE]/10 shadow-[0_5px_15px_rgba(166,78,206,0.05)] text-center">
                CONFIAN EN NOSOTROS
              </span>
              <div className="flex-grow border-t border-dashed border-gray-200"></div>
            </div>
          </div>

          {/* Interactive Zig-Zag block list with Overlapping elements */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {methodologies.map((item, idx) => {
              const isEven = idx % 2 === 0;

              // Decorative background color elements for graphics
              let blobBg = "bg-[#00EAEA]/10";
              let textAccent = "text-[#008d9e]";
              if (item.accent === "magenta") {
                blobBg = "bg-[#FF57DF]/10";
                textAccent = "text-pink-600";
              } else if (item.accent === "yellow") {
                blobBg = "bg-[#FFF312]/20";
                textAccent = "text-yellow-600";
              } else if (item.accent === "violet") {
                blobBg = "bg-[#A64ECE]/10";
                textAccent = "text-[#A64ECE]";
              }

              return (
                <div
                  key={item.id}
                  id={`methodology-item-${item.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Photo content block */}
                  <div
                    className={`lg:col-span-5 relative h-[380px] w-full flex items-center justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Backing geometry blob style decoration */}
                    <div className={`absolute -inset-4 rounded-[40px] ${blobBg} blur-xl opacity-80 -rotate-3`} />
                    
                    {/* Main Overlapping Image Container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-soft border border-gray-100 bg-white p-3 z-10 transition-transform duration-500 hover:scale-[1.02]">
                      <img
                        src={`${item.image}`}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          const fallbacks: Record<string, string> = {
                            presencia: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
                            flexibilidad: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
                            "calidad-precio": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600",
                            coordinacion: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
                            detalle: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                          };
                          e.currentTarget.src = fallbacks[item.id] || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      
                      {/* Floating overlay badge centered vertically on the card on axis Z */}
                      <div className="absolute top-1/2 -translate-y-1/2 right-6 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-full px-6 py-3 border border-gray-100/80 z-20 flex items-center justify-center">
                        <span className="font-display font-bold text-xs text-[#333333] text-center leading-none">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Written content block */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-start ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Index Indicator font mono */}
                    <span className={`font-mono text-xs font-bold ${textAccent} tracking-widest uppercase mb-3`}>
                      FASE 0{idx + 1} &bull; {item.subtitle}
                    </span>
                    
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#333333] mb-6 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-[#555555] font-normal leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#555555] bg-gray-100 rounded-full px-3 py-1">
                        ✓ Seleccionado in situ
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#555555] bg-gray-100 rounded-full px-3 py-1 font-mono">
                        ✓ Cobertura RC Completa
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#555555] bg-gray-100 rounded-full px-3 py-1">
                        ✓ Alta legal inmediata
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BRANDS / TRUST BANNER */}
      <section id="about-confianza" className="bg-gradient-to-r from-[#FFF312]/50 to-white/50 py-16 sm:py-24 border-y border-gray-200/50">
        <div className="w-[80%] max-w-none mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-black tracking-tighter leading-tight uppercase pt-2 sm:pt-3">
              NUESTRO COMPROMISO DE SEGURIDAD Y CONFIANZA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft border border-gray-100 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#333333] mb-2 font-display">Garantía Civil RC</div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">Seguro de responsabilidad civil premium de 1.2M€ para proteger el recinto.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft border border-gray-100 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#333333] mb-2 font-display">Ley de Prevención</div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">Formación completa en PRL (Riesgos Laborales) específica para cada recinto técnico.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft border border-gray-100 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#333333] mb-2 font-display">Contratación Legal</div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">Cero riesgos. Al corriente con la Seguridad Social y Régimen General Integral.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft border border-gray-100 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#333333] mb-2 font-display">Sustituto de Retén</div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">Asignación pasiva de coordinadores listos ante cualquier ausencia o baja imprevista.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY SECTION & CANDIDATE REGISTRATION / CTA FINAL */}
      <section id="academia-sec" className="relative py-12 sm:py-20 lg:py-32 overflow-hidden bg-white">
        {/* Subtle yellow and magenta background blobs */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#FFF312]/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF57DF]/8 blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Academy Block */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 relative group hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-50">
                <img
                  src="/images/11.jpeg"
                  alt="Personal para eventos Academy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-between flex-grow">
                {/* Decorative radial gradient stain */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FFF312]/10 blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
                
                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-yellow-600 tracking-widest uppercase bg-[#FFF312]/20 rounded-full px-4 py-1.5 inline-block mb-6">
                    Personal para eventos Academy
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#333333] mb-6 tracking-tight leading-snug">
                    Personal para eventos Academy
                  </h3>
                  
                  <p className="text-[#555555] text-base leading-relaxed mb-8 font-normal">
                    En «Personal para Eventos», somos firmes creyentes de que la calidad es el núcleo de cualquier evento exitoso. Nuestra Academy se dedica fervientemente a elevar la profesionalización de nuestro equipo, que incluye azafatas, camareros, montadores y demás personal, asegurando que cada evento se transforme en una experiencia sin igual. Nos embarcamos en esta misión con el objetivo de forjar profesionales que se destaquen en todos los aspectos, desde la atención al cliente y el servicio de bebidas, hasta el montaje de eventos, convirtiendo a cada miembro de nuestro equipo en un embajador de calidad y profesionalismo.
                  </p>
                </div>

                <div className="relative z-10">
                  <button
                    id="academy-info-button"
                    onClick={() => {
                      setIsAcademyModalOpen(true);
                    }}
                    className="bg-transparent border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] hover:-translate-y-1 transition-all duration-300 px-8 py-3.5 rounded-full text-base font-bold select-none cursor-pointer tracking-wider"
                  >
                    ACADEMY
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Trabaja con Nosotros Block */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 relative group hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-50">
                <img
                  src="/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
                  alt="Trabaja con nosotros"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-between flex-grow">
                {/* Decorative radial gradient stain */}
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#FF57DF]/5 blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
                
                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 rounded-full px-4 py-1.5 inline-block mb-6">
                    Trabaja con nosotros
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#333333] mb-6 tracking-tight leading-snug">
                    ¿Quieres trabajar como personal para eventos?
                  </h3>
                  
                  <p className="text-[#555555] text-base leading-relaxed mb-8 font-normal">
                    En «Personal para Eventos», no solo damos vida a eventos extraordinarios, sino que también forjamos experiencias que perduran en el tiempo y estamos en la búsqueda de personas que compartan nuestra pasión, creatividad y dedicación para unirse a nuestro equipo. Si te emociona el mundo de los eventos y estás preparado para dejar tu huella en la industria, te extendemos una cálida invitación para que te unas a nosotros en este emocionante recorrido. <br /><br />
                    <strong>¿Por qué elegirnos?</strong> Puede que ya hayas sido parte de otras agencias y te hayas enfrentado a situaciones como pagos tardíos, falta de transparencia o falta de apoyo; nosotros somos conscientemente diferentes.
                  </p>
                </div>

                <div className="relative z-10">
                  <button
                    id="academy-contacto-button"
                    onClick={() => {
                      setIsApplyModalOpen(true);
                      setIsApplySubmitted(false);
                    }}
                    className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-10 py-4 rounded-full text-base font-bold select-none cursor-pointer tracking-wider"
                  >
                    CONTACTO
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog-sec" className="py-12 sm:py-20 lg:py-32 bg-[#EFF1F3]/80 relative border-y border-gray-200/50">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#00EAEA]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#A64ECE]/5 blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 rounded-full px-4 py-1.5 inline-block mb-4">
                Noticias del sector
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#333333] tracking-tighter leading-none mb-4 sm:mb-6">
                Últimos artículos de blog
              </h2>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                En nuestra sección de noticias te ofrecemos nuestros últimos artículos de blog. Novedades, Proyectos, Últimos eventos, Noticias del sector y mucho más. Visita nuestro blog para estar al día de lo último de «Personal para eventos».
              </p>
            </div>
            <div className="shrink-0 flex justify-start">
              <a
                href="#blog"
                className="inline-flex items-center gap-2 text-[#A64ECE] font-bold hover:translate-x-1.5 transition-transform duration-300 text-base sm:text-lg group select-none cursor-pointer"
              >
                Ver todas las entradas <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src="/images/15.jpeg"
                    alt="Grandes marcas equipo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#00EAEA] text-white text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    PROYECTOS
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-extrabold text-[#333333] text-xl mb-4 line-clamp-2 leading-snug group-hover:text-[#A64ECE] transition-colors">
                    Personal para Eventos: un equipo detrás de grandes marcas
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                    En un mercado donde la imagen, la experiencia y la ejecución impecable son claves para conectar con el público, en Personal para Eventos trabajamos cada día para ser el aliado de confianza de marcas líderes que apuestan por hacer de cada acción una oportunidad para...
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  onClick={() => {
                    setIsApplyModalOpen(true);
                  }}
                  className="text-xs font-bold text-[#A64ECE] hover:text-[#333333] flex items-center gap-1 uppercase tracking-wider select-none cursor-pointer"
                >
                  leer más <span className="text-base leading-none">&bull;</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src="/images/7.jpeg"
                    alt="Acciones L'Oréal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF57DF] text-white text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    CASO DE ÉXITO
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-extrabold text-[#333333] text-xl mb-4 line-clamp-2 leading-snug group-hover:text-[#A64ECE] transition-colors">
                    Acciones para L'Oréal en toda España: profesionalidad, presencia y cuidado de marca
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                    En Personal para Eventos nos enorgullece ser un socio de confianza de L'Oréal, colaborando de forma activa en múltiples acciones a lo largo del territorio nacional con varias de sus marcas líderes en belleza y dermocosmética. Durante los últimos meses, hemos estado...
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  onClick={() => {
                    setIsApplyModalOpen(true);
                  }}
                  className="text-xs font-bold text-[#A64ECE] hover:text-[#333333] flex items-center gap-1 uppercase tracking-wider select-none cursor-pointer"
                >
                  leer más <span className="text-base leading-none">&bull;</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src="/images/10.jpeg"
                    alt="Estrategias Impacto Stand"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFF312] text-gray-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ESTRATEGIAS
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-extrabold text-[#333333] text-xl mb-4 line-clamp-2 leading-snug group-hover:text-[#A64ECE] transition-colors">
                    Estrategias para Maximizar el Impacto de tu Stand con Azafatas Profesionales
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                    En un entorno ferial competitivo, captar la atención del público es esencial. Las azafatas para eventos se convierten en aliadas estratégicas para atraer visitantes, comunicar eficazmente y reforzar la image de marca. En Personal para Eventos, comprendemos la...
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <button
                  onClick={() => {
                    setIsApplyModalOpen(true);
                  }}
                  className="text-xs font-bold text-[#A64ECE] hover:text-[#333333] flex items-center gap-1 uppercase tracking-wider select-none cursor-pointer"
                >
                  leer más <span className="text-base leading-none">&bull;</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQS SECTION (Modular clean expandable Accordions) */}
      <section id="faqs-sec" className="py-12 sm:py-20 lg:py-32 bg-white relative">
        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 rounded-full px-4 py-1.5 inline-block mb-4">
              Dudas de clientes
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#333333] tracking-tighter leading-tight mb-4 sm:mb-6 uppercase">
              Preguntas frecuentes
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              Sabemos lo que te preocupa, por eso ponemos a tu disposición respuestas a las preguntas más frecuentes que suelen hacernos en Personal para Eventos. ¿Tienes otra duda diferente? No dudes en contactar con nosotros, te responderemos lo más rápido posible.
            </p>
          </div>

          {/* FAQS Static card list as in HistoryPage */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const badge = (index: number) => {
                const badges = [
                  { text: "SERVICIOS", class: "text-[#A64ECE] bg-[#A64ECE]/10" },
                  { text: "FORMACIÓN", class: "text-[#FF57DF] bg-[#FF57DF]/10 font-bold" },
                  { text: "FLEXIBILIDAD", class: "text-[#00EAEA] bg-[#00EAEA]/10" },
                  { text: "IDIOMAS", class: "text-indigo-600 bg-indigo-100/50" },
                  { text: "COORDINACIÓN", class: "text-emerald-600 bg-emerald-100/50" },
                  { text: "GARANTÍA", class: "text-amber-500 bg-amber-500/10" },
                ];
                return badges[index % badges.length];
              };
              const currentBadge = badge(idx);

              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 text-left"
                >
                  <h4 className="font-bold text-[#333333] text-lg sm:text-xl mb-3 flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className={`${currentBadge.class} font-mono text-[11px] px-2.5 py-1 rounded-full shrink-0 uppercase tracking-widest`}>
                      {currentBadge.text}
                    </span>
                  </h4>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
