import React from "react";
import Link from "next/link";
import { Shield, TrendingUp, Gem, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const trustPillars = [
    {
      icon: <Shield className="w-8 h-8 text-gold-accent" />,
      title: "Absoluta Confidencialidad",
      description:
        "La discreción y la protección de su privacidad son las piedras angulares de nuestra firma. Salvaguardamos su identidad y sus activos mediante estructuras seguras y protocolos rigurosos.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-accent" />,
      title: "Rendimiento Consistente",
      description:
        "Buscamos la optimización del binomio rentabilidad-riesgo en diferentes ciclos de mercado. Nos enfocamos en la preservación de capital real ajustado por inflación a largo plazo.",
    },
    {
      icon: <Gem className="w-8 h-8 text-gold-accent" />,
      title: "Arquitectura Abierta y Exclusividad",
      description:
        "Sin conflictos de interés. Al no emitir productos propios, seleccionamos de forma independiente las mejores oportunidades e instrumentos globales para su cartera única.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Subtle Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-navy-light/20 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Subtle Tagline */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-300/20 bg-navy-surface/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-gray-300 font-semibold">
              Asesoramiento Patrimonial Independiente
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Preservación y Legado de <span className="gold-gradient-text">Grandes Capitales</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Diseñamos soluciones a la medida de gestión de patrimonio global para individuos de alto patrimonio neto (HNWI) y oficinas familiares, enfocadas en la excelencia y la trascendencia intergeneracional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded gold-gradient-bg gold-gradient-bg-hover text-navy-deep font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-xl shadow-gold-accent/5 cursor-pointer"
            >
              Iniciar Consulta Privada
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/productos"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded border border-gold-300/20 bg-navy-surface/40 hover:bg-navy-light/40 hover:border-gold-300/40 text-white font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300"
            >
              Explorar Servicios
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-16 border-t border-gold-300/10 mt-16 text-center">
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">100%</p>
              <p className="text-[10px] tracking-wider uppercase text-gray-400 mt-1">Independencia</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">&gt; 15 Años</p>
              <p className="text-[10px] tracking-wider uppercase text-gray-400 mt-1">De Experiencia</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">Exclusivo</p>
              <p className="text-[10px] tracking-wider uppercase text-gray-400 mt-1">Multi-Family Office</p>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Pillars Section */}
      <section className="py-24 bg-navy-surface/40 border-y border-gold-300/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-[11px] tracking-[0.25em] uppercase text-gold-accent font-bold">
              Fundamentos de nuestra práctica
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Tres Pilares de Excelencia Patrimonial
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
              Garantizamos un enfoque impecable adaptado a las complejas dinámicas de la gestión y preservación de patrimonios soberanos y familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-effect glass-effect-hover p-8 rounded-xl border border-gold-300/5 transition-all duration-300 space-y-6"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-navy-light/60 border border-gold-300/10">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-xl font-semibold text-white tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Legacy Quote / Callout Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-8">
        <div className="flex justify-center">
          <span className="w-12 h-[1px] bg-gold-accent" />
        </div>
        <p className="font-serif text-2xl sm:text-3xl italic text-gray-300 leading-relaxed font-light">
          &ldquo;La preservación del patrimonio no consiste únicamente en medir los retornos financieros, sino en estructurar soluciones que salvaguarden los valores y la visión de su familia para el mañana.&rdquo;
        </p>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-gold-accent font-bold">Bernat Bou</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Fundador & Asesor de Inversiones Principal</p>
        </div>
        <div className="flex justify-center pt-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-gold-accent hover:text-white transition-colors duration-300 group"
          >
            Agenda una reunión introductoria confidencial
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

    </div>
  );
}
