import ImageWithLoading from "./ImageWithLoading";
type MenuItemProps = {
  img: string;
  name: string;
  desc: string;
  isSpicy: boolean;
};
const MenuItem = ({ img, name, desc, isSpicy }: MenuItemProps) => {
  return (
    <div className="w-full flex items-center gap-3 md:gap-4">
      <div className="p-1 relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border roundedshadow-md">
        <ImageWithLoading alt={name} src={img} />
      </div>
      <div className="flex flex-col flex-1">
        <label
          className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-1"
          htmlFor="item"
        >
          {name}
          {isSpicy && (
            <div className="p-1 relative h-5 w-5">
              <ImageWithLoading alt="spicy" src="/icons/spicy.svg" />
            </div>
          )}
        </label>
        <span
          className="text-xs sm:text-sm md:text-base text-gray-600"
          id="item"
        >
          {desc}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
