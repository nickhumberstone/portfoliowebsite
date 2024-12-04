"use client";
import React from 'react';
import { FaMessage } from 'react-icons/fa6';

const LinkBlock = ({ linkText, href, icon }) => {

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'contact':
                return <FaMessage className="text-brand-text-inverse" />;
            // case 'nodejs':
            //     return <FaNodeJs className="text-brand-text-inverse" />;
            // case 'github':
            //     return <FaGithub className="text-brand-text-inverse" />;
            // case 'linkedin':
            //     return <FaLinkedin className="text-brand-text-inverse" />;
            default:
                return null; // Return a default icon or null
        }
    };

    return (
        <a className="flex justify-center gap-2 border border-brand-border items-center rounded-lg p-2 m-1 flex-1 bg-brand-primary text-brand-text-inverse text-center shadow-md hover:text-brand-primary hover:bg-brand-bg-light transition-all duration-200 max-w-64 mx-auto"
            href={href}>
            {linkText}{getIcon(icon)}
        </a>
    );
};

export default LinkBlock;
