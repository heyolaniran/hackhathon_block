import { MoveLeft } from "lucide-react";
import Link from "next/link";


export default function  page() {

    return (
        <div className="p-4">

            <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1">
                    <Link href={'/'} className=""><MoveLeft className="w-6 h-6"/></Link>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-[#0F83AB] text-lg font-semibold"> Profile </span>
                </div>
            </div>

            <div className=" absolute mt-3 items-center -translate-x-1/2 -translate-y-1/2 left-1/2 w-80 h-80 rounded-full bg-gray-400 "></div>

            
        </div>
    )
}