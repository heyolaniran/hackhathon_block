
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  changes: defineTable({
    bonus: v.float64(),
    enabled: v.boolean(),
    name: v.string(),
  }),
});