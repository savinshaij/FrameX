"use client"
import Contact from "@/components/contact/Contact";
import Accordion from "@/components/faq/Faq";

import Hero from "@/components/hero/Hero";
import FeaturesSection from "@/components/mainFeatures/FeaturesBox";
import Features from "@/components/mainFeatures/MainFeatures";
import Testimorals from "@/components/testimonials/testimorials";
import Recuriters from "@/components/topRecuriters/Recuriters";


import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-rich-black-dark">
      
      <Hero/>
      <FeaturesSection/>
      <Features/>
     <Recuriters/>
      <Testimorals/>
      <Accordion/>
     
      <Contact/>
    </main>
  );
}
