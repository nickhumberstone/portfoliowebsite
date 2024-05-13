import NavBar from "../../app/components/NavBar"
import Footer from "../../app/components/Footer"
import HobbyCard from "../../app/components/HobbyCard"

export default function hobbies() {

    const hobbies = [
        {
            id: 1,
            title: "Public Speaking",
            description: "An excellent skill to have, that I am improving upon each week at a Toastmasters club that meets at 7am every Thursday. I'm also a volunteer Vice President of Membership for the club.",
            fullText: "Vice President of Membership for a weekly Toastmasters meetup. Our club, 'Early Bird Speakers', is one of the few clubs to run morning meetings - these start at 7am every Thursday. Being able to communicate ideas in your head confidently and accessibly is a superpower, one which I enjoy improving upon each week. At Toastmasters, it's not just about speeches, it's also about evaluations, including commendations and recommendations.",
            image: "/images/publicspeaking.jpeg",
        },
        {
            id: 2,
            title: "Board Games",
            description: "I co-organise Geekstraveganza, a London Vegan Board Game meetup. I also play what some might describe as -unnecessarily complicated- board games with friends most weekends.",
            fullText: "",
            image: "/images/boardgames.jpeg",
        },
        {
            id: 3,
            title: "Politics",
            description: "I'm passionate about democracy and autonomy. I've run election campaigns at councillor and Mayoral level, and stood in both too. I came 2nd in the Lewisham Mayoral election in 2022.",
            fullText: "",
            image: "/images/politics.jpeg",
        },
        {
            id: 4,
            title: "Volleyball",
            description: "An excellent team sport, that requires you to work with others to succeed more than any other. The community is very international, so you also get to meet and learn from people from many other cultures.",
            fullText: "",
            image: "/images/volley-ball-net.jpg",
        }
    ]

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <NavBar />
            <div className="mt-16 mx-auto p-2 shadow-lg w-screen text-primary">
                <h1 className="text-center text-4xl p-4">Hobbies</h1>
                <p className="md:w-1/3 m-auto text-center text-lg">There&apos;s only so many hours in a week, and a huge number of things I want to be doing. Here&apos;s what I do with my free time currently.</p>
                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>
                <div className="flex flex-wrap gap-8 py-2 px-2 mb-6">{hobbies.map((p) =>
                    <HobbyCard
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        imgUrl={p.image}
                    />)}
                </div>
            </div>
            <Footer />
        </main>
    )
}