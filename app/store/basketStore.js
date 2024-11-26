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
                { itemId: 1, category: 'technologies', name: 'React', additionaldetails: [], stock: 2 },
                { itemId: 2, category: 'technologies', name: 'React Native', additionaldetails: [], stock: 1 },
                { itemId: 3, category: 'technologies', name: 'Node.js', additionaldetails: [], stock: 3 },
                { itemId: 4, category: 'technologies', name: 'Java', additionaldetails: [], stock: 3 },
                { itemId: 5, category: 'technologies', name: 'MySQL', additionaldetails: [], stock: 2 },
                { 
                    itemId: 6, 
                    category: 'agile', 
                    name: 'Software Development', 
                    additionaldetails: [
                        'Proficient in Test-Driven Development, ensuring robust and reliable code.',
                        'Experienced in Pair Programming, promoting knowledge sharing and collaboration.',
                        'Expertise in Continuous Integration/Continuous Deployment workflows.'
                    ], 
                    stock: 7 
                },
                { 
                    itemId: 7, 
                    category: 'agile', 
                    name: 'Front-End Development', 
                    additionaldetails: [
                        'Strong focus on creating responsive and accessible user interfaces.',
                        'Experienced in delivering seamless user experiences with modern frameworks like React and Tailwind.',
                        'Passionate about maintaining high usability and design consistency.'
                    ], 
                    stock: 7 
                },
                { 
                    itemId: 8, 
                    category: 'agile', 
                    name: 'Communication', 
                    additionaldetails: [
                        'Skilled at conveying technical concepts to non-technical stakeholders.',
                        'Confident in leading meetings and facilitating cross-team collaboration.',
                        'Active participant in meetups, sharing insights and learning from peers.'
                    ], 
                    stock: 7 
                },
                { itemId: 9, category: 'certifications', name: 'Responsive Web Design', stock: 1 },
                { itemId: 10, category: 'certifications', name: 'JavaScript Algorithms and Data Structures', stock: 1 },
                { 
                    itemId: 11, 
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
                    itemId: 12, 
                    category: 'experience', 
                    name: 'e-Learning Technologist - St George\'s University', 
                    additionaldetails: [
                        'Developed and deployed a PhoneGap app for both Android and iOS platforms.',
                        'Designed e-learning courses for FutureLearn, enhancing medical education.'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 13, 
                    category: 'projects', 
                    name: 'Retrospect - Social Journaling App', 
                    additionaldetails: [
                        'Built a gratitude-focused journaling app with React Native and MySQL.',
                        'Incorporated user feedback for continuous improvements, boosting engagement.',
                        'Currently in closed testing with 29 users, preparing for public release.'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 14, 
                    category: 'projects', 
                    name: 'XTC.vote - Open Spaces Voting Website', 
                    additionaldetails: [
                        'Streamlined event voting with a Java Spring Boot application.',
                        'Developed with test-driven development and 90% test coverage.',
                        'Successfully deployed at the XTC meetup in London for real-time voting.'
                    ], 
                    stock: 1 
                },
                { 
                    itemId: 15, 
                    category: 'education', 
                    name: 'Westcliff High School for Boys (A Levels)', 
                    additionaldetails: [
                        'Completed A Levels in STEM subjects, demonstrating a strong analytical foundation.',
                        'Built skills in problem-solving and critical thinking.'
                    ], 
                    stock: 2 
                },
                { 
                    itemId: 16, 
                    category: 'education', 
                    name: 'Westcliff High School for Boys (GCSEs)', 
                    additionaldetails: [
                        'Achieved 12 GCSEs with top grades, including Maths (A*) and English (A).',
                        'Gained a solid academic foundation for future technical achievements.'
                    ], 
                    stock: 7 
                },
                { 
                    itemId: 17, 
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
                    itemId: 18, 
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
                    itemId: 19, 
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
                    itemId: 20, 
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
