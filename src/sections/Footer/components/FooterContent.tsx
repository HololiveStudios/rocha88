import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent py-[30px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap mb-[-35px] ml-[-15px] mr-[-15px]">
          <FooterColumn
            variant="md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]"
            title="Endereço"
            items={[
              {
                text: "Av. Rio Verde, 8250 - Quadra 75, Lote 09 - Jd. Presidente - Goiânia - GO - 74353-520",
                icon: true,
              },
              { text: "(62) 4016-8888", href: "tel://6240168888", icon: true },
            ]}
          />
          <FooterColumn
            variant="md:basis-3/12 md:shrink-0 md:max-w-[25%]"
            title="Ajuda & Informações"
            items={[
              {
                text: "Termos e condições",
                href: "https://88brindes.com.br/institucional/termos-e-condicoes",
              },
              { text: "Produtos", href: "https://88brindes.com.br/produtos" },
            ]}
          />
          <FooterColumn
            variant="md:basis-[16.6667%] md:shrink-0 md:max-w-[16.6667%]"
            title="Sobre nós"
            items={[
              {
                text: "FAQ",
                href: "https://88brindes.com.br/institucional/faq",
              },
              { text: "Fale conosco", href: "/fale-conosco" },
            ]}
          />
          <FooterColumn
            variant="md:basis-3/12 md:shrink-0 md:max-w-[25%]"
            title="Fique por dentro"
            showEmailInput={true}
          />
        </div>
      </div>
    </div>
  );
};
