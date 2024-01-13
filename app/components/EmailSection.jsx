"use client";
import React, { useState } from 'react'
import GithubIcon from "/public/icons8-github-96.png"
import LinkedinIcon from "/public/icons8-linkedin-96.png"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top- -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Get in touch</h5>
                <p className='text-[#adb7be] mb-4 max-w-md'>Drop me an email if you're interested in having a conversation</p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/nickhumberstone">
                        <Image scr={GithubIcon} alt="Github Icon"></Image>
                    </Link>
                    <Link href="https://linkedin.com/nickhumberstone">
                        <Image scr={LinkedinIcon} alt="LinkedIn Icon"></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input type="email" name="email" id="email" required className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder='name@email.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input type="text" name="subject" id="subject" required className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder='Reaching out' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Your message</label>
                        <textarea type="text" name="message" id="message" required className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder='Hello there, I wanted to say...' />
                    </div>
                    <button type="submit" className='bg-purple-500 hover:bg-purple-600 py-2.5 px-5 rounded-xl'>Send Message</button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">Email Sent Successfully.</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection