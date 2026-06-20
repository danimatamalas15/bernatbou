"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "El nombre completo es requerido.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "El correo electrónico es requerido.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El formato de correo no es válido.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "El número de teléfono es requerido.";
      isValid = false;
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phone)) {
      tempErrors.phone = "El formato del teléfono no es válido.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Por favor, detalle su consulta.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "La consulta debe tener al menos 10 caracteres.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="glass-effect p-8 rounded-xl border border-gold-300/30 text-center space-y-6 max-w-xl mx-auto gold-glow transition-all duration-500">
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-gold-accent animate-pulse" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
          Solicitud de Consulta Recibida
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
          Agradecemos su interés en nuestros servicios exclusivos. Un asesor patrimonial de nuestro equipo analizará su perfil y se pondrá en contacto con usted en un plazo máximo de **24 horas laborables**, bajo el más estricto acuerdo de confidencialidad.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded border border-gold-300/30 text-xs tracking-widest uppercase font-semibold text-gold-accent bg-transparent hover:bg-gold-accent hover:text-navy-deep transition-all duration-300"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl space-y-6 border border-gold-300/10 gold-glow">
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-bold text-white tracking-wide">
          Iniciar Solicitud Confidencial
        </h3>
        <p className="text-xs text-gray-400">
          Por favor, complete el siguiente formulario. Todos los datos serán procesados con absoluta discreción.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Alejandro Mendoza"
            className={`w-full px-4 py-3 bg-navy-surface/60 border ${
              errors.name ? "border-red-500/50 focus:border-red-500" : "border-gold-300/10 focus:border-gold-accent/50"
            } rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 flex items-center mt-1">
              <AlertCircle className="w-3.5 h-3.5 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email & Phone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className={`w-full px-4 py-3 bg-navy-surface/60 border ${
                errors.email ? "border-red-500/50 focus:border-red-500" : "border-gold-300/10 focus:border-gold-accent/50"
              } rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300`}
            />
            {errors.email && (
              <p className="text-xs text-red-400 flex items-center mt-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Teléfono de Contacto
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+34 600 123 456"
              className={`w-full px-4 py-3 bg-navy-surface/60 border ${
                errors.phone ? "border-red-500/50 focus:border-red-500" : "border-gold-300/10 focus:border-gold-accent/50"
              } rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300`}
            />
            {errors.phone && (
              <p className="text-xs text-red-400 flex items-center mt-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
            Detalles de su Consulta / Objetivos Financieros
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describa brevemente el tipo de gestión, volumen aproximado de patrimonio o servicios de su interés..."
            className={`w-full px-4 py-3 bg-navy-surface/60 border ${
              errors.message ? "border-red-500/50 focus:border-red-500" : "border-gold-300/10 focus:border-gold-accent/50"
            } rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 resize-none`}
          />
          {errors.message && (
            <p className="text-xs text-red-400 flex items-center mt-1">
              <AlertCircle className="w-3.5 h-3.5 mr-1" />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded gold-gradient-bg hover:opacity-90 font-sans text-xs tracking-widest uppercase font-semibold text-navy-deep transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-navy-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Procesando Solicitud...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Solicitud Privada
          </>
        )}
      </button>
    </form>
  );
}
