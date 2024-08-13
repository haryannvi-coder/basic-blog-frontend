import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom"


export function DeleteBlog(){
    const [searchParams] = useSearchParams()
    const blogId = searchParams.get("blogId");
    const navigate = useNavigate()

    async function deleteBlog() {
        const token = localStorage.getItem("token"); 
        try {
            const response = await axios.delete(`https://basic-blog-backend.onrender.com/api/v1/blog/deleteBlog`, {
                params: { blogId }, // Pass blogId as a query parameter
                headers: {
                    Authorization: `Bearer ${token}` // Add auth token if required
                }
            });

            toast.success('Blog deleted successful!'); // Show success message
            setTimeout(() => {
                navigate('/dashboard')
            }, 3000);  // Redirect to dashboard page
        } catch (error) {
            console.error('Error deleting the blog post:', error.response ? error.response.data.msg : error.message);
        }
    };

    deleteBlog();
    return <>
    </>
}