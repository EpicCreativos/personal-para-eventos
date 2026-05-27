import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  AlertCircle,
  Upload,
  Star,
  ExternalLink,
  MessageSquare,
  Users,
  Briefcase
} from "lucide-react";

interface ContactoPageProps {
  navigateTo: (page: any, sectionId?: string) => void;
  setIsBudgetModalOpen?: (open: boolean) => void;
  setIsApplyModalOpen?: (open: boolean) => void;
}

export default function ContactoPage({
  navigateTo,
  setIsBudgetModalOpen,
  setIsApplyModalOpen
}: ContactoPageProps) {
  // Form Type Switcher: "clientes" or "talento" (Bicéfalo)
  const [activeFormTab, setActiveFormTab] = useState<"clientes" | "talento">("clientes");

  // Form states - Clientes (Quiero contratar)
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientProfile, setClientProfile] = useState("Azafatas");
  const [clientMessage, setClientMessage] = useState("");
  const [clientSubmitted, setClientSubmitted] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);

  // Form states - Talento (Quiero trabajar)
  const [talentName, setTalentName] = useState("");
  const [talentEmail, setTalentEmail] = useState("");
  const [talentPhone, setTalentPhone] = useState("");
  const [talentPosition, setTalentPosition] = useState("Azafatas");
  const [talentMessage, setTalentMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [talentSubmitted, setTalentSubmitted] = useState(false);
  const [talentError, setTalentError] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Accordion FAQ states (independent indexed states)
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué servicios ofrece Personal Para Eventos?",
      answer: "Nuestra agencia ofrece una amplia gama de servicios para eventos, incluyendo la contratación de azafatas, camareros, auxiliares, montadores, mozos, carpinteros, cocteleros… altamente capacitados y profesionales."
    },
    {
      question: "¿Cómo seleccionan y capacitan a su personal para eventos?",
      answer: "Nuestro proceso de selección es riguroso y se centra en encontrar candidatos con experiencia, habilidades comunicativas y un enfoque en la atención al detalle. Una vez seleccionados, nuestro personal recibe capacitación continua a través de Personal para Eventos Academy para garantizar un servicio de la más alta calidad."
    },
    {
      question: "¿Cuánto tiempo de anticipación se necesita para contratar al personal para un evento?",
      answer: "Recomendamos contactarnos con la mayor anticipación posible para asegurar la disponibilidad de nuestro personal. Sin embargo, entendemos que pueden surgir eventos de último momento, y haremos todo lo posible para brindar una respuesta rápida y soluciones flexibles."
    },
    {
      question: "¿Pueden proporcionar personal multilingüe para eventos internacionales?",
      answer: "Sí, contamos con personal multilingüe preparado para atender eventos internacionales y asegurar una comunicación efectiva con los asistentes de diferentes idiomas."
    },
    {
      question: "¿Cuál es la cobertura geográfica de su agencia?",
      answer: "Nuestra agencia ofrece sus servicios en todo el territorio español."
    }
  ];

  // Simulated CV File Upload Handler
  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      setIsUploading(true);
      setUploadProgress(15);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 25;
        });
      }, 150);
    }
  };

  // Handler for Clientes Form Submit
  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone || !clientMessage) {
      setClientError("Por favor, rellena todos los campos obligatorios.");
      return;
    }
    setClientError(null);
    setClientSubmitted(true);
  };

  // Handler for Talento Form Submit
  const handleTalentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!talentName || !talentEmail || !talentPhone || !talentMessage) {
      setTalentError("Por favor, rellena todos los campos de información personal requeridos.");
      return;
    }
    if (!uploadedFileName) {
      setTalentError("Por favor, adjunta tu currículum para evaluar tu perfil.");
      return;
    }
    if (!privacyAccepted) {
      setTalentError("Debes aceptar la política de protección de datos.");
      return;
    }
    setTalentError(null);
    setTalentSubmitted(true);
  };

  const handleResetClientForm = () => {
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setClientProfile("Azafatas");
    setClientMessage("");
    setClientSubmitted(false);
  };

  const handleResetTalentForm = () => {
    setTalentName("");
    setTalentEmail("");
    setTalentPhone("");
    setTalentPosition("Azafatas");
    setTalentMessage("");
    setUploadedFileName(null);
    setUploadProgress(0);
    setPrivacyAccepted(false);
    setTalentSubmitted(false);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full relative overflow-hidden bg-white">
      
      {/* BACKGROUND VECTOR DECORATIONS (Micro-acentos Dopamínicos en 10-20% Opacidad) */}
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00EAEA]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#FF57DF]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#FFF312]/6 blur-3xl pointer-events-none" />

      {/* SECCIÓN 1: HERO INMERSIVO (CONTACTO ENERGÉTICO) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center items-center pt-12 pb-24 sm:pt-16 sm:pb-32 px-6 bg-[#F8F9FA] border-b border-gray-100/50">
        
        {/* Blob decorativo específico en Cian (15% de opacidad de fondo) */}
        <div className="absolute inset-0 bg-[#00EAEA]/6 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00EAEA]/15 blur-[120px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#A64ECE]/10 text-[#A64ECE] text-xs font-mono font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            ESTAMOS A TU COMPLETA DISPOSICIÓN
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tighter text-[#222222] leading-tight mb-8">
            CONTACTA CON <span className="text-[#A64ECE]">NOSOTROS</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#555555] leading-relaxed font-normal max-w-3xl mx-auto mb-12">
            ¡Ponte en contacto con nosotros hoy mismo y comienza a planificar el evento que quieres! Nosotros nos encargamos de la selección y gestión del equipo para garantizar que tu evento sea un éxito.
          </p>

          {/* Elementos Interactivos (Overlapping dual buttons with negative margins) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto relative -mb-36 z-20">
            <button
              onClick={() => {
                if (setIsBudgetModalOpen) {
                  setIsBudgetModalOpen(true);
                } else {
                  navigateTo("solicita-presupuesto");
                }
              }}
              className="w-full sm:w-auto bg-[#A64ECE] text-white hover:bg-[#923fd1] hover:-translate-y-1 transition-all duration-300 px-8 py-4.5 rounded-full text-base font-bold shadow-lg select-none cursor-pointer tracking-wider text-center"
            >
              Solicita Presupuesto
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("formulario-bicefalo");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full sm:w-auto border-2 border-[#222222] text-[#222222] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-white/90 hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-full text-base font-bold shadow-md select-none cursor-pointer tracking-wider text-center"
            >
              Envíanos un Mensaje
            </button>
          </div>
        </div>
      </section>

      {/* Spacer to complement the absolute button overlap overlay spacing */}
      <div className="h-24 sm:h-32 bg-white" />

      {/* SECCIÓN 2: GRID DE CANALES DIRECTOS (TARJETAS COMPONENTIZADAS) */}
      <section className="py-24 sm:py-32 w-[80%] max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase block mb-3">
            Atención Rápida
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#222222] leading-tight">
            CANALES DE ATENCIÓN DIRECTA
          </h2>
          <div className="w-16 h-1 bg-[#A64ECE] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Tarjeta 1 (Teléfono) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 flex flex-col justify-between items-start shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#A64ECE] group-hover:text-white transition-all duration-300 relative">
              <Phone className="w-6 h-6 stroke-[2]" />
              {/* Soft mini-border accent in Cyan */}
              <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#00EAEA] border-2 border-white" />
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-sans font-black text-[#222222] mb-4 tracking-tight uppercase">
                Teléfono
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                Comunícate directamente con nuestros gestores de cuenta y planificadores comerciales expertos de la central nacional en horario de oficina.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 w-full pt-4 border-t border-gray-100 text-sm font-mono font-bold text-[#A64ECE]">
              <a href="tel:913568878" className="hover:underline flex items-center justify-between group/link">
                <span>Central Madrid: 913 568 878</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
              <a href="tel:930130176" className="hover:underline flex items-center justify-between group/link">
                <span>Deleg. Barcelona: 930 130 176</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Tarjeta 2 (Solicita Presupuesto) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 flex flex-col justify-between items-start shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#A64ECE] group-hover:text-white transition-all duration-300 relative">
              <MessageSquare className="w-6 h-6 stroke-[2]" />
              {/* Soft mini-border accent in Magenta */}
              <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#FF57DF] border-2 border-white" />
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-sans font-black text-[#222222] mb-4 tracking-tight uppercase">
                Solicita Presupuesto
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                Envía tus necesidades de perfiles de azafatas, camareros, cocteleros o montadores para recibir tarifas oficiales cerradas e inmediatas.
              </p>
            </div>
            
            <div className="w-full pt-4 border-t border-gray-100 text-sm font-mono font-bold text-[#A64ECE]">
              <a href="mailto:info@personalparaeventos.com" className="hover:underline flex items-center justify-between group/link">
                <span>info@personalparaeventos.com</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Tarjeta 3 (Trabaja con Nosotros) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 flex flex-col justify-between items-start shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#A64ECE] group-hover:text-white transition-all duration-300 relative">
              <Users className="w-6 h-6 stroke-[2]" />
              {/* Soft mini-border accent in Yellow */}
              <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#FFF312] border-2 border-white" />
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-sans font-black text-[#222222] mb-4 tracking-tight uppercase">
                Trabaja con Nosotros
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal">
                ¿Buscas trabajo dinámico en eventos? Inscríbete en nuestra base de datos para acceder a formaciones y ofertas de empleo estables de campo.
              </p>
            </div>
            
            <div className="w-full pt-4 border-t border-gray-100 text-sm font-mono font-bold text-[#A64ECE]">
              <a href="mailto:empleo@personalparaeventos.com" className="hover:underline flex items-center justify-between group/link">
                <span>empleo@personalparaeventos.com</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: SEDES NACIONALES (GRID DE TARJETAS CON MAPAS INTEGRADOS) */}
      <section className="py-24 sm:py-32 bg-[#F8F9FA] relative z-10 border-y border-gray-100/50">
        <div className="w-[80%] max-w-7xl mx-auto">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#A64ECE] tracking-widest uppercase bg-[#A64ECE]/5 px-4 py-1.5 rounded-full inline-block mb-3 animate-pulse">
              Presencia Física Oficial
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#222222] leading-tight">
              CENTROS OPERATIVOS NACIONALES
            </h2>
            <div className="w-16 h-1 bg-[#A64ECE] mx-auto mt-4 rounded-full" />
            <p className="text-[#555555] text-base mt-6 font-normal leading-relaxed">
              Atendemos y desplegamos equipos de apoyo en todo el territorio peninsular, insular y ciudades autónomas, manteniendo hubs logísticos permanentes en las principales capitales de provincia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Sede 1: MADRID */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:shadow-[0_22px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-sans font-black text-[#222222] tracking-tight">
                    DELEGACIÓN MADRID
                  </h3>
                  <span className="bg-[#A64ECE]/10 text-[#A64ECE] text-xxs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Sede Central
                  </span>
                </div>

                <div className="space-y-4 text-sm text-[#555555] font-normal mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A64ECE] shrink-0 mt-0.5" />
                    <span>Calle Puerto de Navacerrada 13, 28038 Madrid.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="tel:913568878" className="hover:text-[#A64ECE] transition-colors font-mono font-bold">91 356 88 78</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="mailto:info@personalparaeventos.com" className="hover:text-[#A64ECE] transition-colors font-mono">info@personalparaeventos.com</a>
                  </div>
                </div>
              </div>

              {/* Componente Mapa de Madrid */}
              <div className="rounded-2xl overflow-hidden h-[180px] bg-[#F1F3F5] relative border border-gray-100 flex flex-col justify-end p-4">
                {/* Simulated Street Grid Lines */}
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-[35%] left-[45%] w-8 h-8 rounded-full bg-[#A64ECE]/20 flex items-center justify-center animate-ping pointer-events-none" />
                <div className="absolute top-[35%] left-[45%] w-4 h-4 rounded-full bg-[#A64ECE] border-2 border-white pointer-events-none" />
                
                {/* Card containing route button */}
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-gray-100 shadow-sm relative z-10 flex items-center justify-between">
                  <span className="text-xxs font-mono font-bold text-[#222222]">Centro logístico M-30</span>
                  <a 
                    href="https://maps.app.goo.gl/Rerao3dbMMHzjs669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A64ECE] hover:bg-[#8e3eb3] text-white p-1.5 rounded-lg text-xxs font-bold flex items-center gap-1 transition-all"
                  >
                    <span>Ver mapa</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sede 2: BARCELONA */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:shadow-[0_22px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-sans font-black text-[#222222] tracking-tight">
                    DELEGACIÓN BARCELONA
                  </h3>
                  <span className="bg-[#00EAEA]/10 text-[#008d9e] text-xxs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Delegación Ágil
                  </span>
                </div>

                <div className="space-y-4 text-sm text-[#555555] font-normal mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A64ECE] shrink-0 mt-0.5" />
                    <span>Carretera de Collblanc, 133, 08901 L'Hospitalet de Llobregat.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="tel:930130176" className="hover:text-[#A64ECE] transition-colors font-mono font-bold">93 013 01 76</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="mailto:infobarcelona@personalparaeventos.com" className="hover:text-[#A64ECE] transition-colors font-mono">infobarcelona@personalparaeventos.com</a>
                  </div>
                </div>
              </div>

              {/* Componente Mapa de Barcelona */}
              <div className="rounded-2xl overflow-hidden h-[180px] bg-[#F1F3F5] relative border border-gray-100 flex flex-col justify-end p-4">
                {/* Simulated Street Grid Lines */}
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-[50%] left-[60%] w-8 h-8 rounded-full bg-[#A64ECE]/20 flex items-center justify-center animate-ping pointer-events-none" />
                <div className="absolute top-[50%] left-[60%] w-4 h-4 rounded-full bg-[#A64ECE] border-2 border-white pointer-events-none" />
                
                {/* Card containing route button */}
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-gray-100 shadow-sm relative z-10 flex items-center justify-between">
                  <span className="text-xxs font-mono font-bold text-[#222222]">Centro Hospitalet</span>
                  <a 
                    href="https://maps.app.goo.gl/5GMyzFNDMNv4o7Ta8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A64ECE] hover:bg-[#8e3eb3] text-white p-1.5 rounded-lg text-xxs font-bold flex items-center gap-1 transition-all"
                  >
                    <span>Ver mapa</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sede 3: VALENCIA */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:shadow-[0_22px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-sans font-black text-[#222222] tracking-tight">
                    DELEGACIÓN VALENCIA
                  </h3>
                  <span className="bg-[#FF57DF]/10 text-[#c22e9e] text-xxs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Levante y Sur
                  </span>
                </div>

                <div className="space-y-4 text-sm text-[#555555] font-normal mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A64ECE] shrink-0 mt-0.5" />
                    <span>Calle de Peruga, 19, 12593 Moncofa, Castellón/Valencia.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="tel:637052313" className="hover:text-[#A64ECE] transition-colors font-mono font-bold">637 05 23 13</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#A64ECE] shrink-0" />
                    <a href="mailto:infovalencia@personalparaeventos.com" className="hover:text-[#A64ECE] transition-colors font-mono">infovalencia@personalparaeventos.com</a>
                  </div>
                </div>
              </div>

              {/* Componente Mapa de Valencia */}
              <div className="rounded-2xl overflow-hidden h-[180px] bg-[#F1F3F5] relative border border-gray-100 flex flex-col justify-end p-4">
                {/* Simulated Street Grid Lines */}
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-[40%] left-[30%] w-8 h-8 rounded-full bg-[#A64ECE]/20 flex items-center justify-center animate-ping pointer-events-none" />
                <div className="absolute top-[40%] left-[30%] w-4 h-4 rounded-full bg-[#A64ECE] border-2 border-white pointer-events-none" />
                
                {/* Card containing route button */}
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-gray-100 shadow-sm relative z-10 flex items-center justify-between">
                  <span className="text-xxs font-mono font-bold text-[#222222]">Centro Moncofa</span>
                  <a 
                    href="https://maps.app.goo.gl/Bs78foV3vS9K6sA79"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A64ECE] hover:bg-[#8e3eb3] text-white p-1.5 rounded-lg text-xxs font-bold flex items-center gap-1 transition-all"
                  >
                    <span>Ver mapa</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 4: FORMULARIO BICEFAL (CLIENTES VS TALENTO) + SOCIAL PROOF */}
      <section id="formulario-bicefalo" className="py-24 sm:py-32 w-[80%] max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Formulario Bicéfalo (60% equivalent to 7 columns in lg grid) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-gray-100 p-8 sm:p-12 shadow-[0_15px_35px_rgba(0,0,0,0.04)] relative">
            
            {/* Corner Decorative Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-[32px] bg-gradient-to-r ${
              activeFormTab === "clientes" 
                ? "from-[#A64ECE] via-[#00EAEA] to-violet-400" 
                : "from-[#FF57DF] via-[#FFF312] to-pink-500"
            }`} />

            {/* Bicéfalo Tabs header selection */}
            <div className="flex bg-[#F8F9FA] rounded-2xl p-1.5 mb-10 border border-gray-100 font-sans">
              <button
                type="button"
                onClick={() => setActiveFormTab("clientes")}
                className={`flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all uppercase flex items-center justify-center gap-2 cursor-pointer ${
                  activeFormTab === "clientes"
                    ? "bg-[#A64ECE] text-white shadow-md scale-[1.01]"
                    : "text-[#555555] bg-transparent hover:text-[#A64ECE]"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Busco Personal (Cliente)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab("talento")}
                className={`flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all uppercase flex items-center justify-center gap-2 cursor-pointer ${
                  activeFormTab === "talento"
                    ? "bg-[#FF57DF] text-white shadow-md scale-[1.01]"
                    : "text-[#555555] bg-transparent hover:text-[#A64ECE]"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Busco Empleo (Talento)</span>
              </button>
            </div>

            {/* TAB CONTENT: CLIENTES FORM */}
            {activeFormTab === "clientes" ? (
              <div>
                {!clientSubmitted ? (
                  <form onSubmit={handleClientSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-sans font-black text-[#222222] tracking-tight mb-2 uppercase">
                        Solicitud de Personal de Apoyo
                      </h3>
                      <p className="text-sm text-[#555555] mb-6">
                        Coméntanos los detalles de tu próximo evento, fecha tentativa, número estimado de personal y delegaciones implicadas.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Nombre de Contacto *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Manuel Soler"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="msoler@empresa.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Teléfono Móvil o Fijo *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ej. +34 600 000 000"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Servicio o Perfil Solicitado *
                        </label>
                        <div className="relative">
                          <select
                            value={clientProfile}
                            onChange={(e) => setClientProfile(e.target.value)}
                            className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] focus:bg-white transition-colors text-[#333333] appearance-none cursor-pointer"
                          >
                            <option value="Azafatas">Azafatas de Imagen y Congresos</option>
                            <option value="Camareros">Camareros y Personal de Sala</option>
                            <option value="Cocineros">Cocineros y Ayudantes de Cocina</option>
                            <option value="Cocteleros">Cocteleros de Mixología Autor</option>
                            <option value="Montadores">Montadores y Mozos Carga</option>
                            <option value="Auxiliares">Auxiliares / Ropero / Accesos</option>
                          </select>
                          <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                        Mensaje y Detalles del Evento *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Por favor, especifica el municipio, duración del evento, tipo de uniforme requerido o cualquier especificación técnica..."
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] focus:bg-white transition-colors text-[#333333] resize-none"
                      />
                    </div>

                    {clientError && (
                      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-2.5 text-red-700 animate-in fade-in duration-200">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold">{clientError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#A64ECE] text-white hover:bg-[#923fd1] hover:-translate-y-1 transition-all duration-300 py-4.5 rounded-full text-base font-bold shadow-md select-none cursor-pointer tracking-wider text-center"
                    >
                      Enviar Solicitud de Presupuesto
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 px-4 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 text-xxs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full inline-block mb-3">
                      ✓ RECIBIDA EN SISTEMA
                    </span>
                    <h3 className="text-3xl font-sans font-black text-[#222222] tracking-tight mb-4 uppercase">
                      ¡SOLICITUD CONFIRMADA!
                    </h3>
                    <p className="text-[#555555] text-base leading-relaxed max-w-md mx-auto mb-8">
                      Estimado/a <strong className="text-[#222222]">{clientName}</strong>, hemos registrado tu solicitud con la marca temporal. Un especialista en dirección comercial te enviará las fichas técnicas de los asesores en menos de 4 horas hábiles.
                    </p>
                    <div className="bg-[#F8F9FA] rounded-xl p-4 max-w-sm mx-auto mb-8 text-left font-mono text-xs text-[#555555] space-y-1">
                      <div><strong>Seguimiento:</strong> #EV-{Math.floor(2000 + Math.random() * 7000)}</div>
                      <div><strong>Canal:</strong> Clientes Corporativos</div>
                      <div><strong>Email de Registro:</strong> {clientEmail}</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetClientForm}
                      className="bg-gray-100 hover:bg-gray-200 text-[#222222] font-bold px-8 py-3.5 rounded-full text-sm transition-all cursor-pointer"
                    >
                      Enviar Otra Solicitud
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* TAB CONTENT: TALENTO FORM (CANDIDATOS) */
              <div>
                {!talentSubmitted ? (
                  <form onSubmit={handleTalentSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-sans font-black text-[#222222] tracking-tight mb-2 uppercase">
                        Únete al Equipo Élite
                      </h3>
                      <p className="text-sm text-[#555555] mb-6">
                        Introduce tus datos básicos y adjunta tu Curriculum Vitae. Evaluaremos la disponibilidad de tu perfil en tu provincia del territorio español.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Carmen López"
                          value={talentName}
                          onChange={(e) => setTalentName(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#FF57DF] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="clopez@gmail.com"
                          value={talentEmail}
                          onChange={(e) => setTalentEmail(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#FF57DF] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Teléfono Móvil (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ej. 654 321 098"
                          value={talentPhone}
                          onChange={(e) => setTalentPhone(e.target.value)}
                          className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#FF57DF] focus:bg-white transition-colors text-[#333333]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                          Puesto de Preferencia *
                        </label>
                        <div className="relative">
                          <select
                            value={talentPosition}
                            onChange={(e) => setTalentPosition(e.target.value)}
                            className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#FF57DF] focus:bg-white transition-colors text-[#333333] appearance-none cursor-pointer"
                          >
                            <option value="Azafatas">Azafata de Imagen / Congresos</option>
                            <option value="Camareros">Camarero / Personal de Sala</option>
                            <option value="Cocineros">Cocinero Profesional / Auxiliar</option>
                            <option value="Cocteleros">Mixólogo / Coctelero Gourmet</option>
                            <option value="Montadores">Montadores e Instaladores Staff</option>
                            <option value="Auxiliares">Operativo Auxiliar / Control Accesos</option>
                          </select>
                          <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                        Mensaje de Presentación *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Coméntanos brevemente tus idiomas conocidos, experiencia anterior o tu disponibilidad habitual..."
                        value={talentMessage}
                        onChange={(e) => setTalentMessage(e.target.value)}
                        className="w-full bg-[#F8F9FA] rounded-xl border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#FF57DF] focus:bg-white transition-colors text-[#333333] resize-none"
                      />
                    </div>

                    {/* Integrated file upload with drag and drop support */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">
                        Sube tu Curriculum Vitae (PDF, Word) *
                      </label>
                      <div className="border-2 border-dashed border-gray-200 hover:border-[#FF57DF] rounded-2xl p-6 text-center bg-[#F8F9FA]/60 relative transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleSimulatedUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center justify-center gap-1">
                          <Upload className="w-8 h-8 text-[#FF57DF] mb-2" />
                          {uploadedFileName ? (
                            <div className="z-20">
                              <span className="text-sm font-bold text-[#222222] block">{uploadedFileName}</span>
                              <span className="text-xs font-mono font-bold text-emerald-600">✓ Archivo adjunto correctamente</span>
                            </div>
                          ) : (
                            <div>
                              <span className="text-sm font-bold text-[#333333] block">Arrastra tu currículum aquí</span>
                              <span className="text-xs text-gray-400">O haz clic para seleccionar un archivo local</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {isUploading && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs font-mono text-gray-500 mb-1">
                            <span>Subiendo CV a RRHH...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-[#FF57DF] h-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input
                        type="checkbox"
                        required
                        id="rgpd-protected"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1 focus:ring-[#FF57DF] text-[#FF57DF] border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="rgpd-protected" className="text-xxs text-[#555555] leading-normal cursor-pointer select-none">
                        Doy consentimiento para incorporar mis datos curriculares en la bolsa nacional de CHOFERENDRIVER S.L para ofertas activas en mi provincia de conformidad con los términos RGPD.
                      </label>
                    </div>

                    {talentError && (
                      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-2.5 text-red-700 animate-in fade-in duration-200">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold">{talentError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isUploading}
                      className="w-full bg-[#FF57DF] text-white hover:bg-[#e73cc3] hover:-translate-y-1 transition-all duration-300 py-4.5 rounded-full text-base font-bold shadow-md select-none cursor-pointer tracking-wider text-center"
                    >
                      Enviar Candidatura Oficial
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 px-4 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 bg-pink-50 text-[#FF57DF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <span className="bg-pink-50 text-[#FF57DF] text-xxs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full inline-block mb-3">
                      ✓ INCORPORADO EN BOLSA
                    </span>
                    <h3 className="text-3xl font-sans font-black text-[#222222] tracking-tight mb-4 uppercase">
                      ¡Inscripción Exitosa!
                    </h3>
                    <p className="text-[#555555] text-base leading-relaxed max-w-md mx-auto mb-8">
                      Estimado/a <strong className="text-[#222222]">{talentName}</strong>, hemos registrado tus datos en el departamento de Selección con el identificador de candidato <strong className="text-[#FF57DF]">#STAFF-{Math.floor(10000 + Math.random() * 80000)}</strong>.
                    </p>
                    <p className="text-xs text-gray-400 max-w-md mx-auto mb-8">
                      Evaluaremos tu archivo adjunto (<strong className="text-gray-500 font-mono text-[11px]">{uploadedFileName}</strong>) y nos pondremos en contacto contigo vía WhatsApp o email para una breve entrevista online.
                    </p>
                    <button
                      type="button"
                      onClick={handleResetTalentForm}
                      className="bg-gray-100 hover:bg-gray-200 text-[#222222] font-bold px-8 py-3.5 rounded-full text-sm transition-all cursor-pointer"
                    >
                      Enviar Nueva Candidatura
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Columna Derecha: Social Proof (40% equivalent to 5 columns in lg grid) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            
            {/* Google Rating Card */}
            <div className="bg-[#FFFFFF] border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFF312]/6 blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 font-black text-lg text-blue-500 font-mono">
                  G
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-lg text-[#222222]">
                    GOOGLE REVIEWS
                  </h4>
                  <p className="text-xs text-gray-400 font-mono font-bold tracking-wider">
                    CALIFICACIÓN OFICIAL
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-5">
                <span className="text-6xl font-sans font-black tracking-tighter text-[#222222] leading-none select-none">
                  5.0
                </span>
                <div className="flex flex-col gap-1 bottom-1 relative">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-[#FFF312] text-[#FFF312]" />
                    ))}
                  </div>
                  <span className="text-xxs font-mono font-bold text-emerald-600 uppercase tracking-widest pl-0.5">
                    EXCELENTE EN TODO
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#555555] leading-relaxed">
                Nuestros clientes de agencias de marketing, hoteles de lujo, centrales de ferias y particulares valoran la puntualidad, profesionalidad de imagen, y la sustitución activa de nuestro personal para eventos.
              </p>

              <div className="text-xs font-mono font-bold text-gray-400 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100/50 flex justify-between items-center">
                <span>Total valoraciones verificadas:</span>
                <span className="text-[#A64ECE]">24 Reseñas Reales</span>
              </div>
            </div>

            {/* Testimonials block */}
            <div className="space-y-6">
              
              {/* Testimonio 1: Elena Trigo Trigo */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-display font-extrabold text-base text-[#222222] tracking-tight leading-none">
                      Elena Trigo Trigo
                    </h5>
                    <span className="text-xxs font-mono font-semibold text-gray-400 block mt-1.5 uppercase tracking-wider">
                      Azafata de Imagen
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#FFF312] text-[#FFF312]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed italic">
                  &ldquo;Me encantó trabajar como azafata en esta agencia, me pareció muy profesional, con un trato muy cercano hacia las azafatas y siempre atentos a nuestras necesidades...&rdquo;
                </p>
              </div>

              {/* Testimonio 2: Aida Cosano Aleman */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-display font-extrabold text-base text-[#222222] tracking-tight leading-none">
                      Aida Cosano Aleman
                    </h5>
                    <span className="text-xxs font-mono font-semibold text-gray-400 block mt-1.5 uppercase tracking-wider">
                      Camarera Élite / Auxiliar
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#FFF312] text-[#FFF312]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed italic">
                  &ldquo;Trabajé con ellos y todo genial. Espero volver a trabajar con ellos!&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 5: ACORDEÓN DE PREGUNTAS FRECUENTES (FAQs) */}
      <section className="py-24 sm:py-32 bg-white relative z-10 border-t border-gray-100/50">
        <div className="w-[80%] max-w-4xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase block mb-3">
              Dudas Comunes
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-[#222222] leading-tight">
              PREGUNTAS FRECUENTES (FAQs)
            </h2>
            <div className="w-16 h-1 bg-[#A64ECE] mx-auto mt-4 rounded-full" />
            <p className="text-[#555555] text-base mt-6 font-normal">
              Respondemos con honestidad jurídica y de campo a las dudas principales de clientes y candidatos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 transition-colors focus:outline-none cursor-pointer hover:bg-gray-50/55"
                  >
                    <span className="font-display font-extrabold text-base sm:text-lg text-[#222222] tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-9 h-9 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 group transition-all ${isExpanded ? "bg-[#A64ECE]/10 text-[#A64ECE] rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 text-[#555555] text-sm sm:text-base leading-relaxed font-normal border-t border-gray-50/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
