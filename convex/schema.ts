
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  changes: defineTable({
    bonus_achat: v.float64(),
    bonus_vente: v.float64(),
    enabled: v.boolean(),
    url : v.string(), 
    name: v.string(),
  }),

  users : defineTable({
    tokenIdentifier: v.string(),
    name : v.string(), 
    address : v.optional(v.string()), 
    uid : v.string()
  
  }).index("by_tokenidentifier", ['tokenIdentifier'])
    .index("by_uid", ['uid']) 
});