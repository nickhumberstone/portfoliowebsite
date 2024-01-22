import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section>
            <p className='text-[#ADB7BE] opacity-50 ml-4 mb-2 text-lg lg:text-xl'>Hi, my name is</p>
            <h1 className="text-white mb-3 ml-4 text-4xl lg:text-6xl font-extrabold">Nick Humberstone</h1>
            <div className='text-[#ADB7BE] opacity-50 ml-5 text-lg lg:text-xl'>
                <p className='mb-2'>I like solving puzzles.</p>
                <p>In exchange for money, I could solve puzzles for you.</p>
            </div>
        </section >
    )
}

export default HeroSection