import React from 'react'

const HobbyCard = ({ imgUrl, title, description }) => {
    return (
        <div className='lg:w-5/12 w-11/12 mx-auto'>
            <div className="h-52 md:h-72 mt-2 rounded-t-xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: 'center center',
                }}
            >
                <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden transition-all duration-500">
                </div>
            </div>
            <div className="text-primary rounded-b-xl bg-secondary py-6 px-4 h-48 md:h-36 overflow-hidden shadow-md">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-primary overflow-hidden">{description}</p>
            </div>
        </div>
    )
}

export default HobbyCard