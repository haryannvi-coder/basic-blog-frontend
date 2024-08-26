import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


export function Signin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return <div className="h-screen flex justify-center items-center">
        <div className="shadow-2xl border-black font-mono text-center" >
            <Heading label="Signin" />

            <SubHeading label={"Enter your info to access your account"} />

            <InputBox onChange={(e) => {
                setEmail(e.target.value)
            }} label={"Email"} placeholder={"john.dev@xom"} />

            <InputBox onChange={(e) => {
                setPassword(e.target.value)
            }} label={"Password"} placeholder={"pass456"} />

            <Button onClick={async () => {
                try {
                    const res = await axios.post(`https://basic-blog-backend-production.up.railway.app/api/v1/user/signin`, {
                        email,
                        password
                    })

                    localStorage.setItem("token", res.data.token)  

                    toast.success('Signin successful! Redirecting to dashboard...'); // Show success message

                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 1000);  // Redirect to dashboard page

                } catch (error) {
                    console.log(res);
                    
                    toast.error('There was an error signing in. Please try again.');
                }
            }} label={"Sign In"} />

            <BottomWarning label={"Don't have account?"} buttonText={"Signup"} to={"/signup"} />     
        </div>
    </div>
}