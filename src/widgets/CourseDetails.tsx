import Image from 'next/image'
import Link from 'next/link'
import { getData } from '~/server/getData'
import { validateToken } from '~/server/validateToken'
import { Star } from '~/utils/icons'
import { CourseBody } from '.'

type CourseType = {
    id: number
    name: string
    image: string
    content: string
    origin_price: string
    price: string
    meta_data: {
        _lp_requirements: string[]
        _lp_faqs: string[]
        _lp_target_audiences: string[]
        _lp_key_features: string[]
    }
    sections: {
        items: {
            id: number
        }[]
    }[]
}

export default async function CourseDetails() {
    const course: CourseType = await getData({
        path: '/courses',
        courseId: 17,
    })

    const item = await validateToken()
    const islogIn = item.data.status === 200 ? true : false

    return (
        <div className="max-w-5xl mx-auto lg:p-20 p-5">
            <div className="grid grid-cols-1  gap-5">
                <div className="">
                    <strong className="font-medium text-2xl text-center">
                        Welcome to the “MCPH on Advance Gynaecology and Obstetrics” at Public Health
                        & Medical Academy!
                    </strong>

                    <div className="aspect-video relative my-5">
                        <Image
                            src={course.image}
                            alt="Master Course on Advance Gynecology and Obstetrics"
                            fill
                            className="object-cover absolute p-2 shadow-lg"
                        />
                    </div>
                    <strong className="font-medium text-2xl">{course.name}</strong>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div className="flex gap-2 w-full items-center  col-span-2">
                            <div className="w-20 h-20 relative">
                                <Image
                                    src={'/images/profile.jpeg'}
                                    alt="profile"
                                    fill
                                    className="object-cover absolute p-2 rounded-full w-20 h-20"
                                />
                            </div>
                            <div className="w-40">
                                <div className="text-sm font-bold text-gray-400">Teacher </div>
                                <div className="text-sm">Public Health & Medical Academy</div>
                            </div>
                        </div>
                        <div className="flex flex-col py-2 items-end">
                            <div className="text-sm font-bold text-gray-400">Rating </div>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Star className="h-5 w-5" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <CourseBody course={course} />
                <div className="flex items-center">
                    <Link
                        href={`/course/lessons/${course.sections[0].items[0].id}`}
                        className="bg-amber-500 text-white font-medium text-3xl px-10 py-3 rounded-full mx-auto hover:bg-amber-600"
                    >
                        {islogIn ? 'Continue' : 'Enroll Now'}
                    </Link>
                </div>
            </div>
        </div>
    )
}
