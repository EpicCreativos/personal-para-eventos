import React from "react";
import { Sparkles, GlassWater, Flame, Award, ShieldCheck, HelpCircle, ArrowRight, HeartHandshake, CheckCircle2 } from "lucide-react";

interface CoctelerosPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function CoctelerosPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: CoctelerosPageProps) {

  const handleRequestService = () => {
    if (setBudgetStaff) {
      setBudgetStaff((prev: any) => {
        const updated = { ...prev };
        if (updated["cocteleros"]) {
          updated["cocteleros"] = {
            ...updated["cocteleros"],
            qty: Math.max(updated["cocteleros"].qty, 1)
          };
        }
        return updated;
      });
    }
    navigateTo("solicita-presupuesto");
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Premium Dopaminic Blob Accents */}
      <div className="absolute top-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-[#00EAEA]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFF312]/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-[#FF57DF]/10 blur-[130px] pointer-events-none" />

      {/* HERO SECTION DE COCTELEROS (100vh area) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Hero Left Content Area */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A64ECE]" />
              <span>COCTELEROS PARA EVENTOS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              EXPERIENCIA EN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                COCTELERÍA PREMIUM
              </span> <br />
              PARA TODO TIPO DE EVENTOS
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              En Personal para Eventos comprendemos que los cócteles no son solo bebidas; son piezas de arte líquidas que agregan un toque de sofisticación y diversión a cualquier evento. Si quieres ir un paso más allá, nuestros talentos@s cocteler@s están aquí para ayudarte a crear una experiencia de bebidas excepcional que sorprenda a tus invitados.
            </p>

            {/* CTA Dual Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleRequestService}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer shadow-soft w-full sm:w-auto"
              >
                SOLICITA PRESUPUESTO
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("services-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer w-full sm:w-auto"
              >
                VER NUESTROS SERVICIOS
              </button>
            </div>
          </div>

          {/* Hero Right Graphical Visual Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#00EAEA]/15 blur-3xl animate-pulse" />
            <div className="relative w-full max-w-[420px] h-[490px] rounded-[40px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.05)] border border-gray-100 bg-white p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[370px] rounded-[28px] overflow-hidden mb-4 bg-gray-55">
                <img
                  src="/images/8-a.jpg"
                  alt="Cocteleros sirviendo copas premium"
                  className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/images/12.jpeg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                  <GlassWater className="w-4 h-4 text-[#A64ECE]" />
                  <span>Premium Mixology</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-sans font-bold text-lg text-[#333333] leading-none mb-1">Arte Líquido Exclusivo</h3>
                <p className="text-xs text-[#555555] font-normal">Formación integral corporativa para una atención estelar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS DEL SERVICIO (Layout Bento/Tarjetas Flotantes) */}
      <section id="services-grid" className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              NUESTROS SERVICIOS DE COCTELEROS PARA EVENTOS
            </h2>
            <div className="h-1.5 w-24 bg-[#A64ECE] mx-auto rounded-full" />
            <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed">
              En Personal para Eventos, sabemos que cada cóctel cuenta una historia. Confía en nosotros para brindarte una experiencia de coctelería que tus invitados recordarán mucho después del último sorbo.
            </p>
          </div>

