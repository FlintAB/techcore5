import { useGetProductsQuery, ProductCard } from "@/entities/product";
import { PageLoader } from "@/shared/ui/page-loader";

import styles from './ProductsPage.module.css'

export const ProductsPage = () => {
   const { data, isLoading, isError } = useGetProductsQuery();

   if (isLoading) return <PageLoader />

   if (isError) return <p className={styles.state} role="alert">Не удалось загрузить товары</p>

   if (!data?.length) {
      return (
         <section className={styles.container}>
            <h1 className={styles.heading}>Каталог</h1>
            <p className={styles.state}>Товары отсутствуют</p>
         </section>
      );
   }

   return (
      <section className={styles.container}>
         <h1 className={styles.heading}>Каталог</h1>

         <div className={styles.grid}>
            {data.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>
   )
}