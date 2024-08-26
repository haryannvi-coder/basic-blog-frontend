import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../components/Button";
import { TopBar } from "../components/TopBar";

export function ReadBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const [blog, setBlog] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function getBlog(){
            if (blogId) {
                try {
                    const res = await axios.get(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/readBlog`, {
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

    return  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <TopBar />

    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <Button 
          label={"Edit"} 
          onClick={() => navigate(`/editBlog?blogId=${blogId}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
        />
        <Button 
          label={"Delete"} 
          onClick={() => navigate(`/deleteBlog?blogId=${blogId}`)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-300"
        />
      </div>

      <div className="text-center font-bold text-4xl mb-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md dark:shadow-lg">
        {blog.title}
      </div>

      <div className="text-center font-serif text-xl mb-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md dark:shadow-lg">
        {blog.description}
      </div>

      <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-md shadow-md dark:shadow-lg">
        {blog.content}
      </div>
    </div>
  </div>
  
}