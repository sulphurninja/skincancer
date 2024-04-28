"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { Inter } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export function Hero() {
  return (
    <HeroHighlight className=''>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ${inter.className} `}
      >
        With a simple image upload, AI will{" "}
        <Highlight className="text-black dark:text-white">
          Detect Skin Cancer
        </Highlight>
      </motion.h1>
      <div className="flex justify-center">
  
        <Link
          href="http://skin.test.woza.work/"
          className="relative inline-flex h-12 mt-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className={` ${inter.className} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xl font-medium text-white backdrop-blur-3xl`}>
            {/** WIP : Wire up User */}
            Get Started
          </span>
        </Link>
      </div>
    </HeroHighlight>
  );
}
