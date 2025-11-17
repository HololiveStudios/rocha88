import { ProductGrid } from "@/components/ProductGrid";

export const FeaturedSection = () => {
  return (
    <div className="box-border caret-transparent py-10 md:py-20">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent text-center mb-5 md:text-left">
          <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[35.25px] text-center md:text-3xl md:leading-[42.3px] md:text-left">
            Categorias mais procuradas
          </h3>
        </div>
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-4 px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
            <a
              href="https://88brindes.com.br/produtos/canecas-e-copos"
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              <div className="relative bg-white box-border caret-transparent flex flex-col h-[360px] break-words w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
                <picture className="box-border caret-transparent block break-words w-full">
                  <img
                    src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/c71f9d68d73abf8ca1ec02bf9e25b693.png"
                    alt="Categoria - Canecas e Copos"
                    className="box-border caret-transparent shrink-0 h-[280px] object-cover break-words w-[270px] rounded-t-[3px]"
                  />
                </picture>
                <div className="box-border caret-transparent grow min-h-px break-words p-5">
                  <h5 className="text-neutral-900 text-[19.2px] font-medium box-border caret-transparent leading-[27.072px] break-words text-center mb-3">
                    Canecas e Copos
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-4 px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
            <a
              href="https://88brindes.com.br/produtos/canivetes-e-facas"
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              <div className="relative bg-white box-border caret-transparent flex flex-col h-[360px] break-words w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
                <picture className="box-border caret-transparent block break-words w-full">
                  <img
                    src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/2b68df5c7e19e65aaec0afb70357dfb3.png"
                    alt="Categoria - Canivetes e Facas"
                    className="box-border caret-transparent shrink-0 h-[280px] object-cover break-words w-[270px] rounded-t-[3px]"
                  />
                </picture>
                <div className="box-border caret-transparent grow min-h-px break-words p-5">
                  <h5 className="text-neutral-900 text-[19.2px] font-medium box-border caret-transparent leading-[27.072px] break-words text-center mb-3">
                    Canivetes e Facas
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-4 px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
            <a
              href="https://88brindes.com.br/produtos/chapeus"
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              <div className="relative bg-white box-border caret-transparent flex flex-col h-[360px] break-words w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
                <picture className="box-border caret-transparent block break-words w-full">
                  <img
                    src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/b064749575fe21baeeed29fbb1cd32a9.png"
                    alt="Categoria - Chapéus"
                    className="box-border caret-transparent shrink-0 h-[280px] object-cover break-words w-[270px] rounded-t-[3px]"
                  />
                </picture>
                <div className="box-border caret-transparent grow min-h-px break-words p-5">
                  <h5 className="text-neutral-900 text-[19.2px] font-medium box-border caret-transparent leading-[27.072px] break-words text-center mb-3">
                    Chapéus
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-4 px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
            <a
              href="https://88brindes.com.br/produtos/agricultura-e-pecuaria"
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              <div className="relative bg-white box-border caret-transparent flex flex-col h-[360px] break-words w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
                <picture className="box-border caret-transparent block break-words w-full">
                  <img
                    src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/d0a1a2ac8fa966cea9258fd4bf629b11.png"
                    alt="Categoria - Agricultura e pécuária"
                    className="box-border caret-transparent shrink-0 h-[280px] object-cover break-words w-[270px] rounded-t-[3px]"
                  />
                </picture>
                <div className="box-border caret-transparent grow min-h-px break-words p-5">
                  <h5 className="text-neutral-900 text-[19.2px] font-medium box-border caret-transparent leading-[27.072px] break-words text-center mb-3">
                    Agricultura e pécuária
                  </h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="items-center box-border caret-transparent clear-both flex flex-wrap ml-[-15px] mr-[-15px] pt-[60px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
            <div className="box-border caret-transparent text-center md:text-left">
              <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[35.25px] text-center md:text-3xl md:leading-[42.3px] md:text-left">
                Lançamentos
              </h3>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent max-w-full">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/chaveiro-abridor/266"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/chaveiro-abridor-d1cd8ab992b124e38d213771b3f759b6a2212488.png"
                imageAlt="Produto - Chaveiro abridor"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Chaveiro abridor"
                productCode="1000 225"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/bolsa-termica-para-vinho-2/271"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-para-vinho-2-1103f55a21926166c28167776d7f45bd5331d3f8.jpg"
                imageAlt="Produto - Bolsa térmica para vinho 2"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Bolsa térmica para vinho 2"
                productCode="1000 194 2"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/garrafa-termica-com-alca-de-nylon/272"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-de-nylon-fc26e0188621940eaed55545cd8472c0ce42b2f5.png"
                imageAlt="Produto - Garrafa térmica com alça de nylon"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Garrafa térmica com alça de nylon"
                productCode="1000 230"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/porta-documento/273"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/porta-documento-45cf2b102862fe9d8addcb8b8ad79d88e2d98732.png"
                imageAlt="Produto - Porta documento"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Porta documento"
                productCode="1000 232"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/garrafa-termica-com-alca-1000ml/173"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-1000ml-8dcc9362232ef168f59b07a0de84a6a5c311ddb8.jpg"
                imageAlt="Produto - Garrafa Térmica com Alça 1000ML"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Garrafa Térmica com Alça 1000ML"
                productCode="1000 177"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/bolsa-termica-10-litros/177"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-10-litros-2b140a623609a008b10ea65f6393f004b2548b6a.jpg"
                imageAlt="Produto - Bolsa térmica 10 litros"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Bolsa térmica 10 litros"
                productCode="1000 159 1"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/caderno-a6-capa-dura-14x21-modelo-01/179"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-a6-capa-dura-14x21-modelo-01-e495266e80b63e251d59ed32be55001b989611df.jpg"
                imageAlt="Produto - Caderno A6 capa dura 14x21 modelo 01"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Caderno A6 capa dura 14x21 modelo 01"
                productCode="1000 160"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/caderno-capa-dura-9x18cm-modelo-02/183"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-capa-dura-9x18cm-modelo-02-7ba5677a2830089327f2ff0b545c036a9c2104ba.jpg"
                imageAlt="Produto - Caderno capa dura 9x18cm modelo 02"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Caderno capa dura 9x18cm modelo 02"
                productCode="1000 164"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/necessaire-em-couro-sintetico/184"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/necessaire-em-couro-sintetico-aae52def8d6fdafc9a363929ed5fee7490059356.jpg"
                imageAlt="Produto - Nécessaire em couro sintético"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Nécessaire em couro sintético"
                productCode="1000 165"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/mochila-para-notebook-modelo-02/186"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/mochila-para-notebook-modelo-02-28a286a56f1035f6dfa2d4093e4c17b0f081f360.png"
                imageAlt="Produto - Mochila para notebook modelo 02"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Mochila para notebook modelo 02"
                productCode="1000 166 2"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/kit-facas-inox-7-pecas-com-suporte/188"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/kit-facas-inox-7-pecas-com-suporte-50ba3e1e2dc527d278138f1790d0c423b4061801.jpg"
                imageAlt="Produto - Kit Facas inox 7 peças com suporte"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Kit Facas inox 7 peças com suporte"
                productCode="1000 167"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/sacola-em-tnt-com-alca/189"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/sacola-em-tnt-com-alca-561a0df513a2426339b9980fae0cd2419aaec024.jpg"
                imageAlt="Produto - Sacola em TNT com alça"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Sacola em TNT com alça"
                productCode="1000 169"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/faca-pescador-5-polegadas/196"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/faca-pescador-5-polegadas-31154681ffd3304bfe441d041dfeeca016aaaa26.jpg"
                imageAlt="Produto - Faca pescador 5 polegadas"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Faca pescador 5 polegadas"
                productCode="1000 155"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/mala-de-viagem-executivo/199"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/mala-de-viagem-executivo-c7a67bd31a26adce3b31cedb7e35ba38454bf760.jpg"
                imageAlt="Produto - Mala de viagem executivo"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Mala de viagem executivo"
                productCode="1000 172"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/garrafa-termica-com-alca-650ml/202"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-650ml-6a9ac4336613a14ba7d443a3173a1194ba13d248.jpg"
                imageAlt="Produto - Garrafa Térmica com Alça 650ML"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Garrafa Térmica com Alça 650ML"
                productCode="1000 179"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/conjunto-para-vinho-caixa-de-bambu/204"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/conjunto-para-vinho-caixa-de-bambu-8ccd7d741bbbe15ca92177d32f4f5fd916a02698.jpg"
                imageAlt="Produto - Conjunto para vinho caixa de bambu"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Conjunto para vinho caixa de bambu"
                productCode="1000 180 2"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/chaveiro-premium-modelo-001/207"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/chaveiro-premium-modelo-001-c507623efbaf5a5d5ca5dc462b077d0ef2438eb3.jpg"
                imageAlt="Produto - Chaveiro premium modelo 001"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Chaveiro premium modelo 001"
                productCode="1000 182 1"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/fogareiro-a-gas-3-queimadores/212"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/fogareiro-a-gas-3-queimadores-a90b1f61326d289d37127a789750b7dc85bc36b4.jpg"
                imageAlt="Produto - Fogareiro a gás 3 queimadores"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Fogareiro a gás 3 queimadores"
                productCode="1000 186 2"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/relogio-parede/214"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/relogio-parede-bf4b3687e57f1307b49763ba28bdcd2f387da2dd.jpg"
                imageAlt="Produto - Relógio parede"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Relógio parede"
                productCode="1000 188"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/caneta-esferografica-aluminio-modelo-002/216"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caneta-esferografica-aluminio-modelo-002-f88c30c364d5dc51779831de9f5015f91038c6f0.jpg"
                imageAlt="Produto - Caneta esferográfica alumínio modelo 002"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Caneta esferográfica alumínio modelo 002"
                productCode="1000 190"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/canivete-premium-xr-6/221"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/canivete-premium-xr-6-c0a053106f73ba4f9d3bd15f0ce1dc357a17a2e7.jpg"
                imageAlt="Produto - Canivete premium XR-6"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Canivete premium XR-6"
                productCode="1000 147"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/canivete-premium-xr-6-com-abridor-de-garrafa/222"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/canivete-premium-xr-6-com-abridor-de-garrafa-f0b2f474f3b964196d26291af7f6171b3df50b6b.jpg"
                imageAlt="Produto - Canivete premium XR-6 com abridor de garrafa"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Canivete premium XR-6 com abridor de garrafa"
                productCode="1000 147 2"
              />
              <ProductGrid
                productUrl="https://88brindes.com.br/produto/faca-picanheira/248"
                imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/faca-picanheira-4370154b68ede5e02cfb9627c38b67b6bc0a2c78.png"
                imageAlt="Produto - Faca Picanheira"
                cartUrl="https://88brindes.com.br/carrinho"
                productTitle="Faca Picanheira"
                productCode="1000 197"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
