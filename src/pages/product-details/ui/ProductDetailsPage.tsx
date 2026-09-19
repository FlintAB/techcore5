import { Link, useParams } from "react-router-dom";


import { ProductDetails, useGetProductByIdQuery } from "@/entities/product";
import { ROUTES } from "@/shared/config/routes";
import { PageLoader } from "@/shared/ui/page-loader";

import styles from './ProductDetailsPage.module.css'

export const ProductDetailsPage = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useGetProductByIdQuery(Number(id))  

   if (isLoading) return <PageLoader />
   if (isError) return <p className={styles.state} role="alert">Ошибка при загрузке товара</p>
   if (!product) return <p className={styles.state} role="alert">Товар не найден</p>

   return (
      <section className={styles.container}>
         <ProductDetails product={product} />

         <Link className={styles.backLink} to={ROUTES.products}>
            ← Вернуться в каталог
         </Link>
      </section>
   )
}