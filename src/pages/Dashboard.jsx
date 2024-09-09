import { BlogCard } from "../components/BlogCard";
import { TopBar } from "../components/TopBar";
import { useState, useEffect } from "react";
import axios from "axios"
import { Footer } from "../components/Footer";
import { SearchBar } from "../components/SearchBar";


export function Dashboard(){
    const [filter, setFilter] = useState("")
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        async function getBlogs(){
            const res = await axios.get(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/getBlogs?filter=${filter}`)
            const sortedBlogs = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by createdAt
            setBlogs(sortedBlogs);
        }
        getBlogs()
    }, [filter])

    return <div className="min-h-screen px-2 dark:bg-slate-900" >
        <TopBar setFilter={setFilter} homePage={true} />
        <div className="my-5" ></div>
        <div className=" flex flex-wrap justify-around gap-6">
            {blogs.map((blog, id) => {
                return (
                    <BlogCard  key={id} title={blog.title}  description={blog.description} blogId={blog._id} />
                )
            })}
        </div>    
    </div>
}
