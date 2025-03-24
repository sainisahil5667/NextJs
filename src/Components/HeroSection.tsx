"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { WavyBackground } from "./ui/wavy-background";
import Link from "next/link";



function HeroSection() {
  return (
    <div className="h-[auto]  w-full flex flex-col items-center justify-center relative overflow-hidden
    ">
      <WavyBackground>
<div className="p-4 relative w-full text-center text-white
">
    <h1
    className="text-6xl font-bold mb-2"
    >Welcome to the World</h1>
    <p className="text-2xl mb-2">Explore, Learn, and Build with our Comprehensive API Learning Platform</p>
    <Link href={"/contact"}>
    <button style={{border:"1px solid white", padding:"10px", cursor:"pointer"}}> Explore More  </button>
    </Link>
</div>
</WavyBackground>

   </div>
  )
}

export default HeroSection
