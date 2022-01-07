import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="gill-extrabold cursor-pointer text-blue absolute left-5 top-5 z-10 font-bold text-2xl  md:text-3xl lg:static lg:w-2/12">
        PayMe
      </h1>
    </Link>
  );
}
