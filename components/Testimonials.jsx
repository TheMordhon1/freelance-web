import Section from "./Section";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowGroup from "./ArrowGroup";

export default function Testimonials() {
  const clientSays = [
    {
      id: 1,
      name: "Robert Johnson",
      says: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      position: "Director at Behance",
      status: "Pro",
      photo: "/user/user1.png",
    },
    {
      id: 2,
      name: "Marc Carlos",
      says: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      position: "Senior Engineer at Wallmart",
      status: "Expert",
      photo: "/user/user2.png",
    },
    {
      id: 3,
      name: "Layla Anastasia",
      says: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      position: "IT Consultant at Tesla",
      status: "Beginner",
      photo: "/user/user3.png",
    },
    {
      id: 4,
      name: "Juan Adam",
      says: "Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      position: "Backend Developer at GitHub",
      status: "Expert",
      photo: "/user/user4.png",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Section
      titleBlack="What"
      titleBlue="Clients"
      titleBlack2="Says"
      desc="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
    >
      <Carousel
        infinite
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ArrowGroup />}
        itemClass="px-0 md:px-4 mb-5"
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={5000}
      >
        {clientSays.map((item) => (
          <div
            className=" flex flex-col gap-0 md:flex-row w-full md:gap-5"
            key={item.id}
          >
            <img
              src={item.photo}
              alt="user1"
              className="md:w-4/12 md:rounded-tl-xl lg:rounded-tl-[45%] lg:w-5/12 "
            />
            <div className="text-black flex flex-col justify-center items-center p-5 md:p-10 md:w-8/12 md:rounded-br-xl md:items-start bg-bg_gray  lg:w-7/12 md:py-10 md:px-10  lg:rounded-br-[45%]">
              <h2 className="gill-semibold text-xl">{item.status}</h2>
              <p className="text-base gill-regular mt-4 text-center md:text-left">
                {item.says}
              </p>
              <h3 className="text-base gill-medium mt-7 font-bold">
                {item.name}
              </h3>
              <small className="text-base gill-regular mt-1">
                {item.position}
              </small>
            </div>
          </div>
        ))}
      </Carousel>
    </Section>
  );
}
