import Image from "next/image";
import NotfoundImage from "public/klipartz.com.png";
export default function Notfound() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={NotfoundImage}
        width={500}
        height={450}
        alt="Notfound Image"
      />
      <h1 className="font-mono text-6xl font-bold">
        What are you looking for?
      </h1>
    </div>
  );
}
