import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export function DeleteBlog() {
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("blogId");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function deleteBlog() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `https://basic-blog-backend-production.up.railway.app/api/v1/blog/deleteBlog`,
        {
          params: { blogId }, // Pass blogId as a query parameter
          headers: {
            Authorization: `Bearer ${token}` // Add auth token if required
          }
        }
      );

      toast.success('Blog deleted successfully!'); // Show success message
      navigate(`/dashboard`);
    } catch (error) {
      toast.error("You aren't allowed to delete this blog");
      navigate(`/readBlog?blogId=${blogId}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    deleteBlog();
  }, []); // Empty dependency array to run only once

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="loader"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">Processing...</p>
        </div>
      </div>
    );
  }

  return null;
}
