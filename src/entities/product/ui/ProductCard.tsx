import { Link } from "react-router-dom"

import { buildProductDetailsPath } from "@/shared/config/routes"

import { type Product } from "../model/types"

interface ProductCardProps {
   product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
   const { id, title, category, brand, price, rating } = product

   const productURL = buildProductDetailsPath(id)

   return (
      <article>
         <h3>{title}</h3>
         <p>{category} | {brand}</p>
         <p>{price}$ | {rating}*</p>

         <Link to={productURL}>Открыть страницу товара</Link>
      </article>
   )
}