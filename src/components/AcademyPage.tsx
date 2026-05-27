import React from "react";
import { Sparkles, GraduationCap, ArrowRight, Award, Compass, HeartHandshake, ShieldCheck, Check } from "lucide-react";

interface AcademyPageProps {
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo: (page: any, sectionId?: string) => void;
}

export default function AcademyPage({
  setIsApplyModalOpen,
  navigateTo
}: AcademyPageProps) {

  // Primary action button to navigate to solicita-presupuesto page 
  const handleContactClick = () => {
    navigateTo("solicita-presupuesto");
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Dopaminic Vectorial Blur Blobs of Brand Color Palette */}
      <div className="absolute top-12 left-[-8%] w-[500px] h-[500px] rounded-full bg-[#00EAEA]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#FFF312]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[520px] h-[520px] rounded-full bg-[#FF57DF]/10 blur-[120px] pointer-events-none" />

      {/* HERO SECTION (100vh area visual layout) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Block text container */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A64ECE]" />
              <span>PPE ACADEMY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] max-w-4xl break-words">
              BIENVENIDO AL CENTRO DE FORMACIÓN PERSONAL PARA EVENTOS ACADEMY: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                ELEVANDO LA EXCELENCIA EN EVENTOS
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl">
              Nuestra academia de alto nivel proporciona formación integral y continua en protocolo, servicio ferial y hospitalidad selecta para garantizar que cada evento destaque por encima de las expectativas del mercado.
            </p>

            {/* CTA dual buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleContactClick}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer shadow-soft w-full sm:w-auto"
              >
                Contacta con nosotros para más información.
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById("programas-formacion");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-6 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer w-full sm:w-auto"
              >
                VER PROGRAMAS
              </button>
            </div>
          </div>

          {/* Right Area image with asymmetric background decoration */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#FF57DF]/15 blur-3xl animate-pulse" />
            <div className="relative w-full max-w-[420px] h-[495px] rounded-[40px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 bg-white p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[375px] rounded-[28px] overflow-hidden mb-4 bg-gray-50">
                <img
                  src="/images/16.jpeg"
                  alt="Estudiantes en el programa formativo de azafatas y camareros"
                  className="w-full h-full object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Failover image just in case
                    e.currentTarget.src = "/images/12.jpeg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#A64ECE]" />
                  <span>Personal para Eventos Academy®</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-sans font-bold text-lg text-[#333333] leading-none mb-1">Cursos Presenciales</h3>
                <p className="text-xs text-[#555555] font-normal font-sans">Prácticas intensivas de atención premium y resolución.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GRID DE PILARES DE LA ACADEMIA (Tarjetas con números gigantes) */}
      <section className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-left max-w-4xl mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              NUESTROS PILARES EDUCATIVOS
            </h2>
            <div className="h-1.5 w-24 bg-[#00EAEA] rounded-full" />
            <p className="text-base sm:text-lg text-[#555555] max-w-2xl font-normal leading-relaxed">
              Descubre los tres principios operacionales bajo los cuales fundamentamos cada sesión pedagógica en nuestra escuela interna.
            </p>
          </div>

          {/* Grid setup targeting exact texts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 transition-transform duration-300">
              <div className="font-sans font-black text-6xl text-[#A64ECE] mb-8 select-none tracking-tight">
                01
              </div>
              <p className="text-[#555555] text-base leading-relaxed font-normal">
                <strong className="text-[#333333] font-black">01. Excelencia en Cada Detalle:</strong> Nuestra misión es forjar profesionales que destaquen en todos los aspectos de la atención al cliente, servicio de bebidas y montaje de eventos. Cada miembro de nuestro equipo se convertirá en un embajador de calidad y profesionalización.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 transition-transform duration-300">
              <div className="font-sans font-black text-6xl text-[#FF57DF] mb-8 select-none tracking-tight">
                02
              </div>
              <p className="text-[#555555] text-base leading-relaxed font-normal">
                <strong className="text-[#333333] font-black">02. Experiencia Práctica:</strong> Nuestra formación no es solo teórica. Nuestros cursos contienen casos reales para brindar experiencia práctica en situaciones del mundo real, para que nuestros profesionales estén listos para cualquier desafío.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1.5 transition-transform duration-300">
              <div className="font-sans font-black text-6xl text-[#00EAEA] mb-8 select-none tracking-tight">
                03
              </div>
              <p className="text-[#555555] text-base leading-relaxed font-normal">
                <strong className="text-[#333333] font-black">03. Mejorando la Experiencia del Cliente:</strong> Creemos que la formación de calidad no solo beneficia a nuestro equipo, sino que también mejora la experiencia de nuestros clientes. Un equipo altamente profesional agrega un valor inigualable a cada evento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN "PROGRAMAS DE FORMACIÓN" (Layout Asimétrico en Zig-Zag) */}
      <section id="programas-formacion" className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
            Nuestra Academy: Programas de Formación.
          </h2>
          <div className="h-1 bg-[#A64ECE] w-24 mx-auto rounded-full" />
          <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed">
            A través de nuestra Academy, ofrecemos formación práctica y teórica, abarcando desde la atención al cliente hasta el montaje. Nuestro compromiso es brindar una experiencia inigualable y elevar la calidad en la industria de eventos.
          </p>
        </div>

        {/* Zig-Zag Content block layout as requested */}
        <div className="space-y-24">
          
          {/* Bloque 1: Imagen flotante Izquierda / Texto Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 h-[340px] rounded-[32px] overflow-hidden shadow-soft relative group">
              <img
                src="/images/14.jpeg"
                alt="Formación para Azafatas de Excelencia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-1.5 rounded-full text-xs font-bold uppercase leading-none">
                PROGRAMA AZAFATAS
              </div>
              <h3 className="text-2xl font-black font-sans text-[#333333]">Azafatas de Excelencia</h3>
              <p className="text-[#555555] text-lg leading-relaxed font-normal">
                Nuestro programa de formación para azafatas abarca desde el protocolo de recepción hasta la interacción con los invitados, garantizando un servicio amable, atento y profesional. Contiene compliance, prevención de riesgos laborales, manuales de estética y conducta, casos prácticos, y formación en idiomas.
              </p>
            </div>

          </div>

          {/* Bloque 2: Texto Izquierda / Imagen flotante Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            
            <div className="lg:col-span-5 lg:order-last h-[340px] rounded-[32px] overflow-hidden shadow-soft relative group">
              <img
                src="/images/13.jpeg"
                alt="Formación para Camareros de Élite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/images/12.jpeg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#FF57DF]/10 text-pink-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase leading-none">
                PROGRAMA HOSTELERA
              </div>
              <h3 className="text-2xl font-black font-sans text-[#333333]">Camareros de Élite</h3>
              <p className="text-[#555555] text-lg leading-relaxed font-normal">
                Desde la mixología hasta un protocolo básico en el servicio, nuestros camareros son maestros de la excelencia. También contiene compliance, prevención de riesgos laborales, manuales de estética y conducta, casos prácticos, y formación en idiomas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BANNER "LOS BENEFICIOS DE NUESTRA FORMACIÓN" (Layout Bento Box / Fondo Gris Perla) */}
      <section className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              Los Beneficios de Nuestra Formación
            </h2>
            <div className="h-1.5 w-20 bg-[#FFF312] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-[#555555] font-normal">
              Conoce el impacto real que nuestro programa de capacitación ejerce directamente sobre el desempeño del staff.
            </p>
          </div>

          {/* Grid de Bento Box de 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Beneficio 1 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00EAEA]/10 text-cyan-700 rounded-2xl mb-8 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6 text-[#A64ECE]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Conocimiento Profundo</h3>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed font-normal pt-4 border-t border-gray-100">
                Nuestros programas se basan en una comprensión profunda de la industria de eventos y las expectativas de los clientes.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FF57DF]/10 text-pink-700 rounded-2xl mb-8 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6 text-[#FF57DF]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Profesionalización Completa</h3>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed font-normal pt-4 border-t border-gray-100">
                Nuestro objetivo es transformar a nuestros participantes en expertos que se destacan en cualquier evento.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-white p-10 rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFF312]/20 text-yellow-700 rounded-2xl mb-8 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6 text-[#00EAEA]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Red de Contactos</h3>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed font-normal pt-4 border-t border-gray-100">
                Nuestra formación también ofrece oportunidades para crear grupos de trabajo para que la comunicación entre todos los miembros del equipo de trabajo sea mucho más fluida.
              </p>
            </div>

          </div>

          {/* Interactive banner below the bento grid */}
          <div className="mt-16 bg-white border border-gray-100/70 p-8 sm:p-12 rounded-[40px] text-center shadow-[0_15px_35px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left space-y-2">
              <h4 className="text-xl sm:text-2xl font-black font-sans text-[#333333]">¿Quieres capacitarte con el líder del sector?</h4>
              <p className="text-[#555555] text-sm">Ofrecemos constantes convocatorias para nuevos talentos y reciclaje profesional.</p>
            </div>
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-[#A64ECE] text-white hover:bg-[#933fd1] px-8 py-4 rounded-full text-sm font-extrabold cursor-pointer transition-colors"
            >
              Unete a la Academy
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
