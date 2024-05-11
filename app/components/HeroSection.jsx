import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className='lg:p-20 p-6 mx-auto w-11/12'>
            <p className='text-primary opacity-50 mb-2 text-lg lg:text-4xl lg:mb-10'>Hello, my name is</p>
            <h1 className="text-primary mb-3 text-4xl -ml-1 lg:text-8xl font-extrabold">Nick Humberstone</h1>
            <div className='text-primary opacity-50 text-lg lg:text-4xl lg:py-10'>
                <p className='mb-2 lg:mb-10'>Self-taught React and React Native developer.</p>
                <p>Looking for new opportunities, new puzzles to solve.</p>
            </div>
        </section >
    )
}

export default HeroSection