import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const starterItems = [
  {
    name: "Cheese Garlic Bread",
    desc: "Toasted garlic bread topped with melted cheese",
    img: "/categories/starters/starter1.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
  {
    name: "Potato Chilli Pops",
    desc: "Crispy bite-sized potato pops seasoned with chili and spices",
    img: "/categories/starters/starter2.png",
    isVeg: true,
    isSpicy: false,
    price: 69,
  },
  {
    name: "Non-Veg Stuffed Calzone",
    desc: "Baked pizza dough stuffed with savory meat filling and cheese",
    img: "/categories/starters/starter3.png",
    isVeg: false,
    isSpicy: true,
    price: 129,
  },
  {
    name: "French Fries",
    desc: "Crispy golden fries, the classic irresistible side",
    img: "/categories/starters/starter4.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
  {
    name: "Peri Peri Fries",
    desc: "Spicy peri peri seasoned fries with a fiery kick.",
    img: "/categories/starters/starter5.png",
    isVeg: true,
    isSpicy: true,
    price: 79,
  },
  {
    name: "Potato Vedeges",
    desc: "Thick-cut, crispy-on-the-outside, tender-on-the-inside wedges",
    img: "/categories/starters/starter6.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
];


const Starters = () => {
  const { toggle } = useNonVegToggle();
  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Starters</span>
      {starterItems.map(
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

export default Starters;
