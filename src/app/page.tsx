"use client"
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import {useRouter} from 'next/navigation'
export default function Home() {

  const router = useRouter() ; 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="p-3 mb-6 items-center">

          <div className="w-80 h-[500px] rotate-2  bg-[#D1F6FC] rounded-full absolute z-1 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  blur-lg">
            <div className="w-72 h-[200px] bg-[#0FA6CC]/70 rounded-full absolute z-1 top-1/3 left-1/2 -translate-x-1/2 -transla-y-1/2 rotate-6 blur-xl ">
            </div>
            <div className="w-72 h-[200px] bg-[#0FA6CC]/70 rounded-full absolute z-1 top-1/3 left-1/2 -translate-x-1/2 -transla-y-1/2 -rotate-3 blur-xl ">
            </div>
          </div>

          <div className="relative z-0">
            <Image src={'/images/wallet.svg'} width={300} height={300} className="rotate-2 flex items-center top-1/2" alt="" />
          </div>
      
           

        </div>

        <div className="relative">
            <div className="text-3xl p-6 font-medium">
              <h2 className=""> Buy , Sell &<span className="struggle sm:leading-loose leading-10 "> Trade</span>  </h2>  {" "} 
              more efficiently 

              <p className=" p-2 text-gray-500 mt-2 text-sm ">
              Instantly invest in cryptocurrencies, exchange it and pay online with us
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 whitespace-nowrap border border-[#146A8A] border-spacing-1 items-center rounded-[16px] p-2 ">
              <div className="col-span-1 ">
                <button onClick={()=> router.push('/dashboard')  } className="p-3 text-white bg-[#146A8A] rounded-[16px] "> <MoveRight /> </button>
              </div>
              <div className="">
                <div className=" flex justify-center  items-center">
                  <h1 className="text-lg font-semibold">
                    Swipe to Start
                  </h1>
                </div>
                
              </div>
            </div>
        </div>

        
      </main>
    </div>
  );
}
