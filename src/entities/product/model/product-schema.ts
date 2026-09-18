import { z } from "zod";

export const productSchema = z.object({
   id: z.number().int().positive(),
   title: z.string().trim().min(1),
   description: z.string().trim().min(1),
   category: z.string().trim().min(1),
   brand: z.string().trim().min(1).optional(),
   price: z.number().nonnegative(),
   rating: z.number().min(0).max(5),
   thumbnail: z.url(),
})

export const productsResponseSchema = z.object({products: z.array(productSchema)})