import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export function ReadBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const [blog, setBlog] = useState({})

    useEffect(() => {
        async function getBlog(){
            if (blogId) {
                try {
                    const res = await axios.get(`http://localhost:3000/api/v1/blog/readBlog`, {
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

    return <>
        {blog.title}
        {blog.description}
        {blog.content}
    </>
}