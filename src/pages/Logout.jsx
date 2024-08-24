import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");

        // Display a toast notification if needed
        toast.success('Logged out successfully!');

        // Navigate to the dashboard or login page
        navigate('/dashboard');
    }, [navigate]);

    return null; // Return null or some loading spinner while redirecting
}
