// import { Fragment } from "react"

export const Counter = () => {
    return (
        <div className="flex items-center gap-x-2">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">Decrement</button>
            <span>0</span>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">Increment</button>
        </div>
    )
}
