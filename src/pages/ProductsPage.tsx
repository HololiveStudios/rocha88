import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { ProductGrid } from "@/components/ProductGrid";

export const ProductsPage = () => {
  const products = [
    {
      productUrl: "https://88brindes.com.br/produto/chaveiro-abridor/266",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/chaveiro-abridor-d1cd8ab992b124e38d213771b3f759b6a2212488.png",
      imageAlt: "Produto - Chaveiro abridor",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Chaveiro abridor",
      productCode: "1000 225"
    },
    {
      productUrl: "https://88brindes.com.br/produto/bolsa-termica-para-vinho-2/271",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-para-vinho-2-1103f55a21926166c28167776d7f45bd5331d3f8.jpg",
      imageAlt: "Produto - Bolsa térmica para vinho 2",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Bolsa térmica para vinho 2",
      productCode: "1000 194 2"
    },
    {
      productUrl: "https://88brindes.com.br/produto/garrafa-termica-com-alca-de-nylon/272",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-de-nylon-fc26e0188621940eaed55545cd8472c0ce42b2f5.png",
      imageAlt: "Produto - Garrafa térmica com alça de nylon",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Garrafa térmica com alça de nylon",
      productCode: "1000 230"
    },
    {
      productUrl: "https://88brindes.com.br/produto/porta-documento/273",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/porta-documento-45cf2b102862fe9d8addcb8b8ad79d88e2d98732.png",
      imageAlt: "Produto - Porta documento",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Porta documento",
      productCode: "1000 232"
    },
    {
      productUrl: "https://88brindes.com.br/produto/garrafa-termica-com-alca-1000ml/173",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-1000ml-8dcc9362232ef168f59b07a0de84a6a5c311ddb8.jpg",
      imageAlt: "Produto - Garrafa Térmica com Alça 1000ML",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Garrafa Térmica com Alça 1000ML",
      productCode: "1000 177"
    },
    {
      productUrl: "https://88brindes.com.br/produto/bolsa-termica-10-litros/177",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-10-litros-2b140a623609a008b10ea65f6393f004b2548b6a.jpg",
      imageAlt: "Produto - Bolsa térmica 10 litros",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Bolsa térmica 10 litros",
      productCode: "1000 159 1"
    },
    {
      productUrl: "https://88brindes.com.br/produto/caderno-a6-capa-dura-14x21-modelo-01/179",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-a6-capa-dura-14x21-modelo-01-e495266e80b63e251d59ed32be55001b989611df.jpg",
      imageAlt: "Produto - Caderno A6 capa dura 14x21 modelo 01",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Caderno A6 capa dura 14x21 modelo 01",
      productCode: "1000 160"
    },
    {
      productUrl: "https://88brindes.com.br/produto/caderno-capa-dura-9x18cm-modelo-02/183",
      imageUrl: "https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-capa-dura-9x18cm-modelo-02-7ba5677a2830089327f2ff0b545c036a9c2104ba.jpg",
      imageAlt: "Produto - Caderno capa dura 9x18cm modelo 02",
      cartUrl: "https://88brindes.com.br/carrinho",
      productTitle: "Caderno capa dura 9x18cm modelo 02",
      productCode: "1000 164"
    }
  ];

  return (
    <body className="relative text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block h-full tracking-[normal] leading-[27.84px] list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-roboto">
      <div className="bg-orange-400 box-border caret-transparent p-1"></div>
      <Header />
      
      <div className="box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-8">
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-3/12 md:max-w-[25%]">
              <div className="bg-white box-border caret-transparent border rounded p-5 border-solid border-black/10">
                <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-[28.2px] mb-5">
                  Categorias
                </h3>
                <ul className="box-border caret-transparent list-none pl-0">
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Canecas e Copos
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Canivetes e Facas
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Chapéus
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Agricultura e Pecuária
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Escritório
                    </a>
                  </li>
                  <li className="box-border caret-transparent mb-3">
                    <a href="#" className="box-border caret-transparent hover:text-orange-400">
                      Bolsas e Mochilas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-9/12 md:max-w-[75%]">
              <div className="box-border caret-transparent flex justify-between items-center mb-5">
                <h2 className="text-neutral-900 text-3xl font-medium box-border caret-transparent leading-[42.3px]">
                  Todos os Produtos
                </h2>
                <select className="box-border caret-transparent px-4 py-2 border rounded border-gray-300">
                  <option>Ordenar por</option>
                  <option>Mais recentes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                  <option>A-Z</option>
                </select>
              </div>
              
              <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                {products.map((product, index) => (
                  <ProductGrid key={index} {...product} />
                ))}
              </div>
              
              <div className="box-border caret-transparent flex justify-center mt-10">
                <nav className="box-border caret-transparent">
                  <ul className="box-border caret-transparent flex list-none pl-0">
                    <li className="box-border caret-transparent mx-1">
                      <a href="#" className="box-border caret-transparent block px-4 py-2 border rounded border-gray-300 hover:bg-orange-400 hover:text-white">
                        1
                      </a>
                    </li>
                    <li className="box-border caret-transparent mx-1">
                      <a href="#" className="box-border caret-transparent block px-4 py-2 border rounded border-gray-300 hover:bg-orange-400 hover:text-white">
                        2
                      </a>
                    </li>
                    <li className="box-border caret-transparent mx-1">
                      <a href="#" className="box-border caret-transparent block px-4 py-2 border rounded border-gray-300 hover:bg-orange-400 hover:text-white">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingButton />
    </body>
  );
};
