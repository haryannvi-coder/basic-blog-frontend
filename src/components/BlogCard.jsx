import { Button } from "./Button"
import blogImage from '../assets/blog.jpg'; // Import the image
import { useNavigate } from "react-router-dom";

export function BlogCard({title, description, blogId}){
    const navigate = useNavigate()

    return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-md shadow-md hover:shadow-lg dark:shadow-lg ">
        <img src={blogImage} alt="xyz" className="w-full h-40 object-cover rounded-t-md" />
        <div className="font-bold text-xl mb-2 p-4 dark:text-gray-200">
        {title}
        </div>
        <button
            className="bg-green-400 p-2 rounded mx-2 mb-2 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400 text-white transition-colors duration-300 "
            onClick={() => {
                navigate(`/readBlog?blogId=${blogId}`);
            }}
            >
            Read More
        </button>
  </div>
  
}