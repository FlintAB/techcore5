import { Link, Navigate, useParams } from "react-router-dom";

import { ROUTES } from "@/shared/config/routes";

export const ProductDetailsPage = () => {
   const { id } = useParams();

   if (!id) return <Navigate to={ROUTES.products} replace />

   return (
      <section>
         <h1>Товар</h1>
         <p>{id}</p>
         <Link to={ROUTES.products}>Вернуться в каталог</Link>
      </section>
   )
}