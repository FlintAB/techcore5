import { useGetProductsQuery, ProductCard } from "@/entities/product";
import { PageLoader } from "@/shared/ui/page-loader";

export const ProductsPage = () => {
   const { data, isLoading, isError } = useGetProductsQuery();

   if (isLoading) return <PageLoader />

   if (isError) return <p role="alert">Не удалось загрузить товары</p>

   if (!data?.length) {
      return (
         <section>
            <h1>Каталог</h1>
            <p>Товары отсутствуют</p>
         </section>
      );
   }

   return (
      <section>
         <h1>Каталог</h1>

         {data.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}

      </section>
   )
}