"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>React Native</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Digital Officer at The Green Party for 6 years</li>
                <li>Placement Student at St. George`&apos;`s University of London for 1 year</li>
                <li>Various roles at Sainsbury`&apos;`s and Waitrose for 3 years.</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Cert 1</li>
                <li>Cert 2</li>
                <li>Cert 3</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => { setTab(id) });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
                <Image src="/images/codingscreenimage.png" width={500} height={500} alt="Computer monitor, keyboard, and mouse" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">As a child, I wanted to be an inventor. As a student, I was a scientist. As a young adult, I was working in IT Support. Now I'm looking for my next puzzle - but this time I want to be solving the puzzle in front of me with lines of code and the power of computing.</p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection