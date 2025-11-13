import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#060E25] text-zinc-300 py-12 px-6 md:px-16 border-t border-zinc-800">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">CAMSA</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            En CAMSA ofrecemos soluciones confiables para emprendedores y
            negocios que buscan calidad, precisión y durabilidad en cada
            impresión.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:text-white transition">
                Productos
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-white transition">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contáctanos</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <span className="font-medium text-white">Correo:</span>{" "}
              ventas@camsa.pe
            </li>
            <li>
              <span className="font-medium text-white">Teléfono:</span> +51 999
              888 777
            </li>
            <li>
              <span className="font-medium text-white">Dirección:</span> Lima,
              Perú
            </li>
            <li>
              <span className="font-medium text-white">Horario:</span> Lun -
              Sáb, 9:00 a 18:00
            </li>
          </ul>
        </div>

        {/* WhatsApp y redes sociales */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Atención inmediata
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            Escríbenos directamente por WhatsApp para recibir asesoría o
            cotizaciones.
          </p>
          <a
            href="https://wa.me/51964291450"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-xs text-zinc-500">
        <p>
          © {new Date().getFullYear()} CAMSA — Planchas térmicas. Todos los
          derechos reservados.
        </p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-white transition">
            Política de Privacidad
          </a>{" "}
          ·
          <a href="/terms" className="hover:text-white transition ml-1">
            Términos y Condiciones
          </a>
        </p>
      </div>
    </footer>
  );
}
