import Link from "next/link";

export default function ButtonExplore() {
  return (
    <div className="mt-20 text-center">
      <Link passHref href="/all">
        <span className="border border-blue py-4 px-12 text-lg md:text-2xl text-blue hover:bg-blue transition-all hover:text-white cursor-pointer">
          Explore All
        </span>
      </Link>
    </div>
  );
}
