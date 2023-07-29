import Image from "next/image";
import { CourseDetails } from "~/widgets";
export default async function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={150}
          height={150}
          className="block object-contain mb-10 shadow-md rounded-full"
        />

        <h1 className="text-5xl font-dancing-script text-center mb-5">
          Public Health & Medical Academy
        </h1>
        <h2 className="text-3xl text-center">
          The Learning Platform of MCPH UK
        </h2>
      </div>
      <CourseDetails />
    </div>
  );
}
