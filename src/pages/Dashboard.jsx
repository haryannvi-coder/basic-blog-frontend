import { BlogCard } from "../components/BlogCard";
import { TopBar } from "../components/TopBar";
import { useState, useEffect } from "react";
import axios from "axios"


export function Dashboard(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        async function getBlogs(){
            const res = await axios.get(`http://localhost:3000/api/v1/blog/getBlogs`)
            setBlogs(res.data)
        }
        getBlogs()
    }, [])

    return <div className="container mx-auto px-4" >
        <TopBar />
        <div className="flex flex-wrap justify-around gap-4">
            {blogs.map((blog, id) => {
                return (
                    <BlogCard key={id} title={blog.title}  description={blog.description}/>
                )
            })}
        </div>        
    </div>

}
