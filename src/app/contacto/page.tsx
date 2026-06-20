import React from "react";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";

export default function Contacto() {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-gold-accent shrink-0" />,
      title: "Línea Directa",
      detail: "+34 910 123 456",
      subDetail: "Lunes a Viernes, 9:00 - 18:00 (CET)",
    },
    {
      icon: <Mail className="w-5 h-5 text-gold-accent shrink-0" />,
      title: "Canal Electrónico Exclusivo",
      detail: "contacto@bernatbou.com",
      subDetail: "Respuestas directas bajo cifrado seguro",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-accent shrink-0" />,
      title: "Oficina Principal",
      detail: "Paseo de la Castellana 95, Planta 14",
      subDetail: "28046 Madrid, España",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[45%] h-[45%] rounded-full bg-navy-light/15 blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
        <h1 className="text-[11px] tracking-[0.25em] uppercase text-gold-accent font-bold">
          Canal de Comunicación Privado
        </h1>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-wide">
          Contacto y Consulta Privada
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light">
          Inicie una conversación sobre sus objetivos patrimoniales bajo absoluta reserva y profesionalidad.
        </p>
        <div className="flex justify-center">
          <span className="w-12 h-[1px] bg-gold-300/20" />
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-effect p-8 rounded-xl border border-gold-300/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Información de Oficina
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Nuestras instalaciones están preparadas para ofrecerle el máximo confort y privacidad durante sus reuniones de planificación.
              </p>

              <div className="h-[1px] bg-gold-300/10" />

              {/* Details List */}
              <div className="space-y-6">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-2 rounded bg-navy-light/60 border border-gold-300/10 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                        {detail.title}
                      </h4>
                      <p className="text-sm font-semibold text-white mt-1">
                        {detail.detail}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {detail.subDetail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-gold-300/10" />

              {/* Appointment Notice */}
              <div className="flex items-start space-x-3 text-xs text-gray-400 bg-navy-light/30 p-4 rounded border border-gold-300/5">
                <CalendarCheck className="w-5 h-5 text-gold-accent shrink-0" />
                <p className="leading-relaxed">
                  <strong>Atención bajo cita previa:</strong> Para asegurar la total discreción de nuestras reuniones, atendemos exclusivamente con cita concertada con al menos 24 horas de antelación. Disponemos de estacionamiento privado vigilado en el propio edificio.
                </p>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="glass-effect p-8 rounded-xl border border-gold-300/10 h-64 flex flex-col justify-between relative overflow-hidden group">
              {/* Decorative premium schematic elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full border border-gold-accent/10 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-[10px] text-gray-600 font-mono tracking-widest pointer-events-none">
                COORD: 40.4608° N, 3.6917° W
              </div>
              
              <div className="space-y-2 z-10">
                <span className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">Ubicación Estratégica</span>
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">Paseo de la Castellana 95</h4>
                <p className="text-xs text-gray-400 font-light">Centro financiero de Azca, Madrid. Acceso directo desde aeropuertos y principales estaciones.</p>
              </div>

              <div className="border border-gold-300/20 rounded p-4 text-center bg-navy-surface/50 hover:bg-navy-light/40 transition-colors duration-300 z-10">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-accent">
                  Ver indicaciones en Google Maps
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
