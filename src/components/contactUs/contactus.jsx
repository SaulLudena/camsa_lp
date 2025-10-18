import { FaTiktok, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Contactus() {
  return (
    <div className="w-full max-w-[90%] m-auto min-h-[70vh] flex items-center mt-20 xl:mt-40">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl xl:text-5xl mb-10 xl:mb-20">CONTÁCTANOS.</h1>

        <div className="grid grid-cols-1 xl:grid-cols-12 w-full gap-10 xl:gap-20">
          {/* Texto */}
          <div className="xl:col-span-6 flex flex-col justify-center gap-5 order-1">
            <p className="text-2xl xl:text-3xl text-[#3B3B3B] max-w-[30rem] leading-relaxed">
              “En CAMSA estamos aquí para asesorarte y ayudarte a elegir la
              estampadora ideal para tu negocio. Escríbenos y te responderemos
              con la atención que mereces.”
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2">
            <div className="bg-[#E8EDF6] flex items-center justify-between p-6 xl:p-10 gap-5 rounded-xl">
              <p className="font-semibold">TikTok</p>
              <p className="text-5xl xl:text-7xl">
                <FaTiktok />
              </p>
            </div>
            <div className="bg-[#E8EDF6] flex items-center justify-between p-6 xl:p-10 gap-5 rounded-xl">
              <p className="font-semibold">Instagram</p>
              <p className="text-5xl xl:text-7xl">
                <FaInstagram />
              </p>
            </div>
            <div className="bg-[#E8EDF6] flex items-center justify-between p-6 xl:p-10 gap-5 rounded-xl">
              <p className="font-semibold">Whatsapp</p>
              <p className="text-5xl xl:text-7xl">
                <FaWhatsapp />
              </p>
            </div>
            <div className="bg-[#E8EDF6] flex items-center justify-between p-6 xl:p-10 gap-5 rounded-xl">
              <p className="font-semibold">Facebook</p>
              <p className="text-5xl xl:text-7xl">
                <FaFacebookF />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
