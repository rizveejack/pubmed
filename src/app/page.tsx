import Image from "next/image";
import Link from "next/link";
function Home() {
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
      <div className="absolute min-h-full min-w-full bg-black/75 top-0 left-0 flex flex-col justify-center items-center">
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={150}
          height={150}
          className="block object-contain mb-10 shadow-md rounded-full"
        />

        <h1 className="text-white text-5xl font-dancing-script">
          Public Health & Medical Academy
        </h1>
        <h2 className="text-white text-3xl ">
          The Learning Platform of MCPH UK
        </h2>
        <Link
          href={"/"}
          className="text-white bg-amber-500 py-3 px-10 rounded-md mt-10 border-white border hover:bg-transparent  transition-all"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
