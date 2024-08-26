import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}){
    return <div className="p-2 text-lg" >
        {label}
        <Link className="px-2 underline text-green-500" to={to}>
            {buttonText}
      </Link>
    </div>
}