"use client";

import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useBasketStore } from '../../store/basketStore';

const TextBlock = ({ product }) => {
    const isShopperMode = useBasketStore((state) => state.isShopperMode);
    const addItemToBasket = useBasketStore((state) => state.addItemToBasket);
    const additionaldetails = product.additionaldetails || [];

    return (
        <div
            className={`relative p-4 rounded-lg shadow-xl bg-brand-card-bg text-brand-text-primary m-1 ${isShopperMode ? 'px-6' : 'px-0'
                }`}
        >
            <div className="relative flex justify-center items-center align-middle gap-4 min-h-10">
                <p className={`text-center ${isShopperMode ? 'pr-10' : ''
                    }`}>{product.name}</p>
                {isShopperMode && (
                    <button
                        className="absolute right-0 top-0 text-xl p-2 border bg-brand-secondary opacity-80 hover:opacity-100 rounded-lg"
                        onClick={() => addItemToBasket(product.itemId)}
                    >
                        <FaCartPlus aria-hidden="true" />
                    </button>
                )}
            </div>

            <div>
                {additionaldetails.length > 0 &&
                    <ul className="list-disc list-inside text-left p-2">
                        {additionaldetails.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                }

            </div>

        </div >
    );
};

export default TextBlock;
