import ProductItem from "./productItem";
import imgmk1a from "../../../public/assets/images/maquinas/MK1-A.png";
import imgmk1b from "../../../public/assets/images/maquinas/MK1-B.png";
import imgmk2a from "../../../public/assets/images/maquinas/MK2-A.png";
import imgmk2b from "../../../public/assets/images/maquinas/MK2-B.png";
import imgmk3a from "../../../public/assets/images/maquinas/MK3-A.png";
import imgmk3b from "../../../public/assets/images/maquinas/MK3-B.png";
export default function Products() {
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
    images: [imgmk1a, imgmk1b],
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
    images: [imgmk2a, imgmk2b],
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
  {
    id: 3,
    images: [imgmk3a, imgmk3b],
    title: "MK-03",
    subtitle: "Potencia industrial, precisión digital",
    description: [
      "Estampadora profesional de nueva generación.",
      "La MK-03 combina potencia industrial con control digital avanzado. Diseñada para altos volúmenes de trabajo, integra sensores inteligentes que garantizan presión y temperatura constantes, optimizando cada impresión con máxima eficiencia y consistencia.",
    ],
    description_items: [
      "Pantalla táctil con control de temperatura y tiempo en tiempo real",
      "Sensores inteligentes de presión automática",
      "Construcción metálica de alta resistencia para uso prolongado",
    ],
  },
];
