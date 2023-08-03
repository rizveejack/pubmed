import { validateToken } from '~/server/validateToken'
import { Logout } from '~/utils'
import { MenuWidgets } from '~/widgets'

export default async function Layout({ children }: { children: React.ReactNode }) {
    const tokenStatus = await validateToken()

    return (
        <>
            <div className="flex  flex-col lg:h-screen lg:flex-row">
                <MenuWidgets />
                <div className="p-2 lg:p-10 w-full lg:overflow-y-scroll relative">
                    <div>{tokenStatus.data.status === 200 ? <Logout /> : null}</div>
                    <div className="mt-20">{children}</div>
                </div>
            </div>
        </>
    )
}
