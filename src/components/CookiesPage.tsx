import React, { useEffect } from "react";
import { 
  Cookie, 
  ShieldCheck, 
  Settings, 
  Info, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Sliders,
  Database,
  Lock
} from "lucide-react";

export default function CookiesPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const browserLinks = [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647?hl=es" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
    { name: "Apple Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#555555] font-sans pb-24 overflow-hidden">
      {/* Background Dopamine blobs for ambient premium layering */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#00EAEA]/6 blur-[100px] pointer-events-none animate-artistic-float" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FF57DF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-96 h-96 rounded-full bg-[#FFF312]/6 blur-[100px] pointer-events-none" />

      {/* HEADER SECTION */}
      <section className="relative pt-24 pb-8 sm:pt-28 md:pt-36 w-[92%] sm:w-[88%] lg:w-[80%] max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300 mb-6">
          <ShieldCheck className="w-4 h-4" />
          AEPD COMPLIANT & CONTROL DE PRIVACIDAD
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-sans font-black tracking-tighter text-[#222222] uppercase leading-[1.2] mb-4">
          POLÍTICA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">COOKIES</span>
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-xl font-normal leading-relaxed">
          En cumplimiento de la legislación española y el Reglamento General de Protección de Datos (RGPD), garantizamos la transparencia absoluta sobre las cookies empleadas en nuestra web.
        </p>
      </section>

      {/* CORE CONTAINER FOR MODULAR READING */}
      <div className="w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10 space-y-8 lg:space-y-12">
        
        {/* TARJETA 1: QUÉ SON LAS COOKIES */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
              <Cookie className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">¿Qué son las cookies?</h2>
          </div>
          
          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Una cookie es un pequeño fichero de texto que se descarga y almacena en su ordenador, smartphone o tablet al acceder a determinadas páginas web. Las cookies permiten a una plataforma, entre otras cosas, almacenar y recuperar información de forma segura sobre los hábitos de navegación de un usuario o de su equipo.
            </p>
            <p>
              Dependiendo de la información que contengan y de la forma en que utilice su dispositivo, se pueden utilizar para reconocer al usuario y optimizar su experiencia. El navegador del usuario memoriza estos archivos en el disco duro ocupando un espacio de memoria mínimo, sin perjudicar en absoluto al ordenador. La mayoría de las cookies se borran automáticamente al finalizar la sesión (las denominadas cookies de sesión).
            </p>
          </div>
        </div>

        {/* TARJETA 2: CLASIFICACIÓN UTILIZADA */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,234,234,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#00EAEA]/10 text-cyan-600 rounded-2xl">
              <Sliders className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">¿Qué tipos de cookies utiliza esta página web?</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Para garantizar el correcto funcionamiento del ecosistema digital de <strong>Personal para Eventos</strong> y ofrecer una experiencia premium y fluida, utilizamos los siguientes tipos de cookies:
            </p>

            <ul className="space-y-4">
              {/* TÉCNICAS */}
              <li className="flex items-start gap-4 bg-[#F8F9FA] p-5 rounded-3xl transition-all hover:bg-gray-50 border-l-4 border-[#A64ECE]">
                <div className="p-2 bg-[#A64ECE]/5 text-[#A64ECE] rounded-xl shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#222222] block mb-1">Cookies Técnicas y Necesarias:</strong>
                  <span className="text-xs sm:text-sm block text-[#555555] leading-relaxed">
                    Son esenciales para permitir la navegación a través de la web, la utilización de las diferentes opciones o servicios que en ella existen (como el menú desplegable interactivo o el formulario de contacto) y controlar el tráfico y la comunicación de datos.
                  </span>
                </div>
              </li>

              {/* PERSONALIZACIÓN */}
              <li className="flex items-start gap-4 bg-[#F8F9FA] p-5 rounded-3xl transition-all hover:bg-gray-50 border-l-4 border-[#00EAEA]">
                <div className="p-2 bg-[#00EAEA]/10 text-cyan-600 rounded-xl shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#222222] block mb-1">Cookies de Personalización o Preferencias:</strong>
                  <span className="text-xs sm:text-sm block text-[#555555] leading-relaxed">
                    Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia (como el idioma seleccionado o la región desde donde accede).
                  </span>
                </div>
              </li>

              {/* ANALÍTICAS */}
              <li className="flex items-start gap-4 bg-[#F8F9FA] p-5 rounded-3xl transition-all hover:bg-gray-50 border-l-4 border-[#FF57DF]">
                <div className="p-2 bg-[#FF57DF]/10 text-pink-500 rounded-xl shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#222222] block mb-1">Cookies de Análisis o Medición:</strong>
                  <span className="text-xs sm:text-sm block text-[#555555] leading-relaxed">
                    Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación con el fin de mejorar continuamente la oferta de productos, contenidos y servicios.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* TARJETA 3: REGISTRO Y DESGLOSE TÉCNICO (TABLA PREMIUM) */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(255,243,18,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FFF312]/20 text-yellow-600 rounded-2xl">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Inventario y detalle de las cookies utilizadas</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              A continuación, se detallan las cookies específicas utilizadas en este sitio web, su proveedor, la finalidad exacta para la que son tratadas y su plazo de caducidad:
            </p>

            {/* RESPONSIVE TABLE CONTAINER (Scroll hint & indicator included for supreme usability) */}
            <div className="relative rounded-3xl border border-gray-100 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F8F9FA] text-[#222222] text-xs font-bold uppercase tracking-wider border-b border-gray-100">
                      <th className="py-4.5 px-6 font-black">Nombre</th>
                      <th className="py-4.5 px-6 font-black">Proveedor</th>
                      <th className="py-4.5 px-6 font-black">Finalidad</th>
                      <th className="py-4.5 px-6 font-black">Caducidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs sm:text-sm">
                    {/* Cookie 1 */}
                    <tr className="hover:bg-gray-50/80 transition-colors duration-150">
                      <td className="py-4 px-6 font-bold text-[#222222]">
                        <code className="bg-gray-100 px-2 py-1 rounded text-[#A64ECE] text-xs">_ga</code> / <code className="bg-gray-100 px-2 py-1 rounded text-[#A64ECE] text-xs">_gid</code>
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-700">Google Analytics (Terceros)</td>
                      <td className="py-4 px-6 text-[#555555] leading-relaxed">Análisis estadístico y medición del tráfico web para optimizar los servicios de la agencia.</td>
                      <td className="py-4 px-6 text-[#555555] whitespace-nowrap">2 años / 24 horas</td>
                    </tr>

                    {/* Cookie 2 */}
                    <tr className="hover:bg-gray-50/80 transition-colors duration-150">
                      <td className="py-4 px-6 font-bold text-[#222222]">
                        <code className="bg-gray-100 px-2 py-1 rounded text-[#A64ECE] text-xs">iubenda_consent</code>
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-700">Iubenda (Terceros)</td>
                      <td className="py-4 px-6 text-[#555555] leading-relaxed">Gestión y almacenamiento del consentimiento técnico del usuario sobre la política de privacidad y cookies.</td>
                      <td className="py-4 px-6 text-[#555555] whitespace-nowrap">1 año</td>
                    </tr>

                    {/* Cookie 3 */}
                    <tr className="hover:bg-gray-50/80 transition-colors duration-150">
                      <td className="py-4 px-6 font-bold text-[#222222]">
                        <code className="bg-gray-100 px-2 py-1 rounded text-[#A64ECE] text-xs">cookielawinfo-checkbox-*</code>
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-700">Propio (Ecosistema Web)</td>
                      <td className="py-4 px-6 text-[#555555] leading-relaxed">Cookie técnica necesaria para recordar las preferencias de aceptación de cookies del usuario.</td>
                      <td className="py-4 px-6 text-[#555555] whitespace-nowrap">11 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA 4: CONTROL Y DESACTIVACIÓN */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Cómo gestionar, bloquear o desactivar las cookies</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Si bloquea la instalación de cookies esenciales, es posible que no pueda acceder a determinadas funcionalidades de nuestra web o que la experiencia de navegación se vea limitada.
            </p>
            <p>
              Para su comodidad, le facilitamos los enlaces oficiales de los principales navegadores del sector para gestionar o desactivar el uso de cookies en su equipo:
            </p>

            {/* BUTTON REGISTRY OF BROWSER LINKS (Premium pill shape configurations outline/ghost style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {browserLinks.map((browser, index) => (
                <a
                  key={index}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-full border border-gray-100 hover:border-[#A64ECE]/40 bg-[#F8F9FA] hover:bg-white text-xs sm:text-sm font-bold text-[#222222] hover:text-[#A64ECE] group transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A64ECE] shrink-0" />
                    {browser.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#A64ECE] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
