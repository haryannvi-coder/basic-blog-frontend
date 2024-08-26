import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useSearchParams } from "react-router-dom"
import { TopBar } from "../components/TopBar";

export function EditBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

    return <div className="min-h-screen dark:bg-slate-900 px-2" >
    <TopBar  />
    <div className="my-4 space-y-4" >
        <input placeholder={"Title"} onChange={(e) => {
                setTitle(e.target.value);
            }} 
            className="w-full p-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input onChange={(e) => {
                setDescription(e.target.value);
            }} placeholder={"Description"}
            className="w-full p-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 "
        />

        <textarea
            onChange={(e) => {
            setContent(e.target.value);
            }}
            placeholder="Content"
            className="w-full p-2 h-32 border rounded-md bg-white dark:bg-slate-800 dark:text-white border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <Button onClick={async () => {
            try {
                const token = localStorage.getItem("token"); 
                await axios.put(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/editBlog?blogId=${blogId}`, {
                    title,
                    description,
                    content
                }, {
                    headers : {
                        "Authorization" : `Bearer ${token}` // Include the token in the headers
                    }
                })   
                toast.success('Blog updated successful!'); // Show success message
            }
            catch (err){
                toast.error("You aren't allowed to update this blog");
            }
        }} label={"Save Blog"} />
        </div>
     
    </div>
}