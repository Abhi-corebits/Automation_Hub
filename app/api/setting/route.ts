import { pool } from "@/db/connection";
import { VerifyToken } from "@/lib/verify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {bio, name} = await req.json()
        const token = req.cookies.get("iBuildThis")?.value
        const data = await VerifyToken(token)
        const email= data.email
        if(!email){
            return NextResponse.json({"ok":false})
        }

        // We know the email is valid
        await pool.query(`
            update users set
            name=$1, bio=$2
            where email=$3
            `,[name,bio,email])

        return NextResponse.json({ "ok": true })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ "ok": false })
    }
}

export async function DELETE(req:NextRequest){
    const token = req.cookies.get("iBuildThis")?.value
    const data = await VerifyToken(token)
    const email = data.email
    if(!email){
        return NextResponse.json({"ok":false})
    }

    await pool.query(`
        delete from users
        where email=$1
        `,[email])
    await pool.query(`
        delete from projects
        where username=$1
        `, [email])

    req.cookies.delete("iBuildThis")
    return NextResponse.json({ "ok": true })
}