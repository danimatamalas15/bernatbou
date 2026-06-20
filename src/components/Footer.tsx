import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-gold-300/10 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded border border-gold-300/20 bg-navy-surface">
                <ShieldCheck className="w-4 h-4 text-gold-accent" />
              </div>
              <span className="font-serif text-md tracking-widest text-white font-bold">
                BERNAT BOU
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Planificación patrimonial y asesoramiento en inversiones estratégicas para individuos de alto patrimonio neto, oficinas familiares y corporaciones globales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-accent transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-gold-accent transition-colors duration-200">
                  Servicios de Inversión
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-gold-accent transition-colors duration-200">
                  Consulta Privada
                </Link>
              </li>
            </ul>
          </div>

          {/* Fictional Details */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">
              Oficina Principal
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span>Paseo de la Castellana 95, Madrid, España</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <span>+34 910 123 456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <span>contacto@bernatbou.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimers & Regulatory Warning */}
        <div className="mt-12 pt-8 border-t border-gold-300/5 text-xs text-gray-500 space-y-4 leading-relaxed">
          <p>
            <strong>Aviso Legal y Regulatorio:</strong> La información contenida en este sitio web tiene fines estrictamente informativos y de carácter general. No constituye una oferta de venta, solicitud de compra ni recomendación de inversión para ningún producto financiero o valor. El rendimiento pasado no es garantía de resultados futuros. Las inversiones financieras conllevan riesgos significativos de pérdida de capital.
          </p>
          <p>
            Bernat Bou Wealth Advisory opera de acuerdo con las normativas locales aplicables y bajo directrices de total confidencialidad e independencia. Los servicios descritos pueden no estar disponibles en todas las jurisdicciones y están dirigidos exclusivamente a inversores profesionales o clasificados como cualificados según la legislación pertinente.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-center sm:text-left gap-4 text-gray-600">
            <p>&copy; {currentYear} Bernat Bou Wealth Advisory. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
