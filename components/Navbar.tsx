"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from './Mode-toggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/50 sticky backdrop-blur-lg top-0 py-2 md:py-3 px-2 md:px-10 z-50 border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
            <span className="text-xl font-bold">AakashBlog</span>
            </Link>
            <div className="md:flex md:items-center md:space-x-4 hidden"> 
            <Link href="/">
                <span className="">Home</span>
            </Link>
            <Link href="/about">
                <span className="">About</span>
            </Link>
            <Link href="/contact">
                <span className="">Contact</span>
            </Link>
            <Link href="/blog">
                <span className="">Blog</span>
            </Link>
            <ModeToggle/>
        </div>
        <DropdownMenu >
        <ModeToggle/>
        <DropdownMenuTrigger className='bg-background/100'>
        <button className="md:hidden" onClick={toggleMenu} >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
         </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[70vw] h-[80vh]'>
                <DropdownMenuLabel className='font-bold '>Aakash Blogs</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} >
        <Link href="/">
          <span className="block py-2 px-4 ">Home</span>
        </Link>
        <Link href="/about">
          <span className="block py-2 px-4 ">About</span>
        </Link>
        <Link href="/contact">
          <span className="block py-2 px-4 ">Contact</span>
        </Link>
        <Link href="/blog">
          <span className="block py-2 px-4 ">Blog</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;