import { Link } from "react-router-dom"

export function TopBar(){
    return <div>
        <Link to="/signin" >Signin</Link>
        <Link to="/signup" >Signup</Link>
    </div>
}