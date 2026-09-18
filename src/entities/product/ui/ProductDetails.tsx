import { type Product } from "../model/types"

interface ProductDetailsProps {
   product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
   const { title, description, price, rating, brand, category, thumbnail } = product

   return (
      <>
         <h1>{title}</h1>
         <p>{price}$ | {rating}*</p>
         <p>{brand} | {category}</p>
         <img src={thumbnail} alt={title} />
         <p>{description}</p>
      </>
   )
}