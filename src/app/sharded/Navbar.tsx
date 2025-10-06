"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const navitem = [
        {
            name: 'Explore',
            url: '/',
        },
        {
            name: 'Games',
            url: '/',
        },
        {
            name: 'Join',
            url: '/',
        },
        {
            name: 'Read',
            url: '/',
        },
        {
            name: 'Contact',
            url: '/',
        }
    ]

    return (
        <div>
            <nav className="bg-white w-full shadow-md relative z-20">
                {/* Desktop Navigation */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <div className="absolute left-0 right-0 top-0">
                                <Image 
                                    src={"/logo.png"} 
                                    alt="logo" 
                                    width={150} 
                                    height={150}
                                    className="hidden md:block"
                                />

                                <Image 
                                    src={"/logo.png"} 
                                    alt="logo" 
                                    width={100} 
                                    height={100}
                                    className="md:hidden block"
                                />
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex flex-row gap-6 lg:gap-10 text-black ml-28 lg:ml-40">
                            {navitem.map((n, index) => (
                                <Link 
                                    key={`${n.url}-${index}`} 
                                    href={n.url} 
                                    className="hover:text-blue-600 transition-colors duration-200 font-medium"
                                >
                                    {n.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button with Sheet */}
                        <div className="md:hidden ml-auto z-20">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant={"outline"}><Menu className="text-black" /></Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                                    <SheetHeader>
                                        <SheetTitle className="mt-8">Stroyed</SheetTitle>
                                        <div className="flex flex-col space-y-4 mt-5">
                                            {navitem.map((n, index) => (
                                                <Link 
                                                    key={`${n.url}-${index}-mobile`} 
                                                    href={n.url}
                                                    className="text-gray-500 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                                                >
                                                    {n.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;