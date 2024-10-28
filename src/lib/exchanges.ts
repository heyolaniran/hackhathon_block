"use client"
import { useEffect, useState } from "react"
import { getChanges } from "../../convex/changes"
import { api } from "../../convex/_generated/api"
import { useQuery } from "convex/react"



export const exchanges = () => {

    const [changes, setExchanges] = useState<any[]>(); 

    const [isLoading, setIsLoading] = useState<boolean>(true); 

    useEffect(() => {

        const changes = useQuery(api.changes.getChanges); 

        setIsLoading(false)
        
        setExchanges(changes)
        //setExchanges(changes)

    }, [])


    return {isLoading, changes}

}