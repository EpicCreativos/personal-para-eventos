import React from "react";
import { Sparkles, ShieldCheck, Check, Award, Compass, HeartHandshake, HelpCircle, ArrowRight, UserCheck, Shield } from "lucide-react";

interface AuxiliaresPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function AuxiliaresPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: AuxiliaresPageProps) {

  const handleRequestService = () => {
    if (setBudgetStaff) {
      setBudgetStaff((prev: any) => {
        const updated = { ...prev };
        if (updated["auxiliares"]) {
          updated["auxiliares"] = {
            ...updated["auxiliares"],
            qty: Math.max(updated["auxiliares"].qty, 1)
          };
        }
        return updated;
      });
    }
    navigateTo("solicita-presupuesto");
  };

  return (
    <div id="auxiliares-page-root" className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Micro-acentos vectoriales dopamínicos del background (blobs táctiles con blur masivo) */}
      <div className="absolute top-10 left-[-5%] w-[480px] h-[480px] rounded-full bg-[#00EAEA]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#FFF312]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#FF57DF]/10 blur-[120px] pointer-events-none" />

      {/* HERO SECTION DE AUXILIARES (100vh area in espíritu asimétrico) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Block text content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A64ECE]" />
              <span>Haciendo que Cada Detalle Cuente</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              PERSONAL AUXILIAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                PARA EVENTOS
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              Si lo que necesitas en tu evento es personal para el control de accesos, pulsereros, gestionar el ropero, chóferes, aparcacoches, o personal de limpieza, manipuladores, etc, en Personal para Eventos queremos ser tu Socio confiable para una ejecución sin problemas. Sabemos que los pequeños detalles hacen una gran diferencia en la ejecución exitosa de un evento. Nuestro equipo de auxiliares está aquí para garantizar que cada aspecto, desde la logística hasta la atención al cliente, esté cuidadosamente manejado para crear una experiencia de éxito.
            </p>

            {/* CTA Buttons in pill form with hovering microanimations */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleRequestService}
                className="bg-[#A64ECE] text-white hover:scale-[1.03] hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer shadow-soft w-full sm:w-auto"
              >
                NECESITA PERSONAL AUXILIAR PARA UN EVENTO
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById("auxiliares-beneficios");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-[1.03] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer w-full sm:w-auto"
              >
                VER BENEFICIOS
              </button>
            </div>
          </div>

          {/* Right Area: Large image inside tactile rounded borders with Soft drop shadow */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#00EAEA]/15 blur-3xl animate-pulse" />
            <div className="relative w-full max-w-[420px] h-[490px] rounded-[40px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 bg-white p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[370px] rounded-[28px] overflow-hidden mb-4 bg-gray-50">
                <img
                  src="/images/14.jpeg"
                  alt="Personal auxiliar de accesos y apoyo logístico"
                  className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/images/12.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A64ECE]" />
                  <span>Control de Accesos Autorizado</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-sans font-bold text-lg text-[#333333] leading-none mb-1">Garantía Corporativa</h3>
                <p className="text-xs text-[#555555] font-normal">Personal de confianza entrenado para respuestas rápidas.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GRID DE BENEFICIOS (Tarjetas Modulares Levitantes) */}
      <section id="auxiliares-beneficios" className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4sm:space-y-5">
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              ¿POR QUÉ CONTAR CON NUESTRO PERSONAL AUXILIAR?
            </h2>
            <div className="h-1.5 w-24 bg-[#A64ECE] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-[#555555] font-normal max-w-2xl mx-auto leading-relaxed">
              Descubre los pilares que hacen del soporte auxiliar de nuestra agencia la opción más competitiva y rigurosa del mercado de eventos.
            </p>
          </div>

