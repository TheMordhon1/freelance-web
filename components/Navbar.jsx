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
    <nav className=" lg:flex lg:items-center  lg:py-10">
      <div
        className={`lg:w-2/12 ${
          offCanvas ? "fixed" : "absolute"
        } left-5 top-5 z-50 lg:static`}
      >
        <Logo logo="Payme" />
      </div>
      <div
        className={`bg-bg_black h-screen  fixed z-40 w-full transition-all flex flex-col justify-center items-center  text-xl  lg:items-start  lg:static lg:bg-white lg:h-auto lg:w-7/12 lg:ml-4 ${
          offCanvas ? "left-0 overflow-y-hidden" : "-left-full"
        }`}
      >
        <ul className="text-center space-y-5 lg:flex lg:flex-row lg:h-auto lg:space-y-0 lg:space-x-10">
          {navItem.map((item) => (
            <Link key={item.id} href={item.href}>
              <li className="gill-medium text-white hover:underline hover:decoration-blue decoration-4 text-xl  lg:text-black cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <ButtonMobile />
      </div>
      <div className="lg:w-3/12">
        <ButtonNav />
      </div>
      <button
        onClick={() => {
          offCanvas ? setOffCanvas(!offCanvas) : setOffCanvas(true);
        }}
      >
        <HiMenuAlt3
          className={`z-50 top-5 right-4 text-2xl md:text-4xl lg:hidden ${
            offCanvas ? "text-white fixed" : "text-black absolute"
          }`}
        />
      </button>
    </nav>
  );
}
