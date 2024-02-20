import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4 pt-14">
      
      <Hero/>
      
    </main>
  );
}
