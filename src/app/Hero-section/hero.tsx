import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src="/assets/blog2-cropped.jpg"
        alt="Hero Section Image"
        width={1920}
        height={700}
        className="abc123"
      />
    </div>
  );
}
