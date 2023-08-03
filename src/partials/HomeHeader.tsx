import Image from 'next/image'
import Link from 'next/link'

export default function HomeHeader() {
    return (
        <div className=" min-h-screen overflow-hidden relative">
            <video
                autoPlay={true}
                loop
                muted
                className="-z-10 blur-sm max-h-screen w-full object-cover"
            >
                <source src="/images/bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute min-h-full min-w-full bg-black/75 top-0 left-0 flex flex-col justify-center items-center p-5 pb-28 lg:pb-0">
                <Image
                    src={'/images/logo.png'}
                    alt="Logo"
                    width={150}
                    height={150}
                    className="block object-contain mb-10 shadow-md rounded-full"
                />

                <h1 className="text-white text-5xl font-dancing-script text-center mb-5">
                    Public Health & Medical Academy
                </h1>
                <h2 className="text-white text-3xl text-center">
                    The Learning Platform of MCPH UK
                </h2>
                <Link
                    href={'/course'}
                    className="text-white bg-amber-500 py-3 px-10 rounded-md my-10 border-white border hover:bg-transparent  transition-all"
                >
                    Enroll Now
                </Link>
            </div>
            <div className="absolute h-44 w-full lg:bottom-10 left-0 bottom-0">
                <div className="max-w-7xl mx-auto bg-black/20 grid-cols-3 grid text-center text-white h-full items-center rounded-md">
                    <div>
                        <h3 className="text-6xl ">10</h3>
                        <h3>GLOBAL LOCATIONS</h3>
                    </div>
                    <div>
                        <h3 className="text-6xl">10+</h3>
                        <h3>PROGRAMS & COURSES</h3>
                    </div>
                    <div>
                        <h3 className="text-6xl">25</h3>
                        <h3>YEARS OF EXPERIENCE</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
