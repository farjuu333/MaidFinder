import FeaturedRooms from "@/components/FeaturedRooms";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <FeaturedRooms />
      <WhyChooseUs />
      <Statistics/>
    </div>
  );
}
