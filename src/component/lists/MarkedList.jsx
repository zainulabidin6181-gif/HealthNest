import { TiTick } from "react-icons/ti";
function MarkedList({text,className}) {
    return (
        <>
            
            <li className={`flex gap-2 font-semibold text-blue-900 ${className}`}><TiTick className="bg-lime-600 rounded-full mt-1 text-white"/> {text}</li>
            
        </>
    )
}
export default MarkedList;