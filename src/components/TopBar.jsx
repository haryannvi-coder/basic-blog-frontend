import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { GoPlus } from "react-icons/go";
import { useState, useEffect } from 'react';
import { ThemeButton } from "./ThemeButton";
import { RiBloggerFill } from "react-icons/ri";

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
            <RiBloggerFill onClick={() => {
                navigate(`/dashboard`)}} className=" text-green-500 text-6xl"/>          
        </div>

        <div className="flex items-center  hover:cursor w-1/3" >
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} placeholder={"search topic"} className="w-full h-1/2 text-center rounded-md border border-slate-300  bg-white dark:bg-slate-800 dark:text-white  dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500" />             
        </div>

 
        <div className="flex items-center justify-between space-x-4" >
            <ThemeButton />

            { isLoggedIn 
            ?  
                <>
                    <GoPlus onClick={() => {
                        navigate("/addblog")
                    }} className="text-6xl text-green-500 cursor-pointer" />

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