import Link from "next/link";
import React from "react";

export default function Logo({ logo }) {
  return (
    <Link href="/">
      <h1 className="gill-extrabold cursor-pointer text-blue font-bold text-2xl  md:text-3xl lg:static">
        {logo}
      </h1>
    </Link>
  );
}
