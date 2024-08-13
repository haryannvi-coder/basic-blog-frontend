export function InputBox({label, placeholder, onChange}) {
    return <div className="p-2 text-xl " >
        <div>{label}</div>
        <input onChange={onChange} placeholder={placeholder}  className="p-1 rounded-md border border-green-300" />        
    </div>
}