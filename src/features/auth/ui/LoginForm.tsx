import { zodResolver } from "@hookform/resolvers/zod"
import { type SubmitEventHandler } from "react"
import { useForm } from "react-hook-form"

import { type LoginFormData, loginSchema } from "../model/login-schema"

import styles from './LoginForm.module.css'

interface LoginFormProps {
   onSubmit: (data: LoginFormData) => Promise<void>
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
   const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema),
      mode: 'onTouched',
      defaultValues: {
         username: '',
         password: ''
      },
   })

   const submitForm = handleSubmit(async (data) => {
      try {
         await onSubmit(data)
      } catch (error) {
         setError('root', {
            message: error instanceof Error ? error.message : 'Не удалось войти'
         })
      }
   })

   const handleFormSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
      void submitForm((event))
   }

   return (
      <form
         className={styles.form}
         onSubmit={handleFormSubmit}
         noValidate
      >
         <div className={styles.field}>
            <label className={styles.label} htmlFor="username">
               Логин
            </label>

            <input
               {...register('username')}
               className={styles.input}
               id="username"
               type="text"
               placeholder="emilys"
               aria-invalid={Boolean(errors.username)}
               aria-describedby={
                  errors.username ? 'username-error' : undefined
               }
               autoComplete="username"
            />

            {errors.username && (
               <p
                  className={styles.error}
                  id="username-error"
                  role="alert"
               >
                  {errors.username.message}
               </p>
            )}
         </div>

         <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
               Пароль
            </label>

            <input
               {...register('password')}
               className={styles.input}
               id="password"
               type="password"
               placeholder="emilyspass"
               aria-invalid={Boolean(errors.password)}
               aria-describedby={
                  errors.password ? 'password-error' : undefined
               }
               autoComplete="current-password"
            />

            {errors.password && (
               <p
                  className={styles.error}
                  id="password-error"
                  role="alert"
               >
                  {errors.password.message}
               </p>
            )}
         </div>

         {errors.root && (
            <p className={styles.rootError} role="alert">
               {errors.root.message}
            </p>
         )}

         <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
         >
            {isSubmitting ? 'Вход...' : 'Войти'}
         </button>
      </form>
   )
}