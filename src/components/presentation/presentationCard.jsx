import Image from "next/image";

export default function presentationCard({
  index,
  key,
  image,
  title,
  description,
}) {
  return (
    <li className="bg-[#ffffff18] shadow-2xl">
      <Image src={image} alt="Plancha 1" className="w-64 h-64 object-cover" />
      <div className="bg-white p-3 rounded-b-xl">
        <h1 className={`${index === 0 ? "text-[#051026]" : " text-[#777F8E]"}`}>
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </li>
  );
}
