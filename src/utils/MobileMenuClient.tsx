'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenuClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [showLesson, setShowLesson] = useState(false)

    useEffect(() => {
        setShowLesson(false)
    }, [pathname])
    return (
        <div className="lg:w-[500px] bg-slate-400 lg:overflow-y-scroll p-2">
            <div
                className="bg-amber-400 p-2 lg:hidden block"
                onClick={() => setShowLesson((prev) => !prev)}
            >
                Lessons
            </div>
            <div className={clsx(showLesson && 'block', 'lg:block', !showLesson && 'hidden')}>
                {children}
            </div>
        </div>
    )
}
