import Link from "next/link";

export default function FooterMenu(params) {
  const footermenu = [
    {
      name: "Links",
      menus: [
        { menu: "Overons", href: "#" },
        { menu: "Social Media", href: "#" },
        { menu: "Counters", href: "#" },
        { menu: "Contact", href: "#" },
      ],
    },
    {
      name: "Company",
      menus: [
        { menu: "Terms & Conditions", href: "#" },
        { menu: "Privacy Policy", href: "#" },
        { menu: "Account", href: "#" },
      ],
    },
    {
      name: "Get in touch",
      menus: [
        { menu: "Crechterwoord K12 182 DK Alknjkcb", href: "#" },
        { menu: "085-132567", href: "#" },
        { menu: "info@payme.net", href: "#" },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 mt-16 md:mt-20 lg:mt-36 gap-8">
      <div className="flex flex-col gap-8 col-span-1 md:col-span-2">
        <h1 className="gill-extrabold cursor-pointer font-bold text-2xl  md:text-3xl ">
          Payme
        </h1>
        <p className="w-1/2 gill-medium text-xs md:text-base">
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </p>
      </div>
      {footermenu.map((item, index) => (
        <div className="flex flex-col col-span-1" key={index}>
          <h4 className="gill-bold text-lg">{item.name}</h4>
          <ul className="mt-2 md:mt-5">
            {item.menus.map((menu, index) => (
              <Link key={index} href={menu.href}>
                <li className="mt-2 gill-medium hover:underline hover:decoration-blue cursor-pointer text-sm md:text-base">
                  {menu.menu}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