          {/* Grid de Tarjetas Levitantes Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-[#00EAEA] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">EXPERIENCIA Y PROFESIONALIDAD</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                La mayoría de nuestros cocteleros se han formado en “Personal Para Eventos Academy” y cuenta con numerosos eventos a sus espaldas, cumpliendo siempre con las necesidades y gustos del cliente.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-[#FF57DF] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">COORDINACIÓN SIN ESTRÉS</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro equipo se encarga de la coordinación, asegurando que los cocteleros lleguen a tiempo, y estén ubicados estratégicamente para atender a tus invitados de manera eficiente.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FFF312]/20 text-[#333333] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">MIXOLOGÍA CREATIVA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro equipo de cocteleros profesionales está dedicado a la creación de cócteles únicos y deliciosos que sorprenderán y deleitarán a tus invitados.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#00EAEA]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">PERSONALIZACIÓN DE CARTA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Colaboramos contigo para diseñar una carta de cócteles que se adapte a la temática y el estilo de tu evento, desde cócteles clásicos hasta creaciones innovadoras.
              </p>
            </div>

            {/* Tarjeta 5 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">PRESENTACIÓN VISUALMENTE IMPACTANTE</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                No solo se trata del sabor, sino también de la presentación. Nuestros cocteleros se esmeran en crear cócteles visualmente impresionantes que serán la estrella de tu evento.
              </p>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GlassWater className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">ESTÉTICA UNIFORMADA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                No solo los cócteles tienen que sorprender; los cocteleros también! Déjanos aconsejarte sobre el mejor uniforme para estos barmans.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN ENFOQUE PROFESIONAL (Layout Dividido / Asimétrico) */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Image structure */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
            <div className="absolute w-80 h-80 bg-[#FF57DF]/15 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full max-w-[390px] h-[450px] rounded-[36px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.05)] border border-gray-100 bg-white p-4">
              <img
                src="/images/2-a.jpeg"
                alt="Detalle de mixología, verter cócteles gourmet"
                className="w-full h-full object-cover rounded-[28px]"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
            </div>
          </div>

          {/* Right Block: Pure Copywritten Texts literal and integral */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#00EAEA]/10 text-cyan-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <Flame className="w-4 h-4 text-[#A64ECE]" />
              <span>PASIÓN Y CIENCIA</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight">
              SOMOS ESPECIALISTAS EN COCTELERÍA
            </h2>

            <p className="text-[#555555] text-lg sm:text-xl leading-relaxed font-normal">
              Nuestros cocteleros son apasionados por su arte y dominan la ciencia y el arte de la mixología para crear experiencias de bebidas únicas. Cada cóctel se prepara con precisión, desde la elección de ingredientes frescos hasta la mezcla perfecta y la decoración meticulosa. Nuestros cocteleros no solo crean cócteles; también brindan entretenimiento interactivo, compartiendo su conocimiento y pasión con los invitados.
            </p>

            <button
              onClick={handleRequestService}
              className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold shadow-sm flex items-center justify-center gap-2 select-none cursor-pointer"
            >
              <span>NECESITO COCTELEROS PARA UN EVENTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* BANNER DESTACADO DE FORMACIÓN (Convertido a Grid de dos columnas con Imagen de Fondo en la columna derecha) */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 shadow-[0_20px_45px_rgba(0,0,0,0.03)] relative overflow-hidden border border-gray-100/70">
          
          {/* Subtle colored blob inside card */}
          <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-[#FFF312]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                FORMACIÓN INIGUALABLE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight uppercase">
                ¿NECESITAS CÓCTELES DE CALIDAD? <br />
                <span className="text-[#A64ECE]">ASEGÚRATE CON PROFESIONALES FORMADOS EN COCTELERÍA PARA EVENTOS</span>.
              </h2>

              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-normal">
                En Personal para Eventos creemos que los cócteles son una forma de interactuar de forma sorprendente y especial con tus invitados, creando con ellos una experiencia que perdure en el recuerdo de todos los asistentes. Ya sea una boda elegante, una fiesta privada o un evento corporativo, nuestros cocteleros profesionales formados en coctelería para eventos están listos para elevar el ambiente y la experiencia de tus invitados. ¿Estás listo para llevar la coctelería de tu evento al siguiente nivel? ¡Contáctanos hoy mismo para obtener más información, solicitar un presupuesto personalizado y comenzar a planificar el menú de cócteles perfecto para tu evento!
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <button
                  onClick={handleRequestService}
                  className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold shadow-sm flex items-center justify-center gap-2 select-none cursor-pointer text-center"
                >
                  <span>NECESITO COCTELEROS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => navigateTo("academy")}
                  className="text-[#333333] hover:text-[#A64ECE] font-bold text-sm tracking-wide border-b border-[#333333] hover:border-[#A64ECE] transition-all pb-1 select-none cursor-pointer text-center"
                >
                  Conocer la Academy
                </button>
              </div>
            </div>

            {/* Right Column: Background image */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-50 group">
                <img
                  src="/images/4.jpeg"
                  alt="Coctelería de alta calidad entrenada para eventos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CROSS-SELLING SECTION (Bloque de Enlazado Inferior) */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
            ¿NECESITAS CONTRATAR OTRO TIPO DE PERSONAL PARA EVENTOS?
          </h2>
          <div className="h-1 w-16 bg-[#00EAEA] mx-auto rounded-full" />
          <p className="text-[#555555] text-lg sm:text-xl font-normal leading-relaxed">
            ¿Estás planeando un evento y necesitas auxiliares, azafatos o camareras profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
          </p>
        </div>

        {/* Responsive Grid list of other services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Service Camareros */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">CAMAREROS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Atención hospitality, etiqueta de sala refinada y coffee breaks impecables.</p>
            </div>
            <button
              onClick={() => navigateTo("camareros")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Cocineros */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">COCINEROS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Platos gourmet, control de dietas y ayudantes de cocina para banquetes memorables.</p>
            </div>
            <button
              onClick={() => navigateTo("cocineros")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Azafatas */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">AZAFATAS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Líderes de protocolo corporativo, multilingües y registro de accesos.</p>
            </div>
            <button
              onClick={() => navigateTo("azafatas")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Montadores */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">MONTADORES</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Estructuras escénicas, mozos de carga eficientes y personal de carpintería.</p>
            </div>
            <button
              onClick={() => navigateTo("montadores")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Auxiliares */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">AUXILIARES</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Gestión de ropero, custodia y chóferes VIP con amplia credencial.</p>
            </div>
            <button
              onClick={() => navigateTo("auxiliares")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
