import Container from "./Container";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <div className="bg-bg_black pt-16 lg:pt-20 pb-5 text-white">
      <Container>
        <h2 className="gill-semibold text-center text-3xl md:text-4xl lg:text-5xl leading-normal">
          {" "}
          People who are <br /> ready took these courses!
        </h2>
        <button className="border-2 border-white px-10 py-5 gill-medium flex mt-16 md:mt-20 transition-all hover:bg-white hover:text-black  mx-auto">
          Schedule demo
        </button>
        <FooterMenu />
        <p className="text-center mt-16 gill-medium">
          © {new Date().getFullYear()} Payme. All rights reserved
        </p>
      </Container>
    </div>
  );
}
