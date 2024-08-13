import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios"

export function AddBlog(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

    return <div className="bg-green-100 h-screen" >
        <InputBox onChange={(e) => {
                setTitle(e.target.value)
            }} label={"Title"} placeholder={"AI"} />

        <InputBox onChange={(e) => {
                setDescription(e.target.value)
            }} label={"Description"} placeholder={"AI and its challenges"} />

        <InputBox onChange={(e) => {
                setContent(e.target.value)
            }} label={"Content"} placeholder={"AI and its challenges"} />

        <Button onClick={async () => {
            try {
                const token = localStorage.getItem("token"); 
                const res = await axios.post(`http://localhost:3000/api/v1/blog/addBlog`, {
                    title,
                    description,
                    content
                }, {
                    headers : {
                        "Authorization" : `Bearer ${token}` // Include the token in the headers
                    }
                })   
                toast.success('Blog added successful!'); // Show success message
            }
            catch (err){
                toast.error('There was an error saving blog. Please try again.');
            }
        }} label={"Submit Blog"} />
    </div>
}