"use client";

import React from 'react';
import { useBasketStore } from '../store/basketStore';

const ShopperToggleBar = () => {
    const toggleShopperMode = useBasketStore((state) => state.toggleShopperMode);
    const isShopperMode = useBasketStore((state) => state.isShopperMode);

    return (
        <section className="fixed top-4 left-0 w-full z-50 p-4">
            <div className="bg-brand-primary shadow-md rounded-2xl flex flex-col sm:flex-row items-center justify-around max-w-5xl mx-auto p-4">
                <h1 className=" text-brand-text-inverse text-center text-lg sm:text-md">
                    {isShopperMode
                        ? "Add items to your cart to build the perfect hire!"
                        : "Looking to hire your next software engineer?"}
                </h1>
                <button
                    className="w-full md:w-auto p-2 rounded-lg mt-4 sm:mt-0 text-sm bg-brand-button-primary-bg bg-opacity-90 text-brand-button-primary-text border border-brand-border-default shadow-md hover:bg-brand-button-primary-hover transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
                    type="button"
                    onClick={() => toggleShopperMode()}
                >
                    {isShopperMode ? "Disable shopping mode" : "Activate shopping mode"}
                </button>
            </div>
        </section>
    );
};

export default ShopperToggleBar;
