import { Button } from "./Button"
import blogImage from '../assets/blog.jpg'; // Import the image
import { useNavigate } from "react-router-dom";

export function BlogCard({title, description, blogId}){
    const navigate = useNavigate()

    return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:1/6 border border-orange-100 rounded-md hover:shadow-2xl">
        <img src={blogImage} alt="xyz" className="w-full h-auto"/>
        <div className="ont-bold text-xl mb-2 p-2" >
            {title}
        </div>
        <div className="text-gray-700 mb-4 px-2">
            {description}
        </div>
        <button className="bg-green-400 p-0.5 rounded mx-2 my-2 hover:bg-green-500 text-white" onClick={() => {
            navigate(`/readBlog?blogId=${blogId}`)
        }} >Read More </button>
    </div>
}