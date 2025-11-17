import { CartIcon } from "@/sections/Header/components/CartIcon";
import { MobileMenuIcon } from "@/sections/Header/components/MobileMenuIcon";
import { UserIcon } from "@/sections/Header/components/UserIcon";

export const HeaderActions = () => {
  return (
    <div className="relative box-border caret-transparent basis-6/12 shrink-0 max-w-[50%] w-full px-[15px] md:basis-[33.3333%] md:max-w-[33.3333%]">
      <div className="items-center box-border caret-transparent flex justify-end text-right">
        <CartIcon />
        <MobileMenuIcon />
        <UserIcon />
      </div>
    </div>
  );
};
