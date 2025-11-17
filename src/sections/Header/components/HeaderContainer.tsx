import { SearchSection } from "@/sections/Header/components/SearchSection";
import { Logo } from "@/sections/Header/components/Logo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const HeaderContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
      <div className="items-center box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <SearchSection />
        <Logo />
        <HeaderActions />
      </div>
    </div>
  );
};
