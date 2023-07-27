import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-10 bg-black text-white">
      <div className="flex flex-row items-center justify-center space-x-5">
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
