"use client";
import { useBasketStore } from '@/app/store/basketStore';
import React from 'react';

const BasketItem = ({ itemId, name, quantity }) => {
    const isShopperMode = useBasketStore((state) => state.isShopperMode);
    const addItemToBasket = useBasketStore((state) => state.addItemToBasket);
    const increaseQuantity = useBasketStore((state) => state.increaseQuantity);
    const decreaseQuantity = useBasketStore((state) => state.decreaseQuantity);

    return (
        <div
            className={`${isShopperMode ? 'bg-brand-bg-light' : 'bg-brand-bg-alt'
                } flex flex-col border border-brand-border shadow-md rounded-lg p-6 transition-all hover:shadow-md`}
        >
            <div className="flex flex-row align-middle justify-between p-2">
                <p className="text-2xl font-bold text-brand-text-primary p-4">{name}</p>
                <p className="text-md text-brand-text-muted p-4">Experience: <br /> {quantity} years</p>
                <div className="flex flex-col">

                    <button
                        className="text-xl p-2 border bg-brand-secondary rounded-lg"
                        onClick={() => increaseQuantity(itemId)}
                    > + </button>
                    <button
                        className="text-xl p-2 border bg-brand-secondary rounded-lg"
                        onClick={() => decreaseQuantity(itemId)}
                    > - </button>
                </div>
            </div>
        </div >
    );
};

export default BasketItem;
