"use client";
import ProductsCarouselCards from "@/components/ui/ProductsCarouselCards";
import Infinitegrid from "@/components/ui/InfiniteGrid";
import Testimonial from "@/components/ui/Testimonial";
import Hero from "@/components/ui/Hero";
import Legacy from "@/components/ui/Legacy";
import Divider from "@/components/ui/Divider";
import GlowLine from "@/components/ui/GlowLine";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 text-[#CDBE9E]">
      <Hero />

      <div className="w-full min-h-[400px] md:h-screen">
        <Infinitegrid />
      </div>

      <div className="relative w-full">
        <GlowLine orientation="horizontal" position="50%" color="apb" />
      </div>
      <Legacy />
      <Divider variant="dashed" thickness={2} color="#CDBE9E" />
      <Testimonial />
      <ProductsCarouselCards />
      {/* <ImageCarousel /> */}
    </section>
  );
}
