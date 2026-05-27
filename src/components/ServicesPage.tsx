import React from "react";
import { 
  Users, 
  ChefHat, 
  GlassWater, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Maximize2 
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

interface ServicesPageProps {
  services: ServiceProfile[];
  setSelectedService: (service: ServiceProfile | null) => void;
  setIsBudgetModalOpen: (open: boolean) => void;
  setBudgetStaff: React.Dispatch<React.SetStateAction<any>>;
  navigateTo?: (page: any, sectionId?: string) => void;
}

export default function ServicesPage({ 
  services, 
  setSelectedService, 
  setIsBudgetModalOpen,
  setBudgetStaff,
  navigateTo
}: ServicesPageProps) {

  // Specific click handler to launch detailed modal or navigate
  const handleSaberMas = (serviceId: string) => {
    if (navigateTo) {
      navigateTo(serviceId);
    } else {
      const profile = services.find(s => s.id === serviceId);
      if (profile) {
        setSelectedService(profile);
      }
    }
  };

  // Specific click handler to configure budget and launch form modal
  const handleSolicitaPresupuesto = (serviceId: string) => {
    setBudgetStaff((prev: any) => {
      const updated = { ...prev };
      if (updated[serviceId]) {
        updated[serviceId] = {
          ...updated[serviceId],
          qty: Math.max(updated[serviceId].qty, 1) // Ensure at least 1 staff is set
        };
      }
      return updated;
    });
    setIsBudgetModalOpen(true);
  };

  // Safe navigation anchor scrolling helper inside services page
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden w-full pb-24">
      {/* BACKGROUND GRAPHIC BLOBS FOR ENHANCED DOPAMINIC DEPTH (60-30-10) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00EAEA]/5 blur-[120px] pointer-events-none animate-artistic-pulse" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-[#FF57DF]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#FFF312]/5 blur-[130px] pointer-events-none animate-artistic-float" />

      {/* A. HERO SECTION (100vh layout with asymmetrical PNG cutout aesthetics) */}
      <section className="relative pt-12 pb-24 md:py-32 w-[80%] max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left relative z-10">
            {/* Visual branding capsule */}
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              NUESTROS SERVICIOS DESTACADOS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1]">
              SERVICIOS DE DESTAQUE <br className="hidden md:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                PERSONAL PARA EVENTOS
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              ¿Estás planeando un evento y necesitas auxiliares, azafatos o camareras profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
            </p>

            {/* Premium Pill Dual Control Button row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setIsBudgetModalOpen(true);
                }}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-8 py-4 rounded-full text-base font-bold text-center cursor-pointer shadow-sm"
              >
                Solicita Presupuesto
              </button>
              <button
                onClick={() => scrollToAnchor("acceso-rapido")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-base font-bold text-center cursor-pointer"
              >
                Ver Servicios
              </button>
            </div>
          </div>

          {/* Hero Right Visual Column - Asymmetric Cut-out aesthetic */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
              
              {/* Asymmetrical underlying organic decorative blobs */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#00EAEA]/20 to-[#FF57DF]/10 blur-xl animate-artistic-pulse" />
              
              {/* Top accent floating decorative tag */}
              <div className="absolute -top-4 -right-2 bg-white px-5 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-3 z-20 animate-artistic-float">
                <div className="w-3 h-3 bg-[#00EAEA] rounded-full animate-ping" />
                <span className="font-mono text-xs font-bold text-[#333333]">Soporte Nacional</span>
              </div>

              {/* Solid aesthetic curved container for images with neat cutouts */}
              <div className="relative w-full h-full rounded-[48px] overflow-hidden border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.06)] bg-[#F8F9FA] group">
                <img
                  src="/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
                  alt="Personal para Eventos Coctelería Azafatas"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to high quality photo if path fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Immersive overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/40 via-transparent to-transparent" />
              </div>

              {/* Bottom solid floating feedback metric card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-10">
                <div className="w-12 h-12 bg-[#FF57DF]/10 rounded-2xl flex items-center justify-center text-[#FF57DF]">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-black text-xl text-[#333333] tracking-tight leading-none">+15,000</h4>
                  <p className="text-xs text-[#555555] font-medium mt-0.5">Eventos Cubiertos</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* B. CUADRÍCULA DE ACCESO RÁPIDO (Bento grid link panel of 6 columns) */}
      <section id="acceso-rapido" className="relative py-12 w-[80%] max-w-none mx-auto border-t border-gray-100">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#A64ECE] uppercase">ACCESO VELOZ</h2>
          <p className="text-2xl sm:text-3xl font-sans font-black text-[#333333] tracking-tight">
            Navega directamente a cada especialidad de equipo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {/* Quick link 1 */}
          <button
            onClick={() => scrollToAnchor("azafatas-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#00EAEA]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Azafatas
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          {/* Quick link 2 */}
          <button
            onClick={() => scrollToAnchor("camareros-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#FF57DF]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <GlassWater className="w-6 h-6 pointer-events-none" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Camareros
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          {/* Quick link 3 */}
          <button
            onClick={() => scrollToAnchor("cocineros-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#FFF312]/70 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Cocineros
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          {/* Quick link 4 */}
          <button
            onClick={() => scrollToAnchor("cocteleros-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#A64ECE]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <GlassWater className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Cocteleros
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          {/* Quick link 5 */}
          <button
            onClick={() => scrollToAnchor("montadores-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#00EAEA]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Montadores
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          {/* Quick link 6 */}
          <button
            onClick={() => scrollToAnchor("auxiliares-destacado")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-[#FF57DF]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xs text-[#333333] group-hover:text-[#A64ECE] transition-colors uppercase tracking-wider">
              Auxiliares
            </h3>
            <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-0.5">
              Saber más <ChevronRight className="w-3 h-3" />
            </span>
          </button>

        </div>
      </section>

      {/* C. SECCIÓN PRINCIPAL: NUESTROS SERVICIOS DESTACADOS (Zig-zag Layout with sutil overlapping) */}
      <section className="relative py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
        <div className="text-center space-y-4">
          <div className="inline-block bg-[#A64ECE]/5 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            CATÁLOGO MASTER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter">
            NUESTROS SERVICIOS DESTACADOS
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed">
            Ofrecemos perfiles calificados comprometidos con la total excelencia operativa y estética de tu proyecto.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 1: AZAFATAS DE EVENTOS */}
        <div id="azafatas-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00EAEA]/5 blur-[80px] pointer-events-none -translate-x-12 -translate-y-1/2" />
          
          {/* Visual Column Left */}
          <div className="lg:col-span-5 relative order-1 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
                alt="Servicio de Azafatas de Eventos Premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                Azafatas
              </div>
            </div>
          </div>

          {/* Content Column Right */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-2 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00EAEA]/10 text-[#008d9e] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              AZAFATAS PARA EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Azafatas de Congresos, Multilingües, Azafatas de Promoción, Azafatas de Imagen, y Azafatas de Ferias y Exposiciones. ¡Consúltanos!
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#00EAEA] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Acreditaciones y Check-In</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#00EAEA] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Idiomas certificados (B2-C2)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#00EAEA] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Atención Institucional VIP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#00EAEA] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Protocolo impecable</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("azafatas")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 2: CAMAREROS PARA EVENTOS */}
        <div id="camareros-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF57DF]/5 blur-[80px] pointer-events-none translate-x-12 -translate-y-1/2" />
          
          {/* Content Column Left */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF57DF]/10 text-[#c22e9e] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              CAMAREROS PARA EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Ofrecemos una variedad de servicios de camareros, desde expertos en servicio de barra y cóctel hasta Camareros de Imagen. ¡Consúltanos!
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Servicios VIP de banquete y sala</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Atención excelente en barras premium</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Pase de bandeja ágil</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Uniformidad impecable</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("camareros")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("camareros")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/personal-para-eventos-foto-1_0035_CAMAREROS%202.jpg"
                alt="Servicio de Camareros de Eventos Premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                Camareros
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 3: COCINEROS PARA EVENTOS */}
        <div id="cocineros-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#FFF312]/5 blur-[80px] pointer-events-none -translate-x-12 -translate-y-1/2" />
          
          {/* Visual Column Left */}
          <div className="lg:col-span-5 relative order-1 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/11.jpeg"
                alt="Servicio de Cocineros de Eventos de Elite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
                Cocineros
              </div>
            </div>
          </div>

          {/* Content Column Right */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-2 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF312]/15 text-[#a39400] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              COCINEROS PARA EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Un equipo cocineros expertos y ayudantes de cocina se dedica a preparar platos exquisitos, desarrollar el menú y mucho más.
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Master Chefs y Auxiliares</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Menús Temáticos Cohesivos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Especialistas de catering corporativo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Higiene bajo estrictas normas</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("cocineros")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("cocineros")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 4: COCTELEROS PARA EVENTOS */}
        <div id="cocteleros-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#A64ECE]/5 blur-[80px] pointer-events-none translate-x-12 -translate-y-1/2" />
          
          {/* Content Column Left */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A64ECE]/10 text-[#A64ECE] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              COCTELEROS PARA EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Experiencia en coctelería premium para todo tipo de eventos. Mixología creativa, personalización de carta y una presentación visualmente impactante que será la estrella de tu evento.
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Bebidas de vanguardia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Carta de tragos 100% personalizada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Barras temáticas corporativas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Flair Bartending e Intervención</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("cocteleros")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("cocteleros")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/4.jpeg"
                alt="Servicio de Cocteleros Profesionales Mixólogos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#A64ECE]" />
                Cocteleros
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 5: MONTADORES PARA EVENTOS */}
        <div id="montadores-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00EAEA]/5 blur-[80px] pointer-events-none -translate-x-12 -translate-y-1/2" />
          
          {/* Visual Column Left */}
          <div className="lg:col-span-5 relative order-1 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/12.jpeg"
                alt="Servicio de Montadores de Eventos Tecnicos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1461264439565-1724c06cfd80?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                Montadores
              </div>
            </div>
          </div>

          {/* Content Column Right */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-2 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00EAEA]/10 text-[#008d9e] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              MONTADORES PARA EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Montadores para crear experiencias únicas con un equipo dedicado que supera expectativas, mozos, especialistas, etc. ¡Consúltanos!
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Montaje de stands y trussing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Soporte técnico audiovisual ágil</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Carpinteros y Electricistas locales</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Mozos de carga/descarga seguros</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("montadores")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("montadores")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        {/* BLOQUE 6: AUXILIAR DE EVENTOS */}
        <div id="auxiliares-destacado" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Overlapping background capsule design decoration */}
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF57DF]/5 blur-[80px] pointer-events-none translate-x-12 -translate-y-1/2" />
          
          {/* Content Column Left */}
          <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF57DF]/10 text-[#c22e9e] rounded-full text-xs font-bold uppercase tracking-wider">
              Icono de Marca
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-sans font-black text-[#333333] tracking-tight leading-none">
              AUXILIAR DE EVENTOS
            </h3>
            
            <p className="text-lg text-[#555555] leading-relaxed font-normal">
              Personal auxiliar para control de accesos, pulsereros, gestión de ropero, chóferes, aparcacoches, personal de limpieza, manipuladores…
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Control de accesos y pulseras</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Ropero rápido y sincronizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Chóferes de protocolo y aparcacoches</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF57DF]/10 text-[#FF57DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#555555]">Limpieza, mantenimiento y carga</span>
              </div>
            </div>

            {/* Action buttons matching exact layout spec */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => handleSaberMas("auxiliares")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-soft transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SABER MÁS
              </button>
              <button
                onClick={() => handleSolicitaPresupuesto("auxiliares")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                SOLICITA PRESUPUESTO
              </button>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/14.jpeg"
                alt="Servicio de Auxiliares de Eventos Seguro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                Auxiliares
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* D. SECCIÓN EXTRA: GARANTÍA DE SATISFACCIÓN */}
      <section className="relative py-16 w-[80%] max-w-none mx-auto">
        <div className="bg-[#FFF312] text-black rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-xl border border-yellow-300">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-black/5 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/40 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#333333] uppercase bg-black/10 px-4 py-2 rounded-full">
              ÉXITO ASEGURADO 100%
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight leading-tight text-[#333333]">
              ¿LISTO PARA DAR UN IMPULSO A TU EVENTO?
            </h2>
            <p className="text-[#555555] text-base md:text-lg font-normal leading-relaxed">
              Consigue presupuesto inmediato ajustado a tu municipio, perfil requerido y horas de trabajo en tiempo récord. Nuestro equipo comercial se pondrá en contacto contigo de forma inmediata.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsBudgetModalOpen(true);
                }}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] transition-all duration-300 px-10 py-5 rounded-full text-base font-bold shadow-soft cursor-pointer"
              >
                Calcula tu Presupuesto Ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
