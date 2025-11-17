import { NewsletterForm } from "@/sections/Newsletter/components/NewsletterForm";

export const Newsletter = () => {
  return (
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
                      Se inscreva e fique por dentro de novidades e descontos
                      exclusivos.
                    </p>
                  </div>
                </div>
                <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[58.3333%] md:shrink-0 md:max-w-[58.3333%]">
                  <div className="box-border caret-transparent">
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
