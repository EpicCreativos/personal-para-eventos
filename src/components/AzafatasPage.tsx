import React from "react";
import { 
  Users, 
  Globe, 
  Sparkles, 
  Award, 
  CheckCircle, 
  Compass, 
  HeartHandshake, 
  GraduationCap, 
  ChevronRight, 
  MapPin, 
  Clock, 
  ArrowRight,
  ChefHat,
  GlassWater,
  Wrench,
  ShieldCheck,
  Check
} from "lucide-react";

interface AzafatasPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function AzafatasPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: AzafatasPageProps) {

  // Smooth scroll to element inside AzafatasPage
  const scrollToLocalSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleRequestService = (roleId: string) => {
    if (setBudgetStaff) {
      setBudgetStaff((prev: any) => {
        const updated = { ...prev };
        if (updated[roleId]) {
          updated[roleId] = {
            ...updated[roleId],
            qty: Math.max(updated[roleId].qty, 1) // Ensure at least 1 is selected
          };
        }
        return updated;
      });
    }
    setIsBudgetModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333]">
      
      {/* BACKGROUND GRAPHIC BLOBS FOR HIGH-END AMBIENT DEPTH */}
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00EAEA]/10 blur-[130px] pointer-events-none animate-artistic-pulse" />
      <div className="absolute top-[40%] right-12 w-[450px] h-[450px] rounded-full bg-[#FF57DF]/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[600px] h-[600px] rounded-full bg-[#FFF312]/8 blur-[140px] pointer-events-none animate-artistic-float" />

      {/* ------------------------------------------------------------------------------------------ */}
      {/* B. HERO SECTION (100vh layout with Premium Asymmetric Cut-out aesthetic) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Hero text panel */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left relative z-10">
            {/* Tag decorative premium */}
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#A64ECE] animate-spin-slow" />
              AZAFATAS DE EVENTOS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              ELEVA TU EVENTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                CON LAS MEJORES AZAFATAS
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              ¿Estás planeando un evento y necesitas contratar azafatas y azafatos profesionales, pero no sabes por dónde empezar? Confía en Personal para Eventos, la agencia líder en contratación de servicios de azafatas y azafatos para eventos a nivel nacional.
            </p>

            {/* Premium Pill Button dual row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-bold text-center cursor-pointer shadow-sm w-full sm:w-auto"
              >
                SOLICITA PRESUPUESTO
              </button>
              <button
                onClick={() => scrollToLocalSection("tipos-azafatas-bento")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-bold text-center cursor-pointer w-full sm:w-auto"
              >
                VER ESPECIALIDADES
              </button>
            </div>
            
            {/* Fast Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-lg">
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">100%</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Perfil Certificado</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">B2-C2</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Multilingüe Real</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">Soporte</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Multi-región</p>
              </div>
            </div>
          </div>

          {/* Hero right visual layout - asymmetric premium cut-out card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-[430px] mx-auto flex items-center justify-center">
              
              {/* Organic glowing backgrounds */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#00EAEA]/20 to-[#FF57DF]/15 blur-2xl animate-pulse" />
              
              {/* Top and side floating tags */}
              <div className="absolute -top-4 -right-2 bg-white px-5 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-3 z-20 animate-artistic-float">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00EAEA] animate-ping" />
                <span className="font-mono text-[11px] font-bold text-[#333333] uppercase tracking-wider">Garantía PPE Academy</span>
              </div>

              {/* Central Premium Container */}
              <div className="relative w-full h-full rounded-[48px] overflow-hidden border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.06)] bg-[#F8F9FA] group">
                <img
                  src="/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
                  alt="Azafatas profesionales de Personal para Eventos"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-750"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Immersive overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/50 via-transparent to-transparent" />
              </div>

              {/* Bottom solid card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-10 animate-artistic-float" style={{ animationDelay: "1s" }}>
                <div className="w-12 h-12 bg-[#FF57DF]/10 rounded-2xl flex items-center justify-center text-[#FF57DF]">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-black text-lg text-[#333333] leading-none">VIP Staff</h4>
                  <p className="text-[11px] text-[#555555] font-medium mt-1">Calidad Asegurada y Uniformes</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* C. GRID "TIPOS DE AZAFATAS" (Layout Bento/Tarjetas Modulares flotantes) */}
      <section id="tipos-azafatas-bento" className="relative py-12 sm:py-20 lg:py-32 border-t border-gray-100 w-[80%] max-w-none mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-[#00EAEA]/10 text-[#008d9e] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            ESPECIALIDADES DE EQUIPO
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-[#333333] tracking-tighter">
            TIPOS DE AZAFATAS PARA EVENTOS
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto font-normal leading-relaxed">
            En Personal para Eventos tenemos el perfil específico que necesitas. ¡No te lo pienses más! Conocemos tus preocupaciones y podemos ayudarte. Estos son los tipos de azafatas para eventos con los que contamos:
          </p>
        </div>

        {/* Bento/Grid Layout - 5 cards mapping the segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Card 1 Congreso */}
          <div
            onClick={() => scrollToLocalSection("sec-congresos")}
            className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/70 hover:border-[#00EAEA]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#333333] tracking-wider uppercase mb-3">
                AZAFATAS DE CONGRESOS
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Gestión operativa, acreditaciones y apoyo impecable bajo directrices de protocolo.
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
              Saber más <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2 Multilingües */}
          <div
            onClick={() => scrollToLocalSection("sec-multilingues")}
            className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/70 hover:border-[#FF57DF]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#333333] tracking-wider uppercase mb-3">
                AZAFATAS MULTILINGÜES
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Dominio verificado de varios idiomas para congresos y eventos interculturales globales.
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
              Saber más <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3 de Promoción */}
          <div
            onClick={() => scrollToLocalSection("sec-promocion")}
            className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/70 hover:border-[#FFF312]/60 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#333333] tracking-wider uppercase mb-3">
                AZAFATAS DE PROMOCIÓN
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Impulso comercial, captación activa y comunicación directa para lanzamientos de productos.
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
              Saber más <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4 de Imagen */}
          <div
            onClick={() => scrollToLocalSection("sec-imagen")}
            className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/70 hover:border-[#A64ECE]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#333333] tracking-wider uppercase mb-3">
                AZAFATAS DE IMAGEN
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Estética coordinada premium, representación visual del cliente y protocolo impecable.
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
              Saber más <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 5 Ferias y exposiciones */}
          <div
            onClick={() => scrollToLocalSection("sec-ferias")}
            className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/70 hover:border-[#00EAEA]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#333333] tracking-wider uppercase mb-3">
                AZAFATAS DE FERIAS
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Asistencia proactiva en estands comerciales y optimización del flujo de visitantes.
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
              Saber más <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* D. BANNER DE CONVERSIÓN (Bloque de texto con fondo destacado #F8F9FA) */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-[#F8F9FA]">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#00EAEA]/5 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#FF57DF]/5 blur-2xl" />

        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter">
              ¿POR QUÉ CONTRATAR AZAFATAS PARA EVENTOS?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
            
            {/* Col Left: Full height image container */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100/50 group bg-gray-50">
              <img
                src="/images/personal-para-eventos-foto-1_0044_Azafatxs-3.jpg"
                alt="Contratar azafatas para eventos de prestigio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <span className="font-mono text-[10px] font-bold text-[#FFF312] tracking-wider uppercase bg-black/30 rounded-full px-3 py-1.5 inline-block mb-3.5">
                  Personal de excelencia
                </span>
                <h4 className="font-display font-black text-2xl tracking-tight text-white uppercase leading-snug">
                  Briefing a medida y supervisión in-situ garantizada.
                </h4>
              </div>
            </div>

            {/* Col Right: Detailed reasons with icon blocks */}
            <div className="space-y-8">
              
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-lg text-[#333333] mb-1">Selección / Formación</h4>
                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    Contamos con los perfiles más precisos que puedas necesitar. Además, Personal para Eventos Academy garantiza la formación para que cada puesto conozca sus tareas, anticipe los posibles conflictos y tenga soluciones convenientes ante ellos.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#00EAEA]/10 text-[#008d9e] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-lg text-[#333333] mb-1">Estilo / apariencia</h4>
                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    Nos aseguramos de que la imagen de nuestras azafatas y azafatos se adapten perfectamente a la estética de tu evento, para lo que tenemos un manual de estilo y uniformidad súper riguroso, y por supuesto, podemos llevar cualquier adaptación corporativa de tu marca.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#FF57DF]/10 text-[#c22e9e] rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-lg text-[#333333] mb-1">Coordinación y logística</h4>
                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    Nos encargamos de todo, desde la llegada puntual del personal hasta su ubicación adecuada en el evento, para que puedas concentrarte en disfrutar del evento y no en preocuparte por estos detalles.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#FFF312]/20 text-[#a39400] rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-lg text-[#333333] mb-1">Precio competitivo</h4>
                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    La mejor calidad no tiene que ser cara. Ofrecemos un equipo premium a precios competitivos, y trabajamos contigo para ajustarnos a tu presupuesto y necesidades.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* E. DETALLE DE SERVICIOS (Layout Zig-Zag Asimétrico) */}
      <section className="relative py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto space-y-16 sm:space-y-24 lg:space-y-36">

        {/* --- Bloque 1: AZAFATAS DE CONGRESOS --- */}
        <div id="sec-congresos" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
                alt="Servicios de Azafatas de Congresos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00EAEA]" />
                Congresos
              </div>
            </div>
            
            {/* Margen negativo para profundidad de eje Z */}
            <div className="absolute -bottom-8 -right-4 bg-[#00EAEA] text-[#004e59] px-6 py-4 rounded-3xl shadow-[0_15px_30px_rgba(0,234,234,0.3)] select-none pointer-events-none z-10 pif -mt-12 hidden sm:block">
              <span className="font-mono text-xs font-black uppercase tracking-wider block">Estándar VIP</span>
              <span className="font-sans font-black text-lg block font-semibold leading-tight">Protocolo Ofic.</span>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
            <span className="inline-block bg-[#00EAEA]/10 text-[#008d9e] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Nuestro Compromiso: Tu Éxito es Nuestra Prioridad
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
              AZAFATAS DE CONGRESOS
            </h2>
            <p className="text-base text-[#555555] leading-relaxed font-normal">
              Si estás buscando azafatas de congresos capaces de trabajar en equipo, de anticiparse a los problemas y de ayudar a los asistentes en perfecto inglés, estás en el lugar adecuado. En Personal para Eventos nos comprometemos a hacer que tu congreso sea un verdadero éxito. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y visión, y luego adaptamos nuestro servicio de azafatas de congreso para reflejar tu estilo y marca única. ¡Contacta con nosotros hoy mismo para dar el primer paso hacia un congreso inolvidable! Nuestro equipo de azafatas de congresos está preparado para dar vida a tu proyecto, y hacer que cada momento cuente.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
              >
                NECESITO AZAFATAS DE CONGRESOS
              </button>
            </div>
          </div>

        </div>

        {/* --- Bloque 2: AZAFATAS MULTILINGÜES --- */}
        <div id="sec-multilingues" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Left (to alternate in Zig-Zag) */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pr-6 order-2 lg:order-1">
            <span className="inline-block bg-[#FF57DF]/10 text-[#c22e9e] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Nuestra Misión: Enriching Connections, Bridging Cultures
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
              AZAFATAS MULTILINGÜES
            </h2>
            <p className="text-base text-[#555555] leading-relaxed font-normal">
              Nuestras azafatas multilingües son expertas en comunicarse efectivamente en varios idiomas. Son una parte esencial de eventos internacionales, conferencias, ferias y cualquier ocasión en la que los asistentes provengan de diversas partes del mundo. Si estás planeando un evento internacional, una conferencia global o una reunión multicultural, nuestras versátiles azafatas multilingües están listas para brindarte el conocimiento y la experiencia de las mejores azafatas, junto con la confianza y la fluidez del multilingüismo. No importa qué idiomas se hablen, en Personal para Eventos estamos aquí para asegurarnos de que todos sean parte de la conversación. Comunícate con nosotros hoy mismo para llevar la magia de la comunicación multilingüe a tu próximo evento.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
              >
                NECESITO AZAFATAS MULTILINGÜES
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                alt="Azafatas Multilingües Profesionales"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF57DF]" />
                En-De-Fr-It-Zh
              </div>
            </div>

            {/* Depth Z-Index element */}
            <div className="absolute -top-6 -left-4 bg-[#FF57DF] text-[#fff] px-5 py-3 rounded-2xl shadow-[0_15px_30px_rgba(255,87,223,0.3)] rotate-2 select-none pointer-events-none z-10 hidden sm:block">
              <span className="font-mono text-xs font-bold tracking-widest block">PERFILES</span>
              <span className="font-sans font-black text-sm block">Idiomas Testados</span>
            </div>
          </div>

        </div>

        {/* --- Bloque 3: AZAFATAS DE PROMOCIÓN --- */}
        <div id="sec-promocion" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
                alt="Azafatas de Promoción"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFF312]" />
                Promoción
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 bg-[#FFF312] text-[#595300] px-6 py-4 rounded-3xl shadow-[0_15px_30px_rgba(255,243,18,0.3)] select-none pointer-events-none z-10 -mt-12 hidden sm:block">
              <span className="font-mono text-xs font-black uppercase tracking-wider block">Ventas</span>
              <span className="font-sans font-black text-lg block font-semibold leading-tight">Brand Ambassadors</span>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
            <span className="inline-block bg-[#FFF312]/20 text-[#a39400] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Nuestra pasión: Llevar tu marca a nuevas alturas
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none pt-2 sm:pt-3">
              AZAFATAS DE PROMOCIÓN
            </h2>
            <p className="text-base text-[#555555] leading-relaxed font-normal">
              Las Azafatas de Promoción de Personal para Eventos son profesionales apasionadas y comunicadoras hábiles que elevan cualquier campaña promocional a nuevas alturas. Con una buena presencia garantizada, y un compromiso inquebrantable, nuestras azafatas de promoción se convierten en embajadoras de tu marca, compartiendo tu mensaje de manera auténtica y efectiva. En Personal para Eventos, sabemos que cada interacción cuenta en el mundo de los negocios. Nuestras azafatas de promoción no solo son un equipo comercial; son embajadoras de tu marca, capaces de cautivar y persuadir a tu público objetivo de manera genuina. No importa qué estés promocionando, en Personal para Eventos estamos aquí para hacer que brille. Comunícate con nosotros hoy mismo para llevar la emoción y la energía de nuestras azafatas de promoción a tu próxima campaña.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
              >
                NECESITO AZAFATAS DE PROMOCIÓN
              </button>
            </div>
          </div>

        </div>

        {/* --- Bloque 4: AZAFATAS DE IMAGEN --- */}
        <div id="sec-imagen" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pr-6 order-2 lg:order-1">
            <span className="inline-block bg-[#A64ECE]/10 text-[#A64ECE] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Transforma tu evento en una experiencia visualmente impactante
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
              AZAFATAS DE IMAGEN
            </h2>
            <p className="text-base text-[#555555] leading-relaxed font-normal">
              En el mundo actual, la imagen es más importante que nunca y en Personal para Eventos lo sabemos. Comprendemos la importancia de transmitir una imagen sólida y coherente en tus eventos. Nuestras expertas azafatas de imagen son maestras en representar los valores de tu marca con una profesionalidad y un brillo premium. Las Azafatas de Imagen juegan un papel esencial en la creación de la primera impresión que tus invitados tendrán de tu evento. Desde congresos y ferias hasta lanzamientos de productos y cenas de gala, estas azafatas se encargan de mantener un estándar de presentación visual que refuerza la identidad y los valores de tu marca. No dejes que los detalles visuales pasen desapercibidos. Contacta con nosotros hoy mismo para dar un paso hacia un evento que cautiva no solo por su contenido, sino también por su estética.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
              >
                NECESITO AZAFATAS DE IMAGEN
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
                alt="Azafatas de Imagen Premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A64ECE]" />
                Estilo Premium
              </div>
            </div>

            <div className="absolute -top-6 -left-4 bg-[#A64ECE] text-[#fff] px-5 py-3 rounded-2xl shadow-[0_15px_30px_rgba(166,78,206,0.3)] rotate-[-1deg] select-none pointer-events-none z-10 hidden sm:block">
              <span className="font-mono text-xs font-bold tracking-widest block">MANUAL PPE</span>
              <span className="font-sans font-black text-sm block">Estilo Uniforme</span>
            </div>
          </div>

        </div>

        {/* --- Bloque 5: AZAFATAS DE FERIAS Y EXPOSICIONES --- */}
        <div id="sec-ferias" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=800"
                alt="Azafatas de Ferias y Exposiciones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00EAEA]" />
                Ferias y Stands
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 bg-[#00EAEA] text-[#004e59] px-6 py-4 rounded-3xl shadow-[0_15px_30px_rgba(0,234,234,0.3)] select-none pointer-events-none z-10 -mt-12 hidden sm:block">
              <span className="font-mono text-xs font-black uppercase tracking-wider block">IFEMA / FIRA</span>
              <span className="font-sans font-black text-lg block font-semibold leading-tight">Experiencia Ferias</span>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
            <span className="inline-block bg-[#00EAEA]/10 text-[#008d9e] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Tu éxito en ferias y exposiciones comienza aquí
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
              AZAFATAS DE FERIAS Y EXPOSICIONES
            </h2>
            <p className="text-base text-[#555555] leading-relaxed font-normal">
              Las Azafatas de Ferias y Exposiciones desempeñan un papel multifacético en la creación de una experiencia inolvidable para los asistentes. Desde la bienvenida inicial hasta la asistencia en la presentación de productos, estas profesionales son expertas en establecer conexiones significativas y facilitar interacciones fructíferas. Su combinación de habilidades en comunicación, conocimiento del producto y gestión de interacciones las convierte en un activo valioso para lograr los resultados más exitosos en ferias y exposiciones. Si deseas maximizar tu participación en futuras exhibiciones y muestras, considera el valor que nuestras Azafatas de Ferias y Exposiciones pueden aportar a tu equipo. Contáctanos para explorar cómo podemos personalizar nuestros servicios para cumplir con tus objetivos específicos en tu próximo evento.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("azafatas")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
              >
                NECESITO AZAFATAS DE FERIAS Y EXPOSICIONES
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* F. ACADEMY BANNER */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-gradient-to-r from-[#FFF312]/20 via-[#FFF312]/10 to-[#00EAEA]/10 border-y border-[#FFF312]/40">
        <div className="w-[80%] max-w-none mx-auto text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-[#FFF312] text-[#595300] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest select-none pointer-events-none">
            PPE ACADEMY EXCLUSIVO
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-black text-[#333333] tracking-tight leading-tighter">
            UNA AGENCIA DE AZAFATAS DE EVENTOS CON SU PROPIA ACADEMIA
          </h2>

          <p className="text-lg md:text-xl text-[#333333] font-extrabold tracking-tight max-w-3xl mx-auto uppercase">
            EN PERSONAL PARA EVENTOS SOLO TRABAJAMOS CON AZAFATAS Y AZAFATOS PROFESIONALES.
          </p>

          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mx-auto">
            Garantizamos que todo el staff asignado posee sólidos conocimientos de operativa, atención premium al comensal y resolución asertiva de incidencias.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 shadow-[0_15px_30px_rgba(166,78,206,0.15)] transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
            >
              TRABAJA CON NOSOTROS
            </button>
            <button
              onClick={() => navigateTo("history")}
              className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
            >
              CONOCER LA AGENCIA
            </button>
          </div>



        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* G. CROSS-SELLING (Grid modular flotante inferior con soporte regional) */}
      <section className="relative py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left space-y-4">
            <div className="inline-block bg-[#FF57DF]/10 text-[#c22e9e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              EQUIPO REFORZADO TOTAL
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-black text-[#333333] tracking-tighter">
              ¿NECESITAS CONTRATAR OTRO TIPO DE PERSONAL PARA EVENTOS?
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              ¿Estás planeando un evento y necesitas auxiliares, azafatos o camareras profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
            </p>
          </div>
        </div>

        {/* 5-column cross selling categories bento layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          
          {/* Card Cocteleros */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#A64ECE]/20 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center mb-6">
              <GlassWater className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">COCTELEROS</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Un valor seguro de entretenimiento y mixología de autor.</p>
            <button
              onClick={() => {
                navigateTo("cocteleros");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a coctelería <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Cocineros */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#FFF312]/50 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center mb-6">
              <ChefHat className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">COCINEROS</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Catering superior y alta gastronomía exclusiva.</p>
            <button
              onClick={() => {
                navigateTo("cocineros");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a cocina <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Camareros */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#FF57DF]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center mb-6">
              <GlassWater className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">CAMAREROS</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Servicio de sala y barra coordinado con elegancia.</p>
            <button
              onClick={() => {
                navigateTo("camareros");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a camareros <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Montadores */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#00EAEA]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center mb-6">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">MONTADORES</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Asistencia estructural ágil, rápida y segura.</p>
            <button
              onClick={() => {
                navigateTo("montadores");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a montaje <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Auxiliares */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#FF57DF]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">AUXILIARES</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Seguridad activa de accesos, roperos y chóferes.</p>
            <button
              onClick={() => {
                navigateTo("auxiliares");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a auxiliares <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Regional Staff Coverage Cards */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-[#555555] uppercase tracking-wider mb-6">Delegaciones Territoriales de Azafatas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Madrid */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 text-center flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#A64ECE]" />
              <div className="text-left">
                <span className="font-sans font-black text-sm text-[#333333] block">AZAFATAS MADRID</span>
                <span className="text-[10px] text-gray-400 font-mono">Cobertura Centro y Zona Metropolitana</span>
              </div>
            </div>

            {/* Barcelona */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 text-center flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#A64ECE]" />
              <div className="text-left">
                <span className="font-sans font-black text-sm text-[#333333] block">AZAFATAS BARCELONA</span>
                <span className="text-[10px] text-gray-400 font-mono">Delegación Costa Nordeste y Firas</span>
              </div>
            </div>

            {/* Valencia */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 text-center flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#A64ECE]" />
              <div className="text-left">
                <span className="font-sans font-black text-sm text-[#333333] block">AZAFATAS VALENCIA</span>
                <span className="text-[10px] text-gray-400 font-mono">Soporte Mediterráneo e Islas</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
