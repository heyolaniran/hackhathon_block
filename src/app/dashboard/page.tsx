"use client"
import { exchanges } from "@/lib/exchanges";
import { xofFetcher } from "@/lib/xofFetcher";
import { useRef, useEffect } from "react"
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowRightToLine, ChevronRightIcon, MoveDownRight, MoveDownRightIcon, MoveLeft, MoveRightIcon, MoveUpRight, MoveUpRightIcon, SquarePlay } from "lucide-react";
import Radiant from "@/components/ui/radient";
export default function Dashboard() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const {xof} = xofFetcher(); 
    const changes = useQuery(api.changes.getChanges); 

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        if (scrollContainer) {
        const interval = setInterval(() => {
            scrollAmount += 1;
            scrollContainer.scrollLeft = scrollAmount;

            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0;
            }
        }, 60); // Vitesse de défilement

        return () => clearInterval(interval);
        }
    }, []);

    return (
       <div className="container p-4">

         <div className="flex items-center justify-center">
          <Link href={'/'} ><MoveLeft className="w-6 h-6 text-[#0F83AB]" /></Link> <h2 className="text-lg font-medium text-[#0F83AB]"> Top of Our Best changes Services </h2>
         </div>
         <div className=" mx-3 overflow-hidden border border-1 rounded-lg border-[#0F83AB]/80 py-2 mt-2">
            <div className="flex items-stcretch space-x-4 md:px-0 px-5 justify-center  overflow-hidden" ref={scrollRef} >
            
                <div className="flex overflow mx-2 space-x-2">
                    <div className="flex w-52 items-center">
                        <div className="bg-[#0F83AB] rounded-[16px] p-4 text-white">
                            <div className="flex items-center space-x-2">
                                <Image alt="" src={'/images/yellow_card.svg'} width={20} height={20} className="rounded-full" /> 
                                <h1 className="text-sm font-bold"> Yello Card </h1>
                            </div>

                            <div className="mt-3 flex justify-between space-x-2 whitespace-nowrap items-center">
                                <h1 className="font-medium text-lg flex items-center"> 636 F <MoveUpRight className="text-white w-4 h-4" /> </h1>
                                <h1 className="font-medium text-lg flex items-center"> 615 F <MoveDownRight className="text-red-600 w-4 h-4" /> </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-52 items-center" >
                        <div className="bg-[#0F83AB] rounded-[16px] p-4 text-white">
                            <div className="flex items-center space-x-2">
                                <Image alt="" src={'/images/izichanges.png'} width={20} height={20} className="rounded-full" /> 
                                <h1 className="text-sm font-bold"> IziChange  </h1>
                            </div>

                            <div className="mt-3 flex justify-between whitespace-nowrap space-x-2 items-center">
                                <h1 className="font-medium text-lg flex items-center"> 650 F <MoveUpRight className="text-white w-4 h-4" /> </h1>
                                <h1 className="font-medium text-lg flex items-center"> 580 F <MoveDownRight className="text-red-600 w-4 h-4" /> </h1>
                            </div>
                        </div>
                    </div>



                </div>
                
           
            </div>
            
         </div> 


         <div className="grid grid-cols-3  mt-4 justify-start items-center border border-[#0F83AB] rounded-lg px-2.5 py-1 space-x-5">
            <div className="col-span-1">
                <Image src={'/images/izichanges.png'} className="rounded-full" width={32} height={32} alt="" />
            </div>
            <div className=" flex justify-between  items-center col-span-2">
                <span className="text-lg font-bold "> Izichange </span>
                <Link href={'https://home.izichange.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
            </div>

             
         </div>

         <div className="grid grid-cols-3  mt-4 justify-start items-center border border-[#0F83AB] rounded-lg px-2.5 py-1 space-x-5">
            <div className="col-span-1">
                <Image src={'/images/yellow_card.svg'} className="rounded-full" width={32} height={32} alt="" />
            </div>
            <div className=" flex justify-between  items-center col-span-2">
                <span className="text-lg font-bold "> Yellow Card </span>
                <Link href={'https://yellowcard.io'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
            </div>

             
         </div>

         <div className="grid grid-cols-3  mt-4 justify-start items-center border border-[#0F83AB] rounded-lg px-2.5 py-1 space-x-5">
            <div className="col-span-1">
                <div className="w-8 h-8 rounded-full animate-pulse bg-gray-300 px-2 py-2"></div>
            </div>
            <div className=" flex justify-between  items-center col-span-2">
                <span className="text-lg font-bold "> Digital Cash  </span>
                <Link href={'https://digitalcashx.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
            </div>

             
         </div>

           


         <div className="mt-4">
            <div className="flex items-center justify-center text-lg text-[#0F83AB] font-medium space-x-2">
                <h1> Better Transactions fees </h1>
            </div>
            
            <div className="">
                

                <div className=" mt-4 space-y-3 py-2">

                <div className="grid grid-cols-5 rounded-lg border border-[#0F83AB] ">
                        <div className="col-span-1">
                        <Radiant text={90} />
                        </div>
                        
                        <div className=" block col-span-2 space-y-1 items-center">
                            <h3 className="text-md font-medium">Yellow Card</h3>
                            <div className="flex items-center justify-start  ">
                                <MoveUpRightIcon className="text-green-600"  />
                                <span className="text-sm">Achat </span>
                            </div>

                        </div>

                        <div className="flex items-center px-2 space-x-3">
                            <div className="block ">
                                <h1 className="text-md font-semibold"> F 636</h1>
                                <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                            </div>
                            <div>
                                
                            <Link href={'https://yellowcard.io'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="grid border border-[#0F83AB] rounded-lg grid-cols-5">
                        <div className="col-span-1">
                            <Radiant text={90} />
                        </div>
                        
                        <div className=" block col-span-2 space-y-1 items-center">
                            <h3 className="text-md font-medium">Izichange</h3>
                            <div className="flex items-center justify-start  ">
                                <MoveUpRightIcon className="text-green-600"  />
                                <span className="text-sm">Achat </span>
                            </div>

                        </div>

                            <div className="flex items-center px-2 space-x-3">
                                <div className="block ">
                                    <h1 className="text-md font-semibold"> F 650</h1>
                                    <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                                </div>

                                <Link href={'https://izichange.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>

                                
                            <div>

                            

                                
                     
                            </div>
                        </div>
                    </div>

                    

                    <div className="grid grid-cols-5 rounded-lg border border-[#0F83AB]">
                        <div className="col-span-1">
                        <Radiant text={30} />
                        </div>
                        
                        <div className=" block col-span-2 space-y-1 items-center">
                            <h3 className="text-md font-medium">Digital Cash</h3>
                            <div className="flex items-center justify-start  ">
                                <MoveUpRightIcon className="text-green-600"  />
                                <span className="text-sm">Achat </span>
                            </div>

                        </div>

                        <div className="flex items-center px-2 space-x-3">
                            <div className="block ">
                                <h1 className="text-md font-semibold"> F 732</h1>
                                <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                            </div>
                            <div>
                            <Link href={'https://digitalcashx.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>

        {/** Vente Start Here  */}
         <div className="mt-4">
            <div className="flex items-center justify-center">
                <span className="text-[#0F83AB] text-lg  font-semibold "> Better Exchange To Sell  </span>
            </div>
            
            <div className="">
                

                <div className=" mt-4 space-y-3 py-2">

                        <div className="grid grid-cols-5 rounded-lg border border-[#0F83AB] ">
                            <div className="col-span-1 flex justify-center items-center">
                                <div className="relative w-12 h-12">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-gray-200 stroke-current"
                                        strokeWidth="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        
                                        <circle
                                        className="text-indigo-500  progress-ring__circle stroke-current"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        strokeDasharray="251.2" 
                                        strokeDashoffset="calc(251.2px - (251.2px * 70) / 100)"
                                        ></circle>
                                        
                                    
                                        <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle">70%</text>

                                    </svg>
                                </div>

                            </div>
                            
                            <div className=" block col-span-2 space-y-1 items-center">
                                <h3 className="text-md font-medium">Yellow Card</h3>
                                <div className="flex items-center justify-start  ">
                                <MoveDownRightIcon className="text-red-600"  />
                                    <span className="text-sm">Vente </span>
                                </div>

                            </div>

                            <div className="flex items-center px-2 space-x-3">
                                <div className="block ">
                                    <h1 className="text-md font-semibold"> F 615</h1>
                                    <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                                </div>
                                <div>
                                <Link href={'https://yellowcard.io'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
                                    
                                </div>
                            </div>
                    </div>

                    <div className="grid border border-[#0F83AB] rounded-lg grid-cols-5">
                        <div className="col-span-1 flex justify-center items-center">
                                <div className="relative w-12 h-12">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-gray-200 stroke-current"
                                        strokeWidth="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        
                                        <circle
                                        className="text-indigo-500  progress-ring__circle stroke-current"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        strokeDasharray="251.2" 
                                        strokeDashoffset="calc(251.2px - (251.2px * 70) / 100)"
                                        ></circle>
                                        
                                    
                                        <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle">70%</text>

                                    </svg>
                                </div>
                        </div>
                        
                        <div className=" block col-span-2 space-y-1 items-center">
                            <h3 className="text-md font-medium">Izichange</h3>
                            <div className="flex items-center justify-start  ">
                                <MoveDownRightIcon className="text-red-600"  />
                                <span className="text-sm">Vente </span>
                            </div>  

                        </div>

                            <div className="flex items-center px-2 space-x-3">
                                <div className="block ">
                                    <h1 className="text-md font-semibold"> F 580</h1>
                                    <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                                </div>
                                <Link href={'https://izichange.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
                             
                            <div>

                            

                                
                     
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-5 rounded-lg border border-[#0F83AB]">
                        
                       

                        <div className="col-span-1 flex justify-center items-">
                                <div className="relative w-12 h-12">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-gray-200 stroke-current"
                                        strokeWidth="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        
                                        <circle
                                        className="text-indigo-500  progress-ring__circle stroke-current"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke-dasharray="251.2" 
                                        stroke-dashoffset="calc(251.2px - (251.2px * 70) / 100)"
                                        ></circle>
                                        
                                    
                                        <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle">70%</text>

                                    </svg>
                                </div>
                        </div>
                        
                        <div className=" block col-span-2 space-y-1 items-center">
                            <h3 className="text-md font-medium">Digital Cash</h3>
                            <div className="flex items-center justify-start  ">
                                <MoveDownRightIcon className="text-red-600"  />
                                <span className="text-sm">Vente </span>
                            </div>

                        </div>

                        <div className="flex items-center px-2 space-x-3">
                            <div className="block ">
                                <h1 className="text-md font-semibold"> F 546</h1>
                                <span className="text-xs uppercase whitespace-nowrap "> usdt-bep20 </span>
                            </div>
                            <div>
                            <Link href={'https://digitalcashx.com'}> <ChevronRightIcon className="w-6 h-6 text-[#0F83AB]" /> </Link>
                             
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>


        
       </div>
    )
}