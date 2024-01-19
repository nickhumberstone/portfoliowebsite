"use client";
import React, { useState } from 'react'
import Link from "next/link"
import NavLink from "./NavLink"
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"


const navLinksArray = [
    {
        title: "About",
        path: "#About"
    },
    {
        title: "Hearsay App",
        path: "#HearsayApp"
    },
    {
        title: "Hobbies",
        path: "#Hobbies"
    },
    {
        title: "Contact",
        path: "#Contact"
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 inset-x-0 z-10 bg-[#174d25] overflow-auto">
            <div className='flex flex-wrap items-center justify-between px-4 py-2 border'>
                <Link href={"/"} className="text-xl md:text-5xl p-10 text-white font-semibold">humberstone.uk</Link>

                {/* Mobile Hamburger Menu */}
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>

                {/* Desktop Navbar */}
                <div className="menu hidden md:block" id="navbar">
                    <ul className="flex space-x-8 pr-6">
                        {
                            navLinksArray.map((link, index) => (
                                <li key={index} >
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinksArray} /> : null}
        </nav>
    )
}

export default NavBar