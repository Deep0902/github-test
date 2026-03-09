import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const pizzaItems = [
  {
    name: "Margherita",
    desc: "Trapped with layer of cheese",
    img: "/categories/pizzas/pizza1.png",
    isVeg: true,
    isSpicy: false,
    price: 99
  },
  {
    name: "Simple Veggie",
    desc: "Onion & Capsuim",
    img: "/categories/pizzas/pizza2.png",
    isVeg: true,
    isSpicy: false,
    price: 129

  },
  {
    name: "Meaty Feast & Seasoning",
    desc: "Chicken, Onion",
    img: "/categories/pizzas/pizza3.png",
    isVeg: false,
    isSpicy: true,
    price: 149

  },
];

const Pizza = () => {
  const { toggle } = useNonVegToggle();
  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Pizzas </span>
      {pizzaItems.map(
        (item) =>
          (!toggle || item.isVeg) && (
            <div className="px-4 pb-4" key={item.img}>
              <MenuItem item={item} />
            </div>
          ),
      )}
    </div>
  );
};

export default Pizza;
