import { mutation, query } from "./_generated/server";
import {v}  from "convex/values"; 

export const createChange = mutation({
    args: {
        name : v.string(),
        bonus : v.number(), 
        enabled : v.boolean()
    }, 

    async handler(context, args) {

        return await context.db.insert("changes", args)
    }
})


export const getChanges = query({
    args: {
        _id : v.string()
    },
    async handler (context, args) {
    
        return await context.db.query("changes").collect();  
    }
})