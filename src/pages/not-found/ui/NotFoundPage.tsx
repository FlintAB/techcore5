import { Link } from "react-router-dom";

import { ROUTES } from "@/shared/config/routes";

export const NotFoundPage = () => (
   <section>
      <h1>Страница не найдена</h1>
      <p>Проверьте адрес — возможно, страница была удалена или переехала.</p>
      <Link to={ROUTES.products}>Вернуться в каталог</Link>
   </section>
)