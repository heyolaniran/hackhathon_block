import { mutation, query } from "./_generated/server";
import {v}  from "convex/values"; 

export const createChange = mutation({
    args: {
        name : v.string(),
        bonus_achat : v.number(), 
        bonus_vente: v.number(),
        url: v.string(), 
        enabled : v.boolean()
    }, 

    async handler(context, args) {

        return await context.db.insert("changes", args)
    }
})


export const getChanges = query({
    args: {},
    async handler (context, args) {
    
        return await context.db.query("changes").collect();  
    }
})