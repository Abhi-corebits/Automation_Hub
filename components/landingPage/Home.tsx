import { ChessRookIcon, EyeIcon, LucideIcon, MoveRightIcon, SparkleIcon, WholeWordIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"
import { RocketIcon, UserIcon } from "lucide-react";
import StatsCard from "./stats-card";
import Feature from "./feature";
import About from "./about";
import Header from "./header";
import Footer from "./footer";
import Typinganimation from "./typing-animation";

interface statsprops {
    icon:LucideIcon;
    data:string;
    info:string;
    isMid?:boolean;
}

function HomePage() {

    const stats:statsprops[] = [
        {
            icon: RocketIcon,
            data: "2.5K+",
            info: "Projects Shared"
        },
        {
            icon: UserIcon ,
            data: "8.5K+",
            info: "Strong Community" ,
            isMid: true
        },
        {
            icon: EyeIcon,
            data: "20K+",
            info: "Monthly Visits"
        }
    ]

    return (
        <main>
            <Header/>
            <div className="flex flex-col text-center justify-center items-center smm:pl-10 sm:pr-10 px-6  w-full space-t-8  bg-[url('/landingpageBG.jpeg')] bg-cover">
                <Badge asChild variant={"outline"} className="py-1 px-8 mt-5 bg-[#f7f7f7] font-sm text-lg">
                    <Link href="/"> 
                        <span className="relative flex size-2 mr-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-red-600"></span>
                        </span>
                        <h1 className="flex text-center items-center gap-1">Join us with the aim towards Growth<ChessRookIcon size={18}/>!!</h1>
                    </Link>
                </Badge>
                <div className="pt-10 font-medium ">
                    <Typinganimation/>
                    <p className="pt-10 text-4xl font-lgstroke-2">GitHub is for developers.
                    <span className="font-extrabold"> iBuiltThis</span> is for showing projects to humans.</p>
                    <p className="pt-3 text-gray-500">A community driven platform to upload Projects | Explore & Contribute in others ideas</p>
                </div>
                <div className="flex gap-2 sm:gap-18 pt-9 mt-4 ">
                    <Button className="hover:scale-105">
                        <Link href={"/signup"} className="flex gap-1 items-center">
                            <h1 className="flex text-lg font-sm items-center text-center gap-2 mix-blend-screen"><SparkleIcon className="size-4 text-[#81fa78]" /> Share your projects</h1>
                        </Link>
                    </Button>
                    <Button className="hover:scale-105">
                        <Link href={"/explore"} className="flex gap-1 items-center">
                            <h1 className="flex text-lg font-sm items-center text-center gap-2 text-muted" >Explore Our Community <MoveRightIcon className="size-5 relative inset-y-[0.45px] text-[#81fa78]" /></h1>
                        </Link>
                    </Button>
                </div>

                <section id="statsCard" className="pt-10 pb-10 ">
                    <div className="grid grid-cols-3 items-center divide-x-2 divide-gray-300">
                        {
                            stats.map((obj:statsprops)=> {
                                return (
                                    <div key={obj.info} className="flex items-center justify-center" >
                                        <StatsCard icon={obj.icon} data={obj.data} info={obj.info}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <Feature />
            <About />
            <Footer/>
        </main>

    )
}

export default HomePage 