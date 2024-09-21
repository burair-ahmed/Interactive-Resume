import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Image
            className="logoimg pt-4 pl-8"
            src="/assets/image.png"
            alt="Description of image"
            width={500}
            height={300}
          />
        </div>
        <div className="col-span-6">
          <div className="grid-rows-3">
        <div className="row-span-1">
        <h1 className="namehead">Burair Ahmed</h1>
        </div>
        <div className="row-span-1">
        <h1 className="profhead">Web Developer</h1>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
