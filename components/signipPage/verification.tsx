'use server'
import { pool } from "@/db/connection";
import bcrypt from "bcryptjs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export async function Verify(email: string,password: string , name:string) {

    if (!email.trim() || !password.trim()) {
        return {
            msg: "Empty fields were provided",
            valid: false,
        };
    }
    
    //Checkking if user exists
    const data = await pool.query(
                `Select email from users
                where email=$1`,[email]
            )
            console.log(data)
    if((data.rowCount ?? -1 )>0)
        return {
            msg:"Email already exists",
            valid:false
        }
    
    //More validation 
    if(!emailRegex.test(email))
        return {
            msg: "Invalid Email format",
            valid: false
        }
    
    //Storing the user
    const hashedPass = await bcrypt.hash(password , 8)
    await pool.query(
        `insert into users (name ,email , hash_pass)
        values ( $1 , $2 , $3)` , [name , email , hashedPass]
    )

    return {
        msg: "Successfully registered",
        valid: true,
    };
}