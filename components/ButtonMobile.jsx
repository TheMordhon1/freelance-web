import Link from "next/link";

export default function ButtonMobile() {
  return (
    <div className="text-white flex items-center gap-5 mt-10 md:mt-14 text-2xl lg:hidden">
      <Link passHref href="/signin">
        <a className="cursor-pointer hover:underline decoration-blue">
          Sign In
        </a>
      </Link>
      <Link passHref href="/signup">
        <a className="border border-blue py-2 px-6 text-blue cursor-pointer hover:bg-blue hover:text-white transition-all">
          Sign Up
        </a>
      </Link>
    </div>
  );
}
