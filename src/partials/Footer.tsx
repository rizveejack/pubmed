import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 p-5">
        <Link href="/" className="hover:text-amber-500 transition-all">
          ABOUT US{" "}
        </Link>
        <Link href="/" className="hover:text-amber-500 transition-all">
          ALL COURSES
        </Link>
        <Link href="/" className="hover:text-amber-500 transition-all">
          NEWS
        </Link>
        <Link href="/" className="hover:text-amber-500 transition-all">
          FAQS
        </Link>
        <Link href="/" className="hover:text-amber-500 transition-all">
          SUPPORT
        </Link>
      </div>
    </div>
  );
}
