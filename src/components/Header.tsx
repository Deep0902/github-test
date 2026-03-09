import Link from "next/link";
import ImageWithLoading from "./ImageWithLoading";

export default function Header() {
  return (
    <div className="">
      <Link
        href="/"
        className="w-full h-35 relative flex justify-center bg-[#7d7f85]"
        aria-label="Home"
      >
        <ImageWithLoading src="/pizza3.png" alt="Bakery header" />
      </Link>
    </div>
  );
}
