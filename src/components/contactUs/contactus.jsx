import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function contactus() {
  return (
    <div className="w-[2600px] m-auto max-w-[90%] h-[70vh] items-center flex mt-40">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl mb-20">CONTACTANOS.</h1>
        <div className="grid  grid-cols-12 w-full gap-20">
          <div className="col-span-6  grid gap-5 items-center justify-between">
            <div className="grid  gap-5">
              <p className="text-3xl text-[#3B3B3B] w-[30rem]">
                “Our work does make sense only if it is a faithfull witness of
                his time”
              </p>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1  bg-[#E8EDF6] flex items-center justify-between p-10 gap-5 rounded-xl">
                <p className="font-semibold">Tik tok</p>
                <p className="text-7xl">
                  <FaTiktok />
                </p>
              </div>
              <div className="col-span-1  bg-[#E8EDF6] flex items-center justify-between p-10 gap-5 rounded-xl">
                <p className="font-semibold">Instagram</p>
                <p className="text-7xl">
                  <FaInstagram />
                </p>
              </div>
              <div className="col-span-1  bg-[#E8EDF6] flex items-center justify-between p-10 gap-5 rounded-xl">
                <p className="font-semibold">Whatsapp</p>
                <p className="text-7xl">
                  <FaWhatsapp />
                </p>
              </div>
              <div className="col-span-1  bg-[#E8EDF6] flex items-center justify-between p-10 gap-5 rounded-xl">
                <p className="font-semibold">Facebook</p>
                <p className="text-7xl">
                  <FaFacebookF />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
