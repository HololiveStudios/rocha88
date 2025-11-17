export type ProductCardProps = {
  productUrl: string;
  imageUrl: string;
  imageAlt: string;
  cartUrl: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="relative box-border caret-transparent">
      <a
        href={props.productUrl}
        className="relative box-border caret-transparent block hover:text-orange-400 hover:border-orange-400"
      >
        <picture className="box-border caret-transparent">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent shrink-0 w-full rounded-t-[3px]"
          />
        </picture>
      </a>
      <a
        href={props.cartUrl}
        className="text-white bg-green-600 box-border caret-transparent hidden w-full hover:bg-green-700"
      >
        <i className="box-border caret-transparent inline-block leading-4 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>{" "}
        Ver Carrinho
      </a>
    </div>
  );
};
