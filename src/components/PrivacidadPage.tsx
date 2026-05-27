import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  User, 
  Cookie, 
  Eye, 
  Database, 
  Key, 
  CheckCircle, 
  Info, 
  Lock, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from "lucide-react";

export default function PrivacidadPage() {
  const [activeSection, setActiveSection] = useState("quienes-somos");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Intersection Observer for scrollspy active state
  useEffect(() => {
    const sections = [
      "quienes-somos", 
      "recogida-datos", 
      "uso-cookies", 
      "contenido-incrustado", 
      "conservacion-datos", 
      "tus-derechos"
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -55% 0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // safe space for sticky header of navigation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "quienes-somos", label: "Quiénes somos", icon: User },
    { id: "recogida-datos", label: "Recogida de Datos", icon: Eye },
    { id: "uso-cookies", label: "Uso de Cookies", icon: Cookie },
    { id: "contenido-incrustado", label: "Contenido Incrustado", icon: Shield },
    { id: "conservacion-datos", label: "Conservación de Datos", icon: Database },
    { id: "tus-derechos", label: "Tus Derechos", icon: Key }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#555555] font-sans pb-24 overflow-hidden">
      {/* Background Dopamine blobs for ambient premium layering */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#00EAEA]/8 blur-[100px] pointer-events-none animate-artistic-float" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FF57DF]/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-96 h-96 rounded-full bg-[#FFF312]/8 blur-[100px] pointer-events-none" />

      {/* HEADER BAR FOR SECURE AND REGULATORY INDICATOR */}
      <section className="relative pt-24 pb-8 sm:pt-28 md:pt-36 w-[80%] max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300 mb-6">
          <ShieldCheck className="w-4 h-4" />
          CONFIDENCIALIDAD Y RGPD COMPLIANT
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-sans font-black tracking-tighter text-[#222222] uppercase leading-[1.2] mb-4">
          POLÍTICA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">PRIVACIDAD</span>
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-xl font-normal leading-relaxed">
          En cumplimiento del Reglamento General de Protección de Datos (RGPD), detallamos a continuación nuestras directivas en el tratamiento y protección de sus datos.
        </p>
      </section>

      {/* STICKY BOTTOM/HORIZONTAL NAVIGATION ANCHORS FOR MOBILE TO TABLET (Saves screen space & offers fast navigation) */}
      <div className="sticky top-[86px] sm:top-[100px] z-40 lg:hidden w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] px-4 py-3 overflow-x-auto scrollbar-none flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all duration-300 ${
                isActive 
                  ? "bg-[#A64ECE] text-white shadow-soft" 
                  : "bg-gray-100 text-[#555555] hover:bg-gray-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* TWO COLUMN GRID MAIN SYSTEM */}
      <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INDEX NAVEGACIÓN STICKY (HIDDEN ON LG DOWN AS IT IS IN THE HORIZONTAL MOBILE ANCHOR INSTEAD) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-36 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)]">
              <h2 className="text-xs font-black text-[#222222] uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#A64ECE]" />
                Índice de Lectura
              </h2>
              <nav className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center text-left py-2.5 transition-all duration-300 relative focus:outline-none"
                    >
                      {/* Interactive Active Micro Line */}
                      <span className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${isActive ? "bg-[#A64ECE]" : "bg-transparent group-hover:bg-gray-200"}`} />
                      
                      <div className={`flex items-center gap-3 pl-4 transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-0.5"}`}>
                        <Icon className={`w-4 h-4 shrink-0 transition-colors duration-300 ${isActive ? "text-[#A64ECE]" : "text-gray-400 group-hover:text-[#555555]"}`} />
                        <span className={`text-xs font-bold transition-colors duration-300 ${isActive ? "text-[#A64ECE]" : "text-[#555555] group-hover:text-[#222222]"}`}>
                          {item.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
            
            {/* Safe data shield seal inside sidebar */}
            <div className="bg-[#A64ECE]/5 rounded-3xl p-6 flex items-start gap-4 border border-[#A64ECE]/5">
              <ShieldCheck className="w-8 h-8 text-[#A64ECE] shrink-0" />
              <div>
                <h4 className="text-xs font-black text-[#222222] uppercase tracking-wider mb-1">Protección Garantizada</h4>
                <p className="text-[11px] text-[#555555] leading-relaxed">Sus datos se custodian conforme a los estándares de cifrado más exigentes de la UE.</p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: BLOCKS OF CARDS */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* CARD 1: QUIÉNES SOMOS */}
            <div 
              id="quienes-somos" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
                  <User className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Quiénes somos</h2>
              </div>
              
              <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p>
                  CHOFERENDRIVER S.L. en adelante <strong>Personal para Eventos</strong>, tiene un firme compromiso con la privacidad y la confidencialidad de los datos de todos los usuarios de nuestra plataforma.
                </p>
                <div className="p-4 bg-[#F8F9FA] rounded-2xl border-l-4 border-[#A64ECE] text-xs sm:text-sm text-[#222222] font-mono">
                  La dirección de nuestra web es: <a href="https://www.personalparaeventos.com" className="text-[#A64ECE] hover:underline font-bold">https://www.personalparaeventos.com</a>.
                </div>
              </div>
            </div>

            {/* CARD 2: RECOGIDA DE DATOS */}
            <div 
              id="recogida-datos" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,234,234,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#00EAEA]/10 text-cyan-600 rounded-2xl">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Recogida y Tratamiento de Datos Personales</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p className="font-bold text-[#222222]">
                  Qué datos personales recogemos y por qué los recogemos:
                </p>

                {/* Subtitle Comentarios */}
                <div className="bg-gray-50 p-6 rounded-2xl border-l-[3px] border-[#00EAEA]/50 space-y-3">
                  <h3 className="text-sm font-bold text-[#222222] flex items-center gap-2 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                    Comentarios
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <p>
                      Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.
                    </p>
                    <p>
                      Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la estás usando. La política de privacidad del servicio Gravatar está disponible aquí: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#A64ECE] hover:underline font-bold inline-flex items-center gap-0.5">https://automattic.com/privacy/</a>. Después de la aprobación de tu comentario, la imagen de tu perfil es visible para el público en el contexto de tu comentario.
                    </p>
                  </div>
                </div>

                {/* Subtitle Medios */}
                <div className="bg-gray-50 p-6 rounded-2xl border-l-[3px] border-amber-400 space-y-3">
                  <h3 className="text-sm font-bold text-[#222222] flex items-center gap-2 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Medios
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Si subes imágenes a la web, deberías evitar subir imágenes con datos de ubicación (GPS EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier dato de ubicación de las imágenes de la web.
                  </p>
                </div>

                {/* Subtitle Formularios */}
                <div className="bg-gray-50 p-6 rounded-2xl border-l-[3px] border-[#FF57DF] space-y-3">
                  <h3 className="text-sm font-bold text-[#222222] flex items-center gap-2 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                    Formularios de contacto
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Los datos introducidos a través de nuestros formularios se tratan de forma confidencial con la única finalidad de gestionar tus solicitudes de servicio o candidaturas de empleo.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3: POLÍTICA DINÁMICA DE COOKIES */}
            <div 
              id="uso-cookies" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(255,243,18,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FFF312]/20 text-yellow-500 rounded-2xl">
                  <Cookie className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Cookies</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p>
                  Las cookies nos ayudan a ofrecerle una experiencia óptima y personalizada. A continuación, definimos cómo se emplean de forma dinámica en nuestra web:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-[#F8F9FA] p-4 sm:p-5 rounded-2xl transition-all hover:bg-gray-50">
                    <span className="w-2 h-2 rounded-full bg-[#A64ECE] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#222222] block mb-1">Cookies de comentarios:</strong> 
                      <span className="text-xs sm:text-sm block text-[#555555]">
                        Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-[#F8F9FA] p-4 sm:p-5 rounded-2xl transition-all hover:bg-gray-50">
                    <span className="w-2 h-2 rounded-full bg-[#00EAEA] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#222222] block mb-1">Cookies de sesión:</strong> 
                      <span className="text-xs sm:text-sm block text-[#555555]">
                        Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-[#F8F9FA] p-4 sm:p-5 rounded-2xl transition-all hover:bg-gray-50">
                    <span className="w-2 h-2 rounded-full bg-[#FF57DF] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#222222] block mb-1">Cookies de acceso y visualización:</strong> 
                      <span className="text-xs sm:text-sm block text-[#555555]">
                        Cuando accedas, también instalaremos varias cookies para guardar tu información de acceso y tus opciones de visualización de pantalla. Las cookies de acceso duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas «Recuérdame», tu acceso perdurará durante dos semanas. Si sales de tu cuenta, las cookies de acceso se eliminarán.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-[#F8F9FA] p-4 sm:p-5 rounded-2xl transition-all hover:bg-gray-50">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#222222] block mb-1">Cookies de edición:</strong> 
                      <span className="text-xs sm:text-sm block text-[#555555]">
                        Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 4: SERVICIOS DE TERCEROS Y CONTENIDO INCRUSTADO */}
            <div 
              id="contenido-incrustado" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Contenido incrustado de otros sitios web</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p>
                  Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.
                </p>
                <p>
                  Estas webs pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.
                </p>

                <div className="p-6 bg-gray-50 border-l-[3px] border-[#A64ECE] rounded-2xl space-y-2">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide">Analítica</h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Utilizamos herramientas analíticas optimizadas para medir el rendimiento de la web y garantizar la mejor experiencia de usuario, asegurando que los datos recogidos sean anónimos.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 5: CONSERVACIÓN Y DESTINO DE LOS DATOS */}
            <div 
              id="conservacion-datos" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,234,234,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#00EAEA]/10 text-cyan-600 rounded-2xl">
                  <Database className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Cuánto tiempo conservamos tus datos</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p>
                  Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente, en lugar de mantenerlos en una cola de moderación.
                </p>
                <p>
                  De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y editar esa información.
                </p>

                <div className="p-6 bg-gray-50 border-l-[3px] border-[#00EAEA] rounded-2xl space-y-2">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide">Dónde enviamos tus datos</h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 6: DERECHOS DEL USUARIO Y SALVAGUARDA DE LA INFORMACIÓN */}
            <div 
              id="tus-derechos" 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(255,87,223,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FF57DF]/10 text-pink-500 rounded-2xl">
                  <Key className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Qué derechos tienes sobre tus datos</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                <p>
                  Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.
                </p>
              </div>
            </div>

            {/* CARD 7: PROTOCOLOS DE SEGURIDAD E INFORMACIÓN ADICIONAL (COMBINED WITH SAME GROUPING FOR GORGEOUS FINISH) */}
            <div 
              className="bg-white rounded-3xl p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222]">Información adicional</h2>
              </div>

              <div className="space-y-8 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                
                {/* How we protect your data */}
                <div className="border-b border-gray-100 pb-5">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A64ECE]" />
                    Cómo protegemos tus datos
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Aplicamos cifrado SSL avanzado en toda nuestra plataforma para garantizar que las transferencias de datos entre tu navegador y nuestros servidores sean completamente seguras.
                  </p>
                </div>

                {/* What data breach procedures we have in place */}
                <div className="border-b border-gray-100 pb-5">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00EAEA]" />
                    Qué procedimientos utilizamos contra las brechas de datos
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Contamos con sistemas de monitoreo en tiempo real y protocolos de respuesta rápida inmediata frente a cualquier intento de acceso no autorizado.
                  </p>
                </div>

                {/* What third parties we receive data from */}
                <div className="border-b border-gray-100 pb-5">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF57DF]" />
                    De qué terceros recibimos datos
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    No compramos ni recibimos bases de datos de terceras empresas. Toda la información es proporcionada directamente por el usuario de manera consentida.
                  </p>
                </div>

                {/* Automated decision making */}
                <div className="border-b border-gray-100 pb-5">
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF312]" />
                    Qué tipo de toma de decisiones automatizada y/o perfilado hacemos con los datos del usuario
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    No realizamos decisiones automatizadas que tengan efectos jurídicos ni elaboramos perfiles intrusivos con los datos de navegación.
                  </p>
                </div>

                {/* Regulatory disclosures */}
                <div>
                  <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Requerimientos regulatorios de revelación de información del sector
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD) y la normativa vigente del sector de la gestión de eventos en el territorio español.
                  </p>
                </div>

              </div>
            </div>

          </main>
          
        </div>
      </div>
    </div>
  );
}
