import React from 'react'
import LinkBlock from '../blocks/LinkBlock'
import ImageBlock from '../blocks/ImageBlock'

const IntroductionSection = () => {
    return (
        <div className="md:flex justify-evenly items-center mb-2">
            <div className="flex-1">
                <h1 className="text-title text-center text-xl">Nick Humberstone</h1>
                <h2 className="text-subtitle text-center text-lg">Software Engineer</h2>
                <p className="text-paragraph opacity-50 mx-4 italic text-center">London, UK</p>
                <LinkBlock linkText="Contact Me" href="mailto:nickhumberstone@gmail.com" />
                <p className="hidden md:block text-paragraph opacity-50 mx-4 italic text-center">
                    Growing up I wanted to be an inventor. I'm now a self-taught software engineer that can bring my ideas to life.
                </p>
                <p className="hidden text-paragraph opacity-50 mx-4 italic text-center">
                    Software Engineer with 7+ years of experience working in Digital Support. I enjoy building things and solving real-world problems.
                    A fan of Extreme Programming because it focuses on what works and doubles down on it, delivering efficient, robust, and readable code.
                    I’m a confident and clear communicator and a regular attendee at London’s many software engineering meetups.
                </p>
            </div>
            <ImageBlock
                src="/images/NickHumberstone.jpeg"
                width="493"
                height="640"
                alt="Nick Humberstone in a burgundy knitwear jumper, standing in a park with green grass and a treeline in the background."
            />
        </div>
    )
}

export default IntroductionSection;
