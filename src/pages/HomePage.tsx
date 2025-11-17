import { Header } from "@/sections/Header";
import { Carousel } from "@/sections/Carousel";
import { CategorySection } from "@/sections/CategorySection";
import { FeaturedSection } from "@/sections/FeaturedSection";
import { VideoSection } from "@/sections/VideoSection";
import { Newsletter } from "@/sections/Newsletter";
import { InstagramSection } from "@/sections/InstagramSection";
import { ClientsSection } from "@/sections/ClientsSection";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const HomePage = () => {
  return (
    <body className="relative text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block h-full tracking-[normal] leading-[27.84px] list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-roboto">
      <div className="bg-orange-400 box-border caret-transparent p-1"></div>
      <Header />
      <Carousel />
      <CategorySection />
      <FeaturedSection />
      <VideoSection />
      <Newsletter />
      <InstagramSection />
      <ClientsSection />
      <Footer />
      <FloatingButton />
    </body>
  );
};
