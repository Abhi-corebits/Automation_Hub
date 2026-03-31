'use client'
import { useEffect , useState } from "react";
import { Search, Eye, Heart, TrendingUp } from "lucide-react";
import { CarouselDemo } from "@/components/explore/carousoul";

function ExplorePage() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("All");
    // Sample projects data
    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch("http://127.0.0.1:3000/api/explore", {
                method: "POST",
                body: filter
            });

            const data = await res.json();
            setProjects(data);
        }

        fetchProjects();
    }, [filter]);

    // const projects = [
    //     {
    //         id: 1,
    //         title: "E-Commerce Dashboard",
    //         author: "Sarah Chen",
    //         description: "A full-stack admin dashboard with analytics, inventory management, and order tracking.",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         views: 1324,
    //         likes: 145,
    //         trending: true
    //     },
    //     {
    //         id: 2,
    //         title: "AI Chat Application",
    //         author: "Mike Johnson",
    //         description: "Real-time chat app with AI-powered responses and conversation analysis.",
    //         tech: ["Next.js", "OpenAI", "WebSocket"],
    //         views: 2567,
    //         likes: 389,
    //         trending: true
    //     },
    //     {
    //         id: 3,
    //         title: "Fitness Tracker",
    //         author: "Emma Davis",
    //         description: "Mobile-first fitness app with workout plans, progress tracking, and social features.",
    //         tech: ["React Native", "Firebase", "Redux"],
    //         views: 892,
    //         likes: 132
    //     },
    //     {
    //         id: 4,
    //         title: "Portfolio Website Builder",
    //         author: "Alex Kumar",
    //         description: "Drag-and-drop portfolio builder with customizable templates and animations.",
    //         tech: ["Vue.js", "Tailwind", "Supabase"],
    //         views: 1567,
    //         likes: 234
    //     },
    //     {
    //         id: 5,
    //         title: "Task Management App",
    //         author: "Lisa Park",
    //         description: "Collaborative task manager with real-time updates and team features.",
    //         tech: ["React", "Express", "PostgreSQL"],
    //         views: 743,
    //         likes: 98
    //     },
    //     {
    //         id: 6,
    //         title: "Weather Dashboard",
    //         author: "Tom Wilson",
    //         description: "Beautiful weather app with forecasts, maps, and location-based alerts.",
    //         tech: ["JavaScript", "API", "Chart.js"],
    //         views: 456,
    //         likes: 67
    //     }
    // ];

    async function HandelFilter(filterBy:string){
        const resObj = await fetch("http://127.0.0.1:3000/api/explore" , {
            method:"POST" , 
            body: filterBy ,
        }).then((res)=>res.json())
    }

    return (
        <main className="px-10 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Header - from Design 2 */}
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold mb-4">Explore Projects</h1>
                    <p className="text-gray-600">Discover amazing projects from our community</p>
                </div>

                {/* Search Bar - from Design 2 */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for projects, creators, or tech stacks..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                </div>

                {/* Category Pills - from Design 2 */}
                <div className="flex justify-center gap-2 mb-8 flex-wrap ">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 focus:bg-black focus:text-white">
                        All
                    </button>
                    <button onClick={() => setFilter("Web Apps")} className="px-4 py-2 bg-gray-100 text-gray-00 rounded-full text-sm cursor-pointer hover:bg-gray-00 focus:bg-black focus:text-white">
                        Web Apps
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 focus:bg-black focus:text-white">
                        Mobile Apps
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 focus:bg-black focus:text-white">
                        AI/ML
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 focus:bg-black focus:text-white">
                        Games
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 focus:bg-black focus:text-white">
                        Tools
                    </button>
                </div>

                {/* Projects List - from Design 3 */}
                <div className="space-y-8">
                    {projects.map((project:any) => (
                        <div
                            key={project.id}
                            className="shadow- border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                        >
                            <div className="flex bg-gray-100 hover:bg-gray-200">
                                {/* Image */}
                                <div className="w-[38%]  flex items-center justify-center">
                                    <img src={project.screenshots_url[0]} className="m-2 ml-6" />
                                    {/* <CarouselDemo arr={project.screenshots_url}/> */}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-3">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="pl-4">
                                            <h3 className="font-bold text-4xl  pl-2 ">{project.title}</h3>
                                            <p className="text-gray-500 text-sm pl-2">by {project.name}</p>
                                        </div>
                                        {/* {project.trending && (
                                            <span className="px-2 py-1 bg-black text-white text-xs rounded-full flex items-center gap-1">
                                                <TrendingUp className="size-3" /> Trending
                                            </span>
                                        )} */}
                                    </div>

                                    <p className="text-gray-600 text-sm pl-2 mt-10 mb-4">
                                        {project.soln}
                                    </p>

                                    <div className="flex gap-2 mb-4">
                                        {/* {project.badges.map((tech:any) => ( */}
                                            <span
                                                // key={tech}
                                                className="mx-3 px-3 my-3  mt-10  border border-gray-300 text-white bg-red-600/80 text-sm rounded-md"
                                            >
                                                n8n
                                            </span>
                                        {/* ))} */}
                                    </div>

                                    <div className="flex items-center justify-end content-end gap-4 text-sm text-gray-500">
                                        {/* <span className="flex items-center gap-1">
                                            <Eye className="size-4" /> {project.views} views
                                        </span> */}
                                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                            <Heart className="size-4" /> {project.votes}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ExplorePage;