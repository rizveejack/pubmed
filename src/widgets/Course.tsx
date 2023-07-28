import Image from "next/image";
import Link from "next/link";
import { ModuleCard } from "~/utils";
import { Star } from "~/utils/icons";
import curriculum from "../const/curriculum.json";
export default function Course() {
  return (
    <div className="max-w-7xl mx-auto lg:p-20 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <strong className="font-medium text-2xl text-center">
            Welcome to the “MCPH on Advance Gynaecology and Obstetrics” at
            Public Health & Medical Academy!
          </strong>

          <div className="aspect-video relative my-5">
            <Image
              src={"/images/mcph.png"}
              alt="Master Course on Advance Gynecology and Obstetrics"
              fill
              className="object-cover absolute p-2 shadow-lg"
            />
          </div>
          <strong className="font-medium text-2xl">
            Master Course on Advance Gynecology and Obstetrics
          </strong>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="flex gap-2 w-full items-center  col-span-2">
              <div className="w-20 h-20 relative">
                <Image
                  src={"/images/profile.jpeg"}
                  alt="profile"
                  fill
                  className="object-cover absolute p-2 rounded-full w-20 h-20"
                />
              </div>
              <div className="w-40">
                <div className="text-sm font-bold text-gray-400">Teacher </div>
                <div className="text-sm">Public Health & Medical Academy</div>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="text-sm font-bold text-gray-400">Rating </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Star className="h-5 w-5" key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center flex items-center justify-center space-x-5 my-10">
            <span className="line-through text-xl">75,000৳</span>
            <span className="font-bold text-5xl text-red-600">20,000৳</span>
          </div>
          <div className="flex items-center">
            <Link
              href={"/course"}
              className="bg-amber-500 text-white font-medium text-3xl px-10 py-3 rounded-full mx-auto hover:bg-amber-600"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        <div className="">
          <strong className="font-medium text-center block text-2xl mb-5">
            Course Curriculum
          </strong>
          <div className="grid grid-cols-2 grid-flow-row gap-3">
            {curriculum.map((item, index) => (
              <ModuleCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
