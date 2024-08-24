import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState, useRef } from "react";
import { toast } from 'react-toastify';
import axios from "axios"
import {Editor} from "@tinymce/tinymce-react"
import { useNavigate } from "react-router-dom";
import { TopBar } from "../components/TopBar";


export function AddBlog(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const editorRef = useRef()
    const navigate = useNavigate()

    return <div>
        <TopBar  />
        <InputBox onChange={(e) => {
            setTitle(e.target.value)
        }} label={"Title"} placeholder={"AI"} />

        <InputBox onChange={(e) => {
            setDescription(e.target.value)
        }} label={"Description"} placeholder={"AI and its challenges"} />

        <textarea onChange={(e) => {
            setContent(e.target.value)
        }} name="" id=""></textarea>

        <Button onClick={async () => {
            try {
                const token = localStorage.getItem("token"); 
                const res = await axios.post(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/addBlog`, {
                    title,
                    description,
                    content
                }, {
                    headers : {
                        "Authorization" : `Bearer ${token}` // Include the token in the headers
                    }
                })   
                toast.success('Blog added successful!'); // Show success message
                navigate(`/dashboard`)
            }
            catch (err){
                toast.error("Failed to add blog");
            }
        }} label={"Submit Blog"} />
    </div>
}