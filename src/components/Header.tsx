import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-1">
      <Link
        href="/"
        className="w-full h-35 relative flex justify-center bg-[#7d7f85]"
        aria-label="Home"
      >
        <Image
          src="./pizza1.png"
          alt="Bakery header"
          loading="eager"
          className="w-full h-auto object-contain"
          fill={true}
        />
      </Link>
    </div>
  );
}
