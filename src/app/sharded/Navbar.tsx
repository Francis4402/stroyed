"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <nav className="bg-white w-full shadow-md relative">
                {/* Desktop Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <div className="absolute left-0 right-0 top-0">
                                <Image 
                                    src={"/logo.png"} 
                                    alt="logo" 
                                    width={150} 
                                    height={150}
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

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Hamburger icon */}
                                <svg
                                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* Close icon */}
                                <svg
                                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navitem.map((n, index) => (
                            <Link 
                                key={`${n.url}-${index}-mobile`} 
                                href={n.url}
                                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {n.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;