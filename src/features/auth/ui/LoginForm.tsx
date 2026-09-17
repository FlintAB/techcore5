import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { type LoginFormData, loginSchema } from "../model/login-schema"

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

   return (
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <form onSubmit={submitForm} noValidate>
         <div>
            <label htmlFor="username">Логин</label>
            <input {...register('username')} 
            id="username"
            type="text"
            placeholder="emilys"
            aria-invalid={Boolean((errors.username))}
            aria-describedby={errors.username ? "username-error" : undefined}
            autoComplete="username" />
            {errors.username && <p id="username-error" role="alert">{errors.username.message}</p>}
         </div>

         <div>
            <label htmlFor="password">Пароль</label>
            <input  {...register('password')} 
            id="password"
            type="password" 
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            autoComplete="current-password" />
            {errors.password && <p id="password-error" role="alert">{errors.password.message}</p>}
         </div>

         <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Вход...' : 'Войти'}
         </button>
      </form>
   )
}