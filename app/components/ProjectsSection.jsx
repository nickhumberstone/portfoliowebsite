"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Hearsay Social App",
        description: "Each day, active users are asked a question. Submit your reply, and see what other people nearby have to say. Eventually you'll be able to match with people based on their responses and message them privately to ask more about their response and themselves.",
        image: "/images/hearsayAppProject.jpg",
        tag: ["All", "React Native"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "You're looking at it! A React website for sharing my projects with other people",
        image: "/images/portfolioWebsiteProject.jpg",
        tag: ["All", "React"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "HTML Email Wrapper Generator for Action Network",
        description: "Helping people create on-brand email wrappers without needing to know how to write or read code.",
        image: "/images/emailWrapperGeneratorProject.jpg",
        tag: ["All", "React"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));
    return (
        <>
            <h2>My Projects</h2>
            <div className="projectsFilter text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}></ProjectTag>
                <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"}></ProjectTag>
                <ProjectTag onClick={handleTagChange} name="React Native" isSelected={tag === "React Native"}></ProjectTag>
            </div>
            <div className="grid grid-cols-2 gap-8 py-4 px-4">{filteredProjects.map((p) =>
                <ProjectCard
                    key={p.id}
                    title={p.title}
                    description={p.description}
                    imgUrl={p.image}
                    gitUrl={p.gitUrl}
                    previewUrl={p.previewUrl}
                />)}


            </div>
        </>
    )
}

export default ProjectsSection