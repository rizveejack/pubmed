'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
export default function LoginForm() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()
    const onSubmit = async (data: any) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const json = await res.json()

        if (json.status === 200) {
            try {
                Cookies.set('token', json.result.token, { expires: 1 })
                router.push('/course')
            } catch (error) {}
        }
    }

    return (
        <div className="min-h-screen">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    {...register('username', { required: true })}
                    className="p-2 border"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    {...register('password', { required: true })}
                    className="p-2 border"
                />
                <button type="submit" className="px-10 py-2 bg-amber-500">
                    Login
                </button>
            </form>
        </div>
    )
}
