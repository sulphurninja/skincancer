import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Inter } from 'next/font/google';

const dm = Inter({ subsets: ["latin"] });


const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 right-0 py-2 px-4 bg-transparent dark:bg-transparent bg-[#09080A] backdrop-blur-sm dark:backdrop-blur-none z-[50] flex items-center border-b-[1px] border-neutral-900 justify-between '>
            <aside className='flex items-center gap-[2px]'>
            <Link href='/'>
                <Image
                    src="/logo-dark.png"
                    width={100}
                    height={10}
                    alt='Skin Sense logo'
                    className='shadow-sm cursor-pointer'
                />
                </Link>
            </aside>
            <nav className={`absolute left-[50%] top-[50%] mt-2 transform translate-x-[-50%]  dark:text-white text-white translate-y-[-50%] hidden md:block  ${dm.className} `}>
                <ul className="flex items-center gap-4 list-none">
                    <li>
                        <Link href="/Products">Products</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Clients</Link>
                    </li>
                    <li>
                        <Link href="#">Resources</Link>
                    </li>
                    <li>
                        <Link href="#">Documentation</Link>
                    </li>
                    <li>
                        <Link href="#">Enterprise</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
                <Link
                    href="/Diagnosis"
                    className="relative inline-fl ex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {/** WIP : Wire up User */}
                    Get Started
                    </span>
                </Link>
                {//WIP : Wire up User  
                }
                <div className=''>
                    <ThemeToggle />

                </div>
                {/* <UserButton/>  */}

                {/* <MenuIcon className='md:hidden' /> */}




            </aside>
        </header>
    )
}

export default Navbar