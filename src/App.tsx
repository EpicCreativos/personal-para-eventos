import React, { useState, useEffect, useRef } from "react";
import ServicesPage from "./components/ServicesPage";
import HomePage from "./components/HomePage";
import HistoryPage from "./components/HistoryPage";
import AzafatasPage from "./components/AzafatasPage";
import CamarerosPage from "./components/CamarerosPage";
import CocinerosPage from "./components/CocinerosPage";
import CoctelerosPage from "./components/CoctelerosPage";
import MontadoresPage from "./components/MontadoresPage";
import AuxiliaresPage from "./components/AuxiliaresPage";
import AcademyPage from "./components/AcademyPage";
import TrabajaConNosotrosPage from "./components/TrabajaConNosotrosPage";
import BlogPage from "./components/BlogPage";
import SolicitaPresupuestoPage from "./components/SolicitaPresupuestoPage";
import ContactoPage from "./components/ContactoPage";
import PrivacidadPage from "./components/PrivacidadPage";
import CookiesPage from "./components/CookiesPage";
import AccesibilidadPage from "./components/AccesibilidadPage";
import {
  Users,
  Award,
  Sparkles,
  Clock,
  HeartHandshake,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChefHat,
  GlassWater,
  Wrench,
  ShieldCheck,
  Calendar,
  Briefcase,
  FileText,
  Upload,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileSpreadsheet,
  AlertCircle
} from "lucide-react";

// Types
interface ServiceProfile {
  id: string;
  title: string;
  description: string;
  detailText: string;
  hourlyRate: number;
  microAccent: "cyan" | "magenta" | "yellow" | "violet";
  accentColorClass: string;
  bgAccentClass: string;
  icon: React.ReactNode;
  imageUrl: string;
}

interface BudgetStaffItem {
  id: string;
  qty: number;
  hours: number;
}

