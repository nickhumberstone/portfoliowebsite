"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import Link from 'next/link'
import GithubIcon from "/public/icons8-github-96.png"
import LinkedinIcon from "/public/icons8-linkedin-96.png"

const MobileCard = () => {

    return (
        <section>
            <div className="card rounded-lg p-5 bg-secondary w-full h-full">
                <div className="image-container bg-secondary mx-auto w-full h-full">
                <Image src="/images/NickHumberstoneMainImage.JPG" width={300} height={200} alt="Nick Humberstone in a burgundy knitwear jumper, standing in a park with green grass and a treeline in the background." className='mx-auto rounded-xl mb-4' />
                <h1 className="text-primary text-center p-1 text-xl">Nick Humberstone</h1>
                <h2 className="text-primary text-center p-1 text-lg">Software Developer</h2>
                </div>

                <div className="retrospect-button h-10 rounded-lg bg-primary text-secondary  m-2 p-4 justify-center items-center align-middle flex">
                    <a className="text-center" href="mailto:nickhumberstone@gmail.com"><p className="text-center">Sign up for Retrospect (Alpha)</p></a>
                </div>

                <div className="buttons-container text-secondary items-center justify-center flex flex-row m-auto">
                    <a className="m-2 p-2 flex-1 rounded-lg bg-primary" href="/hireme">View my CV</a>
                    <a className="m-2 p-2 flex-1 rounded-lg bg-primary" href="https://github.com/nickhumberstone">GitHub</a>
                    <a className="m-2 p-2 flex-1 rounded-lg bg-primary" href="https://linkedin.com/in/nickhumberstone">LinkedIn</a>
                    <a className="m-2 p-2 flex-1 rounded-lg bg-primary" href="https://google.com">Button</a>
 
                </div>
                </div>
                    <div className='socials p-2 flex gap-4 justify-center space-around'>
                    {/* <Link href="https://github.com/nickhumberstone">
                        <Image src={GithubIcon} alt="Github Icon" width="60" />
                    </Link>
                    <Link href="https://linkedin.com/in/nickhumberstone">
                        <Image src={LinkedinIcon} alt="LinkedIn Icon" width="60" />
                    </Link> */}
                </div>
        </section>
    )
}

export default MobileCard