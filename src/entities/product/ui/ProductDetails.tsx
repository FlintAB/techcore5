import { type Product } from "../model/types"

import styles from './ProductDetails.module.css'

interface ProductDetailsProps {
   product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
   const { title, description, price, rating, brand, category, thumbnail } = product

   return (
      <article className={styles.product}>
         <div className={styles.imageWrapper}>
            <img
               className={styles.image}
               src={thumbnail}
               alt={title}
            />
         </div>

         <div className={styles.content}>
            <p className={styles.meta}>
               {category} · {brand}
            </p>

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.info}>
               <span className={styles.price}>${price}</span>

               <span
                  className={styles.rating}
                  aria-label={`Рейтинг: ${rating}`}
               >
                  ★ {rating}
               </span>
            </div>

            <p className={styles.description}>{description}</p>
         </div>
      </article>
   )
}