import { type Product } from "../model/types"

interface ProductCardProps {
   product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
   const { title, category, brand, price, rating } = product

   return (
      <article>
         <h3>{title}</h3>
         <p>{category} | {brand}</p>
         <p>{price}$ | {rating}*</p>
      </article>
   )
}