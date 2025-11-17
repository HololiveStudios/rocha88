import { CarouselSlide } from "@/sections/Carousel/components/CarouselSlide";

export const Carousel = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative bg-white box-border caret-transparent z-[2]">
        <div className="relative box-border caret-transparent">
          <div className="relative box-border caret-transparent w-full overflow-hidden after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27.84px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
            <CarouselSlide
              href="https://api.whatsapp.com/send/?phone=556240168888&text&type=phone_number&app_absent=0"
              imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/73585e712db3b696fb98ab12bf454c6f.png"
              imageAlt="Slide Image"
              linkVariant="text-black md:text-orange-400"
              imageVariant="text-black md:text-orange-400"
            />
            <CarouselSlide
              href="https://www.88brindes.com.br/produtos/escritorio"
              imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/675ad4a0bf6e3a8b127448d7f42522ae.png"
              containerVariant="hidden"
            />
            <CarouselSlide
              href="https://www.88brindes.com.br/produtos/canivetes-e-facas"
              imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/1e22c99e0adce29cad2afbb606c1a7f6.png"
              containerVariant="hidden"
            />
            <CarouselSlide
              href="https://88brindes.com.br/produtos/canecas-e-copos"
              imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/35e62e19045166d6c7d9afbade1cd9a4.png"
              containerVariant="hidden"
            />
            <CarouselSlide
              href="https://www.88brindes.com.br/produtos/chapeus"
              imageUrl="https://c.animaapp.com/mi3n31pkq3zbsu/assets/4efc11589b95d7317bd2de4cd020595d.png"
              containerVariant="hidden"
            />
          </div>
          <a
            href="#carouselExampleControls"
            role="button"
            className="absolute text-white items-center box-border caret-transparent flex justify-center opacity-50 text-center w-[15%] z-[1] left-0 inset-y-0"
          >
            <span className="bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27%23fff%27%20width=%278%27%20height=%278%27%20viewBox=%270%200%208%208%27%3e%3cpath%20d=%27M5.25%200l-4%204%204%204%201.5-1.5L4.25%204l2.5-2.5L5.25%200z%27/%3e%3c/svg%3e)] bg-no-repeat bg-size-[100%_100%] box-border caret-transparent block h-5 w-5 bg-center"></span>
          </a>
          <a
            href="#carouselExampleControls"
            role="button"
            className="absolute text-white items-center box-border caret-transparent flex justify-center opacity-50 text-center w-[15%] z-[1] right-0 inset-y-0"
          >
            <span className="bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27%23fff%27%20width=%278%27%20height=%278%27%20viewBox=%270%200%208%208%27%3e%3cpath%20d=%27M2.75%200l-1.5%201.5L3.75%204l-2.5%202.5L2.75%208l4-4-4-4z%27/%3e%3c/svg%3e)] bg-no-repeat bg-size-[100%_100%] box-border caret-transparent block h-5 w-5 bg-center"></span>
          </a>
        </div>
        <div className="box-border caret-transparent py-[30px] md:py-[70px]">
          <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <div className="box-border caret-transparent text-center">
                  <h2 className="text-neutral-900 text-6xl font-medium box-border caret-transparent leading-[84.6px] mb-5 font-tuskergrotesk">
                    88 Brindes
                  </h2>
                  <p className="box-border caret-transparent max-w-[780px] m-auto">
                    A 88 Brindes é uma empresa especializada em produtos
                    promocionais com sede localizada em Goiânia - GO. A maioria
                    dos produtos ofertados, são de importação própria,
                    possibilitando assim, preços competitivos aos nossos
                    clientes. Nossas personalizações são feitas internamente,
                    agilizando as entregas dos nossos pedidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/chaveiro-abridor/266"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/chaveiro-abridor-d1cd8ab992b124e38d213771b3f759b6a2212488.png"
                              alt="Produto - Chaveiro abridor"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/chaveiro-abridor/266"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Chaveiro abridor
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 225
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/bolsa-termica-para-vinho-2/271"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-para-vinho-2-1103f55a21926166c28167776d7f45bd5331d3f8.jpg"
                              alt="Produto - Bolsa térmica para vinho 2"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/bolsa-termica-para-vinho-2/271"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Bolsa térmica para vinho 2
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 194 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/garrafa-termica-com-alca-de-nylon/272"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-de-nylon-fc26e0188621940eaed55545cd8472c0ce42b2f5.png"
                              alt="Produto - Garrafa térmica com alça de nylon"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/garrafa-termica-com-alca-de-nylon/272"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Garrafa térmica com alça de nylon
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 230
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/porta-documento/273"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/porta-documento-45cf2b102862fe9d8addcb8b8ad79d88e2d98732.png"
                              alt="Produto - Porta documento"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/porta-documento/273"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Porta documento
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 232
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/garrafa-termica-com-alca-1000ml/173"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-1000ml-8dcc9362232ef168f59b07a0de84a6a5c311ddb8.jpg"
                              alt="Produto - Garrafa Térmica com Alça 1000ML"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/garrafa-termica-com-alca-1000ml/173"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Garrafa Térmica com Alça 1000ML
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 177
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/bolsa-termica-10-litros/177"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/bolsa-termica-10-litros-2b140a623609a008b10ea65f6393f004b2548b6a.jpg"
                              alt="Produto - Bolsa térmica 10 litros"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/bolsa-termica-10-litros/177"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Bolsa térmica 10 litros
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 159 1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/caderno-a6-capa-dura-14x21-modelo-01/179"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-a6-capa-dura-14x21-modelo-01-e495266e80b63e251d59ed32be55001b989611df.jpg"
                              alt="Produto - Caderno A6 capa dura 14x21 modelo 01"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/caderno-a6-capa-dura-14x21-modelo-01/179"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Caderno A6 capa dura 14x21 modelo 01
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 160
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/caderno-capa-dura-9x18cm-modelo-02/183"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caderno-capa-dura-9x18cm-modelo-02-7ba5677a2830089327f2ff0b545c036a9c2104ba.jpg"
                              alt="Produto - Caderno capa dura 9x18cm modelo 02"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/caderno-capa-dura-9x18cm-modelo-02/183"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Caderno capa dura 9x18cm modelo 02
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 164
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/necessaire-em-couro-sintetico/184"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/necessaire-em-couro-sintetico-aae52def8d6fdafc9a363929ed5fee7490059356.jpg"
                              alt="Produto - Nécessaire em couro sintético"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/necessaire-em-couro-sintetico/184"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Nécessaire em couro sintético
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 165
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/mochila-para-notebook-modelo-02/186"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/mochila-para-notebook-modelo-02-28a286a56f1035f6dfa2d4093e4c17b0f081f360.png"
                              alt="Produto - Mochila para notebook modelo 02"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/mochila-para-notebook-modelo-02/186"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Mochila para notebook modelo 02
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 166 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/kit-facas-inox-7-pecas-com-suporte/188"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/kit-facas-inox-7-pecas-com-suporte-50ba3e1e2dc527d278138f1790d0c423b4061801.jpg"
                              alt="Produto - Kit Facas inox 7 peças com suporte"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/kit-facas-inox-7-pecas-com-suporte/188"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Kit Facas inox 7 peças com suporte
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 167
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/sacola-em-tnt-com-alca/189"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/sacola-em-tnt-com-alca-561a0df513a2426339b9980fae0cd2419aaec024.jpg"
                              alt="Produto - Sacola em TNT com alça"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/sacola-em-tnt-com-alca/189"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Sacola em TNT com alça
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 169
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/faca-pescador-5-polegadas/196"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/faca-pescador-5-polegadas-31154681ffd3304bfe441d041dfeeca016aaaa26.jpg"
                              alt="Produto - Faca pescador 5 polegadas"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/faca-pescador-5-polegadas/196"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Faca pescador 5 polegadas
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 155
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/mala-de-viagem-executivo/199"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/mala-de-viagem-executivo-c7a67bd31a26adce3b31cedb7e35ba38454bf760.jpg"
                              alt="Produto - Mala de viagem executivo"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/mala-de-viagem-executivo/199"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Mala de viagem executivo
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 172
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/garrafa-termica-com-alca-650ml/202"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/garrafa-termica-com-alca-650ml-6a9ac4336613a14ba7d443a3173a1194ba13d248.jpg"
                              alt="Produto - Garrafa Térmica com Alça 650ML"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/garrafa-termica-com-alca-650ml/202"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Garrafa Térmica com Alça 650ML
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 179
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/conjunto-para-vinho-caixa-de-bambu/204"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/conjunto-para-vinho-caixa-de-bambu-8ccd7d741bbbe15ca92177d32f4f5fd916a02698.jpg"
                              alt="Produto - Conjunto para vinho caixa de bambu"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/conjunto-para-vinho-caixa-de-bambu/204"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Conjunto para vinho caixa de bambu
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 180 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/chaveiro-premium-modelo-001/207"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/chaveiro-premium-modelo-001-c507623efbaf5a5d5ca5dc462b077d0ef2438eb3.jpg"
                              alt="Produto - Chaveiro premium modelo 001"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/chaveiro-premium-modelo-001/207"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Chaveiro premium modelo 001
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 182 1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/fogareiro-a-gas-3-queimadores/212"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/fogareiro-a-gas-3-queimadores-a90b1f61326d289d37127a789750b7dc85bc36b4.jpg"
                              alt="Produto - Fogareiro a gás 3 queimadores"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/fogareiro-a-gas-3-queimadores/212"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Fogareiro a gás 3 queimadores
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 186 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/relogio-parede/214"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/relogio-parede-bf4b3687e57f1307b49763ba28bdcd2f387da2dd.jpg"
                              alt="Produto - Relógio parede"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/relogio-parede/214"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Relógio parede
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 188
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/caneta-esferografica-aluminio-modelo-002/216"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/caneta-esferografica-aluminio-modelo-002-f88c30c364d5dc51779831de9f5015f91038c6f0.jpg"
                              alt="Produto - Caneta esferográfica alumínio modelo 002"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/caneta-esferografica-aluminio-modelo-002/216"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Caneta esferográfica alumínio modelo 002
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 190
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/canivete-premium-xr-6/221"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/canivete-premium-xr-6-c0a053106f73ba4f9d3bd15f0ce1dc357a17a2e7.jpg"
                              alt="Produto - Canivete premium XR-6"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/canivete-premium-xr-6/221"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Canivete premium XR-6
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 147
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/canivete-premium-xr-6-com-abridor-de-garrafa/222"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/canivete-premium-xr-6-com-abridor-de-garrafa-f0b2f474f3b964196d26291af7f6171b3df50b6b.jpg"
                              alt="Produto - Canivete premium XR-6 com abridor de garrafa"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/canivete-premium-xr-6-com-abridor-de-garrafa/222"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Canivete premium XR-6 com abridor de garrafa
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 147 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                    <div className="box-border caret-transparent text-center mt-[30px]">
                      <div className="relative box-border caret-transparent">
                        <a
                          href="https://88brindes.com.br/produto/faca-picanheira/248"
                          className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
                        >
                          <picture className="box-border caret-transparent">
                            <img
                              src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/faca-picanheira-4370154b68ede5e02cfb9627c38b67b6bc0a2c78.png"
                              alt="Produto - Faca Picanheira"
                              className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
                            />
                          </picture>
                        </a>
                        <a
                          href="https://88brindes.com.br/carrinho"
                          className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
                        >
                          <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                          Ver Carrinho
                        </a>
                      </div>
                      <div className="box-border caret-transparent mt-5">
                        <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
                          <a
                            href="https://88brindes.com.br/produto/faca-picanheira/248"
                            className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                          >
                            Faca Picanheira
                          </a>
                        </h6>
                        <div className="box-border caret-transparent">
                          <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
                            1000 197
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent h-[500px] object-cover w-full overflow-hidden my-6 py-6">
          <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <div className="relative box-border caret-transparent h-[500px] object-cover w-full overflow-hidden">
                  <img
                    src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/maxresdefault.jpg"
                    alt="Video - 88 Brindes"
                    className="box-border caret-transparent max-w-full"
                  />
                  <div className="box-border caret-transparent">
                    <a
                      href="https://www.youtube.com/watch?v=CiYTfn2ZJxc"
                      className="absolute box-border caret-transparent block z-[3] left-2/4 top-[40%] hover:text-orange-400 hover:border-orange-400"
                    >
                      <i className="text-[62px] box-border caret-transparent leading-[60px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[62px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[60px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:left-0 before:top-0 before:font-eleganticons"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-gray-200 box-border caret-transparent pb-[60px] border-b md:pb-[120px]">
          <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <div className="bg-gray-100 box-border caret-transparent px-[15px] py-[50px] md:px-[70px]">
                  <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
                      <div className="box-border caret-transparent mb-10 md:mb-0">
                        <h4 className="text-neutral-900 text-[22px] font-medium box-border caret-transparent leading-[31.02px] md:text-[26px] md:leading-[36.66px]">
                          Assine já
                        </h4>
                        <p className="box-border caret-transparent">
                          Se inscreva e fique por dentro de novidades e
                          descontos exclusivos.
                        </p>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[58.3333%] md:shrink-0 md:max-w-[58.3333%]">
                      <div className="box-border caret-transparent">
                        <form className="relative box-border caret-transparent">
                          <input
                            type="hidden"
                            name="_token"
                            value="xMV8kjRj3FOv4IxITuswK9gTzaAhVfAfMDXuWUoq"
                            className="bg-transparent box-border caret-transparent hidden text-start p-0"
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            className="box-border caret-transparent h-[54px] text-start w-full pl-5 pr-[70px] py-2.5"
                          />
                          <button
                            type="submit"
                            className="absolute bg-transparent caret-transparent block h-[54px] text-center px-[30px] py-0 right-[15px] top-0"
                          >
                            <i className="box-border caret-transparent leading-4 font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent m-auto">
          <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[35.25px] text-center m-2 md:text-3xl md:leading-[42.3px]">
            Últimas do nosso instagram
          </h3>
          <p className="box-border caret-transparent text-center m-2">
            <a
              href="https://www.instagram.com/88brindes/"
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              Siga nossas redes sociais
            </a>
          </p>
          <div className="box-border caret-transparent"></div>
        </div>
      </div>
      <div className="box-border caret-transparent mt-6 mx-auto">
        <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
          <div className="text-zinc-800 bg-white border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-gray-200 box-border caret-transparent mt-12 py-2 border-t">
            <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[35.25px] text-center m-2 md:text-3xl md:leading-[42.3px]">
              Alguns de nossos clientes
            </h3>
            <div className="box-border caret-transparent text-center py-[30px] md:py-10">
              <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sky-50 bg-yellow-500 box-border caret-transparent">
        <div className="box-border caret-transparent py-[30px]">
          <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
            <div className="box-border caret-transparent flex flex-wrap mb-[-35px] ml-[-15px] mr-[-15px]">
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-[30px] px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
                <h6 className="text-neutral-900 text-lg font-medium box-border caret-transparent leading-[25.38px] mt-[-3px] mb-5">
                  Endereço
                </h6>
                <ul className="box-border caret-transparent list-none pl-0">
                  <li className="box-border caret-transparent mb-1">
                    <i className="box-border caret-transparent leading-4 mr-2.5 font-eleganticons before:accent-auto before:box-border before:caret-transparent before:text-sky-50 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-eleganticons"></i>
                    Av. Rio Verde, 8250 - Quadra 75, Lote 09 - Jd. Presidente -
                    Goiânia - GO - 74353-520
                  </li>
                  <li className="box-border caret-transparent">
                    <i className="box-border caret-transparent leading-4 mr-2.5 font-eleganticons before:accent-auto before:box-border before:caret-transparent before:text-sky-50 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-eleganticons"></i>
                    <a
                      href="tel://6240168888"
                      className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                    >
                      (62) 4016-8888
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-[30px] px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                <h6 className="text-neutral-900 text-lg font-medium box-border caret-transparent leading-[25.38px] mt-[-3px] mb-2.5">
                  Ajuda &amp; Informações
                </h6>
                <ul className="box-border caret-transparent list-none pl-0">
                  <li className="box-border caret-transparent mb-1">
                    <a
                      href="https://88brindes.com.br/institucional/termos-e-condicoes"
                      className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                    >
                      Termos e condições
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="https://88brindes.com.br/produtos"
                      className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                    >
                      Produtos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-[30px] px-[15px] md:basis-[16.6667%] md:shrink-0 md:max-w-[16.6667%]">
                <h6 className="text-neutral-900 text-lg font-medium box-border caret-transparent leading-[25.38px] mt-[-3px] mb-2.5">
                  Sobre nós
                </h6>
                <ul className="box-border caret-transparent list-none pl-0">
                  <li className="box-border caret-transparent mb-1">
                    <a
                      href="https://88brindes.com.br/institucional/faq"
                      className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="box-border caret-transparent">
                    <a
                      href="/fale-conosco"
                      className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                    >
                      Fale conosco
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-[30px] px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
                <h6 className="text-neutral-900 text-lg font-medium box-border caret-transparent leading-[25.38px] mt-[-3px] mb-2.5">
                  Fique por dentro
                </h6>
                <div className="box-border caret-transparent mt-2.5">
                  <input
                    type="text"
                    placeholder="Seu e-mail"
                    className="text-white bg-transparent border-b-zinc-300 box-border caret-transparent text-start w-full pl-0 pr-10 py-0 border-t-white border-t-0 border-x-white border-x-0 border-b"
                  />
                  <button className="absolute bg-transparent caret-transparent block text-center right-[15px]">
                    <i className="box-border caret-transparent leading-4 font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-sky-50 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent pb-[30px]">
          <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <span className="box-border caret-transparent block text-center mt-[30px]">
                  © 2025 88 Brindes. Todos os direitos reservados.
                  <a
                    href="https://ajungsolutions.com/"
                    className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                  >
                    Desenvolvido por A. Jung
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
