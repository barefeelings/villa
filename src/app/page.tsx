import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}
