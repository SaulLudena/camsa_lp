import React from "react";
export default function Aboutus() {
  return (
    <div className="w-full max-w-[90%] m-auto min-h-[70vh] flex items-center mt-40 xl:mt-40">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl xl:text-5xl mb-10 xl:mb-20">NOSOTROS.</h1>

        <div className="grid grid-cols-1 max-[1500px]:grid-cols-1 xl:grid-cols-12 w-full gap-10 xl:gap-20">
          {/* Texto */}
          <div className="xl:col-span-6 flex flex-col justify-center gap-5 order-1">
            <p className="text-2xl xl:text-3xl text-[#3B3B3B] max-w-[30rem]">
              “Diseñamos máquinas que dan vida a las ideas de hoy.”
            </p>
            <p className="text-[#3B3B3B] text-base xl:text-lg leading-relaxed">
              En CAMSA creemos que la personalización es una forma de expresión.
              Por eso ofrecemos estampadoras y equipos de sublimación que
              combinan precisión, facilidad de uso y calidad profesional. Con
              modelos como la MK-01 y MK-02, acompañamos tanto a quienes inician
              como a quienes producen a gran escala, brindando versatilidad y
              confianza para hacer crecer tu negocio.
            </p>
          </div>

          {/* Imagen */}
          <div className="xl:col-span-6 flex justify-center order-2 max-[1500px]:order-2">
            <img
              src="https://files.cdn.printful.com/o/upload/blog-post-img-upload/fb/fbf6a9e3a5b78e6b0b6e5eb96f389049_t"
              alt="Máquina de sublimación"
              className="w-full h-[250px] xl:h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
