import { SearchForm } from "@/sections/Header/components/SearchForm";

export const SearchSection = () => {
  return (
    <div className="relative box-border caret-transparent hidden basis-auto shrink max-w-none min-h-0 min-w-0 w-full px-[15px] md:block md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%] md:min-h-[auto] md:min-w-[auto]">
      <div className="box-border caret-transparent max-w-[275px] w-full ml-4">
        <SearchForm />
      </div>
      <div className="box-border caret-transparent">
        <button className="absolute text-[22px] bg-transparent caret-transparent block leading-[22px] text-center transform-none z-[1] left-0 top-2/4 md:translate-y-[-50.0%]">
          <i className="box-border caret-transparent font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-black before:text-[22px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
        </button>
      </div>
    </div>
  );
};
