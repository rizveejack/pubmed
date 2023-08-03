import Image from 'next/image'
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
        <div className="min-h-screen content">
            {lesson?.data?.status === 401 ? (
                <div className="text-center">
                    <div className="text-xl">You are not authorized to view this page</div>
                    <div className="aspect-square relative lg:max-w-3xl mx-auto">
                        <Image src="/images/deney.jpg" alt="401" fill className="object-cover" />
                    </div>
                    <div className="mt-5">
                        <Link
                            href="/login"
                            className="bg-amber-500 text-black rounded-md px-10 py-2"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="" dangerouslySetInnerHTML={{ __html: lesson.content }} />
            )}
        </div>
    )
}
