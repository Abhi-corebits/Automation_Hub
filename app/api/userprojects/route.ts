import { pool } from "@/db/connection"

export async function GET(){
    try {
        const data = await pool.query(`
            Select screenshots_url , project_name , votes , problem_stat , soln, badges ,live_url , techstack, challenges, future_implementations from projects
            where username='alice123'
            `)
            console.log(data)

       return new Response(JSON.stringify(data.rows), {status:200})
    } catch (error) {
        console.log(error)
    }
    
}