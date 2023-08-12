import Image from 'next/image'
export default function Associated() {
    return (
        <>
            <div className="max-w-2xl mx-auto text-center lg:py-20 py-10">
                <strong className="text-3xl font-bold">
                    University We already Associated With
                </strong>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 grid-flow-row max-w-7xl mx-auto items-center justify-center mb-20 gap-10 p-5">
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/kyoto.png'} fill className="object-cover " />
                </div>
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/sig.png'} fill className="object-cover " />
                </div>
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/umm.png'} fill className="object-cover " />
                </div>
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/fcub.png'} fill className="object-cover " />
                </div>
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/usu.png'} fill className="object-cover " />
                </div>
                <div className="rounded-s-full aspect-square relative">
                    <Image alt="logo" src={'/images/ver.png'} fill className="object-cover " />
                </div>
            </div>
        </>
    )
}
