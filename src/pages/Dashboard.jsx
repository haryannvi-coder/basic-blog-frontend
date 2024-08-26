import { BlogCard } from "../components/BlogCard";
import { TopBar } from "../components/TopBar";
import { useState, useEffect } from "react";
import axios from "axios"


export function Dashboard(){
    const [filter, setFilter] = useState("")
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        async function getBlogs(){
            const res = await axios.get(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/getBlogs?filter=${filter}`)
            setBlogs(res.data)
        }
        getBlogs()
    }, [filter])

    return <div className="min-h-screen px-2 dark:bg-slate-900" >
        <TopBar setFilter={setFilter} homePage={true} />
        <div className="my-5 flex flex-wrap justify-around gap-4">
            {blogs.map((blog, id) => {
                return (
                    <BlogCard  key={id} title={blog.title}  description={blog.description} blogId={blog._id} />
                )
            })}
        </div>    
        <footer className="py-4 bg-gray-100 dark:bg-slate-800 text-center text-gray-800 dark:text-gray-300">
        <div>Made with ❤️ by Rohit Rao</div>
    </footer>    
    </div>
    
}
