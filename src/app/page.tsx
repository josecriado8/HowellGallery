import Hero from "@/components/Hero";
import GalleryInfo from "@/components/GalleryInfo";
import GalleryGrid from "@/components/GalleryGrid";
import PopularGrid from "@/components/PopularGrid";
import LastSoldGrid from "@/components/LastSoldGrid";
import GalleryEvents from "@/components/GalleryEvents";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <GalleryInfo />
      <GalleryGrid />
      <PopularGrid />
      <LastSoldGrid />
      <GalleryEvents />
      <NewsletterSignup />
    </>
  );
}
