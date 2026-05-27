import React, { useEffect } from "react";
import { 
  ShieldCheck, 
  Accessibility, 
  AlertTriangle, 
  Calendar, 
  Mail, 
  HelpCircle, 
  Sliders, 
  CornerDownRight,
  BookmarkCheck
} from "lucide-react";

export default function AccesibilidadPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#555555] font-sans pb-24 overflow-hidden">
      {/* Background Dopamine blobs for ambient premium layering */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#00EAEA]/6 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FF57DF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-96 h-96 rounded-full bg-[#FFF312]/6 blur-[100px] pointer-events-none" />

      {/* HEADER SECTION */}
      <section className="relative pt-24 pb-8 sm:pt-28 md:pt-36 w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1000px] mx-auto px-4 sm:px-6 z-10">
        <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A64ECE]/20 transition-all duration-300 mb-6 font-mono">
          <ShieldCheck className="w-4 h-4" />
          Real Decreto 1112/2018
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-sans font-black tracking-tighter text-[#222222] uppercase leading-[1.2] mb-4">
          Declaración de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">Accesibilidad</span>
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-xl font-normal leading-relaxed">
          Grupo Genérica y Personal para Eventos asumen el compromiso de garantizar el uso universal de sus plataformas digitales a todos los usuarios, independientemente de sus capacidades.
        </p>
      </section>

      {/* CORE CONTAINER FOR MODULAR CARDS */}
      <div className="w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1000px] mx-auto px-4 sm:px-6 z-10 space-y-8 lg:space-y-12">
        
        {/* TARJETA 1: INTRODUCCIÓN INSTITUCIONAL Y SITUACIÓN */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
              <Accessibility className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Situación de Cumplimiento</h2>
          </div>
          
          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Grupo Genérica se ha comprometido a hacer accesible su sitio web, de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
            </p>
            <p>
              La presente declaración de accesibilidad se aplica al sitio web <a href="https://personalparaeventos.com" className="text-[#A64ECE] hover:underline font-bold">https://personalparaeventos.com</a>:
            </p>
            <div className="p-5 bg-[#F8F9FA] rounded-2xl border-l-4 border-[#A64ECE]/50 mt-4">
              <p className="text-xs sm:text-sm text-[#222222] font-semibold">
                Este sitio web es parcialmente conforme con el RD 1112/2018 debido a las excepciones y a la falta de conformidad de los aspectos que se indican en el siguiente punto.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 2: EVALUACIÓN DE CONTENIDO NO ACCESIBLE */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,234,234,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#00EAEA]/10 text-cyan-600 rounded-2xl">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Contenido no accesible</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              El contenido que se recoge a continuación no es accesible por lo siguiente:
            </p>

            {/* Falta de conformidad */}
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider border-b border-gray-100 pb-2">
                Falta de conformidad con el RD 1112/2018
              </h3>
              
              <ul className="space-y-3.5">
                {[
                  {
                    txt: "Podrían existir algunos aspectos de contraste que no cumplan los mínimos exigidos, 3:1, con respecto a los colores adyacentes del fondo de la sección de la web en cuestión.",
                    code: "[9.1.4.11 Contraste no textual]"
                  },
                  {
                    txt: "Podrían existir algunos elementos no textuales no etiquetados correctamente",
                    code: "[2.5.3 Etiqueta en el nombre] y [4.1.2 Nombre función y valor]"
                  },
                  {
                    txt: "Los buscadores buscan automáticamente sin necesidad de ordenar ninguna acción por parte del usuario",
                    code: "[3.2.2 Al recibir entradas]"
                  },
                  {
                    txt: "Podrían existir algunos textos en otro idioma no etiquetados correctamente",
                    code: "[3.1.2 Idioma de las partes]"
                  },
                  {
                    txt: "Podrían existir errores de código puntuales de edición en alguna página web.",
                    code: "[4.1.1 Procesamiento]"
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#F8F9FA] p-4 rounded-2xl border-l-[3px] border-slate-200 hover:border-[#A64ECE] transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A64ECE] mt-2 shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <span className="text-[#555555]">{item.txt} </span>
                      <strong className="text-[#A64ECE] font-bold tracking-tight ml-1 font-mono">{item.code}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Carga desproporcionada */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider">
                Carga desproporcionada
              </h3>
              <p className="text-xs sm:text-sm bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                No aplica.
              </p>
            </div>

            {/* Exenciones */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider">
                El contenido no entra dentro del ámbito de la legislación aplicable
              </h3>
              <p className="text-xs sm:text-sm">
                Podrían existir archivos ofimáticos en PDF u otros formatos publicados antes del 20 de septiembre de 2018 que no cumplan en su totalidad todos los requisitos de accesibilidad. Aunque se ha procurado que la mayoría de ellos sí lo cumplan.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 3: HISTORIAL Y PREPARACIÓN */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(255,243,18,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FFF312]/20 text-yellow-600 rounded-2xl">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Preparación de la presente declaración</h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-normal divide-y divide-gray-50">
            <div className="pb-4">
              <p className="text-xs font-black text-[#A64ECE] uppercase tracking-wider mb-1">Fecha de preparación</p>
              <p className="font-bold text-[#222222]">La presente declaración fue preparada el 21 de enero de 2023.</p>
            </div>

            <div className="py-4">
              <p className="text-xs font-black text-[#A64ECE] uppercase tracking-wider mb-1">Método empleado</p>
              <p>El método empleado para preparar la declaración ha sido una autoevaluación llevada a cabo por el propio organismo.</p>
            </div>

            <div className="pt-4">
              <p className="text-xs font-black text-[#A64ECE] uppercase tracking-wider mb-1">Última actualización</p>
              <p className="font-bold text-[#222222]">La Declaración de Accesibilidad ha sido revisada y actualizada en enero de 2023.</p>
            </div>
          </div>
        </div>

        {/* TARJETA 4: CANALES DE ATENCIÓN, OBSERVACIONES Y DATOS DE CONTACTO */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(255,87,223,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FF57DF]/10 text-pink-500 rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Observaciones y Datos de Contacto</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a del RD 1112/2018) como por ejemplo:
            </p>

            <ul className="space-y-3.5">
              {[
                "Informar sobre cualquier posible incumplimiento por parte de este sitio web",
                "Transmitir otras dificultades de acceso al contenido",
                "Formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <CornerDownRight className="w-4 h-4 text-[#A64ECE] shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-[#555555]">{text}</span>
                </li>
              ))}
            </ul>

            {/* Caja Destacada de Contacto / Highlight client parameters */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 border-l-4 border-[#FF57DF] shadow-[0_8px_20px_rgba(0,0,0,0.01)] space-y-2">
              <h4 className="text-xs font-black text-[#222222] uppercase tracking-[0.1em]">Canal de Atención Inmediata</h4>
              <p className="text-xs sm:text-sm text-[#222222] font-semibold leading-relaxed">
                A través del formulario de contacto de este sitio web o a través del número de teléfono <a href="tel:+34944717875" className="text-[#A64ECE] font-bold hover:underline">(+34) 944 717 875</a>.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 5: GESTIÓN DE QUEJAS Y RECLAMACIONES */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(166,78,206,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#A64ECE]/5 text-[#A64ECE] rounded-2xl">
              <BookmarkCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Presentación de Quejas y Solicitudes</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Puede presentar: Queja relativa al cumplimiento de los requisitos del RD 1112/2018 o Solicitud de Información accesible relativa a: Contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4 o Contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada.
            </p>
            <p>
              En la Solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima.
            </p>

            <div className="p-5 bg-[#A64ECE]/5 border-l-4 border-[#A64ECE] rounded-2xl">
              <p className="text-xs sm:text-sm text-[#222222] font-medium mb-1">Tramitación de Reclamaciones:</p>
              <p className="text-xs sm:text-sm">
                Las quejas y reclamaciones sobre información accesible se realizarán a través de la sede electrónica (<a href="https://sede.red.gob.es/procedimientos/quejas-y-sugerencias" target="_blank" rel="noopener noreferrer" className="text-[#A64ECE] font-bold hover:underline">https://sede.red.gob.es/procedimientos/quejas-y-sugerencias</a>), y serán recibidas y tratadas por el área de Sistemas de la Información de Red.es.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-[#222222] uppercase tracking-tight">Procedimiento de Aplicación</h2>
              <p className="text-xs sm:text-sm">
                Si una vez realizada una solicitud de información accesible o queja, ésta hubiera sido desestimada, no se estuviera de acuerdo con la decisión adoptada, o la respuesta no cumpliera los requisitos contemplados en el artículo 12.5, la persona interesada podrá iniciar una reclamación. Igualmente se podrá iniciar una reclamación en el caso de que haya transcurrido el plazo de veinte días hábiles sin haber obtenido respuesta.
              </p>
              <p className="text-xs sm:text-sm">
                La reclamación puede ser presentada través de la Instancia Genérica de la Sede electrónica del Ministerio de Asuntos Económicos y Transformación Digital, así como en el resto de opciones recogidas en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Las reclamaciones serán recibidas y tratadas por la Subdirección General de Inspección de Servicios del Ministerio.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 6: GUÍA DE CONFIGURACIÓN Y CONTENIDO OPCIONAL (USER CONTROLS) */}
        <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-transparent shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,234,234,0.02)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#00EAEA]/10 text-cyan-600 rounded-2xl">
              <Sliders className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#222222] uppercase">Contenido Opcional</h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            <p>
              Este portal está diseñado para poder cambiar el tamaño del texto y el color, así como el fondo de la página mediante las opciones de configuración estándar de los navegadores. Si desea cambiar el tamaño de letra del texto en los principales navegadores gráficos utilice los siguientes menús:
            </p>

            {/* Sub-grid of browser menu instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Internet Explorer, Mozilla y Firefox", route: "Ver > Tamaño del texto" },
                { label: "Opera", route: "Ver > Zoom" },
                { label: "Safari", route: "Ver > Hacer el texto más grande" },
                { label: "Chrome", route: "Controla la página actual > Tamaño del texto" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F8F9FA] p-4.5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                  <span className="block text-[11px] font-black uppercase text-[#A64ECE] tracking-wider mb-1">{item.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#222222]">{item.route}</span>
                </div>
              ))}
            </div>

            {/* Keyboard Command Controls Container */}
            <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100 space-y-3">
              <h4 className="text-xs font-black text-[#222222] uppercase tracking-wide">Comandos Rápidos de Teclado (Modificación de Escala)</h4>
              <p className="text-xs text-[#555555] mb-2">Para modificar el tamaño de todo en la página:</p>
              
              <div className="space-y-2 font-mono text-xs sm:text-sm text-gray-800">
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">+</kbd>
                  <span className="text-gray-500 font-sans text-xs ml-2">Aumentar tamaño de página</span>
                </div>

                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">-</kbd>
                  <span className="text-gray-500 font-sans text-xs ml-2">Disminuir tamaño de página</span>
                </div>

                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm font-bold">0</kbd>
                  <span className="text-gray-500 font-sans text-xs ml-2">Restaurar tamaño original de la página</span>
                </div>
              </div>
            </div>

            {/* Technical standard final text */}
            <p className="text-xs sm:text-sm border-t border-gray-100 pt-5 leading-relaxed text-gray-500">
              Si lo que quiere es anular la hoja de estilos o modificar el color del texto, puede consultar la página <a href="https://www.w3.org/WAI/changedesign" target="_blank" rel="noopener noreferrer" className="text-[#A64ECE] font-bold hover:underline">How to Change Text Size or Colors</a> de la WAI, que se puede leer traducida al español en <a href="https://www.w3.org/WAI/changedesign/es" className="text-[#A64ECE] font-bold hover:underline">¿Cómo cambiar el tamaño del texto o colores?</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
