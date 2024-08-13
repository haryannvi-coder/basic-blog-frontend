import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { InputBox } from "./InputBox"

export function TopBar({setFilter}){
    const navigate = useNavigate();

    return <div className="flex justify-between p-2" >
        <div className="flex justify-" >
            <Button onClick={() => {
                navigate("/addblog")
            }} label={"Add Blog"} />  
            <InputBox onChange={(e) => {
                setFilter(e.target.value)
            }} placeholder={"search"} />
        </div>
        <div >
            <Button onClick={() => {
                navigate("/signup")
            }} label={"Signup"} /> 

            <Button onClick={() => {
                navigate("/signin")
            }} label={"Signin"} />  
           
        </div>

        
    </div>
}