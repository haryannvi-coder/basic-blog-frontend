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

    return <div className="text-center">
        <TopBar  />
        <InputBox onChange={(e) => {
            setTitle(e.target.value)
        }} label={"Title"} placeholder={"AI"} />

        <InputBox onChange={(e) => {
            setDescription(e.target.value)
        }} label={"Description"} placeholder={"AI and its challenges"} />

        <input type="" onChange={(e) => {
            setContent(e.target.value)
        }}  placeholder={"content"} />

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
}