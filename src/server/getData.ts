import { cookies } from 'next/dist/client/components/headers'

export async function getData({ path, courseId }: { path: string; courseId: number }) {
    const cookieStore = cookies()
    const theme = cookieStore.get('token')
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}/${courseId}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${theme?.value}`,
        },
        next: {
            revalidate: 10,
        },
    })
    const json = await data.json()

    return json
}
