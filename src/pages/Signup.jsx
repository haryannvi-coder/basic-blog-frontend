import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"


export function Signup(){
    return <div className="bg-green-100 h-screen flex justify-center items-center">
        <div className="shadow-2xl border-black font-mono text-center" >
            <Heading label={"Signup"} />
            <SubHeading label={"Enter your info to create an account"} />
            <InputBox label={"First Name"} placeholder={"John"} />
            <InputBox label={"Last Name"} placeholder={"Dev"} />
            <InputBox label={"Email"} placeholder={"john.dev@xom"} />
            <InputBox label={"Password"} placeholder={"pass456"} />
            <Button label={"Sign Up"} />
            <BottomWarning label={"Already have account?"} buttonText={"Signin"} to={"/signin"} />            
        </div>
    </div>
}