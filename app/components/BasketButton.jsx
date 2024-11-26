'use client';

import React from 'react'
import Link from 'next/link'
import { useBasketStore } from '../store/basketStore';

const BasketButton = () => {
    const isShopperMode = useBasketStore((state) => state.isShopperMode);
    const basket = useBasketStore((state) => state.basket);

    return (
        <section>
            <div className={`${isShopperMode ? '' : 'hidden'} rounded-2xl p-1 bg-brand-primary shadow-md m-1 z-10 fixed bottom-10 right-10 w-64`}>
                <div className="mx-auto w-full h-full text-brand-button-inverse-hover flex flex-col items-center justify-center px-4">
                    <h1 className='text-lg font-bold'>Basket</h1>
                    <p>Contains {basket.length} items</p>
                    <Link
                        href="/basket"
                        className="m-2 p-2 mx-8 px-4 max-w-64 flex-1 rounded-lg text-sm bg-primary text-center border-primary border-2 shadow-md text-secondary hover:text-brand-button-inverse-hover hover:bg-brand-primary-hover"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BasketButton;
