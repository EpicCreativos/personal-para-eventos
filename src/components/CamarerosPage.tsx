import React from "react";
import { 
  Users, 
  Sparkles, 
  Award, 
  CheckCircle, 
  Compass, 
  HeartHandshake, 
  GraduationCap, 
  ChevronRight, 
  Clock, 
  ArrowRight,
  ChefHat,
  GlassWater,
  Wrench,
  ShieldCheck,
  Check
} from "lucide-react";

interface CamarerosPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function CamarerosPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: CamarerosPageProps) {

  // Smooth scroll helper for inside the CamarerosPage
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
      <div className="absolute top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00EAEA]/10 blur-[130px] pointer-events-none animate-artistic-pulse" />
      <div className="absolute top-[35%] left-12 w-[450px] h-[450px] rounded-full bg-[#FF57DF]/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-10 w-[600px] h-[600px] rounded-full bg-[#FFF312]/8 blur-[140px] pointer-events-none animate-artistic-float" />

      {/* ------------------------------------------------------------------------------------------ */}
      {/* B. HERO SECTION (100vh layout with Overlapping visual card) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Hero text panel */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left relative z-10">
            {/* Tag decorative premium */}
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300">
              <GlassWater className="w-4 h-4 text-[#A64ECE] animate-bounce" />
              CAMAREROS PARA EVENTOS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              ORGANIZA TU EVENTO CON TRANQUILIDAD: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                NUESTROS CAMAREROS ESTÁN PREPARADOS PARA GARANTIZAR TU ÉXITO.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              ¿Necesitas camareros profesionales para ofrecer aperitivos, servir vino, o hacer unos cócteles, pero te preocupa no acertar? ¡No te lo pienses más! Sabemos que la hostelería es muy importante en un evento, y podemos ayudarte.
            </p>

            {/* Premium Pill Button dual row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => handleRequestService("camareros")}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-bold text-center cursor-pointer shadow-sm w-full sm:w-auto"
                id="hero-request-budget-btn"
              >
                SOLICITA PRESUPUESTO
              </button>
              <button
                onClick={() => scrollToLocalSection("servicios-camareros-bento")}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-bold text-center cursor-pointer w-full sm:w-auto"
                id="hero-view-details-btn"
              >
                VER COMPROMISOS
              </button>
            </div>
            
            {/* Fast Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-lg">
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">100%</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Expertos Activos</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">PPE</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Academy Staff</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#333333] tracking-tight mb-0.5">Custom</p>
                <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Manual Estilo</p>
              </div>
            </div>
          </div>

          {/* Hero right visual layout - asymmetric premium cut-out card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-[430px] mx-auto flex items-center justify-center">
              
              {/* Organic glowing backgrounds */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#FF57DF]/20 to-[#00EAEA]/15 blur-2xl animate-pulse" />
              
              {/* Top and side floating tags */}
              <div className="absolute -top-4 -left-2 bg-white px-5 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-3 z-20 animate-artistic-float">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF57DF] animate-ping" />
                <span className="font-mono text-[11px] font-bold text-[#333333] uppercase tracking-wider">Estilo Adaptativo</span>
              </div>

              {/* Central Premium Container */}
              <div className="relative w-full h-full rounded-[48px] overflow-hidden border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.06)] bg-[#F8F9FA] group">
                <img
                  src="/images/personal-para-eventos-foto-1_0045_Camarerxs-17.jpg"
                  alt="Camareros profesionales de la agencia Personal para Eventos"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-750"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Immersive overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/50 via-transparent to-transparent" />
              </div>

              {/* Bottom solid card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 z-10 animate-artistic-float" style={{ animationDelay: "1s" }}>
                <div className="w-12 h-12 bg-[#00EAEA]/10 rounded-2xl flex items-center justify-center text-[#008d9e]">
                  <GlassWater className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-black text-lg text-[#333333] leading-none">Bar & Sala</h4>
                  <p className="text-[11px] text-[#555555] font-medium mt-1">Impecable Presencia y Protocolo</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* C. GRID DE CARACTERÍSTICAS (Tarjetas Modulares Levitantes) */}
      <section id="servicios-camareros-bento" className="relative py-12 sm:py-20 lg:py-32 border-t border-gray-100 w-[80%] max-w-none mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            NUESTRO COMPROMISO DE EXCELENCIA
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-[#333333] tracking-tighter">
            NUESTROS SERVICIOS DE CAMAREROS PARA EVENTOS
          </h2>
          <p className="text-lg text-[#555555] max-w-4xl mx-auto font-normal leading-relaxed">
            En Personal para Eventos, entendemos que cada detalle cuenta a la hora de crear un evento excepcional. Y queremos contribuir a tu éxito con nuestro dedicado equipo de camareros, que de forma garantizada añadirán profesionalismo y sofisticación a tu acción. Ya sea que estés planeando un evento corporativo elegante, una boda íntima o una celebración vibrante, nos aseguraremos de que todo fluya sin problemas.
          </p>
        </div>

        {/* Modular Grid Levitante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: CAMAREROS EXPERTOS */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(166,78,206,0.05)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-[#008d9e] rounded-2xl flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                CAMAREROS EXPERTOS
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Nuestro equipo está compuesto por camareros con amplia experiencia en el servicio de barra o cóctel. Desde servir copas de vino, tirar cañas, montar un coffee break u ofrecer aperitivos emplatados con una sonrisa, nuestros camareros están listos para asistir a tus invitados. Todos tienen experiencia previa, y están formados por Personal para Eventos Academy.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 select-none">
              PPE ACADEMY CERTIFIED <Award className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: PRESENCIA */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(255,87,223,0.05)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-[#c22e9e] rounded-2xl flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                PRESENCIA
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Sabemos que la apariencia importa. Nuestros camareros se presentan con una imagen impecable, adaptándose al estilo de tu evento. Puedes elegir un uniforme negro integral, camisa blanca, con o sin pajarita, sport… Con el uniforme y una actitud profesional, se integran perfectamente en la atmósfera de tu evento.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#FF57DF] flex items-center gap-1 select-none">
              MANUAL DE UNIFORMIDAD <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: COORDINACIÓN SIN ESTRÉS */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(166,78,206,0.05)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                COORDINACIÓN SIN ESTRÉS
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Olvídate de preocuparte por la logística. Nuestro equipo se encarga de la coordinación, asegurando que los camareros lleguen a tiempo, y estén ubicados estratégicamente para atender a tus invitados de manera eficiente.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 select-none">
              PUNTUALIDAD GARANTIZADA <CheckCircle className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: EXPERIENCIA PERSONALIZADA */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(255,243,18,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FFF312]/20 text-[#a39400] rounded-2xl flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                EXPERIENCIA PERSONALIZADA
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Cada evento es único, y nos aseguramos de entender tus necesidades. Trabajamos contigo para personalizar nuestros servicios de camareros, ya sean de barra, de cóctel, de coffee break, o de lo que necesites según el estilo y la visión de tu evento.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#333333] flex items-center gap-1 select-none">
              PLAN DE ACCIÓN MEDIDA <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5: TARIFAS JUSTAS */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(0,234,234,0.05)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-[#008d9e] rounded-2xl flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                TARIFAS JUSTAS
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Ofrecemos calidad a un precio razonable. Entendemos la importancia de no incurrir en sobrecostes innecesarios. Nuestra oferta de servicio de camareros equilibra calidad y precio, para brindarte el mejor valor posible. Obtén un servicio excepcional sin sobrepasar tu presupuesto.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#008d9e] flex items-center gap-1 select-none">
              SIN COSTES OCULTOS <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Card 6: PASIÓN POR LO QUE HACEMOS */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_45px_rgba(166,78,206,0.05)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-black text-xl text-[#333333] tracking-tight">
                PASIÓN POR LO QUE HACEMOS
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Nos apasiona el trabajo que hacemos, nos apasiona planificar cada detalle y cumplir con todo tal y como se había planeado. La satisfacción de nuestros clientes y de los invitados a sus eventos son la gasolina que nos hace tomar cada proyecto como un auténtico reto.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono font-bold text-[#A64ECE] flex items-center gap-1 select-none">
              A TU LADO SIEMPRE <CheckCircle className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* D. BANNER DE CONVERSIÓN (Fondo Amarillo Vibrante) */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-[#FFF312]/90 text-[#333333] border-y-2 border-[#333333]/10 overflow-hidden">
        {/* Abstract vector accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#00EAEA]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto text-center space-y-8 relative z-10">
          <span className="inline-block bg-[#333333] text-white text-[11px] font-mono font-black tracking-widest uppercase px-4 py-1.5 rounded-full select-none">
            MÁXIMO COMPROMISO HOSTELERO
          </span>
          
          <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
            CONTRATA LOS MEJORES CAMAREROS PARA EVENTOS
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#333333] leading-relaxed font-medium">
            Ya sea que estés planeando un evento próximo o desees obtener más información sobre nuestros servicios de camareros de barra y para eventos, estamos aquí para ayudarte. Comunícate con nosotros para discutir cómo podemos hacer que tu evento sea un éxito inolvidable. En Personal para Eventos, creemos que los detalles marcan la diferencia. Permítenos elevar la experiencia de tu evento con nuestros camareros profesionales y comprometidos. ¡Ponte en contacto con nosotros hoy mismo y hablamos del evento que quieres!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleRequestService("camareros")}
              className="bg-[#333333] text-white hover:bg-[#1a1a1a] hover:scale-105 transition-all duration-300 px-10 py-5 rounded-full text-base font-black cursor-pointer shadow-lg"
              id="middle-cta-btn"
            >
              ¡CONTACTA CON NOSOTROS!
            </button>
            <button
              onClick={() => scrollToLocalSection("seccion-camareros-sala")}
              className="bg-transparent border-2 border-[#333333] text-[#333333] hover:bg-[#333333]/10 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
            >
              LEER SOBRE CAMAREROS DE SALA
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* E. SECCIÓN: CAMAREROS DE SALA (Overlapping Image) */}
      <section id="seccion-camareros-sala" className="relative py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Left with negative margin Z-depth overlapping */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_25px_55px_rgba(0,0,0,0.06)] bg-gray-50 group">
              <img
                src="/images/personal-para-eventos-foto-1_0045_Camarerxs-17.jpg"
                alt="Camareros de sala profesionales"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#333333] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A64ECE]" />
                Servicios de Gala
              </div>
            </div>
            
            {/* Margen negativo para profundidad de eje Z */}
            <div className="absolute -bottom-8 -left-4 bg-[#A64ECE] text-white px-6 py-4 rounded-3xl shadow-[0_15px_30px_rgba(166,78,206,0.3)] select-none pointer-events-none z-10 -mt-12 hidden sm:block">
              <span className="font-mono text-xs font-black uppercase tracking-wider block">Excelencia</span>
              <span className="font-sans font-black text-lg block font-semibold leading-tight">Servicio de Mesa</span>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
            <span className="inline-block bg-[#A64ECE]/10 text-[#A64ECE] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              SALA Y BANQUETES PREMIUM
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter leading-none">
              CAMAREROS DE SALA
            </h2>
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              En Personal para Eventos sabemos que en el servicio de comida o cena de un evento es donde nos la jugamos. Es un momento esencial de cualquier acción, en el que hay que conseguir que la excelencia deje huella en la memoria de los comensales. Nada debe fallar. Y queremos contribuir a tu éxito con nuestro dedicado equipo de camareros, que de forma garantizada añadirán profesionalidad a tu acción.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("camareros")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-[0_15px_30px_rgba(166,78,206,0.2)] transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
                id="sec-camareros-sala-cta"
              >
                CONTACTA CON PERSONAL PARA EVENTOS
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* F. PROCEDIMIENTO NUMERADO: "NUESTROS SERVICIOS DE CAMAREROS DE SALA" */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] border-y border-gray-100">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center space-y-4 mb-20">
            <span className="inline-block bg-[#00EAEA]/10 text-[#008d9e] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              PROTOCOLO DE ACCIÓN
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#333333] tracking-tighter">
              NUESTROS SERVICIOS DE CAMAREROS DE SALA
            </h2>
            <p className="text-lg text-[#555555] max-w-4xl mx-auto font-normal leading-relaxed">
              Tanto en el momento de la selección, como en la posterior formación en Personal para Eventos Academy, nos encargamos de que, cuando nuestros camareros profesionales vayan a tu evento, sepan perfectamente qué tienen que hacer y cómo. Las tareas que más nos solicitan nuestros clientes de este tipo de servicio van desde:
            </p>
          </div>

          {/* Cuadrícula con grandes números de tipografía cinética */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Paso 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] to-[#FF57DF] opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  01
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  PREPARACIÓN DEL ÁREA
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Configuran las mesas antes de la llegada de los clientes, asegurándose de que estén limpias, correctamente dispuestas y con todos los elementos necesarios.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF57DF] to-[#FFF312] opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  02
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  ASISTENCIA A LOS CLIENTES
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Ayudan a los clientes a acomodarse y responden a preguntas sobre el menú y las opciones disponibles.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00EAEA] to-blue-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  03
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  TOMAR PEDIDOS
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Anotan los pedidos de alimentos y bebidas de los clientes, siguiendo las indicaciones precisas y asegurándose de que cualquier modificación se comunique correctamente a la cocina.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] to-[#00EAEA] opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  04
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  SERVICIO DE ALIMENTOS
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Llevan los platos a la mesa de manera cuidadosa y coordinada, colocando los platos frente a cada comensal en el momento adecuado. Saben pincear.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF57DF] to-purple-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  05
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  ATENCIÓN A DETALLES
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Están atentos a las bebidas vacías y a las necesidades adicionales de los clientes durante su comida.
                </p>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between group">
              <div>
                <span className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF312] to-amber-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  06
                </span>
                <h3 className="font-sans font-bold text-lg text-[#333333] uppercase mb-3">
                  RETIRO DE PLATOS
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Retiran los platos vacíos de la mesa de manera discreta y profesional, manteniendo la presentación ordenada y agradable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* G. CIERRE Y CTA FINAL */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#A64ECE]/5 blur-[120px] pointer-events-none" />
        
        <div className="w-[80%] max-w-none mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: text and CTA left-justified */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-[#333333] tracking-tighter uppercase leading-tight">
              COMPROMISO COMERCIAL Y EFICIENCIA EN SINTONÍA
            </h2>
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              En resumen, tenemos la responsabilidad de brindar un servicio ágil y comprometido a tus clientes, asegurando que tengan una experiencia cómoda y satisfactoria en todas las interacciones. Si estás listo para hacer de tu evento un éxito inolvidable. ¡Contáctanos hoy mismo para obtener más información, solicitar un presupuesto personalizado y comenzar a planificar la experiencia de camareros perfecta para tu evento! En Personal para Eventos, creemos que cada detalle importa. Confía en nosotros para proporcionar un servicio de camareros de sala que marque la diferencia en tu evento.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleRequestService("camareros")}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 hover:shadow-[0_20px_40px_rgba(166,78,206,0.3)] transition-all duration-300 px-10 py-5 rounded-full text-base font-black cursor-pointer inline-flex items-center gap-3 shadow-md"
                id="final-camareros-page-cta"
              >
                NECESITO CAMAREROS DE SALA <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Column Right: Floating Background photo */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
              <img
                src="/images/personal-para-eventos-foto-1_0045_Camarerxs-17.jpg"
                alt="Compromiso comercial y coordinacion de camareros"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------ */}
      {/* H. CROSS-SELLING (Grid modular flotante inferior) */}
      <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 lg:pb-32 w-[80%] max-w-none mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left space-y-4">
            <div className="inline-block bg-[#00EAEA]/10 text-[#008d9e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              EQUIPO INTEGRAL DE HOSTELERÍA Y ACCIONES
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-black text-[#333333] tracking-tighter">
              ¿NECESITAS CONTRATAR OTRO TIPO DE PERSONAL PARA EVENTOS?
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              ¿Estás planeando un evento y necesitas auxiliares, azafatas o cocineros profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
            </p>
          </div>
        </div>

        {/* 5-column cross selling categories layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
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

          {/* Card Azafatas */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#00EAEA]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#00EAEA]/10 text-[#008d9e] flex items-center justify-center mb-6">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">AZAFATAS</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">Azafatas multilingües, transfer y protocolo.</p>
            <button
              onClick={() => {
                navigateTo("azafatas");
              }}
              className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#933fd1] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              Ir a azafatas <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Montadores */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#FF57DF]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#FF57DF]/10 text-[#c22e9e] flex items-center justify-center mb-6">
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
              Ir a montadores <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card Auxiliares */}
          <div className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-100/50 hover:border-[#FFF312]/30 hover:shadow-soft transition-all duration-300 text-left group">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF312]/20 text-[#a39400] flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-sm text-[#333333] mb-1">AUXILIARES</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">Apoyo general en accesos, control y logística.</p>
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

        {/* Region specific quick labels matching the cross-selling targets */}
        <div className="mt-12 pt-8 border-t border-gray-100/80 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <span className="text-[11px] font-mono font-semibold text-gray-400 select-none">COBERTURA LOCAL REFORZADA:</span>
          <button onClick={() => handleRequestService("camareros")} className="text-xs font-mono font-bold text-[#333333] hover:text-[#A64ECE] transition-colors">CAMAREROS MADRID</button>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <button onClick={() => handleRequestService("camareros")} className="text-xs font-mono font-bold text-[#333333] hover:text-[#A64ECE] transition-colors">CAMAREROS BARCELONA</button>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <button onClick={() => handleRequestService("camareros")} className="text-xs font-mono font-bold text-[#333333] hover:text-[#A64ECE] transition-colors">CAMAREROS VALENCIA</button>
        </div>

      </section>

    </div>
  );
}
