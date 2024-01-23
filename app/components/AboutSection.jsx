"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 text-[#ADB7BE] opacity-50 space-y-2">
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2 text-[#ADB7BE] opacity-50 space-y-2">
                <li>Digital Officer at The Green Party for 6+ years</li>
                <li>Placement Student at St. George&apos;s University of London for 1 year</li>
                <li>Various roles at Sainsbury&apos;s and Waitrose for 3 years</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2 text-[#ADB7BE] opacity-50 space-y-2">
                <li>FreeCodeCamp Responsive Web Design</li>
                <li>FreeCodeCamp JavaScript Algorithms and Data Structures</li>
                <li>FreeCodeCamp Front End Development Libraries</li>
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
        <section>
            <div className="px-4">

                <div className="text-left flex flex-col h-full lg:p-20 lg:mx-20 lg:grid lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl text-center font-bold text-[#eaeaea] mb-4 lg:text-5xl lg:mb-10">About Me</h2>
                        <Image src="/images/NickHumberstoneMainImage.JPG" width={200} height={100} alt="Nick Humberstone in a burgundy knitwear jumper, standing in a park with green grass and a treeline in the background." className='lg:hidden mx-auto rounded-xl mb-4' />
                        <div><ul className='list-disc text-[#ADB7BE] opacity-50 space-y-2 lg:text-xl'>
                            <li>
                                Self-taught React and React Native developer
                            </li>
                            <li>
                                6+ years experience working in IT Support
                            </li>
                            <li>
                                Volunteer organiser for Toastmasters, The Green Party, London Vegan Meetup
                            </li>
                        </ul>
                            <div className="flex flex-row mx-auto mt-6 lg:text-xl text-[#ADB7BE]">
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
                            <div className="mt-8 lg:text-xl">{TAB_DATA.find((t) => t.id === tab).content}</div>
                        </div>
                    </div>
                    <Image src="/images/NickHumberstoneMainImagePortrait.JPG" width={400} height={300} alt="Nick Humberstone in a burgundy knitwear jumper, standing in a park with green grass and a treeline in the background." className='hidden lg:block mx-auto rounded-xl mb-4' />
                </div>
            </div>
        </section>
    )
}

export default AboutSection