import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-row items-center justify-center gap-5 p-5">
        <Link href="/about" className="hover:text-amber-500 transition-all">
          ABOUT US
        </Link>
        <Link href="/faq" className="hover:text-amber-500 transition-all">
          FAQS
        </Link>
        <Link href="/support" className="hover:text-amber-500 transition-all">
          SUPPORT
        </Link>
      </div>
    </div>
  );
}
