import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';



export function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const navigate = useNavigate();

    return <div className="bg-green-100 h-screen flex justify-center items-center">
        <div className="shadow-2xl border-black font-mono text-center" >
            <Heading label={"Signup"} />

            <SubHeading label={"Enter your info to create an account"} />

            <InputBox onChange={(e) => {
                setFirstName(e.target.value)
            }} label={"First Name"} placeholder={"John"} />

            <InputBox onChange={(e) => {
                setLastName(e.target.value)
            }} label={"Last Name"} placeholder={"Dev"} />

            <InputBox  onChange={(e) => {
                setEmail(e.target.value)
            }} label={"Email"} placeholder={"john.dev@xom"} />

            <InputBox onChange={(e) => {
                setPassword(e.target.value)
            }} label={"Password"} placeholder={"pass456"} />

            <Button onClick={async () => {
                try {
                    const res = await axios.post(`https://basic-blog-backend-production.up.railway.app/api/v1/user/signup`, {
                        firstName, 
                        lastName,
                        email,
                        password
                    })

                    localStorage.setItem("token", res.data.token)  

                    toast.success('Signup successful! Redirecting to dashboard...'); // Show success message

                    navigate('/dashboard')

                } catch (error) {
                    toast.error('There was an error signing up. Please try again.');
                }
            }} label={"Sign Up"} />

            <BottomWarning label={"Already have account?"} buttonText={"Signin"} to={"/signin"} />            
        </div>
    </div>
}