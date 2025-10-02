import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import PresentationCard from "./presentationCard";
import Plancha1 from "../../../public/assets/images/plancha1.jpg";
import Plancha2 from "../../../public/assets/images/plancha2.jpg";
import Plancha3 from "../../../public/assets/images/plancha3.jpg";
export default function presentation() {
  return (
    <div class="w-[2600px] m-auto max-w-[90%] h-[70vh] items-center flex ">
      <div class="grid grid-cols-12 justify-between w-full items-center">
        <div class="flex flex-col gap-3 col-span-5 max-[1500px]:col-span-12  max-[1500px]:text-center ">
          <h1 class="text-9xl font-medium">CAMSA</h1>
          <h2 class="w-[70%] max-[1500px]:w-full">
            En <span class="text-blue-600">Camsa</span> encuentras planchas y
            equipos de estampado confiables, pensados para emprendedores,
            talleres y marcas que buscan crecer con calidad.
          </h2>
          <div class="flex  max-[1300px]:text-center max-[1500px]:justify-center">
            <a
              href=""
              class="bg-[#060E25] p-3 text-white rounded-lg flex items-center gap-2 "
            >
              <FaWhatsapp /> <span>Contáctanos</span>
            </a>
          </div>
        </div>
        <div className="flex absolute right-0 col-span-7 items-center max-[1500px]:hidden">
          <div className="  bg-[#060E25]  grid items-center p-52 rounded-tl-[40px] w-[55rem]  max-[1500px]:w-[50rem]"></div>

          <ul className="absolute -translate-x-[6rem] flex items- w-full gap-5 max-2xl:-translate-x-[3rem] ">
            {cards.map((card, index) => {
              return (
                <PresentationCard
                  key={index}
                  index={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    image: Plancha1,
    title: "Plancha 1",
    description: "Descripción de la plancha 1",
  },
  {
    image: Plancha2,
    title: "Plancha 2",
    description: "Descripción de la plancha 2",
  },
  {
    image: Plancha3,
    title: "Plancha 3",
    description: "Descripción de la plancha 3",
  },
];
