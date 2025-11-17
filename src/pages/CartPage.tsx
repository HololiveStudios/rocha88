import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const CartPage = () => {
  return (
    <body className="relative text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block h-full tracking-[normal] leading-[27.84px] list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-roboto">
      <div className="bg-orange-400 box-border caret-transparent p-1"></div>
      <Header />
      
      <div className="box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
          <h2 className="text-neutral-900 text-3xl font-medium box-border caret-transparent leading-[42.3px] mb-8">
            Carrinho de Compras
          </h2>
          
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-8/12 md:max-w-[66.6667%]">
              <div className="bg-white box-border caret-transparent border rounded p-5 mb-5 border-solid border-black/10">
                <p className="text-center box-border caret-transparent py-10">
                  Seu carrinho está vazio
                </p>
                <div className="text-center box-border caret-transparent">
                  <a
                    href="/produtos"
                    className="bg-orange-400 text-white box-border caret-transparent inline-block px-8 py-3 rounded hover:bg-orange-500"
                  >
                    Continuar Comprando
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-4/12 md:max-w-[33.3333%]">
              <div className="bg-gray-100 box-border caret-transparent border rounded p-5 border-solid border-black/10">
                <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-[28.2px] mb-5">
                  Resumo do Pedido
                </h3>
                <div className="box-border caret-transparent flex justify-between mb-3">
                  <span>Subtotal:</span>
                  <span className="font-medium">R$ 0,00</span>
                </div>
                <div className="box-border caret-transparent flex justify-between mb-5 pb-5 border-b border-gray-300">
                  <span>Frete:</span>
                  <span className="font-medium">A calcular</span>
                </div>
                <div className="box-border caret-transparent flex justify-between mb-5 text-lg font-medium">
                  <span>Total:</span>
                  <span>R$ 0,00</span>
                </div>
                <a
                  href="/finalizar-orcamento"
                  className="bg-green-600 text-white box-border caret-transparent block text-center w-full px-8 py-3 rounded hover:bg-green-700"
                >
                  Finalizar Orçamento
                </a>
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
