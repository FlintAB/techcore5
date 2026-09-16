export const ROUTES = {
   login: '/login',
   products: '/products',
   productDetails: '/products/:id',
} as const

export const buildProductDetailsPath = (productId: string): string => `/products/${productId}`