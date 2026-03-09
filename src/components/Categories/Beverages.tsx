import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const beverageItems = [
  {
    name: "Coke/Fanta/Sprite",
    desc: "Chilled fizzy soft drink",
    img: "/categories/beverages/beverage1.png",
    isVeg: true,
    isSpicy: false,
  },
  {
    name: "Milkshake",
    desc: "Vanilla, Chocolate",
    img: "/categories/beverages/beverage2.png",
    isVeg: true,
    isSpicy: false,
    price: 69,
  },
  {
    name: "Juice",
    desc: "Fresh and naturally sweet fruit juice",
    img: "/categories/beverages/beverage3.png",
    isVeg: true,
    isSpicy: false,
    price: 49,
  },
];

const Beverages = () => {
  const { toggle } = useNonVegToggle();
  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Beverages</span>
      {beverageItems.map(
        (item) =>
          (toggle || item.isVeg) && (
            <div className="px-4 pb-4" key={item.img}>
              <MenuItem item={item} />
            </div>
          ),
      )}
    </div>
  );
};

export default Beverages;
