import React from 'react'
import LinkBlock from '../blocks/LinkBlock'
import ImageBlock from '../blocks/ImageBlock'

const IntroductionSection = () => {
    return (
        <div>
            <h1 className="text-center text-2xl bg-brand-primary rounded-lg text-brand-text-inverse p-2 my-2">
                About Me
            </h1>
            <div className="md:flex justify-evenly items-center mb-2">
                <div className="flex-1 text-center">
                    <h2 className="text-2xl">Nick Humberstone</h2>
                    <h3 className="text-center text-lg">Software Engineer</h3>
                    <p className="opacity-50 m-2 italic">London, UK</p>
                    {/* <p className="hidden opacity-50 m-2">
                    Growing up I wanted to be an inventor. I&apos;m now a self-taught software engineer that can bring my ideas to life.
                </p> */}
                    <ul className="opacity-50 m-2 mb-4 italic text-left list-disc space-y-2">
                        <li>
                            I&apos;m a self-taught Software Engineer with 7+ years of experience working in Digital Support.
                        </li>
                        <li>
                            I enjoy using technology to solve real-world problems.
                        </li>
                        <li>
                            I like Extreme Programming because it focuses on what works and doubles down on it, delivering efficient, robust, and readable code.
                        </li>
                    </ul>
                    <LinkBlock linkText="Contact Me" href="mailto:nickhumberstone@gmail.com" icon="contact" />
                </div>
                <ImageBlock
                    src="/images/NickHumberstone.jpeg"
                    width="493"
                    height="640"
                    alt="Nick Humberstone in a burgundy knitwear jumper, standing in a park with green grass and a treeline in the background."
                />
            </div>
        </div>
    )
}

export default IntroductionSection;
