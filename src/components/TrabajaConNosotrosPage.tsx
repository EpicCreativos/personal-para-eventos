import React, { useState } from "react";
import { 
  Sparkles, 
  HeartHandshake, 
  Check, 
  Mail, 
  User, 
  Phone, 
  MapPin, 
  Briefcase, 
  FileText, 
  Upload, 
  ArrowRight,
  ShieldCheck,
  Star,
  DollarSign
} from "lucide-react";

interface TrabajaConNosotrosPageProps {
  setIsApplyModalOpen: (open: boolean) => void;
  navigateTo?: (page: any, sectionId?: string) => void;
}

export default function TrabajaConNosotrosPage({
  setIsApplyModalOpen,
  navigateTo
}: TrabajaConNosotrosPageProps) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    puesto: "azafata",
    experiencia: "",
    politica: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  // Helper mock navigation or fallback
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (navigateTo) {
      navigateTo(page);
    } else {
      window.location.href = page + ".html";
    }
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333] font-sans">
      
      {/* Dopaminic Vectorial Blur Blobs of Brand Color Palette */}
      <div className="absolute top-12 left-[-10%] w-[600px] h-[600px] rounded-full bg-[#A64ECE]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-8%] w-[580px] h-[580px] rounded-full bg-[#FF57DF]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#00EAEA]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-5 right-[12%] w-[480px] h-[480px] rounded-full bg-[#FFF312]/8 blur-[110px] pointer-events-none" />

      {/* A. HERO SECTION DE CAPTACIÓN (100vh area, Inmersiva con Asimetría) */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-32 w-[80%] max-w-none mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Block: Text, CTA links and bullets */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 bg-[#A64ECE]/10 text-[#A64ECE] px-4 py-2 rounded-full text-xs font-extrabold tracking-widest uppercase mb-1 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#A64ECE]" />
              <span>ÚNETE A NUESTRO EQUIPO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] max-w-4xl break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] to-[#2563EB]">
                TRABAJA COMO PERSONAL PARA EVENTOS
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-[#555555] font-normal leading-relaxed max-w-2xl">
              En «Personal para Eventos», no solo damos vida a eventos extraordinarios, sino que también forjamos experiencias que perduran en el tiempo y estamos en la búsqueda de personas que compartan nuestra pasión, creatividad y dedicación para unirse a nuestro equipo. Si te emociona el mundo de los eventos y estás preparado para dejar tu huella en la industria, te extendemos una cálida invitación para que te unas a nosotros en este emocionante recorrido.
            </p>

            {/* Quick Action scroll link with smooth behavior */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("formulario-solicitud");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-extrabold text-center cursor-pointer shadow-soft uppercase tracking-wider font-sans w-full sm:w-auto"
              >
                ENVÍA TU SOLICITUD
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById("propuesta-valor");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent hover:scale-105 transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-bold text-center cursor-pointer w-full sm:w-auto"
              >
                SABER MÁS
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-xl">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span className="text-sm font-medium text-[#555555]">Contrato laboral oficial</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span className="text-sm font-medium text-[#555555]">Formación y Academy interna</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span className="text-sm font-medium text-[#555555]">Pagos puntuales sin demoras</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#A64ECE] shrink-0" />
                <span className="text-sm font-medium text-[#555555]">Ambiente respetuoso y ético</span>
              </div>
            </div>

          </div>

          {/* Right Area: Large Creative Visual Overlap card */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#00EAEA]/15 blur-3xl animate-pulse" />
            
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 bg-white p-3 sm:p-4 group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full h-[280px] sm:h-[375px] rounded-[24px] sm:rounded-[28px] overflow-hidden mb-4 bg-gray-50">
                <img
                  src="/images/personal-para-eventos-foto-124.jpg"
                  alt="Equipo de personal para eventos colaborativo"
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/images/12.jpeg";
                  }}
                />
                
                {/* Micro info tag in corner */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#333333] px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-sm flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#A64ECE] fill-[#A64ECE]" />
                  <span>Equipo de Élite Premium</span>
                </div>
              </div>
              
              <div className="px-1 sm:px-2">
                <h3 className="font-sans font-bold text-base sm:text-lg text-[#333333] leading-none mb-1">Crecimiento Asegurado</h3>
                <p className="text-[11px] sm:text-xs text-[#555555] font-normal font-sans">Forma parte de la agencia que realmente cuida de su personal.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* B. SECCIÓN DE PROPUESTA DE VALOR (Layout Bento / Tarjetas Flotantes) */}
      <section id="propuesta-valor" className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] relative z-10 border-t border-gray-100">
        <div className="w-[80%] max-w-none mx-auto">
          
          <div className="text-left max-w-4xl mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter text-[#333333] uppercase">
              ¿POR QUÉ TRABAJAR CON NOSOTROS?
            </h2>
            <div className="h-1.5 w-20 sm:w-24 bg-[#A64ECE] rounded-full" />
            
            <p className="text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed max-w-3xl pt-1">
              ¿Por qué elegirnos? Puede que ya hayas sido parte de otras agencias y te hayas enfrentado a situaciones como pagos tardíos, falta de transparencia o falta de apoyo; nosotros somos conscientemente diferentes.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-sans font-black tracking-tight text-[#333333] uppercase flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center font-bold text-sm sm:text-base">★</span>
              LO QUE OFRECEMOS
            </h3>

            {/* Grid modular bento layout with hover and micro-accents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Tarjeta 1 - Sumérgete en un entorno... */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#A64ECE]" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A64ECE]/10 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center font-bold text-[#A64ECE] text-sm sm:text-base">
                  01
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 uppercase">Creatividad y Colaboración</h4>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                  <strong className="text-[#333333] font-bold">UN AMBIENTE INSPIRADOR:</strong> Sumérgete en un entorno que fomenta la creatividad y la colaboración. Cada evento es una oportunidad para aprender, crecer y desarrollarse. Personal para Eventos es el sitio ideal.
                </p>
              </div>

              {/* Tarjeta 2 - Transparencia total en pagos */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00EAEA]" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00EAEA]/10 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center font-bold text-[#00EAEA] text-sm sm:text-base">
                  02
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 uppercase">Ética Operativa Real</h4>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                  <strong className="text-[#333333] font-bold">TRANSPARENCIA TOTAL:</strong> Sabemos lo que frustra trabajar y no conocer tus liquidaciones. Con nosotros, tienes garantizados pagos regulados a tiempo respaldados por contratos de alta seguridad desde tu primer minuto de turno.
                </p>
              </div>

              {/* Tarjeta 3 - Soporte continuado */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF57DF]" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF57DF]/10 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center font-bold text-[#FF57DF] text-sm sm:text-base">
                  03
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 uppercase">Coordinación & Acompañamiento</h4>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                  <strong className="text-[#333333] font-bold">APOYO CONSCIENTE:</strong> En cada evento, un coordinador o gestor de nuestro gran equipo estará contigo para guiarte, solventar dudas y apoyarte de cara a los clientes o imprevistos técnicos.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* COMPACT & ENERGETIC FORMULARIO DE CAPTACIÓN */}
      <section id="formulario-solicitud" className="py-12 sm:py-20 lg:py-32 w-[80%] max-w-none mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Informative column (Left) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left lg:sticky lg:top-24">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[#A64ECE] font-mono text-xs font-bold uppercase tracking-wider block">PROCESO DE EVALUACIÓN</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tighter text-[#333333] leading-tight uppercase">
                EMPIEZA HOY TU RECORRIDO
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed">
                Rellena este breve formulario con tus datos reales. Un miembro de nuestro equipo del departamento de Talento evaluará tu candidatura en un plazo de 24-48 horas laborables para agendar una llamada introductoria personalizada.
              </p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-gray-100 space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-[#333333] text-sm uppercase">Envío del Formulario</h4>
                  <p className="text-xs text-[#555555]">Adjunta tu currículum actualizado y completa los campos básicos para segmentar tu perfil.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-[#333333] text-sm uppercase">Llamada de Validación</h4>
                  <p className="text-xs text-[#555555]">Te llamaremos para conocernos mejor, repasar tu disponibilidad ferial e incorporarte a la base de datos de turnos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-[#333333] text-sm uppercase">¡Listo para trabajar!</h4>
                  <p className="text-xs text-[#555555]">Tendrás acceso a nuestro calendario de ofertas de empleo para Azafatas, Camareros, Chefs, Montadores o Auxiliares.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Interactive Form container (Right) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100 relative">
            
            {submitted ? (
              <div className="text-center py-16 space-y-8">
                <div className="w-20 h-20 bg-[#00EAEA]/15 text-[#00EAEA] rounded-full flex items-center justify-center mx-auto scale-110">
                  <HeartHandshake className="w-10 h-10" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black font-sans text-[#333333] uppercase">¡Candidatura Registrada!</h3>
                  <p className="text-base text-[#555555] max-w-md mx-auto leading-relaxed">
                    Muchas gracias por registrar tu información en Personal para Eventos. Hemos enviado un correo de confirmación de tu perfil y te contactaremos en un máximo de 48 horas laborables.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCvFile(null);
                  }}
                  className="border-2 border-[#333333] text-[#333333] hover:border-[#A64ECE] hover:text-[#A64ECE] bg-transparent px-8 py-3.5 rounded-full text-sm font-bold uppercase transition-all duration-300 block mx-auto cursor-pointer"
                >
                  Registrar otro currículum
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="border-b border-gray-100 pb-5 text-left">
                  <h3 className="text-2xl font-black text-[#333333] uppercase">Formulario de Postulación</h3>
                  <p className="text-sm text-[#555555] mt-1">Completa detalladamente tu solicitud y sube tu currículum oficial en PDF o imagen.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        placeholder="ej. Juan Pérez"
                        className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ej. juan.perez@email.com"
                        className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Teléfono Móvil</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                      <input
                        type="tel"
                        required
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        placeholder="ej. +34 612 345 678"
                        className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Ciudad de Residencia</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                      <input
                        type="text"
                        required
                        value={form.ciudad}
                        onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                        placeholder="ej. Barcelona"
                        className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Perfil Principal de Interés</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                    <select
                      value={form.puesto}
                      onChange={(e) => setForm({ ...form, puesto: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all appearance-none cursor-pointer"
                    >
                      <option value="azafata">Azafata / Azafato de Congresos y Ferias</option>
                      <option value="camarero">Camarero / Camarera de Sala o Sala VIP</option>
                      <option value="cocinero">Cocinero / Ayudante de Cocina Profesional</option>
                      <option value="coctelero">Barman & Mixólogo Superior</option>
                      <option value="montador">Montador de Equipamientos & Técnico de Escenario</option>
                      <option value="auxiliar">Auxiliar de Accesos / Acomodación / Ropero</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Breve Resumen de Experiencia</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-gray-400 w-4.5 h-4.5" />
                    <textarea
                      rows={3}
                      value={form.experiencia}
                      onChange={(e) => setForm({ ...form, experiencia: e.target.value })}
                      placeholder="Indica con qué agencias has colaborado o si tienes formación relevante en hospitalidad..."
                      className="w-full bg-gray-50 border border-gray-200/60 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#A64ECE] focus:ring-1 focus:ring-[#A64ECE] transition-all resize-none bg-transparent"
                    />
                  </div>
                </div>

                {/* File Upload component (Drag and drop implementation) */}
                <div className="text-left">
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-sans">Adjuntar Currículum Vitae (PDF o Imagen)</label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-[24px] p-6 text-center transition-all ${
                      dragActive ? "border-[#A64ECE] bg-[#A64ECE]/5" : "border-gray-200 bg-gray-50/50 hover:bg-gray-100/30"
                    }`}
                  >
                    <input
                      type="file"
                      id="cv-file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="cv-file-upload" className="cursor-pointer block space-y-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto text-gray-400 group-hover:text-[#A64ECE] transition-colors">
                        <Upload className="w-5 h-5 text-[#A64ECE]" />
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-[#A64ECE]">Sube tu archivo</span> o arrástralo y suéltalo aquí
                      </div>
                      <p className="text-[11px] text-gray-400">PDF, Word, JPG o PNG de hasta 10MB</p>
                    </label>

                    {cvFile && (
                      <div className="mt-4 p-3 bg-[#00EAEA]/10 border border-[#00EAEA]/30 rounded-xl flex items-center justify-between text-left">
                        <span className="text-xs text-[#333333] font-bold truncate max-w-[200px] sm:max-w-md">
                          📄 {cvFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCvFile(null)}
                          className="text-xs font-bold text-[#FF57DF] hover:underline uppercase tracking-wider cursor-pointer font-sans"
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-left">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={form.politica}
                      onChange={(e) => setForm({ ...form, politica: e.target.checked })}
                      className="mt-1 accent-[#A64ECE] w-4.5 h-4.5 rounded text-[#A64ECE] border-gray-300 focus:ring-[#A64ECE]"
                    />
                    <span className="text-xs text-[#555555] leading-relaxed font-sans">
                      Acepto de forma informada la política de tratamiento, protección de datos y términos de reclutamiento de Personal para Eventos.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:shadow-[0_15px_30px_rgba(166,78,206,0.25)] hover:scale-[1.01] transition-all duration-300 py-5 rounded-full text-base font-extrabold cursor-pointer uppercase tracking-wider"
                >
                  Enviar Currículum Vitae
                </button>
              
              </form>
            )}
            
          </div>
        </div>
      </section>

      {/* QUICK FOOTER LINKS & ACCREDITATIONS OVERVIEW */}
      <section className="bg-[#222222] text-gray-400 py-16 border-t border-gray-800 relative z-10 text-center">
        <div className="w-[80%] max-w-none mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-white text-xl tracking-tighter">PPE ACADEMY & WORK</span>
            </div>
            
            {/* Dynamic connected navlinks */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
              <a href="index.html" onClick={(e) => handleLinkClick(e, "home")} className="hover:text-white transition-colors">Inicio</a>
              <a href="nuestra-historia.html" onClick={(e) => handleLinkClick(e, "history")} className="hover:text-white transition-colors">Nuestra Historia</a>
              <a href="servicios.html" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-white transition-colors">Servicios</a>
              <a href="solicita-presupuesto.html" onClick={(e) => handleLinkClick(e, "solicita-presupuesto")} className="hover:text-white text-[#A64ECE] transition-colors">Solicita Presupuesto</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Personal para Eventos S.L. Todos los derechos reservados. Diseñado bajo las directivas Premium Multipurpose.</p>
            <p>Sección de Candidatos e Incorporación Continua.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
