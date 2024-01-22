"use client";
import React, { useState } from 'react'


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
        <section className='grid md:grid-cols-2 my-12 md:my-12 gap-4 relative'>
            <div>
                <h2 className='text-3xl font-bold text-center mb-2'>Get in touch</h2>
                <p className='text-[#adb7be] mb-2 max-w-md'>Drop me an email if you want to connect. Face to face, over a coffee, is usually best.</p>

            </div>
            <div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input type="email" name="email" id="email" required className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder='name@email.com' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input type="text" name="subject" id="subject" required className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's get coffee" />
                    </div>
                    <div className='mb-2'>
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