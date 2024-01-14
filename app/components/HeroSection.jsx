import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='flex space-between'>
                <div className=''>
                    <p className='text-[#ADB7BE] mb-4 text-lg lg:text-xl'>Hi there, my name is</p>
                    <h1 className="text-white mb-4 ml-4 text-4xl lg:text-6xl font-extrabold">Nick Humberstone</h1>
                    <div className='text-[#ADB7BE] ml-10 mb-4 text-lg lg:text-xl'>
                        <ul className='list-disc space-y-4'>
                            <li>
                                Self-taught React and React Native developer
                            </li>
                            <li>
                                6+ years working in IT Support solving hardware and software issues
                            </li>
                            <li>
                                Volunteer organiser for Toastmasters, The Green Party, UBI Lab, London Vegan Meetup
                            </li>
                            <li>
                                Lover of board games
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src='/images/nh-hero-image.png'
                        alt="Nick Humberstone, smiling in a burgundy knitwear pullover"
                        width={1000}
                        height={1000} />
                </div>
            </div>

            {/* divider between this section and next */}
            <hr className='m-5 opacity-20 mx-auto my-4 h-1 w-3/4 border-0 rounded bg-purple-400' />
        </section >
    )
}

export default HeroSection