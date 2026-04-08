import ImageWithLoading from "./ImageWithLoading";
import { memo } from "react";
import { StaticImageData } from "next/image";

type MenuItemData = {
  img: string | StaticImageData;
  name: string;
  desc: string;
  isSpicy: boolean;
  price?: any;
  isVeg?: boolean;
};

type MenuItemProps = {
  item: MenuItemData;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="w-full flex items-center gap-3 md:gap-4 group">
      <div className="p-2 relative h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-30 rounded-4xl roundedshadow-md overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[1.05]">
          <ImageWithLoading
            alt={item.name}
            src={item.img}
            className="p-2 bg-red-100"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <label
          className="text-base md:text-lg font-semibold flex items-center gap-1 transition-transform duration-300 ease-out group-hover:scale-[1.01]"
          htmlFor="item"
        >
          {item.isVeg ? (
            <div className="p-1 relative h-5 w-5">
              <ImageWithLoading alt="spicy" src="/icons/veg.svg" />
            </div>
          ) : (
            <div className="p-1 relative h-5 w-5">
              <ImageWithLoading alt="spicy" src="/icons/nonveg.svg" />
            </div>
          )}
          {item.name}
          {item.isSpicy && (
            <div className="p-1 relative h-5 w-5">
              <ImageWithLoading alt="spicy" src="/icons/spicy.svg" />
            </div>
          )}
        </label>
        <span
          className="text-sm md:text-base text-gray-600 transition-transform duration-300 ease-out group-hover:scale-[1.01]"
          id="item"
        >
          {item.desc}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-semibold text-gray-700 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
        {item.price ? `₹${item.price} ` : `MRP`}
      </span>
    </div>
  );
};

export default memo(MenuItem);
