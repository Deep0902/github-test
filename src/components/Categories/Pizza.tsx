import MenuItem from "../MenuItem";

const pizzaItems = [
  {
    name: "Margherita",
    desc: "Trapped with layer of cheese",
    img: "/categories/pizzas/pizza1.png",
    isVeg: true,
    isSpicy: false
  },
  {
    name: "Simple Veggie",
    desc: "Onion & Capsuim",
    img: "/categories/pizzas/pizza2.png",
    isVeg: true,
    isSpicy: false
  },
  {
    name: "Meaty Feast & Seasoning",
    desc: "Chicken, Onion",
    img: "/categories/pizzas/pizza3.png",
    isVeg: false,
    isSpicy: true
  },
];

const Pizza = () => {
  return (
    <div>
      {pizzaItems.map((item) => (
        <div className="" key={item.img}>
          <MenuItem
            name={item.name}
            desc={item.desc}
            img={item.img}
            isSpicy={item.isSpicy}
          />
        </div>
      ))}
    </div>
  );
};

export default Pizza;
