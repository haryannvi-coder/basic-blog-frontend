export function Button({label, onClick}){
    return <button onClick={onClick} className="w-full p-2 bg-green-400 rounded-xl text-white font-semibold text-lg hover:bg-green-500  focus:outline-none focus:ring focus:ring-white " >
        {label}
    </button>
}