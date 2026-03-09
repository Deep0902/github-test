import ImageWithLoading from "./ImageWithLoading";
import { StaticImageData } from "next/image";

type MenuItemData = {
  img: string | StaticImageData;
  name: string;
  desc: string;
  isSpicy: boolean;
  price: number;
};

type MenuItemProps = {
  item: MenuItemData;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="w-full flex items-center gap-3 md:gap-4 group">
      <div className="p-2 relative h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-30 rounded-4xl roundedshadow-md overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[1.05]">
          <ImageWithLoading alt={item.name} src={item.img} className="p-2 bg-red-100" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <label
          className="text-base md:text-lg font-semibold flex items-center gap-1"
          htmlFor="item"
        >
          {item.name}
          {item.isSpicy && (
            <div className="p-1 relative h-5 w-5">
              <ImageWithLoading alt="spicy" src="/icons/spicy.svg" />
            </div>
          )}
        </label>
        <span
          className="text-sm md:text-base text-gray-600"
          id="item"
        >
          {item.desc}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-semibold text-gray-700">
        ₹{item.price}
      </span>
    </div>
  );
};

export default MenuItem;
