import { redirect } from 'next/navigation'
import { validateToken } from '~/server/validateToken'
import { LoginForm } from '~/widgets'

export default async function Page() {
    const item = await validateToken()
    if (item.data.status === 200) {
        redirect('/course')
    }

    return (
        <div>
            <LoginForm />
        </div>
    )
}
