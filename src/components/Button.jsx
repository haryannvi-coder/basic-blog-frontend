export function Button({label, onClick}){
    return <button onClick={onClick} className="m-1 p-2 bg-green-400 rounded-xl text-white font-semibold text-base hover:bg-green-500  focus:outline-none focus:ring focus:ring-white " >
        {label}
    </button>
}