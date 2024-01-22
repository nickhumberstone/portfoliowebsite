import React from 'react'
import GithubIcon from "/public/icons8-github-96.png"
import LinkedinIcon from "/public/icons8-linkedin-96.png"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <section className="footer">
            <div className="p-5 w-64 mx-auto">
                <div className='socials flex gap-4 justify-center space-around'>
                    <Link href="https://github.com/nickhumberstone">
                        <Image src={GithubIcon} alt="Github Icon" width="60" />
                    </Link>
                    <Link href="https://linkedin.com/nickhumberstone">
                        <Image src={LinkedinIcon} alt="LinkedIn Icon" width="60" />
                    </Link>
                </div>
                <p className=" pt-3 text-slate-600 text-center">All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer