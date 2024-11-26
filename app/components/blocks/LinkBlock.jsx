"use client";
import React from 'react';

const LinkBlock = ({ linkText, href }) => {
    return (
        <a className="flex flex-col border border-brand-border justify-center rounded-lg p-2 m-1 flex-1 bg-brand-primary text-brand-text-inverse text-center border-brand-border shadow-md hover:text-brand-primary hover:bg-brand-bg-light transition-all duration-200"
            href={href}>
            {linkText}
        </a>
    );
};

export default LinkBlock;
