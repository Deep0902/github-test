import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const addOnItems = [
  {
    name: "Cheese",
    desc: "Extra layer of melted creamy cheese",
    img: "/categories/addons/addon1.png",
    isVeg: true,
    isSpicy: false,
    price: 35,
  },
  {
    name: "Veg Toppings",
    desc: "A variety of fresh seasonal vegetables",
    img: "/categories/addons/addon2.png",
    isVeg: true,
    isSpicy: false,
    price: 20,
  },
  {
    name: "Non Veg Toppings",
    desc: "Selection of premium meat toppings",
    img: "/categories/addons/addon3.png",
    isVeg: false,
    isSpicy: false,
    price: 30,
  },
];


const AddOns = () => {
  const { toggle } = useNonVegToggle();
  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Add Ons</span>
      {addOnItems.map(
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

export default AddOns;
