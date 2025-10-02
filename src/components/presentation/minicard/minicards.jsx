import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
export default function Minicards() {
  return (
    <div className="w-[2600px] m-auto max-w-[70%]">
      <h1 className="text-center mb-5">Tu mejor eleccion porque</h1>

      <div className="grid grid-cols-3  center justify-center  gap-10 max-[1500px]:grid-cols-2">
        <div className="rounded-4xl bg-[#E8EDF6] p-10 grid gap-5">
          <div>
            <div className="flex">
              <h2 className="text-2xl font-bold bg-[#051026] text-white p-5 rounded-2xl">
                <IoTimeOutline />
              </h2>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">Puntualidad garantizada</p>
            <p className="text-lg">Entrega rápida y segura a todo el país</p>
          </div>
        </div>
        <div className="rounded-4xl bg-[#E8EDF6] p-10 grid gap-5">
          <div>
            <div className="flex">
              <h2 className="text-2xl font-bold bg-[#051026] text-white p-5 rounded-2xl">
                <FaCheck />
              </h2>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">Compromiso continuo</p>
            <p className="text-lg">Soporte técnico y asesoria </p>
          </div>
        </div>
        <div className="rounded-4xl bg-[#E8EDF6] p-10 grid gap-5 max-[1500px]:col-span-2">
          <div>
            <div className="flex">
              <h2 className="text-2xl font-bold bg-[#051026] text-white p-5 rounded-2xl">
                <FaShieldAlt />
              </h2>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">Calidad y visión</p>
            <p className="text-lg">Diseños personalizados para durar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
