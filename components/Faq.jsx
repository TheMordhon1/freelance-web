import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SectionBg from "./SectionBg";

export default function Faq() {
  const [expanded, setExpanded] = useState(false);
  const toggle = (index) => {
    // if (expanded === index) {
    //   return setExpanded(null);
    // }

    setExpanded(index);
  };
  const Faqs = [
    {
      id: 1,
      question:
        "She met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      answer:
        "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      id: 2,
      question:
        "And excellence partiality estimating terminated day everything?",
      answer:
        "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      id: 3,
      question: "Latter person am secure of estate genius at?",
      answer:
        "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      id: 4,
      question: "Whatever landlord yourself at by pleasure of children be?",
      answer:
        "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
  ];

  return (
    <div className="pt-10 pb-20 bg-bg_whitegray mt-28">
      <SectionBg titleBlue="FAQs">
        {Faqs.map((item, index) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 mb-5 bg-white p-5 md:py-8 md:px-10 w-full md:w-7/12 mx-auto shadow-lg"
          >
            <header
              onClick={() => toggle(index)}
              className="cursor-pointer flex items-center gap-4 "
            >
              <button className="text-blue text-xl md:text-3xl">
                {expanded === index ? <AiOutlinePlus /> : <AiOutlineMinus />}
              </button>
              <h4 className="gill-medium text-xl">{item.question}</h4>
            </header>
            <p
              className={`gill-regular text-base transition-all opacity-0 ml-9 md:ml-12 ${
                expanded === index && "opacity-100"
              }`}
            >
              {expanded === index ? item.answer : null}
            </p>
          </article>
        ))}
      </SectionBg>
    </div>
  );
}
