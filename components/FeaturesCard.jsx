import Link from "next/link";

export default function FeaturesCard() {
  const itemFeatures = [
    {
      id: 1,
      title: "Work Load",
      desc: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is...",
      href: "/features/work-lead",
    },
    {
      id: 2,
      title: "Time Tracking",
      desc: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is...",
      href: "/features/time-tracking",
    },
    {
      id: 3,
      title: "Collaborations",
      desc: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is...",
      href: "/features/collaborations",
    },
    {
      id: 4,
      title: "Fast Money",
      desc: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is...",
      href: "/features/fast-money",
    },
    {
      id: 5,
      title: "Reporting",
      desc: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is...",
      href: "/features/reporting",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-center">
      {itemFeatures.map((item) => (
        <div key={item.id}>
          <Link href={item.href}>
            <div className="relative py-8 px-5 bg-white flex flex-col gap-5 cursor-pointer hover:shadow-black transition-all hover:scale-105">
              <h3 className="text-black gill-semibold text-xl">{item.title}</h3>
              <p className="gill-regular text-[14px]">{item.desc}</p>
              <span className="underline decoration-black gill-medium">
                Learn More
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
