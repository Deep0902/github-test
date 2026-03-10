import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const pizzaItems = [
  {
    name: "Margherita",
    desc: "Topped with layer of cheese",
    img: "/categories/pizzas/pizza1.png",
    isVeg: true,
    isSpicy: false,
    price: 99
  },
  {
    name: "Veggie Feast",
    desc: "Onion & Capsicum",
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
  {
    name: "Jugal Bandi",
    desc: "Sweet Corn, Red Paprika, Paneer & Tomato",
    img: "/categories/pizzas/pizza4.png",
    isVeg: true,
    isSpicy: false,
    price: 139
  },
  {
    name: "Indian Hot",
    desc: "Onion, Capsicum, Jalapeno, Roasted Garlic",
    img: "/categories/pizzas/pizza5.png",
    isVeg: true,
    isSpicy: true,
    price: 119
  },
  {
    name: "Super Combo",
    desc: "Onion, Capsicum, Grilled Chicken, Chicken Tikka & Seasoning",
    img: "/categories/pizzas/pizza6.png",
    isVeg: false,
    isSpicy: false,
    price: 139
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
