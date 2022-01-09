import Image from "next/image";
import courtesy1 from "/public/courtesy/courtesy1.png";
import courtesy2 from "/public/courtesy/courtesy2.png";
import courtesy3 from "/public/courtesy/courtesy3.png";
import courtesy4 from "/public/courtesy/courtesy4.png";
import courtesy5 from "/public/courtesy/courtesy1.png";
import Container from "./Container";

export default function Courtesy() {
  const courtesyImg = [
    { id: 1, name: courtesy1 },
    { id: 2, name: courtesy2 },
    { id: 3, name: courtesy3 },
    { id: 4, name: courtesy4 },
    { id: 5, name: courtesy5 },
  ];
  return (
    <div className="bg-bg_gray py-10 mt-10 sm:mt-5 md:mt-10 lg:mt-64">
      <Container>
        <div className="flex gap-4 flex-wrap lg:flex-1 justify-center items-center">
          {courtesyImg.map((img) => (
            <div key={img.id} className="w-1/4 opacity-50">
              <Image src={img.name} layout="responsive" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
