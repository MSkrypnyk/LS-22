import { useState } from "react";
import { Link } from "react-router-dom";

export const Coffee = ({ selectedCategory }) => {
  const [price] = useState(4.2);

  const coffeeData = [
    {
      image: "/src/assets/img/home/cappuccino1.png",
      title: "Cappuccino",
      desc: "With Steamed Milk",
      id: 1,
      category: "cappuccino",
    },
    {
      image: "/src/assets/img/home/cappuccino2.png",
      title: "Cappuccino",
      desc: "With Foam",
      id: 2,
      category: "americano",
    },
    {
      image: "/src/assets/img/home/cappuccino3.png",
      title: "Cappuccino",
      desc: "With Steamed Milk",
      id: 3,
      category: "cappuccino",
    },
  ];

  const filteredCoffeeData =
    selectedCategory === "all"
      ? coffeeData
      : coffeeData.filter((item) => item.category === selectedCategory);

  return (
    <div className="list">
      {filteredCoffeeData.map((item) => (
        <Link to={`/product/${item.id}`} className="item" key={item.id}>
          <img src={item.image} className="item__img" alt="Coffee" />
          <h3 className="item__title">{item.title}</h3>
          <p className="item__desc">{item.desc}</p>
          <div className="item__id">{item.id}</div>
          <div className="price-group">
            <p className="price">
              <span>$</span> {price.toFixed(2)}
            </p>
            <span className="icon-plus"></span>
          </div>
        </Link>
      ))}
    </div>
  );
};
