import { Link } from "react-router-dom"

import { buildProductDetailsPath } from "@/shared/config/routes"

import { type Product } from "../model/types"

import styles from './ProdcutCard.module.css'

interface ProductCardProps {
   product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
   const { id, title, category, brand, price, rating } = product

   const productURL = buildProductDetailsPath(id)

   return (
      <article className={styles.card}>
         <div className={styles.content}>
            <p className={styles.category}>
               {category} · {brand}
            </p>

            <h2 className={styles.title}>{title}</h2>

            <div className={styles.info}>
               <span className={styles.price}>${price}</span>

               <span
                  className={styles.rating}
                  aria-label={`Рейтинг: ${rating}`}
               >
                  ★ {rating}
               </span>
            </div>

            <Link className={styles.link} to={productURL}>
               Открыть страницу товара
            </Link>
         </div>
      </article>
   )
}