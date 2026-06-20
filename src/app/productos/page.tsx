import React from "react";
import Link from "next/link";
import { Briefcase, Layers, Scale, Building, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Productos() {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6 text-gold-accent" />,
      title: "Gestión Patrimonial Discrecional",
      subtitle: "Mandatos Personalizados",
      description:
        "Delegue la administración diaria de sus inversiones bajo mandatos rigurosamente personalizados. Diseñamos carteras multiactivo globales alineadas con sus metas de preservación de capital y tolerancia al riesgo.",
      features: [
        "Asignación táctica y estratégica de activos",
        "Monitoreo de riesgo en tiempo real",
        "Acceso a mercados de liquidez globales",
        "Informes consolidados y transparentes mensuales",
      ],
    },
    {
      icon: <Layers className="w-6 h-6 text-gold-accent" />,
      title: "Inversiones Alternativas",
      subtitle: "Activos Privados y Mercados Privados",
      description:
        "Acceso exclusivo a oportunidades de inversión fuera de los mercados públicos tradicionales. Analizamos e incorporamos activos de alto potencial para diversificar carteras sofisticadas.",
      features: [
        "Private Equity & Venture Capital internacional",
        "Inversiones inmobiliarias prime y de desarrollo",
        "Fondos de cobertura (Hedge Funds) seleccionados",
        "Co-inversiones en proyectos estratégicos",
      ],
    },
    {
      icon: <Scale className="w-6 h-6 text-gold-accent" />,
      title: "Planificación Sucesoria y Fiscal",
      subtitle: "Protección y Transición de Legados",
      description:
        "Aseguramos la correcta transmisión de su patrimonio a las futuras generaciones de la forma más eficiente. Colaboramos con expertos para diseñar estructuras corporativas y familiares optimizadas.",
      features: [
        "Protocolo y gobernanza familiar",
        "Estructuración de fideicomisos y holdings",
        "Optimización fiscal internacional y local",
        "Asesoramiento en donaciones y filantropía",
      ],
    },
    {
      icon: <Building className="w-6 h-6 text-gold-accent" />,
      title: "Consultoría Multi-Family Office",
      subtitle: "Supervisión Global Consolidada",
      description:
        "Un enfoque integral para la gestión integral de todos los asuntos patrimoniales de su grupo familiar. Actuamos como su asesor jefe y director financiero de confianza.",
      features: [
        "Consolidación de cuentas y custodia global",
        "Auditoría y control de costos de intermediarios",
        "Planificación de estilo de vida y activos reales",
        "Educación financiera para herederos",
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[5%] right-[-15%] w-[45%] h-[45%] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[55%] h-[55%] rounded-full bg-navy-light/10 blur-[150px] pointer-events-none" />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-[11px] tracking-[0.25em] uppercase text-gold-accent font-bold">
          Especialización e Independencia
        </h1>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide">
          Servicios de Inversión de Alto Nivel
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Nuestra propuesta de valor se fundamenta en un asesoramiento sin conflictos de interés, orientado exclusivamente al cumplimiento de sus objetivos financieros y familiares a largo plazo.
        </p>
        <div className="flex justify-center">
          <span className="w-16 h-[1px] bg-gold-300/20" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-effect glass-effect-hover p-8 sm:p-10 rounded-xl border border-gold-300/5 transition-all duration-300 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy-light/60 border border-gold-300/10">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gold-accent/80 uppercase tracking-widest mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="h-[1px] bg-gold-300/10" />

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Áreas de Actuación Incluidas:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-gold-accent hover:text-white transition-colors duration-300 group"
                >
                  Consultar sobre este servicio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Standards Section */}
      <section className="py-20 bg-navy-surface/30 border-t border-gold-300/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <ShieldCheck className="w-12 h-12 text-gold-accent" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Estándares Fiduciarios Absolutos
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light">
            Como asesores independientes, nuestra remuneración está alineada estrictamente con el crecimiento y la preservación de su patrimonio. No recibimos comisiones ocultas, incentivos de terceros o incentivos de venta de productos. Cada recomendación responde únicamente a sus intereses.
          </p>
          <div className="pt-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded gold-gradient-bg gold-gradient-bg-hover text-navy-deep font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-md cursor-pointer"
            >
              Comenzar Evaluación Patrimonial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
