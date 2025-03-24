import About from "@/Components/About";
import HeroSection from "@/Components/HeroSection";
import OurGallery from "@/Components/OurGallery";
import OurServices from "@/Components/OurServices";
import SomeData from "@/Components/SomeData";
import { HeroParallax } from "@/Components/ui/hero-parallax";
import { ImagesSlider } from "@/Components/ui/images-slider";
import Image from "next/image";

export default function Home() {
  return (
<main className="">
  <HeroSection/>
  <About/>
<OurServices/>
<SomeData/>
<OurGallery/>
</main>
  );
}
