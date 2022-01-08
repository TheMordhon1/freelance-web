import Image from "next/image";
import Link from "next/link";
import heroImage from "/public/hero-img.png";

export default function Hero() {
  return (
    <div className="flex items-center w-full justify-center h-[calc(110vh-126px)]">
      <div className="lg:text-left gill-thin  text-black lg:w-7/12">
        <h1 className="w-1/2 text-8xl">Providing Best</h1>
        <h1 className="w-full text-blue gill-semibold text-8xl">
          WEB Services
        </h1>
        <p className="text-base gill-medium w-3/4 mt-5 text-black">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
        <div className="flex gap-5 mt-10 text-2xl">
          <Link href="#">
            <div className="border border-blue py-2 px-10 hover:bg-blue/100 cursor-pointer bg-blue/80 text-white transition-all">
              Get Started
            </div>
          </Link>
          <Link href="/signup">
            <div className="border border-blue py-2 px-10 text-blue cursor-pointer hover:bg-blue hover:text-white transition-all">
              Explore
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:w-5/12 text-right relative  h-screen">
        <img
          src="/arrow-spiral.svg"
          className="absolute -left-48 top-32  w-6/12"
          alt=""
        />
        <div className="absolute w-full top-0 right-0 ">
          <Image src={heroImage} />
        </div>
        <img
          src="/blue-square.svg"
          className="absolute -left-24 bottom-28 z-10"
          alt=""
        />
      </div>
    </div>
  );
}
