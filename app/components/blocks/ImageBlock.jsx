"use client";
import Image from 'next/image';
import React from 'react';

const ImageBlock = ({ src, width, height, alt }) => {
    const smwidth = width / 2
    const smheight = height / 2
    return (
        <Image
            src={src}
            width={smwidth}
            height={smheight}
            alt={alt}
            className="rounded-lg justify-center bg-brand-bg-alt shadow-md"
            priority
        />
    );
};

export default ImageBlock;
