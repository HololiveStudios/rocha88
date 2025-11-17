import { CategoryCard } from "@/sections/CategorySection/components/CategoryCard";

export type CategoryGridProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export const CategoryGrid = (props: CategoryGridProps) => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-4 px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
      <a
        href={props.href}
        className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
      >
        <CategoryCard
          imageUrl={props.imageUrl}
          imageAlt={props.imageAlt}
          title={props.title}
        />
      </a>
    </div>
  );
};
