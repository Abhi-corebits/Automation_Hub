"use client";

import { useState, useEffect, Suspense } from "react";
import { MessageSquareCode } from "lucide-react";
import UserProjects from "./userprojects";
import UserProjectsSkeleton from "./userprojectsskeleton";
import { Button } from "../ui/button";
import AddProject from "./addproject";
import Setting from "./setting";

export default function Options({id}:any) {
    const [automations, setAutomations] = useState([]);

    return (
        <>
            {
                id == "myautomations" && (
                    <UserProjects />
                )
            }
            {
                id == "likedautomations" && (
                    <h1 className="text-2xl font-bold flex justify-center py-20 animate-pulse">Under Construction.....</h1>
                )
            }
            {
                id== "settings" && (
                    <Setting/>
                )
            }
            {
                id== "addproject" && (
                    <AddProject/>
                )
            }
        </>
    );
}