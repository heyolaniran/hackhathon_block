"use client"

import { useMutation } from "convex/react"
import { useEffect } from "react"
import { api } from "../../../../convex/_generated/api"

export default function page() {

    const createChange = useMutation(api.changes.createChange); 

    useEffect(() => {

        createChange({
            name: "Izichange",
            bonus: 45, 
            enabled: true
        })

    }, [])

    return (
        <div>
            lorem
        </div>
    )
}