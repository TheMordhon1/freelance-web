import Section from "./Section";

export default function Services() {
  const servicesItem = [
    {
      id: 1,
      title: "Web Development",
      bgImage: "/services/services1.png",
    },
    {
      id: 2,
      title: "Web Designing",
      bgImage: "/services/services2.png",
    },
    {
      id: 3,
      title: "Database Management",
      bgImage: "/services/services3.png",
    },
    {
      id: 4,
      title: "SEO",
      bgImage: "/services/services4.png",
    },
  ];
  return (
    <Section
      titleBlack="Best"
      titleBlue="Services"
      desc="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
    >
      <div className="flex justify-center flex-col md:flex-row md:gap-5 mx-auto w-full">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {servicesItem
            .filter((item) => item.id == 1)
            .map((filteredItem) => (
              <div
                key={filteredItem.id}
                style={{
                  backgroundImage: `url(${filteredItem.bgImage})`,
                  backgroundPosition: "center",
                  height: "300px",
                }}
                className="flex justify-center items-center gap-2 relative overflow-hidden  lg:rounded-tl-[236px] rounded-tl-xl"
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-black_dope/40"></div>
                <h3 className="text-white gill-bold text-center w-full md:w-1/4 text-3xl relative">
                  {filteredItem.title}
                </h3>
              </div>
            ))}

          {servicesItem
            .filter((item) => item.id == 3)
            .map((filteredItem) => (
              <div
                key={filteredItem.id}
                style={{
                  backgroundImage: `url(${filteredItem.bgImage})`,
                  backgroundPosition: "center",
                  height: "300px",
                }}
                className="flex justify-center items-center gap-2 relative overflow-hidden lg:rounded-bl-[236px] rounded-bl-xl"
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-black_dope/40"></div>
                <h3 className="text-white gill-bold text-center text-3xl w-1/2 relative">
                  {filteredItem.title}
                </h3>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2 mt-5 md:mt-20">
          {servicesItem
            .filter((item) => item.id == 2)
            .map((filteredItem) => (
              <div
                key={filteredItem.id}
                style={{
                  backgroundImage: `url(${filteredItem.bgImage})`,
                  backgroundPosition: "center",
                  height: "300px",
                }}
                className="flex justify-center items-center gap-2 relative overflow-hidden lg:rounded-tr-[236px] rounded-tr-xl"
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-black_dope/40"></div>
                <h3 className="text-white gill-bold text-center  text-3xl w-1/2 relative hover:transform-cpu">
                  {filteredItem.title}
                </h3>
              </div>
            ))}

          {servicesItem
            .filter((item) => item.id == 4)
            .map((filteredItem) => (
              <div
                key={filteredItem.id}
                style={{
                  backgroundImage: `url(${filteredItem.bgImage})`,
                  backgroundPosition: "center",
                  height: "300px",
                }}
                className="flex justify-center items-center gap-2 relative overflow-hidden lg:rounded-br-[236px] rounded-br-xl"
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-black_dope/40"></div>
                <h3 className="text-white gill-bold text-center text-3xl w-1/2 relative">
                  {filteredItem.title}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
