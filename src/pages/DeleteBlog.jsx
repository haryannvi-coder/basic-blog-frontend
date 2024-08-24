import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom"
import { TopBar } from "../components/TopBar";


export function DeleteBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const navigate = useNavigate()

    async function deleteBlog() {
        const token = localStorage.getItem("token"); 
        try {
            const response = await axios.delete(`https://basic-blog-backend-production.up.railway.app/api/v1/blog/deleteBlog`, {
                params: { blogId }, // Pass blogId as a query parameter
                headers: {
                    Authorization: `Bearer ${token}` // Add auth token if required
                }
            });

            toast.success('Blog deleted successful!'); // Show success message
            navigate(`/dashboard`)
           
        } catch (error) {
            toast.error("You aren't allowed to delete this blog")
            navigate(`/readBlog?blogId=${blogId}`)
        } 
    };

    useEffect(()=>{
        deleteBlog();
    })

    return null
}