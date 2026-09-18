import { baseApi } from "@/shared/api";

import { productsResponseSchema } from "../model/product-schema";
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
      })
   })
})

export const { useGetProductsQuery } = productsAPI;