          {/* Grid de 3 columnas de Tarjetas modulares flotantes neumorfistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">ProfesionaliDAD en Cada Rol</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro equipo de personal auxiliar está formado por profesionales comprometidos y capacitados en nuestra Academy, que comprenden la importancia de su función en el éxito global de tu evento.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-[#FF57DF] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Coordinación sin Fisuras</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Desde la gestión de registros hasta el apoyo en la organización de espacios, nuestro personal auxiliar está preparado para asegurarse de que cada tarea se realice de manera eficiente y sin problemas.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FFF312]/20 text-yellow-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Atención al Cliente de Primera Clase</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro personal auxiliar no solo maneja tareas operativas; también se comprometen con un servicio al cliente amable y atento, asegurando que tus invitados se sientan bienvenidos y bien atendidos.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Check className="w-6 h-6 text-[#00EAEA]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Interacción Profesional</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro personal auxiliar interactúa con tus invitados y participantes con una sonrisa amable y una actitud proactiva.
              </p>
            </div>

            {/* Tarjeta 5 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Gestión de Flujo</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Desde la gestión de la entrada hasta la dirección de los asistentes, nuestro equipo garantiza que todo fluya sin problemas.
              </p>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Flexibilidad y Adaptabilidad</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Estamos preparados para ajustarnos a las necesidades cambiantes de tu evento y abordar cualquier desafío que pueda surgir.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BANNER DESTACADO DE CIERRE (Fondo destacado en gris ultra-ligero de alta dispersión) */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 shadow-[0_20px_45px_rgba(0,0,0,0.03)] relative overflow-hidden border border-gray-100/70">
          
          <div className="absolute top-[-20%] left-[-10%] w-[420px] h-[420px] bg-[#00EAEA]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[380px] h-[380px] bg-[#FF57DF]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#A64ECE]" />
                SOLUCIONES LOGÍSTICAS DE ÉXITO
              </div>

              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight">
                TRANSFORMA TU EVENTO EN UNA EXPERIENCIA SIN FISURAS CON NUESTRO PERSONAL AUXILIAR.
              </h2>

              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-normal">
                En Personal para Eventos, reconociendo que cada detalle contribuye al éxito general de tu evento. Ya sea una conferencia, una feria comercial o cualquier otro tipo de evento, nuestro personal auxiliar está listo para contribuir a una ejecución perfecta. ¿Listo para hacer que cada aspecto de tu evento cuente? ¡Contáctanos hoy mismo para obtener más información y comenzar a planificar la presencia de nuestro personal auxiliar en tu evento! En Personal para Eventos, sabemos que cada tarea importa. Confía en nosotros para brindarte un personal auxiliar que asegure la excelencia en cada detalle.
              </p>

              {/* Dual CTAs in Pill form with active cursor pointer highlights */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleRequestService}
                  className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold shadow-sm text-center select-none cursor-pointer"
                >
                  NECESITA PERSONAL AUXILIAR PARA UN EVENTO
                </button>
                
                <button
                  onClick={() => navigateTo("solicita-presupuesto")}
                  className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold text-center select-none cursor-pointer"
                >
                  SOLICITA PRESUPUESTO
                </button>
              </div>
            </div>

            {/* Right side: Background photo column */}
            <div className="lg:col-span-5 h-[400px] relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.04)] bg-gray-100">
              <img
                src="/images/1.jpeg"
                alt="Personal auxiliar en evento selecto"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE ENLAZADO INFERIOR (Cross-selling) */}
      <section className="py-24 sm:py-32 w-[80%] max-w-none mx-auto relative z-10 text-center">
        
        <div className="mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
            ¿NECESITAS CONTRATAR OTRO TIPO DE PERSONAL PARA EVENTOS?
          </h2>
          <div className="h-1 w-16 bg-[#FFF312] mx-auto rounded-full" />
          <p className="text-[#555555] text-lg sm:text-xl font-normal leading-relaxed">
            ¿Estás planeando un evento y necesitas auxiliares, azafatos o camareras profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
          </p>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Service Cocteleros */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">COCTELEROS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Mixología creativa y cócteles para congresos de alta fidelidad.</p>
            </div>
            <button
              onClick={() => navigateTo("cocteleros")}
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

        </div>
      </section>

    </div>
  );
}
