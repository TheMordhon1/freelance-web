import Container from "./Container";

export default function Section({
  children,
  titleBlack,
  titleBlack2,
  titleBlue,
  desc,
}) {
  return (
    <Container>
      <div className="mt-20 lg:mt-36">
        <div className="text-center w-full">
          <h1 className="gill-thin text-black text-4xl lg:text-6xl">
            {titleBlack}
            <span className="gill-semibold text-blue"> {titleBlue} </span>
            {titleBlack2}
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
