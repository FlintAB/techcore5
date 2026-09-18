import { baseApi } from "@/shared/api";

import { productSchema, productsResponseSchema } from "../model/product-schema";
import type { Product } from "../model/types";

const productsAPI = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getProducts: builder.query<Product[], void>({
         query: () => ({
            url: '/products',
            params: { limit: 10 },
            method: 'GET',
         }),

         transformResponse: (response: unknown): Product[] => {
            const data = productsResponseSchema.parse(response)

            return data.products
         }
      }),

      getProductById: builder.query<Product, number>({
         query: (id) => ({
            url: `/products/${id}`,
            method: 'GET',
         }),

         transformResponse: (response: unknown): Product => {
            return productSchema.parse(response)
         }
      }),
   })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsAPI;