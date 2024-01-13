import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-1'>
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Nick Humberstone - Developer</h1>
                <p className='text-[#ADB7BE] mb-4 text-lg lg:text-xl'>
                    I made this site using React. But I mostly want to be doing React Native things.
                </p>
            </div>
            <Image
                src='/images/nh-hero-image.png'
                alt="Nick Humberstone, smiling in a burgundy knitwear pullover"
                width={300}
                height={300} />
        </section >
    )
}

export default HeroSection