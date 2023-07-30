import Link from 'next/link'
import { getData } from '~/server/getData'

type LessonType = {
    id: number
    name: string
    content: string
    duration: string
    preview: string
    data?: {
        status: number
    }
}

export default async function Page({ params }: { params: { slug: string | string[] } }) {
    const lesson: LessonType = await getData({
        courseId: params.slug as unknown as number,
        path: '/lessons',
    })

    return (
        <div className="min-h-screen ">
            {lesson?.data?.status === 401 ? (
                <div className="text-center text-2xl">
                    <div>You are not authorized to view this page</div>
                    <Link href="/login">Login</Link>
                </div>
            ) : (
                <div className="" dangerouslySetInnerHTML={{ __html: lesson.content }} />
            )}
        </div>
    )
}
