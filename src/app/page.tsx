import Hero from "@/features/home/components/hero";
import Services from "@/features/home/components/services";
import Gallery from "@/features/home/components/gallery";
import Studio from "@/features/home/components/studio";
import Reviews from "@/features/home/components/reviews";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <div className="flex flex-col gap-0 md:gap-24 mt-0 md:mt-24">
        <Gallery />
        <Studio />
        <Reviews />
      </div>
    </div>
  );
}
