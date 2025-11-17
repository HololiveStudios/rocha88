export type CategoryCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className="relative bg-white box-border caret-transparent flex flex-col h-[360px] break-words w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
      <picture className="box-border caret-transparent block break-words w-full">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="box-border caret-transparent shrink-0 h-[280px] object-cover break-words w-[270px] rounded-t-[3px]"
        />
      </picture>
      <div className="box-border caret-transparent grow min-h-px break-words p-5">
        <h5 className="text-neutral-900 text-[19.2px] font-medium box-border caret-transparent leading-[27.072px] break-words text-center mb-3">
          {props.title}
        </h5>
      </div>
    </div>
  );
};
