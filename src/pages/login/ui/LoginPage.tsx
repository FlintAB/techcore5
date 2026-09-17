import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { LoginForm, type LoginFormData, signedIn, useLoginMutation } from "@/features/auth"
import { ROUTES } from "@/shared/config/routes"

export const LoginPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const [login] = useLoginMutation()

   const handleSubmit = async (data: LoginFormData): Promise<void> => {
      const session = await login(data).unwrap()

      dispatch(signedIn(session))
      await navigate(ROUTES.products, { replace: true })
   }

   return (
      <main>
         <h1>Вход</h1>
         <LoginForm onSubmit={handleSubmit} />
      </main>
   )
}