import Link from "next/link";

export default function ButtonNav() {
  return (
    <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-7 gill-medium text-xl">
      <Link href="/signin">
        <div className="cursor-pointer hover:underline decoration-blue">
          Sign In
        </div>
      </Link>
      <Link href="/signup">
        <div className="border border-blue py-2 px-6 text-blue cursor-pointer hover:bg-blue hover:text-white transition-all">
          Sign Up
        </div>
      </Link>
    </div>
  );
}
