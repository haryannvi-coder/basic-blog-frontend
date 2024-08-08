import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signin(){
    return <div className="bg-green-100 h-screen flex justify-center items-center">
        <div className="shadow-2xl border-black font-mono text-center" >
            <Heading label="Signin" />
            <SubHeading label={"Enter your info to access your account"} />
            <InputBox label={"Email"} placeholder={"john.dev@xom"} />
            <InputBox label={"Password"} placeholder={"pass456"} />
            <Button label={"Sign In"} />
            <BottomWarning label={"Don't have account?"} buttonText={"Signup"} to={"/signup"} />     
        </div>
    </div>
}