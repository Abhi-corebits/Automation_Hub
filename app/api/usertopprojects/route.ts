import { pool } from "@/db/connection";
import { VerifyToken } from "@/lib/verify";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const token = await VerifyToken(req.cookies.get("iBuildThis")?.value);
        console.log(token)
        const result = await pool.query(
            `SELECT id , title , problem_stat, soln , votes, screenshots_url, json_code FROM projects 
            where username = $1 `, [token.email]
        );
        // console.log(result)
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (err) {
        console.error('DB error:', err);
        return new Response('Internal Server Error', { status: 500 });
    }
}