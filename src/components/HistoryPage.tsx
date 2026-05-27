import React, { useEffect } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  ShieldCheck, 
  Award, 
  Zap, 
  GraduationCap, 
  HeartHandshake, 
  Coffee, 
  Clock,
  ArrowUpRight
} from "lucide-react";

interface HistoryPageProps {
  setIsBudgetModalOpen: (open: boolean) => void;
  setIsApplyModalOpen: (open: boolean) => void;
}

export default function HistoryPage({ 
  setIsBudgetModalOpen, 
  setIsApplyModalOpen 
}: HistoryPageProps) {

  // Auto scroll to top when page is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative overflow-hidden w-full pb-24 bg-white">
      {/* 10% Interactivo / Dopaminic brand blobs inside background */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#00EAEA]/10 blur-3xl pointer-events-none animate-artistic-float" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FF57DF]/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-96 h-96 rounded-full bg-[#FFF312]/10 blur-3xl pointer-events-none animate-artistic-pulse" style={{ animationDelay: "2s" }} />

      {/* =========================================================
          B. HERO SECTION
          ========================================================= */}
      <section className="relative pt-12 pb-24 md:py-32 w-[80%] max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content column */}
          <div className="lg:col-span-7 space-y-8 text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              NUESTROS ORÍGENES Y TRAYECTORIA
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1]">
              NUESTRA HISTORIA COMO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
                EMPRESA DE EVENTOS
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-[#A64ECE] uppercase tracking-normal leading-snug">
              ¿CONTRATAR UN EQUIPO COORDINADO Y DISTINGUIDO EN TU EVENTO CON SOLO UNA LLAMADA, ES POSIBLE?
            </h2>

            <p className="text-sm md:text-base text-[#555555] font-normal leading-relaxed max-w-2xl">
              En beneficio del éxito de tu evento, nuestra misión principal siempre ha sido simplificar radicalmente los procesos de selección, contratación e integración del personal de campo. Entendemos que organizar una feria comercial, un congreso internacional o un catering selecto requiere una sincronización humana impecable. Nos hacemos cargo de cada detalle laboral, de formación continua y de supervisión técnica, asegurando que tu marca reluzca con el máximo prestigio con tan solo una simple llamada de teléfono.
            </p>

            {/* Dual CTA buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsBudgetModalOpen(true)}
                className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 px-8 py-4 rounded-full font-bold shadow-[0_15px_30px_rgba(166,78,206,0.18)]"
              >
                SOLICITA PRESUPUESTO
              </button>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-full font-bold"
              >
                TRABAJA CON NOSOTROS
              </button>
            </div>
          </div>

          {/* Graphical/Creative Asymmetrical visual frame */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative group p-4">
              
              {/* Diffuse Dopaminic Cyan Backdrop Blur */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-[#00EAEA]/30 to-[#FF57DF]/10 blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-white rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/60 overflow-hidden">
                <img
                  src="/images/personal-para-eventos-foto-1_0044_Azafatxs-3.jpg"
                  alt="Personal de eventos destacado"
                  className="w-full h-[380px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to another local picture if missing
                    e.currentTarget.src = "/images/1.jpeg";
                  }}
                />
                
                {/* Micro floating info badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-gray-100/50 rounded-2xl p-4 shadow-xl max-w-xs flex gap-3.5 items-center">
                  <div className="w-12 h-12 rounded-full bg-[#A64ECE]/10 flex items-center justify-center text-[#A64ECE] shrink-0 font-bold">
                    100%
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] text-sm leading-tight">Equipo Integrado</h4>
                    <p className="text-xs text-gray-500 leading-normal font-sans">Compromiso absoluto de uniformidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          C. SECCIÓN ENFOQUE / ESTA ES NUESTRA HISTORIA
          ========================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden">
        
        {/* Subtle decorative grid lines/dots and a yellow blob */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FFF312]/5 blur-3xl pointer-events-none" />
        
        <div className="w-[96vw] sm:w-[94%] max-w-none mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A64ECE] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
            NUESTRA TRAYECTORIA PROFESIONAL
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#333333]">
            ESTA ES NUESTRA HISTORIA
          </h2>
          
          <div className="w-24 h-1 bg-[#A64ECE] mx-auto rounded-full" />
          
          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-7xl mx-auto font-normal">
            Celebrando la excelencia en el servicio de eventos, nuestra agencia ha redefinido el concepto de personal para congresos, convenciones, ferias y celebraciones privadas. Nos apasiona cuidar cada detalle organizativo y creemos fielmente que un equipo entregado, con una sonrisa sincera y una preparación exhaustiva, inspira plena confianza y marca la diferencia entre un evento del montón y un éxito memorable. Desde nuestro humilde inicio, logramos entrelazar la experiencia gastronómica de nuestros camareros con el rigor de nuestras azafatas y auxiliares, consolidando una tradición impecable basada en la puntualidad, elegancia y un riguroso compromiso legal del cual nos sentimos inmensamente orgullosos.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#A64ECE]">2020</div>
              <div className="text-xs uppercase font-extrabold text-gray-400 tracking-wider mt-1.5">Fundación</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#A64ECE]">7+</div>
              <div className="text-xs uppercase font-extrabold text-[#555555] tracking-wider mt-1.5">
                Más de <span className="font-bold text-[#A64ECE]">7 Delegaciones</span> territoriales
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#A64ECE]">15K+</div>
              <div className="text-xs uppercase font-extrabold text-[#555555] tracking-wider mt-1.5">
                Más de <span className="font-bold text-[#A64ECE]">15.000 Eventos</span> exitosos
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#A64ECE]">100+</div>
              <div className="text-xs uppercase font-extrabold text-[#555555] tracking-wider mt-1.5">
                Más de <span className="font-bold text-[#A64ECE]">100 Eventos</span> mensuales de éxito
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          D. HITOS HISTÓRICOS Y DESAFÍOS (Asymmetrical Ritmo en Z)
          ========================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-32">
        <div className="w-[80%] max-w-none mx-auto space-y-16 sm:space-y-24 lg:space-y-40">
          
          {/* Header of Section D */}
          <div className="w-full text-left space-y-4">
            <span className="text-[#A64ECE] text-xs font-bold tracking-widest uppercase block">
              NUESTRA EVOLUCIÓN EXPERIENCIAL
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-none">
              HITOS QUE MARCAN NUESTROS DESAFÍOS
            </h2>
            <p className="text-lg md:text-xl text-[#555555] max-w-4xl">
              Repasa los momentos y compromisos que nos han formado como la agencia más fiable de España.
            </p>
          </div>

          {/* 1. DESAFÍOS EN LA ORGANIZACIÓN DE EVENTOS CORPORATIVOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF57DF]/10 rounded-full text-xs font-black text-pink-600">
                01 &bull; ANTECEDENTES
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                DESAFÍOS EN LA ORGANIZACIÓN DE EVENTOS CORPORATIVOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                La organización de un evento corporativo siempre entraña un sinfín de imprevistos logísticos, desde la gestión horaria hasta el cumplimiento de estrictos estándares de coordinación. Las marcas se enfrentan diariamente a la dificultad de contratar profesionales realmente comprometidos que asimilen sus valores corporativos y los transmitan eficazmente al público. Lograr esa homogeneidad sin un socio de confianza representa uno de los mayores desafíos logísticos en el sector de la organización de eventos corporativos.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <Target className="w-5 h-5 text-[#FF57DF] shrink-0" />
                <span>Superando brechas de identidad y de servicios informales.</span>
              </div>
            </div>

            {/* Overlapping image container */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/10.jpeg"
                  alt="Desafíos en la Organización de Eventos"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. NACIMIENTO DE UNA NUEVA AGENCIA DE EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Image Left */}
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00EAEA]/10 rounded-full text-xs font-black text-[#008d9e]">
                02 &bull; LA SEMILLA
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                NACIMIENTO DE UNA NUEVA AGENCIA DE EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                Impulsados por el deseo de revolucionar el mercado y ofrecer una respuesta ágil de excelencia a estos desafíos, fundamos nuestra agencia de personal. Queríamos ir más allá de la simple intermediación laboral: soñábamos con un modelo de selección ágil, riguroso, integrado y con una formación propia e intensiva. De esta forma, nuestra nueva agencia de eventos se posicionó rápidamente como un referente de distinción, prolijidad y profesionalidad en todo el territorio.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <Zap className="w-5 h-5 text-[#00EAEA] shrink-0" />
                <span>Nacido para dotar al sector de rigor estético y laboral.</span>
              </div>
            </div>

            {/* Overlapping image with negative margins */}
            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/11.jpeg"
                  alt="Nacimiento de la Agencia"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/2-a.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. SUPERANDO OBSTÁCULOS EN EL SECTOR DE EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF312]/20 rounded-full text-xs font-black text-[#a39400]">
                03 &bull; SISTEMA REACTIVO
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                SUPERANDO OBSTÁCULOS EN EL SECTOR DE EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                La industria de eventos es sumamente dinámica y a menudo impredecible. Superar imprevistos de última hora —como cancelaciones repentinas o cambios de asistencia— requiere de una estructura interna súper coordinada y flexible. En nuestra agencia lo logramos instaurando un sistema exclusivo de personal de sustitución en alerta permanente (activo en 45 minutos), demostrando que cualquier contratiempo puede ser mitigado si se cuenta con planificación, resiliencia y un riguroso plan de contingencia.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Garantía de respuesta rápida: Backups activos en tiempo récord.</span>
              </div>
            </div>

            {/* Overlapping image container */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/12.jpeg"
                  alt="Superando Obstáculos"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/3.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. COMPROMISO Y EXCELENCIA EN EL SERVICIO DE EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Content Right */}
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A64ECE]/10 rounded-full text-xs font-black text-[#A64ECE]">
                04 &bull; EXCELENCIA
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                COMPROMISO Y EXCELENCIA EN EL SERVICIO DE EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                El éxito de una marca en un certamen depende enteramente del trato humano que reciben sus invitados. Por ello, cimentamos nuestra cultura sobre el compromiso y la excelencia, seleccionando profesionales con vocación de servicio, dominio de idiomas y una alta capacidad de resolución. Cuidamos cada detalle visual, desde la uniformidad impecable hasta el lenguaje verbal y no verbal, para garantizar que la reputación de nuestros clientes reluzca con el máximo prestigio.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <HeartHandshake className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span>Tratamiento y protocolo de cinco estrellas como estándar.</span>
              </div>
            </div>

            {/* Image Left */}
            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/13.jpeg"
                  alt="Compromiso y Excelencia"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/4.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 5. CRECIENDO COMO EMPRESA DE PERSONAL PARA EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF57DF]/10 rounded-full text-xs font-black text-pink-600">
                05 &bull; EXPANSIÓN
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                CRECIENDO COMO EMPRESA DE PERSONAL PARA EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                Gracias a los resultados excepcionales de nuestros primeros proyectos, la demanda se diversificó. Fuimos ampliando la cobertura global de nuestro catálogo con azafatas de alta imagen, recepcionistas, coordinadores de campo, camareros de eventos privados y ayudantes especializados. Crecer como empresa líder de personal para eventos nos obligó a asentar delegaciones operativas sólidas en múltiples ciudades clave (Madrid, Barcelona, Valencia, Ibiza, Sevilla, Bilbao y Málaga), garantizando la máxima homogeneidad estética y de servicio.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <Award className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Delegaciones en 7+ provincias estratégicas españolas.</span>
              </div>
            </div>

            {/* Overlapping image container */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/14.jpeg"
                  alt="Creciendo como Empresa"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/14-b.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 6. ASOCIANDO CALIDAD Y CONFIABILIDAD EN LA INDUSTRIA DE EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Content Right */}
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00EAEA]/10 rounded-full text-xs font-black text-[#008d9e]">
                06 &bull; SEGURIDAD LEGAL
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                ASOCIANDO CALIDAD Y CONFIABILIDAD EN LA INDUSTRIA DE EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                Asociar el prestigio y la confiabilidad va mucho más allá de un simple eslogan corporativo. Implica la total tranquilidad legal de nuestros clientes mediante la correcta contratación laboral de todo el equipo en régimen general de la Seguridad Social, un robusto Seguro de Responsabilidad Civil de 1.2M€ y el cumplimiento impecable de la normativa de Prevención de Riesgos Laborales (PRL). Esta seguridad jurídica indiscutible nos ha convertido en el socio estratégico predilecto de las agencias de marketing y anunciantes más exigentes.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <ShieldCheck className="w-5 h-5 text-[#00EAEA] shrink-0" />
                <span>Seguridad Laboral y Civil total de 1.2 Millones de Euros.</span>
              </div>
            </div>

            {/* Image Left */}
            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/15.jpeg"
                  alt="Calidad y Confiabilidad"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/12.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 7. MIRANDO HACIA EL FUTURO EN LA ORGANIZACIÓN DE EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF312]/20 rounded-full text-xs font-black text-[#a39400]">
                07 &bull; FUTURO
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                MIRANDO HACIA EL FUTURO EN LA ORGANIZACIÓN DE EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                El mañana de los eventos nos convoca a innovar de forma permanente. Integramos sistemas avanzados de reclutamiento por competencias geolocalizadas, capacitación in-house exhaustiva mediante nuestra Academy y un fomento continuo de prácticas ecológicas y eventos neutros en carbono. Mirando hacia el futuro en la organización de eventos, tenemos el firme compromiso de seguir elevando la profesionalización del sector, dotando a la nueva generación de personal del soporte tecnológico y ético más vanguardista.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <GraduationCap className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Innovación formativa permanente y Academy propia.</span>
              </div>
            </div>

            {/* Overlapping image container */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/16.jpeg"
                  alt="Mirando hacia el Futuro"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/13.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 8. TU ALIADO EN LA PLANIFICACIÓN DE EVENTOS PERFECTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Content Right */}
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A64ECE]/10 rounded-full text-xs font-black text-[#A64ECE]">
                08 &bull; ALIANZA ESTRATÉGICA
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                TU ALIADO EN LA PLANIFICACIÓN DE EVENTOS PERFECTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                Desde la primera y oportuna llamada telefónica, asignamos un Gestor de Cuentas dedicado que se encarga de entender a fondo los objetivos de comunicación de la marca y de supervisar in situ la actividad de todo el equipo en el recinto de la feria o sala de reuniones. Nos convertimos en tu aliado estratégico idóneo en la planificación de eventos perfectos, asumiendo cualquier aspecto logístico del personal para que puedas focalizar toda tu valiosa energía en deslumbrar a tus distinguidos asistentes.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <Target className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span>Gestor de cuentas in-situ dedicado a supervisar la perfección.</span>
              </div>
            </div>

            {/* Image Left */}
            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/17.jpeg"
                  alt="Aliado en la Planificación"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/14.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 9. COMPARTIENDO SUEÑOS Y REALIDADES EN EL MUNDO DE LOS EVENTOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF57DF]/10 rounded-full text-xs font-black text-pink-600">
                09 &bull; SUEÑOS CUMPLIDOS
              </div>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#333333] leading-tight">
                COMPARTIENDO SUEÑOS Y REALIDADES EN EL MUNDO DE LOS EVENTOS
              </h3>
              <p className="text-[#555555] text-lg font-normal leading-relaxed">
                Cada evento corporativo, presentación nacional de marca, stand comercial o congreso que llevamos al éxito es, en el fondo, una maravillosa suma de anhelos y desvelos compartidos. Nos apasiona compartir sueños y transformarlos en realidades sofisticadas en el mundo de los eventos. Nos sentimos sumamente privilegiados de trabajar codo con codo junto a nuestros clientes para dar vida a momentos que permanezcan grabados para siempre en la memoria visual e intuitiva de todos sus asistentes.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#A64ECE]">
                <HeartHandshake className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Traduciendo visiones de marca en experiencias reales sublimes.</span>
              </div>
            </div>

            {/* Overlapping image container */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] bg-[#F8F9FA] p-3 border border-gray-100/50 mt-12 lg:-mt-12 transition-all duration-300 hover:shadow-lg">
                <img
                  src="/images/personal-para-eventos-foto-1.jpg"
                  alt="Compartiendo Sueños y Realidades"
                  className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/1.jpeg";
                  }}
                />
                <div className="absolute top-6 right-6 bg-[#A64ECE] text-white p-3 rounded-full shadow-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          E. SECCIÓN ACADEMY / CTA FINAL
          ========================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden border-t border-b border-gray-100">
        
        {/* Yellow dopamine blurry wash */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FFF312]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#A64ECE]/5 blur-3xl pointer-events-none" />

        <div className="w-[80%] max-w-none mx-auto relative z-10 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual element / Image Collage */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative bg-white rounded-3xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100">
                <img
                  src="/images/personal-para-eventos-foto-124.jpg"
                  alt="Personal Formándose"
                  className="w-full h-[300px] object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/7.jpeg";
                  }}
                />
                <div className="absolute -top-5 -right-5 bg-gradient-to-tr from-[#FF57DF] to-[#A64ECE] text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
                  <GraduationCap className="w-4 h-4" />
                  <span>EMPLEO ESTABLE</span>
                </div>
              </div>
            </div>

            {/* Copy CTA elements */}
            <div className="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#FFF312]/30 text-amber-800 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">
                <GraduationCap className="w-4 h-4" />
                ACADEMY PROPIA
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight pt-2 sm:pt-3">
                ¿QUIERES TRABAJAR COMO PERSONAL PARA EVENTOS?
              </h2>

              <p className="text-lg text-[#555555] leading-relaxed">
                En nuestra agencia no solo contratamos talento, sino que lo cultivamos. Buscamos perfiles dinámicos, proactivos y distinguidos que deseen crecer profesionalmente en ferias, certámenes corporativos y alta gastronomía. Te ofrecemos formación continua institucional gratuita a través de nuestra Academy, contratación legal segura y remuneración competitiva superior según convenio sectorial. Envíalo hoy y únete a un equipo de prestigio indiscutible.
              </p>

              <div>
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-10 py-5 rounded-full font-black text-sm tracking-widest shadow-lg inline-flex items-center gap-2.5"
                >
                  <span>MANDA TU CURRÍCULUM AHORA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          F. FAQS (Clean modules, soft shadows, rounded 2xl)
          ========================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-32 bg-white">
        <div className="w-[80%] max-w-none mx-auto space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-[#A64ECE] text-xs font-bold tracking-widest uppercase block">
              RESOLVEMOS TUS INQUIETUDES
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333]">
              PREGUNTAS FRECUENTES
            </h2>
            <div className="w-16 h-1 bg-[#A64ECE] mx-auto rounded-full mt-2" />
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h4 className="font-bold text-[#333333] text-lg sm:text-xl mb-3 flex items-center justify-between">
                <span>¿Con cuánto tiempo de antelación debo solicitar el servicio?</span>
                <span className="text-[#A64ECE] font-mono text-[11px] bg-[#A64ECE]/10 px-2.5 py-1 rounded-full shrink-0">BÁSICO</span>
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed">
                Se recomienda formalizar la reserva con al menos 2 semanas de antelación para garantizar la disponibilidad absoluta de perfiles y la selección personalizada de uniformes. No obstante, gracias a nuestra estructura ágil, podemos cubrir solicitudes urgentes en menos de 48 horas en las principales ciudades españolas.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h4 className="font-bold text-[#333333] text-lg sm:text-xl mb-3 flex items-center justify-between">
                <span>¿Qué cubre el Seguro de Responsabilidad Civil de la agencia?</span>
                <span className="text-[#FF57DF] font-mono text-[11px] bg-[#FF57DF]/10 px-2.5 py-1 rounded-full shrink-0">GARANTÍA</span>
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed">
                Nuestra cobertura de Seguro de Responsabilidad Civil (RC) asciende hasta un límite de 1.2M€ por siniestro. Cubre de forma integral cualquier contingencia, daños materiales o percances ocurridos a terceras personas durante el montaje, ejecución o desmontaje del evento por negligencia o acción directa del personal contratado.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h4 className="font-bold text-[#333333] text-lg sm:text-xl mb-3 flex items-center justify-between">
                <span>¿Cómo garantizáis la puntualidad e implicación del personal?</span>
                <span className="text-emerald-500 font-mono text-[11px] bg-emerald-500/10 px-2.5 py-1 rounded-full shrink-0">SUPERVISIÓN</span>
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed">
                Asignamos un coordinador general de campo en el recinto del evento. Se encarga de recepcionar al personal una hora antes del inicio, auditar minuciosamente la uniformidad requerida, impartir el briefing operativo y velar porque se cumplan los horarios estrictamente. Contamos además con personal de backup activo preparado para reemplazar de forma instantánea cualquier baja imprevista en menos de 45 minutos.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h4 className="font-bold text-[#333333] text-lg sm:text-xl mb-3 flex items-center justify-between">
                <span>¿La contratación del personal cumple rigurosamente con la legalidad ordinaria?</span>
                <span className="text-purple-600 font-mono text-[11px] bg-purple-600/10 px-2.5 py-1 rounded-full shrink-0">100% LEGAL</span>
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed">
                Absolutamente. Cero subcontrataciones opacas y cero personal sin de alta de la Seguridad Social. Todo el equipo está debidamente afiliado en el Régimen General a cargo exclusivo de la agencia, asumiendo cualquier obligación de haberes, cotizaciones y prevención de riesgos laborales (PRL) para blindar legalmente tu marca de toda responsabilidad solidaria o subsidiaria.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
