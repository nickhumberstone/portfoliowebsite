"use client";

import React from 'react';
import Title from '../blocks/Title';
import { useBasketStore } from '@/app/store/basketStore';
import TextBlock from '../blocks/TextBlock'

const CategorySection = ({ title, category }) => {
    const products = useBasketStore((state) => state.products);
    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div>
            <Title text={title} />
            <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                    <TextBlock key={product.itemId} product={product} />
                ))}
            </div>
        </div>
    );
}

export default CategorySection;
