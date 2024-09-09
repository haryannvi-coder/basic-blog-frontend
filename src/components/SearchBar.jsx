
export function SearchBar({homePage, setFilter}){

    return <div className="flex items-center  hover:cursor w-1/3" >
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} placeholder={"search topic"} className="w-full h-1/2 text-center rounded-md border border-slate-300  bg-white dark:bg-slate-800 dark:text-white  dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500" />             
    </div>
}