import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import homelogo from "../assets/typewriter.jpg"
import { GoPlus } from "react-icons/go";
import { useState, useEffect } from 'react';
import { ThemeButton } from "./ThemeButton";

export function TopBar({setFilter}){
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Check if the token exists in localStorage
        const token = localStorage.getItem('token');
        if(token)  setIsLoggedIn(true)
        else  setIsLoggedIn(false)
    }, [isLoggedIn]);

    return <div className="flex justify-between p-2 h-20 border-b dark:border-slate-600 " >

        <div className="flex items-center hover:cursor-pointer ">
            <img onClick={() => {
                navigate(`/dashboard`)}} src={homelogo} alt="home logo" className=" border-2 border-green-400 rounded-full h-full"
            />          
        </div>

        <div className="flex items-center  hover:cursor " >
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} placeholder={"search topic"} className=" h-1/2 text-center rounded-md border border-slate-300  bg-white dark:bg-slate-800 dark:text-white  dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500" />             
        </div>

 
        <div className="flex items-center justify-between" >
            <ThemeButton />


            { isLoggedIn 
            ?  
                <>
                    <GoPlus onClick={() => {
                        navigate("/addblog")
                    }} className="text-4xl text-green-500 cursor-pointer" />

                    <Button onClick={() => {
                        navigate("/logout")
                    }} label={"Logout"} />            
                </>       
            :
                <Button onClick={() => {
                    navigate("/signup")
                }} label={"Get Started"} /> 

            }
        </div>
    </div>
}