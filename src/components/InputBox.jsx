export function InputBox({label, placeholder}) {
    return <div className="p-2 text-xl " >
        <div className="py-1" >{label}</div>
        <input  className="w-full p-1 rounded-md" />        
    </div>
}