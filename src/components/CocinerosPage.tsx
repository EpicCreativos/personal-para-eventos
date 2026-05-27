import React from "react";
import { Sparkles, ChefHat, Check, Award, Flame, Shield, ArrowRight, Heart, HeartHandshake } from "lucide-react";

interface CocinerosPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
  setBudgetStaff?: React.Dispatch<React.SetStateAction<any>>;
}

export default function CocinerosPage({
  setIsBudgetModalOpen,
  setIsApplyModalOpen,
  navigateTo,
  setBudgetStaff
}: CocinerosPageProps) {

  const handleRequestService = () => {
    if (setBudgetStaff) {
      setBudgetStaff((prev: any) => {
        const updated = { ...prev };
        if (updated["cocineros"]) {
          updated["cocineros"] = {
            ...updated["cocineros"],
            qty: Math.max(updated["cocineros"].qty, 1)
          };
        }
        return updated;
      });
    }
    // Navigate directly to the budgeting page for a rich interactive experience
    navigateTo("solicita-presupuesto");
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Microaccent Dopaminic Blurs (Cian, Amarillo, Magenta) */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] rounded-full bg-[#00EAEA]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-20 w-[500px] h-[500px] rounded-full bg-[#FFF312]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#FF57DF]/10 blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Asymmetric Left Area */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A64ECE]" />
              <span>COCINEROS PARA EVENTOS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] break-words">
              DESCUBRE NUESTROS SERVICIOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                DE COCINEROS Y AYUDANTES DE COCINA
              </span> <br />
              PARA EVENTOS ESPECIALES
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              En Personal para Eventos, sabemos que la comida es una parte esencial de cualquier evento memorable. Nuestros cocineros y ayudantes de cocina están listos para crear una experiencia culinaria excepcional que dejará una impresión duradera en tus invitados.
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
                  const el = document.getElementById("why-choose-us-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer w-full sm:w-auto"
              >
                VER VENTAJAS
              </button>
            </div>
          </div>

          {/* Graphical Premium Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#A64ECE]/10 blur-2xl animate-pulse" />
            <div className="relative w-full max-w-[400px] h-[480px] rounded-[40px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 bg-white p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[360px] rounded-[28px] overflow-hidden mb-4">
                <img
                  src="/images/11.jpeg"
                  alt="Cocineros en acción en evento especial"
                  className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-[#A64ECE]" />
                  <span>Alta Cocina Corporativa</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-sans font-bold text-[#333333] leading-none mb-2 uppercase tracking-tight text-xl">ALTA GASTRONOMÍA CORPORATIVA</h3>
                <p className="text-xs text-[#555555] font-normal">Soporte, orden y profesionalidad certificada para tu catering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US GRID SECTION */}
      <section id="why-choose-us-grid" className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] mb-5">
              ¿POR QUÉ ELEGIR A NUESTROS COCINEROS PARA EVENTOS?
            </h2>
            <div className="h-1 w-20 bg-[#A64ECE] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#555555] font-normal leading-relaxed">
              Seleccionamos meticulosamente a profesionales del sector gastronómico de alto nivel que entienden la responsabilidad del servicio corporativo, banquetes y ferias.
            </p>
          </div>

          {/* Modular Grid Layout of Levitating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">COCINEROS EXPERTOS</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Ponemos a tu disposición un equipo de cocineros altamente cualificados para cooperar en el desarrollo del menú, hacer las pruebas, ponerse a las órdenes de vuestro jefe de cocina, o cualquier función necesaria para preparar platos deliciosos que no solo satisfacen el paladar, sino que también cautivan los sentidos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">DIVERSIDAD DE MENÚS</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Desde menús gourmet hasta opciones más casuales, trabajamos contigo para crear un menú personalizado que se adapte al estilo y las preferencias de tu evento.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FFF312]/20 text-yellow-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">PASIÓN POR LA GASTRONOMÍA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestros cocineros comparten una pasión por el servicio excepcional. Cada plato es una expresión de creatividad y dedicación.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#A64ECE]/10 text-[#A64ECE] rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#00EAEA]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">PRECISIÓN Y EFICIENCIA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Nuestro equipo trabaja en armonía con los cocineros jefes, o con nuestros propios cocineros para garantizar una ejecución perfecta, desde la preparación hasta la presentación final.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#FF57DF]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">ATENCIÓN AL DETALLE</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Desde la selección de ingredientes frescos hasta la presentación visualmente atractiva, cuidamos cada detalle para brindar una experiencia culinaria completa.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChefHat className="w-6 h-6 text-[#A64ECE]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">COMPROMISO Y EXCELENCIA</h3>
              <p className="text-[#555555] text-sm leading-relaxed font-normal">
                Somos un equipo comprometido al cien por cien con su trabajo. Cada proyecto en el que nos embarcamos es una nueva oportunidad de demostrar la excelencia que caracteriza a nuestros cocineros.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SPLIT LAYOUT: AYUDANTES DE COCINA */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] mb-4">
            AYUDANTES DE COCINA
          </h2>
          <p className="text-[#A64ECE] text-lg font-bold">
            Eleva tu Experiencia Gastronómica con Profesionales Apasionados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block */}
          <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[36px] border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-soft transition-all duration-300">
            <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-gray-100 mb-6 shrink-0 group">
              <img
                src="/images/11.jpeg"
                alt="Ayudante de Cocina Soporte Dinámico"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <div className="space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black font-sans text-[#333333] mb-2">Soporte Culinario Dinámico</h3>
                <p className="text-[#555555] text-base leading-relaxed font-normal">
                  Nuestros ayudantes de cocina se encargan de la preparación y el montaje de ingredientes, colaborando estrechamente con los cocineros principales para garantizar un servicio impecable. En Personal para Eventos, comprendemos la importancia de hacer que cada bocado cuente. Ya sea un banquete de boda elegante, una cena corporativa o una celebración íntima, nuestros profesionales de cocina están listos para llevar tu evento al siguiente nivel. ¿Estás listo para ofrecer a tus invitados una experiencia culinaria excepcional?
                </p>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="bg-white p-8 sm:p-10 rounded-[36px] border border-[#A64ECE]/20 shadow-[0_20px_45px_rgba(166,78,206,0.04)] flex flex-col justify-between hover:shadow-soft transition-all duration-300">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-gray-100 mb-6 shrink-0 group">
                <img
                  src="/images/15.jpeg"
                  alt="Ayudante de cocina preparando platos con un Toque de Arte"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black font-sans text-[#333333] flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#A64ECE]" />
                  Un Toque de Arte
                </h3>
                <p className="text-[#333333] text-base leading-relaxed font-semibold">
                  ¡Contáctanos hoy mismo para obtener más información, solicitar un presupuesto personalizado y comenzar a planificar el menú perfecto para tu evento! En Personal para Eventos, creemos que la comida es una forma de arte. Confía en nosotros para ofrecerte una experiencia gastronómica única que tus invitados recordarán.
                </p>
              </div>
            </div>

            <button
              onClick={handleRequestService}
              className="mt-8 bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:scale-105 transition-all duration-300 px-8 py-4.5 rounded-full text-sm sm:text-base font-extrabold shadow-sm flex items-center justify-center gap-2 select-none cursor-pointer w-full"
            >
              <span>NECESITO COCINEROS PARA UN EVENTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* OVERLAPPING YELLOW BANNER: PLANIFICACIÓN DETALLADA */}
      <section className="pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 lg:pb-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="bg-[#FFF312] rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 shadow-[0_20px_40px_rgba(255,243,18,0.15)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Superimposed Floating Image on Left representing setup preparation */}
            <div className="lg:col-span-4 -mt-16 sm:-mt-24 lg:-mt-28 relative flex justify-center z-20">
              <div className="relative w-72 sm:w-80 h-96 rounded-[36px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.12)] border-4 border-[#FFF312] bg-white p-3">
                <img
                  src="/images/5-a.jpeg"
                  alt="Planificación y coordinación logística para platos"
                  className="w-full h-full object-cover rounded-[28px]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/16.jpeg";
                  }}
                />
              </div>
            </div>

            {/* Content text */}
            <div className="lg:col-span-8 space-y-6 text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#333333] text-[#FFF312] px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-widest uppercase mb-1">
                ORGANIZACIÓN DE ÉLITE
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-none">
                PLANIFICACIÓN DETALLADA DEL EVENTO
              </h2>
              
              <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-3xl">
                Además de la creación del menú, nos encargamos de toda la planificación necesaria para asegurar que el servicio culinario en tu evento sea impecable. Esto incluye la coordinación logística, la selección de la vajilla y los utensilios adecuados, así como la disposición y decoración de las mesas de comida para complementar la estética de tu evento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG: CALIDAD Y SOSTENIBILIDAD */}
      <section className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-[#00EAEA]/10 text-cyan-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                <Shield className="w-4 h-4 text-[#A64ECE]" />
                CONSISTENCIA ECOLÓGICA Y ÉTICA
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight">
                NUESTROS COCINEROS PARA EVENTOS TIENEN UN COMPROMISO CON LA CALIDAD Y LA SOSTENIBILIDAD
              </h2>
              
              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-normal">
                En Personal para Eventos, nos comprometemos a utilizar solo los ingredientes más frescos y de la más alta calidad, priorizando siempre los productos locales y sostenibles. Esta filosofía no solo apoya a las comunidades y productores locales, sino que también garantiza que cada plato servido en tu evento sea de la mejor calidad posible. Estamos aquí para asegurarnos de que la comida en tu evento sea memorable, deliciosa y perfectamente alineada con tus expectativas. Permítenos convertir tu visión en una realidad con nuestro servicio personalizado de planificación y asesoramiento gastronómico. ¡Tu evento merece lo mejor y estamos aquí para proporcionarlo!
              </p>

              <button
                onClick={handleRequestService}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.2) px-10 py-5 rounded-full text-base font-extrabold text-center cursor-pointer shadow-soft flex items-center gap-2 select-none"
              >
                <span>NECESITO COCINEROS PARA UN EVENTO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right side: Background photo column */}
            <div className="lg:col-span-5 h-[480px] relative rounded-[36px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.04)] bg-gray-100">
              <img
                src="/images/15.jpeg"
                alt="Ingredientes frescos y de primera"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/16.jpeg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/40 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* CROSS SELLING PORTFOLIO */}
      <section className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10 text-center">
        
        <div className="mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
            ¿NECESITAS CONTRATAR OTRO TIPO DE PERSONAL PARA EVENTOS?
          </h2>
          <div className="h-1 w-16 bg-[#FF57DF] mx-auto rounded-full" />
          <p className="text-[#555555] text-lg sm:text-xl font-normal leading-relaxed">
            ¿Estás planeando un evento y necesitas auxiliares, azafatos o camareras profesionales, pero no sabes por dónde empezar? ¡Llámanos hoy mismo y no te preocupes más! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
          </p>
        </div>

        {/* Dynamic Service List grid selector */}
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

          {/* Service Camareros */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">CAMAREROS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Atención de bandeja, cocktelería base y etiqueta fina de salón.</p>
            </div>
            <button
              onClick={() => navigateTo("camareros")}
              className="text-xs font-bold text-[#A64ECE] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer mt-4 hover:text-[#FF57DF] transition-colors"
            >
              <span>VER PERFIL</span> <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Service Azafatas */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100/85 hover:-translate-y-1 transition-transform flex flex-col justify-between items-center text-center">
            <div className="mb-4">
              <h3 className="font-bold text-base text-[#333333] mb-1">AZAFATAS</h3>
              <p className="text-xs text-[#555555] line-clamp-2">Acreditación ágil, registro de códigos QR e idiomas.</p>
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
              <p className="text-xs text-[#555555] line-clamp-2">Stands corporativos, andamiajes y mozos de alta firmeza.</p>
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
              <p className="text-xs text-[#555555] line-clamp-2">Controladores de acceso, guardarropas y pulsereros.</p>
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
