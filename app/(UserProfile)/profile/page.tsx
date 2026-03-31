import ProfilePage from "@/components/userProfilePage/Hero"
import { pool } from "@/db/connection";
import { getUser } from "@/lib/getuser"
import { userInfo } from "@/lib/verifyuser";
import  jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Profile() {
  const cookieStore = await cookies()
  const token = cookieStore.get("iBuildThis")?.value
  if (!token) {
    redirect("/login");
  }

  return (
    <main >
      <ProfilePage />
    </main>
  )
}