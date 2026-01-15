import SignupForm from "./form";
import Image from "next/image";

export default function SignupPage() {
    return (
        <main className="min-h-screen flex flex-col text-center items-center pt-[4%] bg-radial-[at_50%_0%] from-[#313131] via-[#131212] to-black">
            <div className="rounded-sm w-auto h-auto text-white ">
                <div className="flex justify-center pb-15 gap-3 text-white text-center items-center">
                    <Image src='/globe.svg' alt="App Image" className="items-center" width={50} height={50} />
                    <h1 className="font-extrabold text-6xl">iBuiltThis</h1>
                </div>
                <SignupForm />
            </div>
        </main>
    )
}