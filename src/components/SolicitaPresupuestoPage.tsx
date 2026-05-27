import React, { useState } from "react";
import { Sparkles, Calculator, Check, Euro, Plus, Minus, User, Mail, Phone, Calendar, MapPin } from "lucide-react";

interface SolicitaPresupuestoPageProps {
  initialStaffState?: any;
}

export default function SolicitaPresupuestoPage({
  initialStaffState
}: SolicitaPresupuestoPageProps) {

  const rates: Record<string, number> = {
    azafatas: 17,
    camareros: 18,
    cocineros: 20,
    cocteleros: 21,
    montadores: 18,
    auxiliares: 16
  };

  const labels: Record<string, string> = {
    azafatas: "Azafatas feriales",
    camareros: "Camareros profesionales",
    cocineros: "Chefs / Cocineros",
    cocteleros: "Barmans / Cocteleros",
    montadores: "Montadores auxiliares",
    auxiliares: "Auxiliares de accesos"
  };

  const [staff, setStaff] = useState<Record<string, { qty: number; hours: number }>>(
    initialStaffState || {
      azafatas: { qty: 2, hours: 8 },
      camareros: { qty: 1, hours: 6 },
      cocineros: { qty: 0, hours: 6 },
      cocteleros: { qty: 0, hours: 6 },
      montadores: { qty: 0, hours: 8 },
      auxiliares: { qty: 0, hours: 8 }
    }
  );

  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Update staff keys
  const updateQty = (key: string, delta: number) => {
    setStaff((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        qty: Math.max(0, prev[key].qty + delta)
      }
    }));
  };

  const updateHours = (key: string, delta: number) => {
    setStaff((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        hours: Math.max(4, prev[key].hours + delta)
      }
    }));
  };

  // Compute overall total
  const calculateTotal = () => {
    let sum = 0;
    (Object.entries(staff) as [string, { qty: number; hours: number }][]).forEach(([key, val]) => {
      sum += val.qty * val.hours * rates[key];
    });
    return sum;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#333333]">
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#A64ECE]/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-12 w-[450px] h-[450px] rounded-full bg-[#00EAEA]/5 blur-[110px] pointer-events-none" />

      {/* Hero section */}
      <section className="relative pt-24 pb-16 w-[80%] max-w-none mx-auto">
        <div className="text-left space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#A64ECE]/5 border border-[#A64ECE]/10 text-[#A64ECE] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <Calculator className="w-4 h-4 text-[#A64ECE]" />
            TARIFADOR DIGITAL Y PRESUPUESTO
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-[#333333] uppercase leading-[1.1] mb-4">
            CALCULA TU PRESUPUESTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A64ECE] via-[#FF57DF] to-[#00EAEA]">
              AL INSTANTE Y DE MANERA REAL
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Nuestra calculadora te proporciona una cotización estimada y honesta basada en tarifas horarias reales. Sin sorpresas, ni letra pequeña. Modifica los perfiles, ajusta las horas e inicia tu reserva ágil.
          </p>
        </div>
      </section>

      {/* Main interactive block */}
      <section className="py-12 w-[80%] max-w-none mx-auto relative z-10">
        {submitted ? (
          <div className="bg-white rounded-[40px] border border-gray-100 p-8 sm:p-20 text-center shadow-lg max-w-2xl mx-auto space-y-8 animate-in zoom-in-95">
            <div className="w-20 h-20 bg-[#00EAEA]/15 text-[#00EAEA] rounded-full flex items-center justify-center mx-auto scale-110">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black font-display text-[#333333]">¡Presupuesto Solicitado!</h2>
            <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
              Tu cotización estimada de <strong>{calculateTotal()}€</strong> para tu evento ha sido procesada. Un coordinador especialista de Personal para Eventos contactará contigo telefónicamente para ultimar los detalles de uniformidad y horarios.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="border-2 border-[#333333] text-[#333333] px-10 py-4 rounded-full text-xs font-bold font-mono tracking-widest uppercase block mx-auto hover:border-[#A64ECE] hover:text-[#A64ECE] transition-all"
            >
              Crea otro Presupuesto
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side column: selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
                <h3 className="font-display font-black text-xl text-[#333333] mb-8 border-b pb-4">
                  1. CONFIGURA EL STAFF REQUERIDO
                </h3>

                <div className="space-y-6">
                  {Object.keys(staff).map((puestoKey) => {
                    const val = staff[puestoKey];
                    return (
                      <div key={puestoKey} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all border border-gray-100/50">
                        <div>
                          <h4 className="font-bold text-sm text-[#333333] uppercase">{labels[puestoKey]}</h4>
                          <span className="text-xs text-gray-400 font-mono">Tarifa: {rates[puestoKey]}€/hora base</span>
                        </div>

                        <div className="flex items-center gap-6">
                          {/* Qty Selector */}
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-mono font-bold text-[#A64ECE] mb-1.5">PROFESIONALES</span>
                            <div className="flex items-center bg-white border rounded-full px-1.5 py-1">
                              <button
                                type="button"
                                onClick={() => updateQty(puestoKey, -1)}
                                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-red-50 hover:text-red-500 transition-all focus:outline-none"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-10 text-center font-bold text-[#333333] font-mono">{val.qty}</span>
                              <button
                                type="button"
                                onClick={() => updateQty(puestoKey, 1)}
                                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-emerald-50 hover:text-emerald-500 transition-all focus:outline-none"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Hours Selector */}
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-mono font-bold text-[#00EAEA] mb-1.5">HORAS</span>
                            <div className="flex items-center bg-white border rounded-full px-1.5 py-1">
                              <button
                                type="button"
                                disabled={val.qty === 0}
                                onClick={() => updateHours(puestoKey, -1)}
                                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-red-50 hover:text-red-500 transition-all focus:outline-none disabled:opacity-20"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-10 text-center font-bold text-[#333333] font-mono">{val.hours}h</span>
                              <button
                                type="button"
                                disabled={val.qty === 0}
                                onClick={() => updateHours(puestoKey, 1)}
                                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-emerald-50 hover:text-emerald-500 transition-all focus:outline-none disabled:opacity-20"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side column: billing totals & forms inputs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
                <h3 className="font-display font-black text-xl text-[#333333] mb-6 border-b pb-4">
                  2. RESUMEN Y REGISTRO
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-[#222222] rounded-3xl p-6 text-white relative overflow-hidden">
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block mb-1">TOTAL ESTIMADO GENERAL</span>
                    <div className="text-4xl font-black font-display text-white flex items-center gap-1.5">
                      <span>{calculateTotal()}€</span>
                      <span className="text-xs text-gray-400 font-normal">Soporte incl.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">Nombre de Coordinación</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="ej. Juan Pérez"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">Email de Contacto</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ej. juan@empresa.com"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">Teléfono</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+34"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">Fecha Evento</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3.5 text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-2 font-mono">Localización ferial</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="ej. IFEMA, Madrid"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#A64ECE] text-white hover:bg-[#933fd1] hover:-translate-y-0.5 transition-all py-4 rounded-full text-base font-bold shadow-soft select-none cursor-pointer text-center"
                  >
                    Confirmar Presupuesto Estimado
                  </button>
                </div>
              </div>
            </div>

          </form>
        )}
      </section>
    </div>
  );
}
