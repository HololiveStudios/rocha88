export type CarouselSlideProps = {
  href: string;
  imageUrl: string;
  imageAlt?: string;
  containerVariant?: string;
  linkVariant?: string;
  imageVariant?: string;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div
      className={`relative box-border caret-transparent float-left mr-[-100%] w-full ${props.containerVariant || ""}`}
    >
      <a
        href={props.href}
        className={`box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400 ${props.linkVariant || ""}`}
      >
        <img
          src={props.imageUrl}
          alt={props.imageAlt || "Slide Image"}
          className={`box-border caret-transparent w-full ${props.imageVariant || ""}`}
        />
      </a>
    </div>
  );
};
