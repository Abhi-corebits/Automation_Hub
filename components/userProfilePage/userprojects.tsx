import { ArrowBigDownDashIcon, ArrowBigDownIcon, ArrowBigUpDashIcon, ArrowBigUpIcon, ImageUpIcon, MoveUpIcon, TrendingUpIcon } from "lucide-react";

const projObj = await fetch('http://127.0.0.1:3000/api/userprojects', {cache:"no-store"}).then((res)=>(res.json())).catch((err)=>{ console.log(err); return []}) || [] 

export default async function UserProjects() {
    
    console.log(projObj)
    return (
    <div className="border-2 border-black rounded-sm grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
        {
            projObj.map((obj:any)=>{
                return (
                    <div key={obj.project_name} className="mx-3 my-1 border-2 border-black rounded flex flex-col">
                        
                        <h1 className="font-bold text-2xl text-center py-2">{obj.project_name}</h1>
                        <div className="border-2 border-black rounded-sm hover:bg-gray-300 hover:text-black hover:scale-[1.03] transition ease-in-out">
                            <div className="flex justify-between rounded-sm mx-2">
                                <div>
                                    <div className="flex flex-col ">
                                        <h1 className="font-bold text-md pl-2 max-w-full w-auto ">Problem Statement </h1>
                                        <h1 className="font-medium font-sans pl-2 max-w-full w-auto">{obj.problem_stat}</h1>
                                    </div> 
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-md pl-2 max-w-full w-auto">Solution Statement</h1>
                                        <h1 className="font-medium font-sans pl-2 max-w-full w-auto">{obj.soln}</h1>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2 mx-2">
                                    <ArrowBigUpIcon className="text-green-600 stroke-[3]"/>
                                    <h1 className="text-center font-semibold">{obj.votes}</h1>
                                    <ArrowBigDownIcon className="text-red-600 stroke-[3]"/>
                                </div>   
                            </div>
                            <img src={obj.screenshots_url[0]} className="px-5 py-2 max-w-full w-full rounded-[7%]"/>
                        </div>
                    </div>
                )
            })
        }
        <div>
            2nd
        </div>
        <div>
              3rd
        </div>
        <div>
            4th
        </div>
    </div>
  )
}