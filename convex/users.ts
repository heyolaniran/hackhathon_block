import { internalMutation, mutation } from "./_generated/server";
import {ConvexError, v} from 'convex/values'


export const createUser = internalMutation({
    args : {
        tokenIdentifier: v.string(),
        name : v.string(), 
        address : v.optional(v.string()), 
        uid : v.string()
    }, 

    async handler(context, args) {

        return await context.db.insert("users", args)
    }
})


const updateUSDTAddr =  mutation({
    args: {
        address: v.string()
    }, 

    async handler(context , args) {

        const identity = await context.auth.getUserIdentity(); 

        if(!identity?.tokenIdentifier) {
            throw new ConvexError("Vous n'avez pas une signature vérifiée pour faire  cette opération")
        }

        const user = await context.db.query("users").withIndex('by_tokenidentifier', q => q.eq('tokenIdentifier', identity.tokenIdentifier)).first(); 

        if(!user) {
            throw new ConvexError("Aucun utilisateur est lié à cette opération"); 
        }


        return await context.db.patch(user._id, {address : args.address}); 
    }
})

/*export const updateUser = internalMutation({
    args: {
        tokenIdentifier: v.string(), 
    }, 
    async handler(context, args) {

        const user = await context.db.query('users').withIndex('by_tokenidentifier', (q) => q.eq('tokenIdentifier', args.tokenIdentifier)).first(); 

        if(!user) {

            throw new ConvexError("Il n'y a pas d'utilisateur avec cet Identifiant"); 

        }

        await context.db.patch(user._id, {
            address : args.address
        })
    }
})*/