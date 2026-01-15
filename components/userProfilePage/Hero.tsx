'use client'

import { ArrowBigRightDash, ArrowBigRightIcon, ArrowRightCircleIcon, GlobeLockIcon, PlusCircleIcon, WholeWordIcon } from "lucide-react";
import Dashboard from "./dashboard";
import Link from "next/link";
import { Button } from "../ui/button";
import { redirect } from "react-router-dom";
import { useState } from "react";
import Otherbutton from "./otherbuttons";

export default function ProfilePage() {
  const [dropdown, setDropdown] = useState(false)

  return (
    <main className="bg-[#e9e9e9]">
      {/* bg-[#e6e6e7] */}
      {/* <h1 className="mx-auto text-center my-2 text-4xl px-5 pb-1.5 text-black bg-gray-300 opacity-100  hover:opacity-60 transition ease-in-out font-bold w-fit rounded-lg border-4 hover:scale-[1.02] border-black">User Analytics</h1> */}
      <div className="relative overflow-hidden pt-8 pb-4">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-[1600px] mx-auto px-2 ml-10">
          <h1 className="text-5xl md:text-4xl font-semibold text-black mb-2 flex items-center gap-3 ">
            <div className="h-3 w-3 text-center items-center  rounded-full animate-pulse"></div> 
            User Analytics
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Track your growth • Monitor performance • Achieve goals
          </p>
        </div>
      </div>
      <div className=" ml-4 mr-5 text-black">
        <Dashboard/>
      </div>
      <Otherbutton/>
    </main>
  )
}