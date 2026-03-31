import { useEffect, useState } from "react"

type CommentType = {
    content: string;
};

export default function Comment({ post_id }: { post_id: number }) {
    const [comments, setComments] = useState<CommentType[]>([]);
    
    useEffect(()=> {
        const fetchComment = async () => {
            const comment = await fetch("/api/comments", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ post_id })
            })
            const data = await comment.json()
            setComments(data.comments)
        }
        fetchComment()
    }, [post_id])

    return (
        <div className="inset-0 static z-50 flex">
            <div className="bg-white w-[500px] max-h-[70vh] mt-4 shadow-lg p-4 overflow-y-auto">
                <div className="h-fit w-full">
                    {
                        comments.map((comment,i) => {
                            return (
                                <div className="m-1 p-1 border-2 border-black w-full">
                                    {comment.content}
                                </div>
                            )
                        })
                            
                    }
                    <div>
                        bakhcb
                    </div>
                    <div>
                        aidhbac
                    </div>
                </div>
            </div>
            
        </div>

    )
}