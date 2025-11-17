import { ProductCard } from "@/components/ProductCard";

export type ProductGridProps = {
  productUrl: string;
  imageUrl: string;
  imageAlt: string;
  cartUrl: string;
  productTitle: string;
  productCode: string;
};

export const ProductGrid = (props: ProductGridProps) => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
      <div className="box-border caret-transparent text-center mt-[30px]">
        <ProductCard
          productUrl={props.productUrl}
          imageUrl={props.imageUrl}
          imageAlt={props.imageAlt}
          cartUrl={props.cartUrl}
        />
        <div className="box-border caret-transparent mt-5">
          <h6 className="text-neutral-900 font-medium box-border caret-transparent leading-[22.56px] mb-[5px]">
            <a
              href={props.productUrl}
              className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
            >
              {props.productTitle}
            </a>
          </h6>
          <div className="box-border caret-transparent">
            <span className="text-stone-500 text-lg box-border caret-transparent leading-[31.32px]">
              {props.productCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
