
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
});