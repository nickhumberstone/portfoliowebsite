"use client";
import { useBasketStore } from '@/app/store/basketStore';
import React from 'react';

const BasketItem = ({ itemId, name, quantity, stock }) => {
    const isShopperMode = useBasketStore((state) => state.isShopperMode);
    const increaseQuantity = useBasketStore((state) => state.increaseQuantity);
    const decreaseQuantity = useBasketStore((state) => state.decreaseQuantity);

    return (
        <div
            className={`${isShopperMode ? 'bg-brand-bg-light' : 'bg-brand-bg-alt'
                } flex flex-col border border-brand-border shadow-md rounded-lg p-6 transition-all hover:shadow-md`}
        >
            <div className="flex flex-col align-middle justify-between p-2">
                <p className="text-2xl font-bold text-brand-text-primary p-4">{name}</p>
                <div>
                    <p className="text-md text-brand-text-muted p-4">Experience: <br /> {quantity} years</p>
                    <div className="button-container flex sm:flex-col items-center justify-center">
                        <button
                            className={`${quantity == stock ? 'bg-brand-bg-light text-brand-text-secondary cursor-not-allowed' : ' bg-brand-secondary'
                                } text-xl p-2 border rounded-lg min-w-16`}
                            onClick={() => increaseQuantity(itemId)}
                        > + </button>
                        <button
                            className="text-xl p-2 border bg-brand-secondary rounded-lg min-w-16"
                            onClick={() => decreaseQuantity(itemId)}
                        > - </button>
                    </div>
                    <p className='text-center p-2  text-brand-text-secondary'>
                        {quantity == stock ? 'Maximum years in basket' : `${stock - quantity} more years available`}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default BasketItem;
