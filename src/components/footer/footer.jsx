import React from "react";

export default function footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 ">
      <div className="flex justify-between e w-[2600px] m-auto max-w-[90%]">
        {/* Columna 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">CAMSA</h2>
          <p className="text-sm">"Venta de maquinas de estampado”</p>
        </div>

        {/* Columna 2 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Enlaces</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Colección
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CAMSA. Todos los derechos reservados.
      </div>
    </footer>
  );
}
