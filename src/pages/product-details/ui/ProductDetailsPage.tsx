import { Link, useParams } from "react-router-dom";


import { ProductDetails, useGetProductByIdQuery } from "@/entities/product";
import { ROUTES } from "@/shared/config/routes";
import { PageLoader } from "@/shared/ui/page-loader";

export const ProductDetailsPage = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useGetProductByIdQuery(Number(id))  

   if (isLoading) return <PageLoader />
   if (isError) return <p role="alert">Ошибка при загрузке товара</p>
   if (!product) return <p role="alert">Товар не найден</p>

   return (
      <section>
         <ProductDetails product={product} />
         <Link to={ROUTES.products}>Вернуться в каталог</Link>
      </section>
   )
}