import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className='lg:p-20 p-6 mx-auto w-11/12'>
            <p className='text-[#ADB7BE] opacity-50 mb-2 text-lg lg:text-4xl lg:mb-10'>Hello, my name is</p>
            <h1 className="text-white mb-3 text-4xl -ml-1 lg:text-8xl font-extrabold">Nick Humberstone.</h1>
            <div className='text-[#ADB7BE] opacity-50 text-lg lg:text-4xl lg:py-10'>
                <p className='mb-2 lg:mb-10'>I like solving puzzles.</p>
                <p>In exchange for money, I could solve puzzles for you.</p>
            </div>
        </section >
    )
}

export default HeroSection