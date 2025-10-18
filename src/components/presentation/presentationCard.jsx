import Image from "next/image";

export default function PresentationCard({ index, image, title, description }) {
  return (
    <li className="bg-[#ffffff18] shadow-2xl max-2xl:text-xs">
      <Image
        src={image}
        alt="Plancha 1"
        className="w-72 h-72 object-cover rounded-t-xl "
      />
      <div className="bg-white p-4 rounded-b-xl">
        <h1
          className={`${
            index === 0 ? "text-[#051026] font-bold" : " text-[#777F8E]"
          }`}
        >
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </li>
  );
}
