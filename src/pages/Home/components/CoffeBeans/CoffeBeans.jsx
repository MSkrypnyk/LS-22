import { useState } from "react";
import "./CoffeBeans.scss";
import { Link } from "react-router-dom";
export const CoffeeBeans = ({ selectedCategory }) => {
  const [price] = useState(4.2);

  const coffeeData = [
    {
      image: "/src/assets/img/home/beans1.png",
      title: "Robusta Beans",
      desc: "Medium Roasted",
      id: 4,
      category: "cappuccino",
    },
    {
      image: "/src/assets/img/home/beans2.png",
      title: "Arabica Beans",
      desc: "Light Roasted",
      id: 5,
      category: "espresso",
    },
    {
      image: "/src/assets/img/home/beans3.png",
      title: "Espresso Beans",
      desc: "Dark Roasted",
      id: 6,
      category: "espresso",
    },
    {
      image: "/src/assets/img/home/beans4.png",
      title: "Flavored Beans",
      desc: "Various Flavors",
      id: 7,
      category: "americano",
    },
  ];

  const filteredCoffeeData =
    selectedCategory === "all"
      ? coffeeData
      : coffeeData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h5 className="beans-title">Coffee beans</h5>
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
    </div>
  );
};
