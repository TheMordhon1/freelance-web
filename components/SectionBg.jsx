import Container from "./Container";

export default function SectionBg({ children, titleBlack, titleBlue, desc }) {
  return (
    <Container>
      <div className="mt-10 lg:mt-16">
        <div className="text-center w-full">
          <h1 className="gill-thin text-black text-4xl lg:text-6xl">
            {titleBlack}
            <span className="gill-semibold text-blue"> {titleBlue}</span>
          </h1>
        </div>
        <p className="gill-medium text-black text-base mt-10 mb-20 text-center lg:w-7/12 mx-auto">
          {desc}
        </p>
        {children}
      </div>
    </Container>
  );
}
