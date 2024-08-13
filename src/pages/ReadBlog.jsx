import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../components/Button";

export function ReadBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const [blog, setBlog] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function getBlog(){
            if (blogId) {
                try {
                    const res = await axios.get(`https://basic-blog-backend.onrender.com/api/v1/blog/readBlog`, {
                        params: { blogId } // Pass blogId as a query parameter
                    });
                    setBlog(res.data);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            }
            else{
                console.log("blogid null");
            }
        }
        getBlog()        
    }, [blogId])

    return <div className="bg-green-100 h-screen" >
        <Button label={"Edit"} onClick={() => {
            navigate(`/editBlog?blogId=${blogId}`)
        }} />

        <Button label={"Delete"} onClick={() => {
            navigate(`/deleteBlog?blogId=${blogId}`)
        }} />

        <div className="text-center font-bold text-4xl p-2" >
            {blog.title}
        </div>
        <div className="text-center font-serif text-xl p-2" >
            {blog.description}            
        </div>
        <div className="text-center" >
            {blog.content}            
        </div>

    </div>
}