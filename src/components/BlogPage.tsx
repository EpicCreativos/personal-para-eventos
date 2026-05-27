import React, { useState } from "react";
import { Sparkles, ArrowRight, Rss, Newspaper, Heart, Share2, Eye, X, BookOpen, Clock } from "lucide-react";

interface BlogPageProps {
  setIsApplyModalOpen: (open: boolean) => void;
}

export default function BlogPage({
  setIsApplyModalOpen
}: BlogPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [likedArticles, setLikedArticles] = useState<string[]>([]);

  const toggleLike = (articleId: string) => {
    setLikedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId) 
        : [...prev, articleId]
    );
  };

  const articles = [
    {
      id: "grandes-marcas",
      title: "Personal para Eventos: un equipo detrás de grandes marcas",
      category: "PROYECTOS",
      text: "En un mercado donde la imagen, la experiencia y la ejecución impecable son claves para conectar con el público, en Personal para Eventos trabajamos cada día para ser el aliado de confianza de marcas líderes que apuestan por hacer de cada acción una oportunidad de impacto.",
      fullContent: `En un mercado donde la imagen, la experiencia y la ejecución impecable son claves para conectar con el público, en Personal para Eventos trabajamos cada día para ser el aliado de confianza de marcas líderes que apuestan por hacer de cada acción una oportunidad de impacto.\n\nNuestra metodología premium de capacitación continua y supervisión directa de equipos garantiza que grandes firmas confíen plenamente en nuestra capacidad de gestión. Desde ferias comerciales masivas y salones de exposición hasta lanzamientos boutique de alta gama, nos centramos en personificar y proyectar con fidelidad los valores de la identidad y filosofía corporativa de nuestros clientes.\n\nCada miembro del equipo ferial es seleccionado a través de minuciosos procesos de filtrado, no solo evaluando su perfil lingüístico o protocolo, sino también su proactividad, ingenio de solución ágil frente a imprevistos y elegancia natural de trato comercial. Cooperamos estrechamente con departamentos de marketing y relaciones públicas de primer orden para asegurar que su marca reluzca con el máximo prestigio posible.`,
      image: "/images/personal-para-eventos-foto-124.jpg",
      accent: "#00EAEA",
      accentBg: "bg-[#00EAEA] text-gray-900",
      readTime: "4 min de lectura"
    },
    {
      id: "loreal",
      title: "Acciones para L'Oréal en toda España: profesionalidad, presencia y cuidado de marca",
      category: "CASO DE ÉXITO",
      text: "En Personal para Eventos nos enorgullece ser un socio de confianza de L'Oréal, colaborando de forma activa en múltiples acciones a lo largo del territorio nacional con varias de sus marcas líderes en belleza y dermocosmética.",
      fullContent: `En Personal para Eventos nos enorgullece ser un socio de confianza de L'Oréal, colaborando de forma activa en múltiples acciones a lo largo del territorio nacional con varias de sus marcas líderes en belleza y dermocosmética.\n\nPara responder con la máxima solvencia técnica a las ambiciosas campañas promocionales de este gigante del sector cosmético, movilizamos perfiles de azafatas promotoras expertas en belleza, coordinadores ágiles con soporte regional permanente y soporte logístico multiciudad simultáneo.\n\nLa marca exige una disciplina rigurosa de cuidado estético, gestualidad impecable en los puntos clave de atención y un dominio profundo de los beneficios del catálogo. Gracias a la Academy propia de «Personal para Eventos», todo el personal seleccionado asiste previamente a talleres de alineación de producto de nivel avanzado impartidos por nuestros mentores, logrando conversiones feriales de gran impacto y una experiencia de usuario distinguida de primerísimo orden.`,
      image: "/images/11.jpeg",
      accent: "#FF57DF",
      accentBg: "bg-[#FF57DF] text-white",
      readTime: "5 min de lectura"
    },
    {
      id: "stand-azafatas",
      title: "Estrategias para Maximizar el Impacto de tu Stand con Azafatas Profesionales",
      category: "ESTRATEGIAS",
      text: "En un entorno ferial competitivo, captar la atención del público es esencial. Las azafatas para eventos se convierten en aliadas estratégicas para atraer visitantes, comunicar eficazmente y reforzar la imagen de marca.",
      fullContent: `En un entorno ferial competitivo, captar la atención del público es esencial. Las azafatas para eventos se convierten en aliadas estratégicas para atraer visitantes, comunicar eficazmente y reforzar la imagen de marca.\n\nPara garantizar que tu inversión en la feria o congreso se traduzca en leads comerciales de altísimo valor, es vital proyectar una recepción cálida y estructurada. Nuestras azafatas y azafatos de protocolo no solo dan la bienvenida al stand, sino que actúan como calificados filtros comerciales que recogen datos de contacto estructurados, dirigen el flujo vehicular de asistentes hacia los comerciales senior y gestionan el catering ferial con absoluta elegancia.\n\nAsimismo, dominan el saludo corporativo, conocen la distribución exacta del pabellón y asisten en tareas de demostración de producto en tiempo real, garantizando una imagen unificada, vibrante y de prestigio irreprochable durante extensas jornadas feriales.`,
      image: "/images/4.jpeg",
      accent: "#FFF312",
      accentBg: "bg-[#FFF312] text-gray-800",
      readTime: "3 min de lectura"
    },
    {
      id: "cocteleria-branding",
      title: "Cómo la coctelería corporativa puede reforzar los valores de tu marca",
      category: "MIXOLOGÍA",
      text: "A través del diseño de cartas temáticas combinadas con barras retroiluminadas y barmans que conocen a la perfección el vocabulario institucional, las marcas logran elevar eventos corporativos de forma interactiva.",
      fullContent: `A través del diseño de cartas temáticas combinadas con barras retroiluminadas y barmans que conocen a la perfección el vocabulario institucional, las marcas logran elevar eventos corporativos de forma interactiva y sensorial.\n\nLa coctelería de autor se ha consolidado como un potente canal de comunicación en aniversarios corporativos, recepciones tras ponencias y fiestas VIP. Un cóctel diseñado con los colores corporativos de la marca y bautizado con nombres alusivos a sus hitos empresariales estimula conversaciones orgánicas de valor, mientras que el dinamismo del barman detrás de la barra mantiene un ambiente sumamente magnético.\n\nNuestro personal de barra y coctelería dispone de formación de protocolo en hospitalidad de alta gama y domina la preparación experta de digestivos tradicionales tanto con alcohol como sofisticadas alternativas mocktail adaptadas para los paladares más selectivos.`,
      image: "/images/15.jpeg",
      accent: "#A64ECE",
      accentBg: "bg-[#A64ECE] text-white",
      readTime: "6 min de lectura"
    }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333]">
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00EAEA]/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-12 w-[450px] h-[450px] rounded-full bg-[#FF57DF]/5 blur-[110px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 w-[80%] max-w-none mx-auto">
        <div className="text-left space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#A64ECE]/5 border border-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <Newspaper className="w-4 h-4 text-[#A64ECE]" />
            NUESTRO BLOG INFORMATIVO
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] mb-4">
            NOTICIAS, HISTORIAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
              Y ARTÍCULOS DE ÉLITE
            </span>
          </h1>
          <p className="text-lg text-[#555555] font-normal leading-relaxed">
            Explora las últimas tendencias de la industria, análisis minuciosos de nuestros casos de éxito nacionales y consejos de etiqueta corporativa firmados por nuestro staff académico de Personal para Eventos.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 w-[80%] max-w-none mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className={`absolute top-5 left-5 text-xs font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${article.accentBg}`}>
                    {article.category}
                  </div>
                </div>
                
                <div className="p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <span>{article.readTime}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 1.2k vistas</span>
                  </div>
                  
                  <h3 className="font-display font-black text-[#333333] text-xl sm:text-2xl leading-tight group-hover:text-[#A64ECE] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#555555] text-base leading-relaxed font-normal">
                    {article.text}
                  </p>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 sm:pb-10 flex items-center justify-between border-t border-gray-50 pt-6">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-mono font-bold text-[#A64ECE] hover:text-[#333333] tracking-widest uppercase flex items-center gap-1.5 select-none cursor-pointer"
                >
                  LEER ARTÍCULO COMPLETO <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2 text-gray-400">
                  <button 
                    onClick={() => toggleLike(article.id)}
                    className={`p-2 transition-colors cursor-pointer ${likedArticles.includes(article.id) ? 'text-red-500' : 'hover:text-red-500'}`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + "?article=" + article.id);
                      alert("Vínculo copiado al portapapeles");
                    }}
                    className="p-2 hover:text-[#A64ECE] transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL DETAILED ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-[#222222]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 z-55 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-[40px] max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] flex flex-col relative">
            
            {/* Header image in dialog */}
            <div className="relative h-60 sm:h-72 w-full bg-gray-50 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 w-10 h-10 bg-[#222222]/70 text-white rounded-full flex items-center justify-center hover:bg-[#A64ECE] hover:scale-105 transition-all cursor-pointer shadow"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`absolute bottom-5 left-8 text-xs font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${selectedArticle.accentBg}`}>
                {selectedArticle.category}
              </div>
            </div>

            {/* Scrollable Container with the beautiful actual text */}
            <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-left">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                <Clock className="w-4 h-4 text-[#A64ECE]" />
                <span>{selectedArticle.readTime}</span>
                <span>&bull;</span>
                <span>Área de Redacción Profesional</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-sans font-black text-[#222222] uppercase leading-tight tracking-tight">
                {selectedArticle.title}
              </h2>

              <div className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal whitespace-pre-line space-y-4">
                {selectedArticle.fullContent}
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    setIsApplyModalOpen(true);
                  }}
                  className="bg-[#A64ECE] text-white hover:bg-[#933fd1] px-6 py-3 rounded-full text-xs font-black tracking-wider uppercase cursor-pointer transition-colors w-full sm:w-auto text-center"
                >
                  Postularse como Personal
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="border border-[#222222] text-[#222222] hover:border-[#A64ECE] hover:text-[#A64ECE] px-6 py-3 rounded-full text-xs font-bold uppercase cursor-pointer transition-all w-full sm:w-auto text-center"
                >
                  Cerrar Lectura
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}
