import { getData } from '~/server/getData'
import SectionCard from './SectionCard'
type SectionsType = {
    id: string
    name: string
    description: string
}[]
export default async function MobileMenu() {
    const items: SectionsType = await getData({
        courseId: 17,
        path: '/sections/sections-by-course-id',
    })
    return (
        <div>
            {items?.map((section) => (
                <SectionCard section={section} key={section.id} />
            ))}
        </div>
    )
}
