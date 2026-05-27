import React from "react";
import { Sparkles, Wrench, Check, Award, Flame, Shield, ArrowRight, HeartHandshake, Compass } from "lucide-react";

interface MontadoresPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function MontadoresPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: MontadoresPageProps) {

  const handleRequestService = () => {
    if (setBudgetStaff) {
      setBudgetStaff((prev: any) => {
        const updated = { ...prev };
        if (updated["montadores"]) {
          updated["montadores"] = {
            ...updated["montadores"],
            qty: Math.max(updated["montadores"].qty, 1)
          };
        }
        return updated;
      });
    }
    navigateTo("solicita-presupuesto");
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Dopaminic Blur Blobs (Cian, Amarillo, Magenta) */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-[#00EAEA]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#FFF312]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#FF57DF]/10 blur-[120px] pointer-events-none" />

      {/* HERO SECTION DE MONTADORES */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Asymmetric Left Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A64ECE]" />
              <span>MONTADORES PARA EVENTOS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              EXPERTOS EN MONTAJE DE EVENTOS: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                BUSCANDO LA PERFECCIÓN
              </span> <br />
              EN CADA DETALLE
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              En Personal para Eventos ofrecemos los profesionales que necesitas para ayudarte no solo a montar tu evento, sino a que el resultado cree una experiencia inolvidable. Nuestro equipo de montadores de eventos está formado por profesionales apasionados y dedicados que se esfuerzan por superar tus expectativas y dar vida a tu visión.
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
                  const el = document.getElementById("por-que-elegirnos");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer w-full sm:w-auto"
              >
                DESCUBRE LAS VENTAJAS
              </button>
            </div>
          </div>

          {/* Right Floating Cutout Box */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#FF57DF]/10 blur-3xl animate-pulse" />
            <div className="relative w-full max-w-[400px] h-[480px] rounded-[40px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 bg-white p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[360px] rounded-[28px] overflow-hidden mb-4">
                <img
                  src="/images/12.jpeg"
                  alt="Equipo de montadores de eventos operando"
                  className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#A64ECE]" />
                  <span>Logística Homologada</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-sans font-bold text-lg text-[#333333] leading-none mb-1">Montaje de Estructuras</h3>
                <p className="text-xs text-[#555555] font-normal">Experiencia y profesionalidad garantizando seguridad total.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GRID ¿POR QUÉ ELEGIRNOS? (Tarjetas Modulares Levitantes) */}
      <section id="por-que-elegirnos" className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4 sm:space-y-5">
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              ¿POR QUÉ ELEGIR A NUESTROS MONTADORES PARA EVENTOS?
            </h2>
            <div className="h-1.5 w-24 bg-[#00EAEA] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              En Personal para Eventos sabemos que cada evento es diferente. Confía en Personal para Eventos para convertir tu evento en una experiencia visualmente asombrosa. Permítenos crear una atmósfera que dejará a tus invitados sin palabras.
            </p>
          </div>

          {/* Grid de Tarjetas con efectos hover y sombra neumorfista */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">COMPROMISO CON LA EXCELENCIA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Cada evento es único, y nos tomamos el tiempo para comprender tus objetivos y necesidades. Nuestro equipo trabaja con minuciosidad para asegurarse de que cada montaje no tenga sorpresas, y esté alineado con tus expectativas.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">MONTAJE FLUIDO</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro equipo trabaja con eficiencia y coordinación, asegurando que cada montaje se realice sin contratiempos y dentro de los plazos establecidos.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FFF312]/20 text-[#333333] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">ESPECIALIZACIÓN EN DIVERSOS EVENTOS</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Ya sea una elegante recepción de boda, un evento corporativo de gran envergadura o una exhibición artística, nuestros montadores están preparados para adaptarse y cumplir con los requisitos específicos de cada evento.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#00EAEA]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">ATENCIÓN A LOS DETALLES</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Sabemos que la atención a los detalles marca la diferencia. Desde la disposición precisa de elementos decorativos hasta la creación de una atmósfera cohesiva, nuestros montadores garantizan que cada elemento se ajuste perfectamente.
              </p>
            </div>

            {/* Tarjeta 5 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">CREATIVIDAD VISUAL</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Además de montar, nos aseguramos de haber entendido tus necesidades y trabajamos contigo para crear un escenario visualmente impactante que capture la esencia de tu evento y sorprenda a tus invitados.
              </p>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">SOLUCIÓN DE PROBLEMAS</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Estamos preparados para afrontar cualquier desafío que surja en el proceso de montaje, buscando soluciones rápidas y efectivas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN RECUADRO DE SERVICIOS ESPECÍFICOS */}
      <section className="py-24 sm:py-32 w-[80%] max-w-none mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
            NUESTROS SERVICIOS DE MONTADOR PARA EVENTOS
          </h2>
          <div className="h-1 bg-[#A64ECE] w-20 mx-auto mt-4 rounded-full" />
        </div>

        {/* Asymmetric Alternating Grid of Specific Profiles */}
        <div className="space-y-16">
          
          {/* Bloque 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/images/13.jpeg"
                alt="Mozos de carga organizando cajas de material"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
            </div>
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#00EAEA]/10 text-cyan-800 px-4 py-1.5 rounded-full text-xs font-bold leading-none">
                <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                LOGÍSTICA INICIAL
              </div>
              <h3 className="text-2xl font-black font-sans text-[#333333]">Mozo de carga / Hand básico</h3>
              <p className="text-[#555555] text-lg leading-relaxed font-normal">
                Estos profesionales se encargan de descargar y cargar todo el material de tu evento, y la distribuye por los espacios donde va a utilizarse de manera ágil y coordinada.
              </p>
            </div>
          </div>

          {/* Bloque 2 - Reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:col-span-5 lg:order-last h-[320px] rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/images/3.jpeg"
                alt="Ayudantes montando estructuras metálicas"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
            </div>
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#FF57DF]/10 text-pink-800 px-4 py-1.5 rounded-full text-xs font-bold leading-none">
                <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                ESTRUCTURA E INFRAESTRUCTURA
              </div>
              <h3 className="text-2xl font-black font-sans text-[#333333]">Auxiliares de montaje</h3>
              <p className="text-[#555555] text-lg leading-relaxed font-normal">
                Un equipo de ayudantes en el montaje de carpas, tarimas, escenarios, stands para ferias y demás estructuras. Los necesitarás en cualquier acción; una boda, un evento corporativo, o una exhibición de arte.
              </p>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/images/4.jpeg"
                alt="Montaje de cableados y stands técnicos"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
            </div>
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#FFF312]/20 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold leading-none">
                <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
                PERFILES AVANZADOS Y ELECTRICISTAS
              </div>
              <h3 className="text-2xl font-black font-sans text-[#333333]">Otros perfiles</h3>
              <p className="text-[#555555] text-lg leading-relaxed font-normal">
                También tenemos coordinadores, capataces, carpinteros, electricistas y verticaleros. ¡No dejes de preguntarnos tus dudas!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BANNER DESTACADO DE CIERRE (Fondo destacado en gris perla ultra-ligero - Acolchado reducido en 50%) */}
      <section className="py-6 sm:py-10 lg:py-16 w-[80%] max-w-none mx-auto relative z-10">
        <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 shadow-[0_20px_45px_rgba(0,0,0,0.03)] relative overflow-hidden border border-gray-100/70">
          
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#00EAEA]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#FF57DF]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#A64ECE]" />
                SOLUCIONES EXCEPCIONALES
              </div>

              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight pt-2 sm:pt-3">
                DÉJA EN NUESTROS MANOS EL MONTAJE DE TU EVENTO
              </h2>

              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-normal">
                En Personal para Eventos, estamos dedicados a hacer que tu visión cobre vida. Ya sea un evento íntimo o una producción a gran escala, nuestros montadores están listos para transformar tus ideas en una realidad impresionante. ¿Listo para que tu evento brille con un montaje impecable y creativo? ¡Contáctanos hoy mismo para obtener más información y comenzar a planificar el montaje perfecto para tu evento!
              </p>

              {/* Dual CTAs in Pill form */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleRequestService}
                  className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold shadow-sm text-center select-none cursor-pointer"
                >
                  NECESITO MONTADORES PARA UN EVENTO
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
                src="/images/16.jpeg"
                alt="Montadores profesionales preparando evento"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800";
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

        {/* Dynamic Portfolio and navigation routes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Service Cocteleros */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">COCTELEROS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Premium bar mixers, flair bartenders and boutique custom menu setups.</p>
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
              <p className="text-xs text-[#555555] line-clamp-2">Gourmet chef assistants, food tasting controls and kitchen logistics handlers.</p>
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
              <p className="text-xs text-[#555555] line-clamp-2">Protocol support staff, multilingües, hosts and exhibition assistants.</p>
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
              <p className="text-xs text-[#555555] line-clamp-2">Bar servers, fine-dining hosts, cocktail trays handlers and gala service staff.</p>
            </div>
            <button
              onClick={() => navigateTo("camareros")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Auxiliares */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">AUXILIARES</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Access controllers, coatroom handlers, and support crew of extreme high-security focus.</p>
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
