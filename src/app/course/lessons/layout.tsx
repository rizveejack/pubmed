import { getData } from '~/server/getData'
import { SectionCard } from '~/utils'
type SectionsType = {
    id: string
    name: string
    description: string
}[]

export default async function Layout({ children }: { children: React.ReactNode }) {
    const items: SectionsType = await getData({
        courseId: 17,
        path: '/sections/sections-by-course-id',
    })

    return (
        <div className="flex max-h-screen">
            <div className="max-w-96 bg-slate-400 overflow-y-scroll">
                {items?.map((section) => (
                    <SectionCard section={section} key={section.id} />
                ))}
            </div>
            <div className="p-10 w-full">{children}</div>
        </div>
    )
}
