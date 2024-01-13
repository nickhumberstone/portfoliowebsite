import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { Content } from 'next/font/google'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className="h-52 md:h-72 mt-2 rounded-t-xl relative group"
                style={{
                    background: `url(${imgUrl})`, backgroundSize: "cover",
                    backgroundPosition: 'center center'
                }}
            >
                <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="mr-4 h-14 w-14 border-2 relative rounded-full-border border-[#ADB7BE] hover:border-white group/link">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full-border border-[#ADB7BE] hover:border-white group/link">
                        <EyeIcon className="-4 h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="font-xl font-semibold mb-2 h-5">{title}</h5>
                <p className="text-[#ADB7BE] h-20 overflow-hidden">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard