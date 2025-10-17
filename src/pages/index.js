import Minicards from "@/components/presentation/minicard/minicards";
import Topnav from "@/components/topnav/topnav";
import Presentation from "@/components/presentation/presentation";
import Products from "@/components/products/products";

import Footer from "@/components/footer/footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Camsa</title>
        <meta
          name="description"
          content="Tienda online de productos personalizados."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topnav />
      <Presentation />
      <Minicards />
      <Products />

      <Footer />
    </>
  );
}