export default function App() {
  // Navigation & UI States
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "services"
    | "history"
    | "azafatas"
    | "camareros"
    | "cocineros"
    | "cocteleros"
    | "montadores"
    | "auxiliares"
    | "academy"
    | "trabaja-con-nosotros"
    | "blog"
    | "solicita-presupuesto"
    | "contacto"
  >("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const closeMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 350);
  };

  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isAcademyModalOpen, setIsAcademyModalOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceProfile | null>(null);

  // Helper smooth navigation across views/sections
  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page as any);
    setMobileMenuOpen(false);

    // Map page state to actual HTML path for browser address bar sync
    let htmlPath = "index.html";
    if (page === "home") htmlPath = "index.html";
    else if (page === "history") htmlPath = "nuestra-historia.html";
    else if (page === "services") htmlPath = "servicios.html";
    else if (page === "azafatas") htmlPath = "azafatas.html";
    else if (page === "camareros") htmlPath = "camareros.html";
    else if (page === "cocineros") htmlPath = "cocineros.html";
    else if (page === "cocteleros") htmlPath = "cocteleros.html";
    else if (page === "montadores") htmlPath = "montadores.html";
    else if (page === "auxiliares") htmlPath = "auxiliares.html";
    else if (page === "academy") htmlPath = "academy.html";
    else if (page === "trabaja-con-nosotros") htmlPath = "trabaja-con-nosotros.html";
    else if (page === "blog") htmlPath = "blog.html";
    else if (page === "solicita-presupuesto") htmlPath = "solicita-presupuesto.html";
    else if (page === "contacto") htmlPath = "contacto.html";
    else if (page === "privacy") htmlPath = "politica-de-privacidad.html";
    else if (page === "cookies") htmlPath = "politica-de-cookies.html";
    else if (page === "accessibility") htmlPath = "declaracion-de-accesibilidad.html";

    window.history.pushState({}, "", "/" + htmlPath);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Budget Calculator State
  const [budgetStaff, setBudgetStaff] = useState<Record<string, BudgetStaffItem>>({
    azafatas: { id: "azafatas", qty: 2, hours: 8 },
    camareros: { id: "camareros", qty: 1, hours: 6 },
    cocineros: { id: "cocineros", qty: 0, hours: 6 },
    cocteleros: { id: "cocteleros", qty: 0, hours: 6 },
    montadores: { id: "montadores", qty: 0, hours: 8 },
    auxiliares: { id: "auxiliares", qty: 0, hours: 8 },
  });

  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isBudgetSubmitted, setIsBudgetSubmitted] = useState(false);

  // Apply Candidate Form State
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [candidatePosition, setCandidatePosition] = useState("azafatas");
  const [candidateBio, setCandidateBio] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isApplySubmitted, setIsApplySubmitted] = useState(false);

  // Validation Error States (to bypass window.alert)
  const [budgetFormError, setBudgetFormError] = useState<string | null>(null);
  const [applyFormError, setApplyFormError] = useState<string | null>(null);

  // Handle scroll trigger and Dynamic URL Route parsing
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Dynamic Multi-Page Router for *.html paths
    const path = window.location.pathname;
    const pageName = path.substring(path.lastIndexOf("/") + 1);
    
    if (pageName === "nuestra-historia.html") {
      setCurrentPage("history");
    } else if (pageName === "servicios.html") {
      setCurrentPage("services");
    } else if (pageName === "azafatas.html") {
      setCurrentPage("azafatas");
    } else if (pageName === "camareros.html") {
      setCurrentPage("camareros");
    } else if (pageName === "cocineros.html") {
      setCurrentPage("cocineros");
    } else if (pageName === "cocteleros.html") {
      setCurrentPage("cocteleros");
    } else if (pageName === "montadores.html") {
      setCurrentPage("montadores");
    } else if (pageName === "auxiliares.html") {
      setCurrentPage("auxiliares");
    } else if (pageName === "academy.html") {
      setCurrentPage("academy");
    } else if (pageName === "trabaja-con-nosotros.html") {
      setCurrentPage("trabaja-con-nosotros");
    } else if (pageName === "blog.html") {
      setCurrentPage("blog");
    } else if (pageName === "solicita-presupuesto.html") {
      setCurrentPage("solicita-presupuesto");
    } else if (pageName === "contacto.html" || pageName === "contacto") {
      setCurrentPage("contacto");
    } else if (pageName === "index.html") {
      setCurrentPage("home");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Services definitions (Bento Grid Cards with specific microaccent colors)
  const services: ServiceProfile[] = [
    {
      id: "azafatas",
      title: "Azafatas",
      description: "Azafatas de Congresos, Multilingües, Azafatas de Promoción, Azafatas de Imagen, y Azafatas de Ferias y Exposiciones. ¡Consúltanos!",
      detailText: "Nuestras azafatas son profesionales multilingües formadas en protocolo, relaciones públicas y atención institucional. Proporcionan un soporte excelente para acreditaciones, guiado de visitas, atención de autoridades, congresos sectoriales, lanzamientos de marca y ferias comerciales de alta gama.",
      hourlyRate: 19,
      microAccent: "cyan",
      accentColorClass: "#00EAEA",
      bgAccentClass: "bg-[#00EAEA]/10 text-[#008d9e]",
      icon: <Users className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/personal-para-eventos-foto-1_0038_Azafatxs-60.jpg"
    },
    {
      id: "cocineros",
      title: "Cocineros",
      description: "Un equipo cocineros expertos y ayudantes de cocina se dedica a preparar platos exquisitos, desarrollar el menú y mucho más.",
      detailText: "Nuestros cocineros profesionales aportan excelencia gastronómica, dominio técnico, versatilidad culinaria y rigurosa puntualidad con uniformidad impecable. Especializados en alta cocina corporativa, buffets, bandejas pasadas y catering gourmet.",
      hourlyRate: 22,
      microAccent: "yellow",
      accentColorClass: "#FFF312",
      bgAccentClass: "bg-[#FFF312]/20 text-[#a39400]",
      icon: <ChefHat className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/11.jpeg"
    },
    {
      id: "camareros",
      title: "Camareros",
      description: "Ofrecemos una variedad de servicios de camareros, desde expertos en servicio de barra y cóctel hasta Camareros de Imagen. ¡Consúltanos!",
      detailText: "Camareros con formación superior de sala, barra y protocolo premium. Dominio impecable del pase de bandeja, servicios VIP de cóctel y banquete multinivel, asegurando una atención al comensal fluida, proactiva y distinguida.",
      hourlyRate: 18,
      microAccent: "magenta",
      accentColorClass: "#FF57DF",
      bgAccentClass: "bg-[#FF57DF]/10 text-[#c22e9e]",
      icon: <GlassWater className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/personal-para-eventos-foto-1_0035_CAMAREROS%202.jpg"
    },
    {
      id: "cocteleros",
      title: "Cocteleros",
      description: "Experiencia en coctelería premium para todo tipo de eventos. Mixología creativa, personalización de carta y una presentación visualmente impactante que será la estrella de tu evento.",
      detailText: "Cocteleros de élite especializados en mixología fina, barras libres temáticas y espectáculos de coctelería acrobática (flair bartending). Desarrollan menús adaptados y cócteles de autor de impacto con un dinamismo impecable.",
      hourlyRate: 21,
      microAccent: "violet",
      accentColorClass: "#A64ECE",
      bgAccentClass: "bg-[#A64ECE]/10 text-[#A64ECE]",
      icon: <GlassWater className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/4.jpeg"
    },
    {
      id: "montadores",
      title: "Montadores",
      description: "Montadores para crear experiencias únicas con un equipo dedicado que supera expectativas, mozos, especialistas, etc. ¡Consúltanos!",
      detailText: "Especialistas de montaje altamente cualificados en infraestructuras escénicas, colocación de moquetas, stands, trussing, mozos de carga/descarga y soporte logístico inmediato. Ofrecen soporte ágil pre y post-evento bajo exigentes estándares de seguridad y salud.",
      hourlyRate: 18,
      microAccent: "yellow",
      accentColorClass: "#FFF312",
      bgAccentClass: "bg-[#FFF312]/20 text-[#a39400]",
      icon: <Wrench className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/12.jpeg"
    },
    {
      id: "auxiliares",
      title: "AUXILIARES",
      description: "Personal auxiliar para control de accesos, pulsereros, gestión de ropero, chóferes, aparcacoches, personal de limpieza, manipuladores…",
      detailText: "Personal operativo polivalente para tareas esenciales de respaldo en eventos corporativos y masivos. Cubrimos control de accesos seguro, colocación veloz de pulseras de acreditación, roperos fluidos, conductores ejecutivos, y personal proactivo de mantenimiento e higiene.",
      hourlyRate: 16,
      microAccent: "cyan",
      accentColorClass: "#00EAEA",
      bgAccentClass: "bg-[#00EAEA]/10 text-[#008d9e]",
      icon: <ShieldCheck className="w-6 h-6 stroke-[2]" />,
      imageUrl: "/images/14.jpeg"
    }
  ];

  // Methodology items containing details
  const methodologies = [
    {
      id: "presencia",
      title: "IMAGEN",
      subtitle: "Estética y Presencia Impecable",
      description: "En Personal Para Eventos entendemos que la estética es esencial para tu éxito. Nuestro equipo de azafatas, camareros o auxiliares se presentará completamente uniformado. Su impecable presentación garantizará que cada invitado se sienta bienvenido y disfrute de una experiencia memorable desde que ponga un pie en el evento.",
      image: "/images/3.jpeg",
      accent: "cyan",
      badge: "Sello de Imagen"
    },
    {
      id: "flexibilidad",
      title: "FLEXIBILIDAD",
      subtitle: "Reacción ágil ante imprevistos",
      description: "Sabemos que los eventos pueden ser impredecibles y que surgen cambios de último momento. Nuestro personal está entrenado para ser altamente adaptable, capaz de enfrentar cualquier situación con calma y profesionalidad. Puedes confiar en que nuestro equipo se ajustará a las necesidades cambiantes y garantizará que todo fluya sin problemas, permitiéndote disfrutar de tu evento sin preocupaciones.",
      image: "/images/2-a.jpeg",
      accent: "magenta",
      badge: "Adaptabilidad 24/7"
    },
    {
      id: "calidad-precio",
      title: "CALIDAD Y PRECIO",
      subtitle: "Tarifas honestas con personal de excelencia",
      description: "Valoramos tu inversión; entendemos la importancia de obtener el máximo rendimiento de cada euro gastado en tu evento. Nuestro enfoque es brindarte un servicio premium que se ajuste a tu presupuesto sin comprometer la excelencia y la satisfacción de tus invitados. No sacrifiques la calidad por el precio, ni viceversa. Con Personal para Eventos, obtendrás un servicio de calidad, a un precio justo y asequible.",
      image: "/images/5-a.jpeg",
      accent: "yellow",
      badge: "Valor Excepcional"
    },
    {
      id: "coordinacion",
      title: "COORDINACIÓN",
      subtitle: "Sinergia total con proveedores",
      description: "En Personal para Eventos, creemos en la importancia de la colaboración y la coordinación efectiva con otros proveedores de tu evento. Nuestro equipo trabajará de la mano con todos los involucrados para garantizar un flujo perfecto en cada etapa de la celebración. Nos comunicaremos activamente contigo y con los demás proveedores para asegurarnos de que todo esté en sintonía y que tu evento sea un éxito total en todos los aspectos.",
      image: "/images/6-a.jpeg",
      accent: "violet",
      badge: "Coordinación Perfecta"
    },
    {
      id: "detalle",
      title: "DETALLE",
      subtitle: "Atención exhaustiva al micromomento",
      description: "¡No permitas que los detalles pasen desapercibidos! Con Personal para Eventos, cada aspecto de tu evento será perfeccionado con pasión y compromiso. Déjanos anticiparnos a tus necesidades y a las de tus invitados llevando la atención al detalle a tu evento, y convertirlo en un momento que se grabará en la memoria de tus invitados para siempre. Contáctanos ahora y déjanos hacer de tu celebración un auténtico sueño hecho realidad.",
      image: "/images/7.jpeg",
      accent: "cyan",
      badge: "Obsesión por el Detalle"
    }
  ];

  // FAQs Accordion Data
  const faqs = [
    {
      question: "¿Qué servicios ofrece Personal Para Eventos?",
      answer: "Nuestra agencia ofrece una amplia gama de servicios para eventos, incluyendo la contratación de azafatas, camareros, auxiliares, montadores, mozos, carpinteros, cocteleros… altamente capacitados y profesionales."
    },
    {
      question: "¿Cómo seleccionan y capacitan a su personal para eventos?",
      answer: "Nuestro proceso de selección es riguroso y se centra en encontrar candidatos con experiencia, habilidades comunicativas y un enfoque en la atención al detalle. Una vez seleccionados, nuestro personal recibe capacitación continua para garantizar que ofrezcan un servicio de la más alta calidad."
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
      question: "¿Cómo se maneja la logística del personal en el día del evento?",
      answer: "Nuestro equipo de coordinadores se encargará de toda la logística para garantizar que nuestro personal llegue puntualmente, esté debidamente uniformado y esté preparado para brindar un servicio excepcional durante todo el evento."
    },
    {
      question: "¿Qué tipos de eventos pueden ser atendidos por su personal?",
      answer: "Nuestro equipo de profesionales está preparado para atender todo tipo de eventos, desde aniversarios corporativos, ferias y exposiciones, hasta fiestas privadas y eventos sociales. No hay evento demasiado grande ni pequeño. Hay tu evento, y es perfecto."
    },
    {
      question: "¿Cuál es la cobertura geográfica de su agencia?",
      answer: "Nuestra agencia ofrece sus servicios en todo el territorio español."
    },
    {
      question: "¿Cuál es su política de cancelación y reembolso?",
      answer: "Nuestra política de cancelación y reembolso varía según el tipo de evento y la antelación con que se realice la cancelación. Para obtener información detallada sobre esto, te recomendamos comunicarte con nuestro equipo de atención al cliente."
    },
    {
      question: "¿Ofrecen opciones personalizadas para eventos temáticos o especiales?",
      answer: "Absolutamente, nos especializamos en ofrecer soluciones a medida para cada evento. Si tienes un evento temático o especial en mente, nuestro equipo trabajará contigo para adaptar nuestros servicios a tus necesidades específicas."
    },
    {
      question: "¿Cómo podemos contactar a su agencia para obtener más información o solicitar una cotización?",
      answer: "Puedes contactarnos a través de nuestro sitio web www.personalparaeventos.com o por teléfono al 913568878. Estamos encantados de responder a tus preguntas y proporcionarte una cotización personalizada para tu próximo evento."
    }
  ];

  // Scroll to section helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    } else {
      // If we are on services page, redirect to home first to find the section
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 150);
    }
  };

  // Budget calculations
  const calculateBudgetDetails = () => {
    let rawTotal = 0;
    let totalHours = 0;

    (Object.entries(budgetStaff) as Array<[string, BudgetStaffItem]>).forEach(([key, value]) => {
      const profile = services.find((p) => p.id === key);
      if (profile && value.qty > 0 && value.hours > 0) {
        rawTotal += value.qty * value.hours * profile.hourlyRate;
        totalHours += value.qty * value.hours;
      }
    });

    // Discount based on total volume
    let discountPercent = 0;
    if (totalHours >= 80) {
      discountPercent = 0.15; // 15% discount
    } else if (totalHours >= 30) {
      discountPercent = 0.10; // 10% discount
    }

    const discountAmount = rawTotal * discountPercent;
    const baseTotal = rawTotal - discountAmount;
    const taxes = baseTotal * 0.21; // 21% VAT
    const finalTotal = baseTotal + taxes;

    return {
      rawTotal,
      totalHours,
      discountPercent: discountPercent * 100,
      discountAmount,
      baseTotal,
      taxes,
      finalTotal,
    };
  };

  const budgetStats = calculateBudgetDetails();

  const handleQtyChange = (id: string, delta: number) => {
    setBudgetStaff((prev) => {
      const item = prev[id];
      const newQty = Math.max(0, item.qty + delta);
      return {
        ...prev,
        [id]: { ...item, qty: newQty },
      };
    });
  };

  const handleHoursChange = (id: string, delta: number) => {
    setBudgetStaff((prev) => {
      const item = prev[id];
      const newHours = Math.max(4, item.hours + delta); // Minimum 4 hours
      return {
        ...prev,
        [id]: { ...item, hours: newHours },
      };
    });
  };

  // Simulated CV file upload
  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      setIsUploading(true);
      setUploadProgress(10);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 30;
        });
      }, 200);
    }
  };

  // Submit Budget Handler
  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) {
      setBudgetFormError("Por favor, rellena todos los datos de contacto requeridos.");
      return;
    }
    setBudgetFormError(null);
    setIsBudgetSubmitted(true);
  };

  // Submit Candidate Form Handler
  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !candidatePhone || !uploadedFileName) {
      setApplyFormError("Por favor, rellena los datos de contacto y sube tu Curriculum Vitae.");
      return;
    }
    setApplyFormError(null);
    setIsApplySubmitted(true);
  };

  // Quick reset budget helper
  const resetBudget = () => {
    setBudgetStaff({
      azafatas: { id: "azafatas", qty: 2, hours: 8 },
      camareros: { id: "camareros", qty: 1, hours: 6 },
      cocineros: { id: "cocineros", qty: 0, hours: 6 },
      cocteleros: { id: "cocteleros", qty: 0, hours: 6 },
      montadores: { id: "montadores", qty: 0, hours: 8 },
      auxiliares: { id: "auxiliares", qty: 0, hours: 8 },
    });
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setEventDate("");
    setEventLocation("");
    setBudgetFormError(null);
    setIsBudgetSubmitted(false);
  };

  const resetCandidateForm = () => {
    setCandidateName("");
    setCandidateEmail("");
    setCandidatePhone("");
    setCandidatePosition("azafatas");
    setCandidateBio("");
    setUploadedFileName(null);
    setUploadProgress(0);
    setApplyFormError(null);
    setIsApplySubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased relative selection:bg-[#A64ECE]/20 selection:text-[#A64ECE]">
      {/* BACKGROUND DECORATIVE BLOBS (60-30-10 Design Strategy with animations) */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#00EAEA]/12 blur-3xl pointer-events-none animate-artistic-float" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] rounded-full bg-[#FF57DF]/8 blur-3xl pointer-events-none animate-artistic-pulse" />
      <div className="absolute top-2/3 right-5 w-96 h-96 rounded-full bg-[#FFF312]/8 blur-3xl pointer-events-none animate-artistic-float" style={{ animationDelay: "2s" }} />
      
      {/* STICKY HEADER */}
      <header
        id="header-nav"
        className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${
          scrolled
            ? "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.04)] border-b border-gray-100 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[80%] max-w-none mx-auto flex items-center justify-between relative">
          
          {/* Logo Brand area with ONLY graphic logo as requested */}
          <a
            id="brand-logo"
            href="index.html"
            className="flex items-center cursor-pointer select-none group"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("home");
            }}
          >
            <img
              src="/images/personal-para-eventos-logo.png"
              alt="Personal para Eventos Logo"
              className="h-[60px] sm:h-[72px] w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-menu" className="hidden lg:flex items-center gap-8">
            <a
              href="index.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "home" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              INICIO
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#00EAEA] transition-all duration-300 ${
                currentPage === "home" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
            
            <a
              href="nuestra-historia.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("history");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "history" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              NUESTRA HISTORIA
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#FF57DF] transition-all duration-300 ${
                currentPage === "history" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
            
            {/* SERVICES Mega Menu Wrapper Container */}
            <div
              className=""
              onMouseEnter={openMegaMenu}
              onMouseLeave={closeMegaMenu}
            >
              <a
                href="servicios.html"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("services");
                }}
                className={`group text-sm font-bold transition-colors flex items-center gap-1 py-1 cursor-pointer select-none focus:outline-none ${
                  currentPage === "services" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
                }`}
              >
                SERVICIOS
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? "rotate-180 text-[#A64ECE]" : "text-gray-400"}`} />
                <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#FFF312] transition-all duration-300 ${
                  currentPage === "services" ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>

              {/* MEGA MENU DESPLEGABLE */}
              {megaMenuOpen && (
                <div
                  className={`fixed left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.04)] z-50 animate-in fade-in slide-in-from-top-3 duration-300 ${
                    scrolled ? "top-[88px] sm:top-[104px]" : "top-[104px] sm:top-[120px]"
                  }`}
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenu}
                >
                  <div className="max-w-[1200px] mx-auto px-6 py-8 relative">
                    {/* Visual background blurred stains inside Mega Menu */}
                    <div className="absolute top-4 right-10 w-48 h-48 rounded-full bg-[#00EAEA]/8 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-4 left-10 w-48 h-48 rounded-full bg-[#FF57DF]/8 blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                      
                      {/* Column 1 */}
                      <div className="flex flex-col gap-4">
                        {/* AZAFATAS */}
                        <a
                          href="azafatas.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("azafatas");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#00EAEA]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00EAEA]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-colors tracking-wide uppercase">
                              AZAFATAS
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Congresos, Multilingües, Promoción, Imagen, Ferias y Exposiciones.
                          </p>
                        </a>

                        {/* CAMAREROS */}
                        <a
                          href="camareros.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("camareros");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#FF57DF]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF57DF]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-colors tracking-wide uppercase">
                              CAMAREROS
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Servicios de barra, cóctel, coffee break y camareros de sala.
                          </p>
                        </a>
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-4">
                        {/* COCINEROS */}
                        <a
                          href="cocineros.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("cocineros");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#FFF312]/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFF312]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-colors tracking-wide uppercase">
                              COCINEROS
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Cocineros expertos y ayudantes de cocina para menús personalizados.
                          </p>
                        </a>

                        {/* COCTELEROS */}
                        <a
                          href="cocteleros.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("cocteleros");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#A64ECE]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#A64ECE]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-colors tracking-wide uppercase">
                              COCTELEROS
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Coctelería premium, mixología creativa y personalización de carta.
                          </p>
                        </a>
                      </div>

                      {/* Column 3 */}
                      <div className="flex flex-col gap-4">
                        {/* MONTADORES */}
                        <a
                          href="montadores.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("montadores");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#00EAEA]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00EAEA]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-colors tracking-wide uppercase">
                              MONTADORES
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Mozos de carga, auxiliares de montaje, carpinteros y electricistas.
                          </p>
                        </a>

                        {/* AUXILIARES */}
                        <a
                          href="auxiliares.html"
                          onClick={(e) => {
                            e.preventDefault();
                            setMegaMenuOpen(false);
                            navigateTo("auxiliares");
                          }}
                          className="bg-gray-50/50 hover:bg-white p-5 rounded-[24px] border border-gray-100/50 hover:border-[#FF57DF]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group block text-left"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF57DF]" />
                            <h4 className="font-display font-black text-sm text-[#333333] group-hover:text-[#A64ECE] transition-all tracking-wide uppercase">
                              AUXILIARES
                            </h4>
                          </div>
                          <p className="text-xs text-[#555555] leading-relaxed font-normal">
                            Control de accesos, pulsereros, gestión de ropero, chóferes y limpieza.
                          </p>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="academy.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("academy");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "academy" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              ACADEMY
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#A64ECE] transition-all duration-300 ${
                currentPage === "academy" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
            
            <a
              href="trabaja-con-nosotros.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("trabaja-con-nosotros");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "trabaja-con-nosotros" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              TRABAJA CON NOSOTROS
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#00EAEA] transition-all duration-300 ${
                currentPage === "trabaja-con-nosotros" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
            
            <a
              href="blog.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("blog");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "blog" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              BLOG
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#FF57DF] transition-all duration-300 ${
                currentPage === "blog" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>

            <a
              href="contacto.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("contacto");
              }}
              className={`group relative text-sm font-bold transition-colors py-1 cursor-pointer ${
                currentPage === "contacto" ? "text-[#A64ECE]" : "text-[#555555] hover:text-[#A64ECE]"
              }`}
            >
              CONTACTO
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#FFF312] transition-all duration-300 ${
                currentPage === "contacto" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
          </nav>

          {/* Header CTA Right Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-cta-button"
              href="solicita-presupuesto.html"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("solicita-presupuesto");
              }}
              className="bg-[#A64ECE] text-white hover:scale-105 hover:bg-[#933fd1] transition-all duration-300 px-6 py-3 rounded-full text-sm font-bold select-none cursor-pointer tracking-wide shadow-sm block text-center"
            >
              SOLICITA PRESUPUESTO
            </a>
          </div>

          {/* Mobile Menu Button hambu */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#333333] hover:text-[#A64ECE] transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6 animate-pulse" />
          </button>
        </div>

        {/* Mobile Navigation Off-canvas Sidebar */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer-overlay"
            className="fixed inset-0 bg-[#333333]/40 backdrop-blur-sm z-50 lg:hidden flex justify-end animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="bg-white w-[85vw] max-w-[380px] h-full shadow-[0_0_50px_rgba(0,0,0,0.1)] flex flex-col justify-between p-8 relative overflow-y-auto animate-in slide-in-from-right duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside Mobile Menu */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="font-display font-black text-lg text-[#333333]">
                  MENÚ <span className="text-[#A64ECE]">AGENCIA</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#333333] transition-colors cursor-pointer focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links list */}
              <div className="flex-grow flex flex-col gap-5 overflow-y-auto pr-1">
                <button
                  onClick={() => {
                    navigateTo("home");
                  }}
                  className="text-left font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] flex items-center gap-3 transition-colors py-1 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                  INICIO
                </button>

                <button
                  onClick={() => {
                    navigateTo("history");
                  }}
                  className={`text-left font-display font-extrabold text-base flex items-center gap-3 transition-colors py-1 cursor-pointer ${
                    currentPage === "history" ? "text-[#A64ECE]" : "text-[#333333] hover:text-[#A64ECE]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                  NUESTRA HISTORIA
                </button>

                {/* Collapsible Accordion for Services */}
                <div className="border-y border-gray-100 py-3">
                  <button
                    onClick={() => {
                      setMobileServicesOpen(!mobileServicesOpen);
                      navigateTo("services");
                    }}
                    className="w-full flex items-center justify-between font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] transition-colors py-1 focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
                      SERVICIOS
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#A64ECE]" : ""}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-1 mt-3 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                      
                      {/* Services column items */}
                      <button
                        onClick={() => {
                          navigateTo("azafatas");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#00EAEA] rounded-full" />
                          AZAFATAS
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Congresos, Multilingües, Promoción, Imagen, Ferias y Exposiciones.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          navigateTo("camareros");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#FF57DF] rounded-full" />
                          CAMAREROS
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Servicios de barra, cóctel, coffee break y camareros de sala.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigateTo("cocineros");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#FFF312] rounded-full" />
                          COCINEROS
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Cocineros expertos y ayudantes de cocina para menús personalizados.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigateTo("cocteleros");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#A64ECE] rounded-full" />
                          COCTELEROS
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Coctelería premium, mixología creativa y personalización de carta.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigateTo("montadores");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#00EAEA] rounded-full" />
                          MONTADORES
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Mozos de carga, auxiliares de montaje, carpinteros y electricistas.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigateTo("auxiliares");
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-extrabold text-xs text-[#333333] group-hover:text-[#A64ECE] flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#FF57DF] rounded-full" />
                          AUXILIARES
                        </div>
                        <p className="text-[11px] text-[#555555] mt-0.5 leading-tight font-normal">
                          Control de accesos, pulsereros, gestión de ropero, chóferes y limpieza.
                        </p>
                      </button>

                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo("academy");
                  }}
                  className="text-left font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] flex items-center gap-3 transition-colors py-1 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A64ECE]" />
                  ACADEMY
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo("trabaja-con-nosotros");
                  }}
                  className="text-left font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] flex items-center gap-3 transition-colors py-1 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                  TRABAJA CON NOSOTROS
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo("blog");
                  }}
                  className="text-left font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] flex items-center gap-3 transition-colors py-1 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                  BLOG
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo("contacto");
                  }}
                  className="text-left font-display font-extrabold text-base text-[#333333] hover:text-[#A64ECE] flex items-center gap-3 transition-colors py-1 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
                  CONTACTO
                </button>
              </div>

              {/* ALWAYS visual CTA button at the bottom for conversion */}
              <div className="pt-6 border-t border-gray-100 flex flex-col items-stretch">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateTo("solicita-presupuesto");
                  }}
                  className="w-full bg-[#A64ECE] text-white py-4 rounded-full text-center text-sm font-black tracking-wide shadow-sm hover:bg-[#933fd1] active:translate-y-0.5 transition-all duration-300"
                >
                  SOLICITA PRESUPUESTO
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {currentPage === "home" ? (
        <HomePage
          services={services}
          methodologies={methodologies}
          faqs={faqs}
          activeFaqIndex={activeFaqIndex}
          setActiveFaqIndex={setActiveFaqIndex}
          setSelectedService={setSelectedService}
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsBudgetSubmitted={setIsBudgetSubmitted}
          setIsApplyModalOpen={setIsApplyModalOpen}
          setIsApplySubmitted={setIsApplySubmitted}
          setIsAcademyModalOpen={setIsAcademyModalOpen}
          scrollTo={scrollTo}
          navigateTo={navigateTo}
        />
      ) : currentPage === "services" ? (
        <ServicesPage
          services={services}
          setSelectedService={setSelectedService}
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setBudgetStaff={setBudgetStaff}
          navigateTo={navigateTo}
        />
      ) : currentPage === "azafatas" ? (
        <AzafatasPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "camareros" ? (
        <CamarerosPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "cocineros" ? (
        <CocinerosPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "cocteleros" ? (
        <CoctelerosPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "montadores" ? (
        <MontadoresPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "auxiliares" ? (
        <AuxiliaresPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
          setBudgetStaff={setBudgetStaff}
        />
      ) : currentPage === "academy" ? (
        <AcademyPage
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
        />
      ) : currentPage === "trabaja-con-nosotros" ? (
        <TrabajaConNosotrosPage
          setIsApplyModalOpen={setIsApplyModalOpen}
          navigateTo={navigateTo}
        />
      ) : currentPage === "blog" ? (
        <BlogPage
          setIsApplyModalOpen={setIsApplyModalOpen}
        />
      ) : currentPage === "solicita-presupuesto" ? (
        <SolicitaPresupuestoPage
          initialStaffState={budgetStaff}
        />
      ) : currentPage === "contacto" ? (
        <ContactoPage
          navigateTo={navigateTo}
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
        />
      ) : currentPage === "privacy" ? (
        <PrivacidadPage />
      ) : currentPage === "cookies" ? (
        <CookiesPage />
      ) : currentPage === "accessibility" ? (
        <AccesibilidadPage />
      ) : (
        <HistoryPage
          setIsBudgetModalOpen={setIsBudgetModalOpen}
          setIsApplyModalOpen={setIsApplyModalOpen}
        />
      )}

      {/* PORTFOLIO MODAL (Servicios Details) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] max-w-xl w-full p-8 sm:p-10 shadow-2xl border border-gray-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Corner Decorative Micro accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                selectedService.microAccent === "cyan"
                  ? "from-[#00EAEA] via-cyan-400 to-emerald-400"
                  : selectedService.microAccent === "magenta"
                  ? "from-[#FF57DF] via-pink-400 to-[#A64ECE]"
                  : selectedService.microAccent === "yellow"
                  ? "from-[#FFF312] via-yellow-400 to-orange-400"
                  : "from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]"
              }`}
            />

            <button
              id="close-service-modal"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-[#333333] hover:text-[#A64ECE] hover:bg-gray-200 transition-all focus:outline-none"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile banner */}
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-6 mt-2">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedService.bgAccentClass}`}>
                {selectedService.icon}
              </div>
              <h3 className="font-display font-black text-2xl text-[#333333]">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-base text-[#555555] font-normal leading-relaxed mb-6">
              {selectedService.detailText}
            </p>

            <div className="bg-gray-50 rounded-2xl p-4 mb-8 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-0.5">
                  Tarifa base estimada
                </span>
                <span className="text-2xl font-black font-display text-[#333333]">
                  {selectedService.hourlyRate}€ <span className="text-sm font-medium text-[#555555]">/ hora</span>
                </span>
              </div>
              
              <div className="text-right">
                <span className="text-xs bg-[#A64ECE]/10 text-[#A64ECE] font-bold px-3 py-1 rounded-full text-center">
                  100% legal garantizado
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  // Direct select this in budget staff calculation as default
                  setBudgetStaff((prev) => ({
                    ...prev,
                    [selectedService.id]: {
                      ...prev[selectedService.id],
                      qty: prev[selectedService.id].qty === 0 ? 1 : prev[selectedService.id].qty,
                    },
                  }));
                  setSelectedService(null);
                  setIsBudgetModalOpen(true);
                  setIsBudgetSubmitted(false);
                }}
                className="flex-1 bg-[#A64ECE] text-white py-4 rounded-full text-center font-bold hover:opacity-90 hover:shadow-md transition-all select-none"
              >
                Simular Presupuesto Con Este Perfil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE BUDGET ESTIMATOR SLIDE-OVER (SLIDE-IN MODAL) */}
      {isBudgetModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/65 backdrop-blur-sm flex justify-end p-0 sm:p-4 animate-in fade-in duration-200">
          
          {/* Main draw card */}
          <div
            id="budget-calculator-panel"
            className="bg-white w-full max-w-2xl h-full rounded-none sm:rounded-[32px] shadow-2xl overflow-y-auto flex flex-col justify-between relative relative animate-in slide-in-from-right duration-300 border-l border-gray-100"
          >
            {/* Top Close */}
            <div className="border-b border-gray-100 p-6 flex justify-between items-center sticky top-0 bg-white z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#A64ECE] flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#333333]">
                  Configurador de Personal
                </h3>
              </div>
              <button
                id="close-budget-modal"
                onClick={() => setIsBudgetModalOpen(false)}
                className="p-2 rounded-full bg-gray-100 text-[#333333] hover:text-[#A64ECE] transition-colors"
                aria-label="Cerrar configurador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner dynamic estimator content */}
            {!isBudgetSubmitted ? (
              <form onSubmit={handleBudgetSubmit} className="flex-1 p-6 sm:p-8 flex flex-col gap-8">
                
                {/* Step 1 Profile configuration */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h4 className="font-display text-sm font-black text-[#333333] uppercase tracking-wider">
                      Selecciona y Ajusta la Cantidad de Staff
                    </h4>
                  </div>

                  <p className="text-xs text-gray-400 mb-6 font-mono">
                    Establecemos un mínimo legal de 4 horas por evento por persona.
                  </p>

                  <div className="flex flex-col gap-4">
                    {services.map((p) => {
                      const value = budgetStaff[p.id] || { qty: 0, hours: 4 };

                      return (
                        <div
                          key={p.id}
                          className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          {/* Profile Descriptor Name */}
                          <div className="flex items-center gap-3">
                            <span className="p-2.5 rounded-lg bg-white shadow-xs text-gray-500">
                              {p.icon}
                            </span>
                            <div>
                              <span className="font-bold text-sm sm:text-base text-[#333333] block">
                                {p.title}
                              </span>
                              <span className="text-xs text-gray-400 font-mono">
                                Base: {p.hourlyRate}€ / h
                              </span>
                            </div>
                          </div>

                          {/* Adjustment widgets with state hooks */}
                          <div className="flex items-center gap-6 justify-between sm:justify-end">
                            
                            {/* Quantity Controls */}
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                                Personal
                              </span>
                              <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-xs">
                                <button
                                  type="button"
                                  onClick={() => handleQtyChange(p.id, -1)}
                                  className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-[#333333] font-bold text-sm focus:outline-none"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center font-mono font-bold text-sm text-[#333333]">
                                  {value.qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleQtyChange(p.id, 1)}
                                  className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-[#333333] font-bold text-sm focus:outline-none"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Hours Controls */}
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                                Horas
                              </span>
                              <div className={`flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-xs ${value.qty === 0 ? "opacity-50 pointer-events-none" : ""}`}>
                                <button
                                  type="button"
                                  onClick={() => handleHoursChange(p.id, -1)}
                                  className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-[#333333] font-bold text-sm focus:outline-none"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center font-mono font-bold text-sm text-[#333333]">
                                  {value.qty === 0 ? 0 : value.hours}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleHoursChange(p.id, 1)}
                                  className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-[#333333] font-bold text-sm focus:outline-none"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 Dynamic Price Calculation Realtime representation */}
                <div className="bg-[#A64ECE]/5 border border-[#A64ECE]/15 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4 border-b border-[#A64ECE]/10 pb-4">
                    <span className="font-display font-extrabold text-sm text-[#333333]">
                      DESGLOSE ESTIMADO DE TARIFAS
                    </span>
                    <span className="font-mono text-xs text-gray-500 font-semibold bg-white border px-2.5 py-1 rounded-full">
                      Total horas: {budgetStats.totalHours}h
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-[#555555] font-mono">
                    <div className="flex justify-between">
                      <span>Total Base Bruto:</span>
                      <span className="font-bold">{budgetStats.rawTotal.toFixed(2)}€</span>
                    </div>

                    {budgetStats.discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Descuento Volumen ({budgetStats.discountPercent}%):</span>
                        <span className="font-bold">-{budgetStats.discountAmount.toFixed(2)}€</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Base Imponible:</span>
                      <span className="font-bold">{budgetStats.baseTotal.toFixed(2)}€</span>
                    </div>

                    <div className="flex justify-between">
                      <span>IVA (21%):</span>
                      <span className="font-bold">{budgetStats.taxes.toFixed(2)}€</span>
                    </div>

                    <div className="flex justify-between border-t border-[#A64ECE]/15 pt-3 mt-2 text-base text-[#333333]">
                      <span className="font-bold">Total Final Estimado:</span>
                      <span className="text-xl font-black text-[#A64ECE]">
                        {budgetStats.finalTotal.toFixed(2)}€
                      </span>
                    </div>
                  </div>

                  {/* Volume discount helper tags */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#A64ECE]/10 grid grid-cols-2 gap-2 text-center text-[11px] font-mono">
                    <div className={`p-2 rounded-lg ${budgetStats.totalHours >= 30 ? "bg-emerald-50 text-emerald-700 font-bold" : "bg-gray-100 text-gray-400"}`}>
                      &gt;30h en total (10% Desc.)
                    </div>
                    <div className={`p-2 rounded-lg ${budgetStats.totalHours >= 80 ? "bg-emerald-50 text-emerald-700 font-bold" : "bg-gray-100 text-gray-400"}`}>
                      &gt;80h en total (15% Desc.)
                    </div>
                  </div>
                </div>

                {/* Step 3 Logistics and Contact submission inputs */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#A64ECE]/10 text-[#A64ECE] flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h4 className="font-display text-sm font-black text-[#333333] uppercase tracking-wider">
                      Datos de Contacto Logístico
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-1.5 font-mono">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Manuel García"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-1.5 font-mono">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@correo.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-1.5 font-mono">
                        Teléfono Móvil
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +34 600 000 000"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-1.5 font-mono">
                        Fecha Evento
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors text-[#333333]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-1.5 font-mono">
                        Localización
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Madrid IFEMA"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Disclaimer legal simple */}
                <p className="text-[11px] text-gray-400 font-normal leading-normal text-center">
                  Al enviar la simulación, un agente de campo de nuestra central te remitirá el contrato formalizado junto 
                  con las fichas y perfiles disponibles del personal en menos de 4 horas hábiles.
                </p>

                {budgetFormError && (
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-2.5 text-red-700 animate-in fade-in duration-200">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-left">
                      <p className="font-bold">Error en Formulario:</p>
                      <p className="font-normal mt-0.5">{budgetFormError}</p>
                    </div>
                  </div>
                )}

                {/* Submitting trigger button */}
                <button
                  type="submit"
                  disabled={budgetStats.totalHours === 0}
                  className={`w-full py-4.5 rounded-full font-bold select-none text-center cursor-pointer transition-all ${
                    budgetStats.totalHours === 0
                      ? "bg-gray-100 text-gray-400 pointer-events-none"
                      : "bg-[#A64ECE] text-white hover:opacity-95 shadow-md"
                  }`}
                >
                  Confirmar Plan y Solicitar Fichas Técnicas
                </button>
              </form>
            ) : (
              /* Success display */
              <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h4 className="font-display font-black text-3xl text-[#333333] mb-4">
                  ¡ESTIMACIÓN RECIBIDA CON ÉXITO!
                </h4>

                <p className="text-base text-[#555555] font-normal leading-relaxed max-w-md mb-8">
                  Gracias por tu confianza, <strong className="text-[#333333]">{clientName}</strong>. Hemos generado la solicitud 
                  con el código de seguimiento de staff <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] to-[#FF57DF]">#EV-{Math.floor(1000 + Math.random() * 9000)}</strong>. Un coordinador especialista del departamento técnico ya está analizando la uniformidad y el retén alternativo.
                </p>

                <div className="bg-[#F8F9FA] rounded-2xl p-6 text-left w-full max-w-sm mb-10 border border-gray-100 font-mono text-sm text-[#555555] flex flex-col gap-2">
                  <div className="font-bold text-gray-400 border-b pb-2 mb-2 text-xs uppercase tracking-wider text-center">
                    Resumen Estimación Preliminar
                  </div>
                  <div>
                    <strong>Total Staff:</strong> {(Object.values(budgetStaff) as BudgetStaffItem[]).reduce((acc, current) => acc + current.qty, 0)} profesionales
                  </div>
                  <div>
                    <strong>Contacto Oficial:</strong> {clientEmail}
                  </div>
                  {eventLocation && (
                    <div>
                      <strong>Ubicación:</strong> {eventLocation}
                    </div>
                  )}
                  {eventDate && (
                    <div>
                      <strong>Fecha Planificada:</strong> {eventDate}
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2 font-display font-extrabold text-base text-[#333333] flex justify-between">
                    <span>Base + Impuestos:</span>
                    <span className="text-[#A64ECE]">{budgetStats.finalTotal.toFixed(2)}€</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button
                    type="button"
                    onClick={() => {
                      resetBudget();
                    }}
                    className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-[#333333] rounded-full font-bold transition-all text-sm"
                  >
                    Simular Otro Presupuesto
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsBudgetModalOpen(false)}
                    className="w-full py-3.5 bg-[#A64ECE] text-white rounded-full font-bold hover:opacity-90 transition-all text-sm"
                  >
                    Volver a la Página Principal
                  </button>
                </div>
              </div>
            )}

            {/* Panel Bottom Footer info */}
            <div className="border-t border-gray-100 p-6 bg-gray-50 text-center font-mono text-[10px] text-gray-400">
              Personal para Eventos SL &bull; Soporte Técnico Directo: +34 900 80 90 10
            </div>

          </div>
        </div>
      )}

      {/* WORK WITH US SUBMISSION SLIDE-OVER PANEL */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/65 backdrop-blur-sm flex justify-end p-0 sm:p-4 animate-in fade-in duration-200">
          
          <div
            id="apply-job-panel"
            className="bg-white w-full max-w-xl h-full rounded-none sm:rounded-[32px] shadow-2xl overflow-y-auto flex flex-col justify-between relative animate-in slide-in-from-right duration-300 border-l border-gray-100"
          >
            {/* Top Close */}
            <div className="border-b border-gray-100 p-6 flex justify-between items-center sticky top-0 bg-white z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF57DF] flex items-center justify-center text-white font-bold text-sm shadow-md">
                  A
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#333333]">
                  Bolsa de Empleo Élite
                </h3>
              </div>
              <button
                id="close-apply-modal"
                onClick={() => setIsApplyModalOpen(false)}
                className="p-2 rounded-full bg-gray-100 text-[#333333] hover:text-[#A64ECE] transition-colors focus:outline-none"
                aria-label="Cerrar inscripción"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form layout wrapper */}
            {!isApplySubmitted ? (
              <form onSubmit={handleCandidateSubmit} className="flex-1 p-6 sm:p-8 flex flex-col gap-6">
                
                {/* Intro advice banner */}
                <div className="bg-gradient-to-r from-[#FF57DF]/10 to-[#A64ECE]/5 border border-[#FF57DF]/20 rounded-2xl p-5 mb-2">
                  <span className="font-mono text-[11px] font-bold text-[#A64ECE] uppercase block mb-1">
                    ¡Te queremos en el equipo!
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Buscamos personas resolutivas, responsables y con buena presencia. 
                    Si hablas idiomas, tienes experiencia en atención VIP o posees carné de manipulador, indícalo abajo.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                    Nombre y Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Martín"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                      Email de contacto
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sofia@correo.com"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                      Teléfono Móvil
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="666 555 444"
                      value={candidatePhone}
                      onChange={(e) => setCandidatePhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                    Posición Preferente en Eventos
                  </label>
                  <select
                    value={candidatePosition}
                    onChange={(e) => setCandidatePosition(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors bg-white text-[#333333]"
                  >
                    <option value="azafatas">Azafata / Promotor VIP</option>
                    <option value="camareros">Camarero / Personal de Sala</option>
                    <option value="cocineros">Cocinero profesional / Ayudante</option>
                    <option value="cocteleros">Coctelero / Mixólogo</option>
                    <option value="montadores">Montador / Soporte Técnico</option>
                    <option value="auxiliares">Coordinador general / Auxiliar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                    Breve presentación y experiencia previa
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos un poco sobre ti, tus idomas, qué eventos has cubierto o tu disponibilidad horaria usual..."
                    value={candidateBio}
                    onChange={(e) => setCandidateBio(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#A64ECE] transition-colors text-[#333333] resize-none"
                  />
                </div>

                {/* FILE UPLOAD SUB-SYSTEM DRAG AND DROP SIMULATION */}
                <div>
                  <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2 font-mono">
                    Sube tu Curriculum Vitae (PDF o Word) *
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#FF57DF]/80 transition-colors bg-[#F8F9FA]/50 relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleSimulatedUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center text-gray-400">
                        <Upload className="w-6 h-6 text-[#FF57DF]" />
                      </div>
                      
                      {uploadedFileName ? (
                        <div className="z-20 mt-1">
                          <span className="text-sm font-bold text-[#333333] block">
                            {uploadedFileName}
                          </span>
                          <span className="text-xs text-emerald-600 font-mono font-bold flex items-center gap-1 justify-center mt-1">
                            ✓ Archivo adjunto listo
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-sm font-bold text-[#333333] block">
                            Arrastra tu currículum aquí
                          </span>
                          <span className="text-xs text-gray-400 block mt-0.5">
                            O haz clic para explorar tus archivos locales
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Uploading indicator state */}
                  {isUploading && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs font-mono font-bold text-gray-500 mb-1">
                        <span>Cargando currículum en central...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#FF57DF] to-[#A64ECE] h-full transition-all duration-150"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2.5 mt-2">
                  <input
                    type="checkbox"
                    required
                    id="candidates-privacy"
                    className="mt-1 focus:ring-[#A64ECE] text-[#A64ECE] border-gray-300 rounded"
                  />
                  <label htmlFor="candidates-privacy" className="text-[11px] text-[#555555] leading-snug">
                    Acepto los términos de uso y consiento el tratamiento de mis datos curriculares para ofertas de empleo activas en la provincia según la RGPD.
                  </label>
                </div>

                {applyFormError && (
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-2.5 text-red-700 animate-in fade-in duration-200">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-left">
                      <p className="font-bold">Error en Formulario:</p>
                      <p className="font-normal mt-0.5">{applyFormError}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full py-4 bg-[#A64ECE] hover:opacity-95 text-white rounded-full font-bold transition-all text-center select-none cursor-pointer mt-4"
                >
                  Enviar Candidatura Oficial
                </button>
              </form>
            ) : (
              /* Candidate Apply Success screen */
              <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-pink-50 text-[#FF57DF] flex items-center justify-center mb-8 shadow-inner animate-pulse">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h4 className="font-display font-black text-3xl text-[#333333] mb-4">
                  ¡INSCRIPCIÓN DE ÉXITO EN ACADEMY!
                </h4>

                <p className="text-base text-[#555555] font-normal leading-relaxed max-w-sm mb-6">
                  ¡Increíble, <strong className="text-[#333333]">{candidateName}</strong>! Hemos recibido tu documentación con el identificador de candidato <strong className="text-[#A64ECE]">#STAFF-{Math.floor(10000 + Math.random() * 90000)}</strong>.
                </p>

                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mb-8">
                  Nuestro departamento de Recursos Humanos de campo revisará tu currículum adjunto (<strong className="text-[#333333] text-xs font-mono">{uploadedFileName}</strong>). Nos pondremos en contacto contigo vía WhatsApp o email para una breve entrevista de vídeo de 3 minutos.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button
                    type="button"
                    onClick={() => {
                      resetCandidateForm();
                    }}
                    className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-[#333333] rounded-full font-bold transition-all text-sm"
                  >
                    Enviar una Nueva Solicitud / Actualizar CV
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="w-full py-3.5 bg-[#A64ECE] text-white rounded-full font-bold hover:opacity-95 transition-all text-sm"
                  >
                    Cerrar y Volver
                  </button>
                </div>
              </div>
            )}

            {/* Panel Bottom Footer info */}
            <div className="border-t border-gray-100 p-6 bg-gray-50 text-center font-mono text-[10px] text-gray-400">
              Personal para Eventos SL &bull; Departamento de Selección y Contratación
            </div>
          </div>
        </div>
      )}

      {/* Academy Informative Modal */}
      {isAcademyModalOpen && (
        <div
          id="academy-detail-modal"
          className="fixed inset-0 bg-[#333333]/60 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsAcademyModalOpen(false)}
        >
          <div
            className="bg-white rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative yellow gradient block */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#FFF312]/10 blur-3xl pointer-events-none" />
            
            <div className="p-8 sm:p-10 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-yellow-600 tracking-widest uppercase bg-[#FFF312]/20 rounded-full px-3 py-1 inline-block mb-3">
                    FORMACIÓN CONTINUA DE ÉLITE
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#333333] tracking-tight">
                    Academy &bull; Sello de Excelencia
                  </h3>
                </div>
                <button
                  onClick={() => setIsAcademyModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-[#333333] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
                <p>
                  En <strong>«Personal para Eventos»</strong>, somos firmes creyentes de que la calidad es el núcleo de cualquier evento exitoso. Nuestra <strong>Academy</strong> se dedica fervientemente a elevar la profesionalización de nuestro equipo, que incluye azafatas, camareros, montadores y demás personal, asegurando que cada evento se transforme en una experiencia sin igual.
                </p>
                <p>
                  Ofrecemos programas formativos integrales diseñados de la mano de expertos internacionales y homologaciones en:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFF312]" />
                    <span className="text-xs font-bold text-[#333333]">Atención al Cliente Integral</span>
                  </div>
                  <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF57DF]" />
                    <span className="text-xs font-bold text-[#333333]">Sumillería y Servicio de Bebidas</span>
                  </div>
                  <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00EAEA]" />
                    <span className="text-xs font-bold text-[#333333]">Técnicas de Montaje de Eventos</span>
                  </div>
                  <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A64ECE]" />
                    <span className="text-xs font-bold text-[#333333]">Protocolo y Relaciones Públicas</span>
                  </div>
                </div>

                <p className="pt-4 text-xs text-gray-400">
                  Convertimos a cada miembro de nuestro equipo en un auténtico embajador de calidad y profesionalismo, asegurando metodologías contrastadas de imagen y soporte de primer nivel.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-xs text-[#555555] font-mono">
                  ¿Listo para comenzar a brillar en eventos?
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setIsAcademyModalOpen(false);
                      setIsApplyModalOpen(true);
                      setIsApplySubmitted(false);
                    }}
                    className="flex-grow sm:flex-grow-0 sm:flex-initial bg-[#A64ECE] text-white hover:bg-opacity-95 px-6 py-3 rounded-full text-xs font-bold transition-transform hover:-translate-y-0.5 tracking-wider uppercase"
                  >
                    Inscribirme en Academy
                  </button>
                  <button
                    onClick={() => setIsAcademyModalOpen(false)}
                    className="flex-grow sm:flex-grow-0 sm:flex-initial bg-gray-100 hover:bg-gray-200 text-[#333333] px-6 py-3 rounded-full text-xs font-bold transition-colors"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer id="footer-section" className="bg-[#222222] text-gray-400 py-20 relative">
        <div className="w-[80%] max-w-none mx-auto relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-800">
            
            {/* Logo/Identity column */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/personal-para-eventos-logo.png"
                  alt="Personal para Eventos Logo"
                  className="h-20 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = document.getElementById("footer-logo-fallback");
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                />
                <div id="footer-logo-fallback" className="hidden flex items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-[#A64ECE] flex items-center justify-center text-white font-black text-3xl tracking-tighter shadow-md">
                    P
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-2xl text-white tracking-tight leading-none">
                      PERSONAL <span className="text-[#A64ECE]">EVENTOS</span>
                    </span>
                    <span className="font-mono text-[11px] text-gray-400 tracking-widest uppercase mt-1">
                      Staffing Élite
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mt-2">
                Suministro de personal seleccionado e implicado de alta gama para toda España. 
                Garantizamos elegancia, cumplimiento legal estricto y sustitución activa.
              </p>
            </div>

            {/* Services navigation links */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
                Personal Clave
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm text-gray-400">
                {services.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => {
                        navigateTo(s.id);
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick navigational links */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
                Agencia
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm text-gray-400">
                <li>
                  <button onClick={() => navigateTo("services")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Nuestros Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("home", "metodologia-sec")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Metodología
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("history")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Soporte Civil y RC
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("academy")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Academy / Formación
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("trabaja-con-nosotros")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Trabaja con Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("home", "faqs-sec")} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                    Preguntas Frecuentes
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal / Location info */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
                Contacto Directo
              </h4>
              <ul className="flex flex-col gap-4 text-xs text-gray-400 font-mono">
                <li className="flex flex-col gap-1 border-b border-gray-800/40 pb-3">
                  <span className="text-[10px] text-[#A64ECE] font-bold uppercase tracking-widest">Sede Central Madrid</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="tel:913568878" className="hover:text-white transition-colors">913 568 878</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="mailto:info@personalparaeventos.com" className="hover:text-white transition-colors">info@personalparaeventos.com</a>
                  </div>
                </li>
                <li className="flex flex-col gap-1 border-b border-gray-800/40 pb-3">
                  <span className="text-[10px] text-[#A64ECE] font-bold uppercase tracking-widest">Delegación Barcelona</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="tel:930130176" className="hover:text-white transition-colors">930 130 176</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="mailto:infobarcelona@personalparaeventos.com" className="hover:text-white transition-colors text-[11px] break-all">infobarcelona@personalparaeventos.com</a>
                  </div>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#A64ECE] font-bold uppercase tracking-widest">Delegación Valencia</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="tel:637052313" className="hover:text-white transition-colors">637 052 313</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <a href="mailto:infovalencia@personalparaeventos.com" className="hover:text-white transition-colors text-[11px] break-all">infovalencia@personalparaeventos.com</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal notes */}
          <div className="pt-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 text-xs text-gray-500 font-mono border-t border-gray-800/60 mt-12">
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-gray-400 font-bold">&copy; 2020 Personal Para Eventos</span>
                <span className="text-gray-600">|</span>
                <img
                  src="/images/logo-ES_Financiado_por_la_Union_Europea_RGB.png"
                  alt="Financiado por la Unión Europea"
                  className="h-24 sm:h-28 w-auto object-contain bg-white/5 p-2 rounded-lg"
                  onError={(e) => {
                    // Hide if file is missing/empty, standard safety check
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="max-w-xl text-[11px] leading-relaxed text-gray-500">
                DATOS LEGALES: CHOFERENDRIVER S.L C.I.F.: B84489293 Att. al Cliente: 91 356 88 78 info@personalparaeventos.com
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shrink-0 mt-2 lg:mt-0">
              <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px] block">CONDICIONES LEGALES:</span>
              <div className="flex gap-4">
                <a 
                  href="politica-de-privacidad.html" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("privacy");
                  }}
                  className="hover:text-[#A64ECE] transition-all cursor-pointer"
                >
                  Política de Privacidad
                </a>
                <a 
                  href="politica-de-cookies.html" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("cookies");
                  }}
                  className="hover:text-[#A64ECE] transition-all cursor-pointer"
                >
                  Política de Cookies
                </a>
                 <a 
                  href="declaracion-de-accesibilidad.html" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("accessibility");
                  }}
                  className="hover:text-[#A64ECE] transition-all cursor-pointer"
                >
                  Declaración de Accesibilidad
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
