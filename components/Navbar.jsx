import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "./Logo";
import ButtonNav from "./ButtonNav";
import ButtonMobile from "./ButtonMobile";

export default function Navbar({}) {
  const [offCanvas, setOffCanvas] = useState(false);
  const navItem = [
    {
      id: 1,
      name: "Home",
      href: "#",
    },
    {
      id: 2,
      name: "About",
      href: "#",
    },
    {
      id: 3,
      name: "Testimonials",
      href: "#",
    },
    {
      id: 4,
      name: "Contact",
      href: "#",
    },
  ];
  return (
    <nav className=" lg:flex lg:items-center lg:justify-between lg:py-10">
      <Logo />
      <div
        className={`bg-bg_black h-screen fixed w-full transition-all flex flex-col justify-center items-center  text-xl  lg:items-start  lg:static lg:bg-white lg:h-auto lg:w-auto ${
          offCanvas ? "-left-full" : "left-0"
        }`}
      >
        <ul className="text-center space-y-5 lg:flex lg:flex-row lg:h-auto lg:space-y-0 lg:space-x-10 lg:w-7/12 ">
          {navItem.map((item) => (
            <Link key={item.id} href={item.href}>
              <li className="gill-medium text-white hover:underline hover:decoration-blue decoration-4 text-xl sm:text-lg md:text-2xl lg:text-black cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <ButtonMobile />
      </div>
      <ButtonNav className="lg:w-3/4" />
      <button
        onClick={() => {
          offCanvas ? setOffCanvas(false) : setOffCanvas(true);
        }}
      >
        <HiMenuAlt3
          className={`absolute top-5 right-4 text-2xl md:text-4xl lg:hidden ${
            offCanvas ? "text-black" : "text-white"
          }`}
        />
      </button>
    </nav>
  );
}
