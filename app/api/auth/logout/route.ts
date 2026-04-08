import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const response = NextResponse.json({ message: "Logged out" });

    response.cookies.set("iBuildThis", "", {
        expires: new Date(0),
        path: "/",
    });

    return response;
}
