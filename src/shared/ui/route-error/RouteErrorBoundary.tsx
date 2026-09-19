import { isRouteErrorResponse, useRouteError } from "react-router-dom"

import styles from './RouteErrorBoundary.module.css'

function getErrorMessage (error: unknown): string {
   if (isRouteErrorResponse(error)) return `${error.status} | ${error.statusText}`

   if (error instanceof Error) return error.message

   return 'Неизвестная ошибка'
}

function handleReload () {
   window.location.reload()
}

export const RouteErrorBoundary = () => {
   const error = useRouteError()
   const message = getErrorMessage(error)

   return (
      <main className={styles.container}>
         <section
            className={styles.card}
            role="alert"
            aria-labelledby="route-error-title"
         >
            <h1 id="route-error-title" className={styles.title}>
               Что-то сломалось
            </h1>

            <p className={styles.message}>{message}</p>

            <button
               className={styles.reloadButton}
               type="button"
               onClick={handleReload}
            >
               Перезагрузить
            </button>
         </section>
      </main>
   )
}