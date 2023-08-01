import { getData } from '~/server/getData'
import { validateToken } from '~/server/validateToken'
import { Logout, SectionCard } from '~/utils'
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
    const tokenStatus = await validateToken()

    return (
        <div className="flex h-screen">
            <div className="w-[500px] bg-slate-400 overflow-y-scroll">
                {items?.map((section) => (
                    <SectionCard section={section} key={section.id} />
                ))}
            </div>
            <div className="p-10 w-full overflow-y-scroll">
                {tokenStatus.data.status === 200 ? <Logout /> : null}
                {children}
            </div>
        </div>
    )
}
