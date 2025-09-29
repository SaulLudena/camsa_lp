import ProductItem from "./productItem";
export default function products() {
  return (
    <div className="w-[2600px] m-auto max-w-[90%] flex items-start mt-40">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl mb-20">PRODUCTOS.</h1>
        <ul className="grid gap-15">
          {product_list.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const product_list = [
  {
    id: 1,
    images: [
      "https://www.timg.pe/cdn/shop/collections/Estampadoras-de-escritorio-y-hornos-5.webp?v=1715875767&width=750",
      "https://www.timg.pe/cdn/shop/collections/Estampadoras-de-escritorio-y-hornos-5.webp?v=1715875767&width=750",
    ],
    title: "MK-01",
    description: [
      "Camiseta de algodón 100% en color blanco.",
      "La plancha de sublimación MK-01 está diseñada para ofrecerte facilidad, precisión y resultados de calidad profesional desde el primer uso. Personaliza camisetas, tazas y más, con un acabado duradero que hará destacar cada diseño.",
    ],
    description_items: [
      "Calor uniforme para impresiones nitidas",
      "Fácil de usar con controles digitales",
      "Diseño compacto y portátil",
    ],
  },
  {
    id: 2,
    images: [
      "https://www.timg.pe/cdn/shop/collections/Estampadoras-de-escritorio-y-hornos-5.webp?v=1715875767&width=750",
      "https://www.timg.pe/cdn/shop/collections/Estampadoras-de-escritorio-y-hornos-5.webp?v=1715875767&width=750",
    ],
    title: "Camiseta básica blanca",
    description: [
      "Camiseta de algodón 100% en color blanco.",
      "La plancha de sublimación MK-01 está diseñada para ofrecerte facilidad, precisión y resultados de calidad profesional desde el primer uso. Personaliza camisetas, tazas y más, con un acabado duradero que hará destacar cada diseño.",
    ],
    description_items: [
      "Calor uniforme para impresiones nitidas",
      "Fácil de usar con controles digitales",
      "Diseño compacto y portátil",
    ],
  },
];
