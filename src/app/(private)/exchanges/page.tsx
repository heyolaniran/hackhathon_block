'use client'

import { exchanges } from "@/lib/exchanges"
import { XOF, xofFetcher } from "@/lib/xofFetcher"
import { useQuery } from "convex/react"
import { useEffect, useState} from "react"
import { api } from "../../../../convex/_generated/api"

export default function Page() {

    const {xof} = xofFetcher()
    
    const exchanges = useQuery(api.changes.getChanges); 

    console.log(exchanges);

    return (

      <div>
         {xof?.code} = {Math.round(xof?.value!)}
      </div>
        
    )
}