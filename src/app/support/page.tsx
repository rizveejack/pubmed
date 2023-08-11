import Image from 'next/image'
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center align-middle min-h-screen">
            <div className="text-center">
                <div className="flex items-center justify-center mb-10">
                    <Image src={'/images/logo.png'} alt="logo" width={150} height={150} />
                </div>
                <strong className="text-lg">Contact info</strong>
                <p>Dr. Jane Smith</p>
                <p>Director of International Partnerships</p>
                <p>Public Health & Medical Academy</p>
                <p>1415 Washington Heights</p>
                <p>Ann Arbor, MI 48109</p>
                <p>United States</p>
                <p>mail@pubmed.academy</p>
                <p>mail.pubmed@gmail.com</p>
            </div>
        </div>
    )
}
