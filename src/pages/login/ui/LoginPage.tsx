import { useNavigate } from "react-router-dom"

import { LoginForm } from "@/features/auth"
import { ROUTES } from "@/shared/config/routes"

export const LoginPage = () => {
   const navigate = useNavigate()

   const handleSubmit = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600))
      await navigate(ROUTES.products, { replace: true })
   }

   return (
      <main>
         <h1>Вход</h1>
         <LoginForm onSubmit={handleSubmit} />
      </main>
   )
}