'use client'
import { useState, useEffect } from "react";
import axios from "axios";


export interface XOF {
    code : string, 
    value: number
}

export const xofFetcher = () => {


    

    const [xof, setXOF] = useState<XOF>();
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
        const api = axios.get('https://api.currencyapi.com/v3/latest', {
            headers: {
                'apiKey' : 'cur_live_541ZE9E77Yphc2ZIscDa6Ycf4KQA8Lefauetb8eP'
            }
        }).then((response) => {
            setXOF(response.data.data.XOF)
            setIsLoading(false)
            console.log(response.data.data.XOF)
        })
    }, [])
    

    return {isLoading,xof}; 
}