import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />

    </div>
  );
}
