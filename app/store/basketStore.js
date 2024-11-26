import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const noopStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
};

export const useBasketStore = create(
    persist(
        (set, get) => ({
            products: [
                { itemId: 1, category: 'technologies', name: 'Javascript', additionaldetails: [], stock: 3 },
                { itemId: 2, category: 'technologies', name: 'React', additionaldetails: [], stock: 2 },
                { itemId: 3, category: 'technologies', name: 'React Native', additionaldetails: [], stock: 2 },
                { itemId: 4, category: 'technologies', name: 'Node.js', additionaldetails: [], stock: 2 },
                { itemId: 5, category: 'technologies', name: 'ExpressJS', additionaldetails: [], stock: 2 },
                { itemId: 6, category: 'technologies', name: 'Tailwind', additionaldetails: [], stock: 2 },
                { itemId: 7, category: 'technologies', name: 'Java', additionaldetails: [], stock: 1 },
                { itemId: 8, category: 'technologies', name: 'MySQL', additionaldetails: [], stock: 2 },
                { 
                    itemId: 9, 
                    category: 'agile', 
                    name: 'Test-driven development', 
                    additionaldetails: [], 
                    stock: 7 
                },
                { 
                    itemId: 10, 
                    category: 'agile', 
                    name: 'Continuous Integration / Continuous Deployment', 
                    additionaldetails: [], 
                    stock: 7 
                },
                { 
                    itemId: 11, 
                    category: 'agile', 
                    name: 'Pair Programming', 
                    additionaldetails: [], 
                    stock: 7 
                },
                { 
                    itemId: 12, 
                    category: 'experience', 
                    name: 'Digital Officer - Green Party', 
                    additionaldetails: [
                        'Automated staff onboarding, reducing time by 34% and minimising errors.',
                        'Managed 230+ WordPress websites and oversaw DevOps responsibilities.',
                        'Built the 2019 manifesto website, contributing to a 69% vote share increase.'
                    ], 
                    stock: 7 
                },
                { 
                    itemId: 13, 
                    category: 'experience', 
                    name: 'e-Learning Technologist - St George\'s University', 
                    additionaldetails: [
                        'Developed and deployed a PhoneGap Student Help app for both Android and iOS devices.',
                        'Designed medical education e-learning courses for FutureLearn, helping train the next generation of doctors and nurses.'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 14, 
                    category: 'projects', 
                    name: 'Retrospect - Social Journaling App', 
                    additionaldetails: [
                        'Built a gratitude-focused journaling app with React Native, Node.JS, Express, and MySQL.',
                        'Incorporated user feedback for continuous improvements, boosting engagement.',
                        'Deployed to the Google Play Store'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 15, 
                    category: 'projects', 
                    name: 'XTC.vote - Open Spaces Voting Website', 
                    additionaldetails: [
                        'A topic proposal and voting tool for Open Spaces style events and meetings',
                        'Built using Java Spring Boot, utilising Thymeleaf and HTMX',
                        'Developed with test-driven development (90% test coverage), and entirely pair programmed.',
                        'Successfully deployed, and in use at the XTC agile meetup in London.'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 16, 
                    category: 'education', 
                    name: 'Westcliff High School for Boys (A Levels)', 
                    additionaldetails: [
                        'BBCC in STEM subjects.'
                    ], 
                    stock: 2 
                },
                { 
                    itemId: 17, 
                    category: 'education', 
                    name: 'Westcliff High School for Boys (GCSEs)', 
                    additionaldetails: [
                        '4A*s, 6As, 2Bs, including Maths (A*) and English (A).',
                    ], 
                    stock: 7 
                },
                { 
                    itemId: 18, 
                    category: 'volunteering', 
                    name: 'VP Membership - Toastmasters Club', 
                    additionaldetails: [
                        'Managed membership and public relations, growing the club’s presence.',
                        'Delivered speeches and evaluations, honing public speaking skills.',
                        'Led meetings, fostering a collaborative and supportive environment.'
                    ], 
                    stock: 5 
                },
                { 
                    itemId: 19, 
                    category: 'volunteering', 
                    name: 'Coordinator - Wandsworth Green Party', 
                    additionaldetails: [
                        'Organised events and managed membership engagement initiatives.',
                        'Ran data analysis to shape election strategies, securing strong results.',
                        'Passionate about creating positive change in local communities.'
                    ], 
                    stock: 5 
                },
                { 
                    itemId: 20, 
                    category: 'volunteering', 
                    name: 'Co-founder - London Vegan Board Games', 
                    additionaldetails: [
                        'Organised bi-monthly events, supporting local businesses and communities.',
                        'Provided opportunities for social connections through shared hobbies.',
                        'Showcased strong organisational and event-planning skills.'
                    ], 
                    stock: 5 
                },
                { 
                    itemId: 21, 
                    category: 'volunteering', 
                    name: 'Organiser - London Netrunner Meetup', 
                    additionaldetails: [
                        'Built a thriving community around the Netrunner strategy card game.',
                        'Organised regular events, promoting engagement and participation.',
                        'Demonstrated leadership and a passion for fostering connections.'
                    ], 
                    stock: 5 
                },
            ],
            
            
            basket: [], 
            isShopperMode: false,
            
            // Toggle shopper mode (adding items to the basket)
            toggleShopperMode: () =>
                set((state) => ({ isShopperMode: !state.isShopperMode })),

            // Add item to the basket
            addItemToBasket: (itemId) => {
                const currentBasket = get().basket;
                const product = get().products.find((p) => p.itemId === itemId);  // Use itemId instead of id

                if (!product) return;

                const existingItem = currentBasket.find((item) => item.itemId === itemId);  // Use itemId instead of id

                if (existingItem) {
                    set({
                        basket: currentBasket.map((item) =>
                            item.itemId === itemId
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ basket: [...currentBasket, { ...product, quantity: 1 }] });
                }
            },

            // Remove item from the basket
            removeItemFromBasket: (itemId) => {
                const currentBasket = get().basket;
                set({
                    basket: currentBasket.filter((item) => item.itemId !== itemId),  // Use itemId instead of id
                });
            },

            increaseQuantity: (itemId) => {
                const currentBasket = get().basket;
                const item = get().basket.find((p) => p.itemId === itemId);
                if (item.quantity < item.stock){
                set({
                    basket: currentBasket.map((item) =>
                        item.itemId === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })}
            },

            decreaseQuantity: (itemId) => {
                const currentBasket = get().basket;
                const item = get().basket.find((p) => p.itemId === itemId);
                if (item.quantity == 1){
                    set({
                        basket: currentBasket.filter((item) => item.itemId !== itemId),  // Use itemId instead of id
                    });
                } else {
                    set({
                        basket: currentBasket.map((item) =>
                            item.itemId === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    ),
                });
            }
            },


            // Clear the entire basket
            clearBasket: () => set({ basket: [] }),
        }),
        {
            name: 'basket-storage',
            // storage: typeof window !== 'undefined' ? localStorage : noopStorage,
        }
    )
);
