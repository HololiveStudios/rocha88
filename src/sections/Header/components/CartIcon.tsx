export const CartIcon = () => {
  return (
    <div className="box-border caret-transparent ml-[30px] md:ml-10">
      <a
        href="#miniCart"
        className="relative text-2xl box-border caret-transparent inline-block leading-[41.76px] hover:text-orange-400 hover:border-orange-400"
      >
        <i className="box-border caret-transparent leading-6 font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-black before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
        <span className="absolute text-xs bg-orange-400 box-border caret-transparent block h-[19px] leading-[19px] min-w-[19px] text-center px-[5px] rounded-[19px] -right-2.5 bottom-px">
          0
        </span>
      </a>
    </div>
  );
};
