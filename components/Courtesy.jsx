import Image from "next/image";
import courtesy1 from "/public/courtesy/courtesy1.png";
import courtesy2 from "/public/courtesy/courtesy2.png";
import courtesy3 from "/public/courtesy/courtesy3.png";
import courtesy4 from "/public/courtesy/courtesy4.png";
import courtesy5 from "/public/courtesy/courtesy1.png";

export default function Courtesy() {
  const courtesyImg = [
    { name: courtesy1 },
    { name: courtesy2 },
    { name: courtesy3 },
    { name: courtesy4 },
    { name: courtesy5 },
  ];
  return (
    <div className="flex gap-4 flex-wrap lg:flex-1 justify-center items-center mt-10 sm:mt-5 md:mt-10 lg:mt-64">
      {courtesyImg.map((img) => (
        <div key={img.name} className="w-1/4 opacity-50">
          <Image src={img.name} layout="responsive" />
        </div>
      ))}
    </div>
  );
}
