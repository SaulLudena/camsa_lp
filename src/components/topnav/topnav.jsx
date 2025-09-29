import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../../public/assets/images/Logo.png";
import Image from "next/image";
export default function topnav() {
  return (
    <div className="w-[2600px] m-auto max-w-[90%] flex items-start ">
      <div className="flex justify-between  w-full">
        <div className="flex gap-5 justify-between w-full items-center">
          <div className="flex items-center gap-10 w-full">
            <a href="/" className="bg-[#060E25] px-10 py-15">
              <Image src={Logo} alt="Logo" className="w-30" />
            </a>
            <ul className="flex gap-3">
              <li className="">
                <a href="#Home" className="group py-10 grid gap-2">
                  <span className="px-5">Inicio</span>
                  <div className="border group-hover:opacity-100 opacity-0 transition duration-200"></div>
                </a>
              </li>
              <li className="">
                <a href="#Productos" className="group py-10 grid gap-2">
                  <span className="px-5">Productos</span>
                  <div className="border group-hover:opacity-100 opacity-0 transition duration-200"></div>
                </a>
              </li>
              <li className="">
                <a href="#Nosotros" className="group py-10 grid gap-2">
                  <span className="px-5">Nosotros</span>
                  <div className="border group-hover:opacity-100 opacity-0 transition duration-200"></div>
                </a>
              </li>
              <li className="">
                <a href="#Contacto" className="group py-10 grid gap-2">
                  <span className="px-5">Contacto</span>
                  <div className="border group-hover:opacity-100 opacity-0 transition duration-200"></div>
                </a>
              </li>
            </ul>
          </div>
          <a
            href=""
            className="bg-[#060E25] p-3 text-white rounded-lg flex items-center gap-2 rounded-tl-2xl"
          >
            <FaWhatsapp /> <span>Whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
