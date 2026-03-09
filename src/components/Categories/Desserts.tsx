import { useNonVegToggle } from "@/context/nonVegToggle";
import MenuItem from "../MenuItem";

const desserItems = [
  {
    name: "Brownie",
    desc: "Rich and fudgy chocolate brownie",
    img: "/categories/desserts/desserts1.png",
    isVeg: true,
    isSpicy: false,
    price: 49,
  },
  {
    name: "Dutch Truffle Cake",
    desc: "Decadent chocolate cake with smooth truffle ganache",
    img: "/categories/desserts/desserts2.png",
    isVeg: true,
    isSpicy: false,
    price: 49,
  },
  {
    name: "Fineapple Fresh Cream",
    desc: "Light sponge cake with fresh cream and pineapple",
    img: "/categories/desserts/desserts3.png",
    isVeg: true,
    isSpicy: false,
    price: 69,
  },
];

const Desserts = () => {
  const { toggle } = useNonVegToggle();
  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Desserts</span>
      {desserItems.map(
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

export default Desserts;
