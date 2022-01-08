import Image from "next/image";
import Link from "next/link";
import heroImage from "/public/hero-img.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row  items-center w-full justify-center h-[190vh] md:h-[calc(110vh-126px)] 2xl:h-[80vh]">
      <div className=" text-left gill-thin  text-black w-full md:w-6/12 lg:w-7/12">
        <h1 className="w-1/4 text-4xl sm:text-5xl lg:w-1/2 lg:text-6xl xl:text-8xl">
          Providing Best
        </h1>
        <h1 className="xl:w-full text-blue gill-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-8xl">
          WEB Services
        </h1>
        <p className="text-base gill-medium md:w-10/12 mt-5 lg:w-3/4 lg:mt-5 text-black">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
        <div className="flex flex-col sm:flex-row w-full text-center gap-5 mt-10 xl:text-2xl">
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
      <div className="static md:relative w-full md:w-4/12 lg:w-5/12 text-right  z-1 h-screen">
        <img
          src="/arrow-spiral.svg"
          className="static hidden md:block md:absolute md:-left-20 md:w-1/2 md:top-32 lg:-left-48 lg:top-32  lg:w-6/12"
          alt=""
        />
        <div className="static w-1/2 mx-auto mt-5 md:absolute md:w-full md:top-20 lg:top-0 right-0 ">
          <Image src={heroImage} />
        </div>
        <img
          src="/blue-square.svg"
          className="static md:absolute -left-20 bottom-28 z-0 md:w-1/4 md:bottom-40"
          alt=""
        />
      </div>
    </div>
  );
}
