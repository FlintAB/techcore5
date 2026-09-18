import { type z } from "zod"

import { type productsResponseSchema, type productSchema } from "./product-schema"

export type Product = z.infer<typeof productSchema>

export type ProductsResponse = z.infer<typeof productsResponseSchema>