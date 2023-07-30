import { cookies } from 'next/dist/client/components/headers'

export async function validateToken() {
    const cookieStore = cookies()
    const theme = cookieStore.get('token')
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${theme?.value}`,
        },
    })
    const json = await data.json()
    return json
}
