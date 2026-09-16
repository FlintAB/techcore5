import { isRouteErrorResponse, useRouteError } from "react-router-dom"

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
      <div role="alert">
         <h1>Что-то сломалось</h1>
         <p>{message}</p>
         <button type="button" onClick={handleReload}>Перезагрузить</button>
      </div>
   )
}