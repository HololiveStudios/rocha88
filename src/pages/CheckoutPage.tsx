import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const CheckoutPage = () => {
  return (
    <body className="relative text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block h-full tracking-[normal] leading-[27.84px] list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-roboto">
      <div className="bg-orange-400 box-border caret-transparent p-1"></div>
      <Header />
      
      <div className="box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
          <h2 className="text-neutral-900 text-3xl font-medium box-border caret-transparent leading-[42.3px] mb-8">
            Finalizar Orçamento
          </h2>
          
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-8/12 md:max-w-[66.6667%]">
              <div className="bg-white box-border caret-transparent border rounded p-5 mb-5 border-solid border-black/10">
                <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-[28.2px] mb-5">
                  Dados para Contato
                </h3>
                
                <form className="box-border caret-transparent">
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                    />
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      CEP *
                    </label>
                    <input
                      type="text"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Endereço *
                    </label>
                    <input
                      type="text"
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-4">
                    <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-6/12 md:max-w-[50%]">
                      <label className="box-border caret-transparent block mb-2 font-medium">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                        required
                      />
                    </div>
                    <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-6/12 md:max-w-[50%]">
                      <label className="box-border caret-transparent block mb-2 font-medium">
                        Estado *
                      </label>
                      <input
                        type="text"
                        className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="box-border caret-transparent mb-4">
                    <label className="box-border caret-transparent block mb-2 font-medium">
                      Observações
                    </label>
                    <textarea
                      className="box-border caret-transparent w-full px-4 py-2 border rounded border-gray-300 h-32"
                      placeholder="Informações adicionais sobre o pedido..."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full w-full px-[15px] md:basis-4/12 md:max-w-[33.3333%]">
              <div className="bg-gray-100 box-border caret-transparent border rounded p-5 mb-5 border-solid border-black/10">
                <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-[28.2px] mb-5">
                  Resumo do Orçamento
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
                <button
                  type="submit"
                  className="bg-green-600 text-white box-border caret-transparent block text-center w-full px-8 py-3 rounded hover:bg-green-700"
                >
                  Solicitar Orçamento
                </button>
              </div>
              
              <div className="bg-yellow-50 box-border caret-transparent border rounded p-5 border-solid border-yellow-300">
                <h4 className="text-neutral-900 font-medium box-border caret-transparent mb-3">
                  Informações Importantes
                </h4>
                <ul className="box-border caret-transparent list-disc pl-5 text-sm">
                  <li className="mb-2">Orçamento sem compromisso</li>
                  <li className="mb-2">Resposta em até 24 horas</li>
                  <li className="mb-2">Personalização disponível</li>
                  <li>Frete calculado após análise</li>
                </ul>
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
