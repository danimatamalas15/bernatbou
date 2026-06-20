"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener to add background contrast when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios de Inversión", path: "/productos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-navy-deep/80 backdrop-blur-md border-b border-gold-300/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Branding */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-gold-300/30 bg-navy-surface transition-transform group-hover:scale-105 duration-300">
              <ShieldCheck className="w-5 h-5 text-gold-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest text-white font-bold group-hover:text-gold-accent transition-colors duration-300">
                BERNAT BOU
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-sans">
                Wealth Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-sans tracking-wider uppercase transition-all duration-300 hover:text-white ${
                    isActive
                      ? "text-gold-accent border-b border-gold-accent/50 pb-1"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-gold-300/40 text-xs tracking-widest uppercase font-semibold text-gold-accent bg-transparent hover:bg-gold-accent hover:text-navy-deep hover:border-gold-accent transition-all duration-300"
            >
              Consulta Privada
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-light focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        } bg-navy-surface border-b border-gold-300/10`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-sans tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-gold-accent bg-navy-light/40"
                    : "text-gray-300 hover:text-white hover:bg-navy-light/20"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-3">
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded border border-gold-300/40 text-sm tracking-widest uppercase font-semibold text-gold-accent bg-transparent hover:bg-gold-accent hover:text-navy-deep transition-all duration-300"
            >
              Consulta Privada
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
