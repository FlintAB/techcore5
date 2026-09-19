import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'

import styles from './NotFoundPage.module.css'

export const NotFoundPage = () => (
   <main className={styles.container}>
      <section
         className={styles.card}
         aria-labelledby="not-found-title"
      >
         <span className={styles.code} aria-hidden="true">
            404
         </span>

         <h1 id="not-found-title" className={styles.title}>
            Страница не найдена
         </h1>

         <p className={styles.description}>
            Проверьте адрес — возможно, страница была удалена или переехала.
         </p>

         <Link className={styles.link} to={ROUTES.products}>
            Вернуться в каталог
         </Link>
      </section>
   </main>
)