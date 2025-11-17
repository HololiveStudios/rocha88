import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="text-sky-50 bg-yellow-500 box-border caret-transparent">
      <FooterContent />
      <FooterCopyright />
    </div>
  );
};
