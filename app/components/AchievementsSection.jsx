"use client";
import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => {
    return import("react-animated-numbers")
},
    { ssr: false }
)

const achievementsList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "5",
    },
];


const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353f] border rounded-md py-8 px-16 flex flex-row flex-wrap items-center justify-around'>{
                achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className="flex items-center justify-center p-2">
                            <h2 className='text-white text-4xl flex items-center justify-center font-bold w-64'>
                                {achievement.prefix}
                                <AnimatedNumbers includeComma animateToNumber={parseInt(achievement.value)}

                                    className='text-white text-4xl font-bold'
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        }
                                    }}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AchievementsSection