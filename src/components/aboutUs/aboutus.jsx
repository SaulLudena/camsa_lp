import { FaWhatsapp } from "react-icons/fa";

export default function aboutus() {
  return (
    <div className="w-[2600px] m-auto max-w-[90%] h-[70vh] items-center flex mt-40">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl mb-20">NOSOTROS.</h1>
        <div className="grid  grid-cols-12 w-full gap-20">
          <div className="col-span-6  grid gap-5 items-center justify-between">
            <div className="grid  gap-5">
              <p className="text-3xl text-[#3B3B3B] w-[30rem]">
                “Our work does make sense only if it is a faithfull witness of
                his time”
              </p>
              <p className="text-[#3B3B3B]">
                La plancha de sublimación está diseñada para ofrecerte
                facilidad, precisión y resultados de calidad profesional desde
                el primer uso. Personaliza camisetas, tazas y más, con un
                acabado duradero que hará destacar cada diseño. La plancha de
                sublimación MK-02 está diseñada para ofrecerte facilidad,
                precisión y resultados de calidad profesional desde el primer
                uso. Personaliza camisetas, tazas y más, con un acabado duradero
                que hará destacar cada diseño.
              </p>
            </div>
          </div>
          <div className="col-span-6 ">
            <img
              src="https://files.cdn.printful.com/o/upload/blog-post-img-upload/fb/fbf6a9e3a5b78e6b0b6e5eb96f389049_t"
              alt=""
              className="w-[100%] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
