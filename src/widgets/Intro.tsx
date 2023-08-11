import { Award, Certificate, Globe } from '~/utils/icons'

export default function Intro() {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center text-center align-middle gap-10 my-20">
            <div className="p-10">
                <Award className="h-28 w-28 mx-auto" />
                <h3 className="text-2xl font-bold">Master Courses</h3>
            </div>
            <div className="p-10">
                <Globe className="h-28 w-28 mx-auto" />
                <h3 className="text-2xl font-bold">Online Program</h3>
            </div>
            <div className="p-10">
                <Certificate className="h-28 w-28 mx-auto" />
                <h3 className="text-2xl font-bold">Certification</h3>
            </div>
        </div>
    )
}
