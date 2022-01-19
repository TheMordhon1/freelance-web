import Section from "./Section";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";

export default function Pricing() {
  const PricingItems = [
    {
      id: 1,
      name: "For Starter",
      price: "$59",
      offers: [
        "1 Feedback Categorization",
        "1 Features prioritization",
        "1 Real-time collaboration",
        "1 Feedback loop notifications",
        "1 Essential dev tools integrations",
      ],
    },
    {
      id: 2,
      name: "For Teams",
      price: "$99",
      offers: [
        "2 Feedback Categorization",
        "2 Features prioritization",
        "2 Real-time collaboration",
        "2 Feedback loop notifications",
        "2 Essential dev tools integrations",
      ],
    },
    {
      id: 3,
      name: "For Company",
      price: "Custom",
      offers: [
        "3 Feedback Categorization",
        "3 Features prioritization",
        "3 Real-time collaboration",
        "3 Feedback loop notifications",
        "3 Essential dev tools integrations",
      ],
    },
  ];
  return (
    <Section titleBlack="Our" titleBlue="Pricing Plan">
      <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
        {PricingItems.map((item) => (
          <div className="group" key={item.id}>
            <div className="border-2 border-gray group-hover:border-white text-black group-hover:text-blue group-hover:scale-105 group-hover:-mt-7 px-8 py-10 text-center transition-all relative group-hover:shadow-2xl">
              <h3 className="gill-semibold text-2xl">{item.name}</h3>
              <h2 className="gill-bold text-5xl mt-6">{item.price}</h2>
              <ul className="mt-10 text-left">
                {item.offers.map((offer, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 mt-3 gill-medium"
                  >
                    <AiFillCheckCircle />
                    {offer}
                  </li>
                ))}
              </ul>
              <div className="mt-14 block w-full">
                <Link href="/all">
                  <span className="border border-blue py-4 px-12 text-lg md:text-2xl text-blue hover:bg-blue group-hover:bg-blue/80 transition-all hover:text-white group-hover:text-white cursor-pointer">
                    Request Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
