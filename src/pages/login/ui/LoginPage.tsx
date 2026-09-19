import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { LoginForm, type LoginFormData, signedIn, useLoginMutation } from "@/features/auth"
import { ROUTES } from "@/shared/config/routes"

import styles from './LoginPage.module.css'

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
      <main className={styles.container}>
         <section className={styles.content}>
            <h1 id="login-title" className={styles.title}>
               Вход
            </h1>

            <LoginForm onSubmit={handleSubmit} />
         </section>
      </main>
   )
}