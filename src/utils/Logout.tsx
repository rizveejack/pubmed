'use client'
import Cookies from 'js-cookie'
import { Close } from './icons'
export default function Logout() {
    function logMeOut() {
        Cookies.remove('token')
        window.location.reload()
    }
    return (
        <div
            onClick={logMeOut}
            className="absolute top-0 left-0 w-full bg-slate-400 p-3 flex justify-end"
        >
            <Close className="h-10 w-10 cursor-pointer" />
        </div>
    )
}
