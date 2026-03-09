import Link from "next/link";
import ImageWithLoading from "./ImageWithLoading";

export default function Header() {
  return (
    <div className="">
      <Link
        href="/"
        className="w-full h-35 relative flex  bg-[#db5b5b] left-0"
        aria-label="Home"
      >
        <ImageWithLoading src={`/pizza3.png`} alt="Bakery header" />
      </Link>
    </div>
  );
}
