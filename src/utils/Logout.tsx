'use client'
import Cookies from 'js-cookie'
export default function Logout() {
    function logMeOut() {
        Cookies.remove('token')
        window.location.reload()
    }
    return <div onClick={logMeOut}>Logout</div>
}
