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
      "https://i.pinimg.com/736x/20/9b/6b/209b6bfbea35f93084211b2ffd3700f8.jpg",
      "https://i.pinimg.com/1200x/a5/67/4c/a5674c4086f6a9876fc9feb365204eb9.jpg",
    ],
    title: "MK-01",
    subtitle: "Comparta y fácil de usar",
    description: [
      "Estampadora de sublimación de escritorio.",
      "La MK-01 está diseñada para quienes recién inician en el mundo de la personalización. Compacta y fácil de usar, ofrece resultados de alta calidad en camisetas, tazas y pequeños objetos, garantizando un acabado duradero y profesional.",
    ],
    description_items: [
      "Calor uniforme para impresiones nítidas",
      "Controles digitales intuitivos",
      "Diseño compacto y portátil",
    ],
  },
  {
    id: 2,
    images: [
      "https://www.timg.pe/cdn/shop/collections/Estampadoras-de-escritorio-y-hornos-5.webp?v=1715875767&width=750",
      "https://i.pinimg.com/736x/6c/20/8e/6c208e0e9b45f91e535eb5eedf37772f.jpg",
    ],
    title: "MK-02",
    subtitle: "Supercifie amplia y versátil",
    description: [
      "Estampadora multifuncional de alto rendimiento.",
      "La MK-02 está pensada para producción continua y mayor versatilidad. Con superficie de prensado más amplia y ajustes precisos de presión, temperatura y tiempo, permite trabajar en camisetas, gorras, rompecabezas y otros productos con acabados profesionales.",
    ],
    description_items: [
      "Área de trabajo más grande para proyectos variados",
      "Sistema de ajuste de presión mejorado",
      "Estructura reforzada para uso intensivo",
    ],
  },
];
