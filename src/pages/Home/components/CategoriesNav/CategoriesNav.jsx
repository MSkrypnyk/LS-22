import { useState } from "react";
import "./CategoriesNav.scss";
import { Link } from "react-router-dom";

export const CategoriesNav = ({ setActiveCategory }) => {
  const [activeCategory, setActiveCategoryLocal] = useState("all");

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setActiveCategoryLocal(category);
    setActiveCategory(category);
  };

  return (
    <nav className="categories-nav">
      <ul className="categories-ul">
        <li className="categories-li">
          <Link
            to="/"
            className={`categories-a ${
              activeCategory === "all" ? "active-link" : ""
            }`}
            onClick={(e) => handleCategoryClick(e, "all")}
          >
            All
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="/"
            className={`categories-a ${
              activeCategory === "cappuccino" ? "active-link" : ""
            }`}
            onClick={(e) => handleCategoryClick(e, "cappuccino")}
          >
            Cappuccino
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="/"
            className={`categories-a ${
              activeCategory === "espresso" ? "active-link" : ""
            }`}
            onClick={(e) => handleCategoryClick(e, "espresso")}
          >
            Espresso
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="/"
            className={`categories-a ${
              activeCategory === "americano" ? "active-link" : ""
            }`}
            onClick={(e) => handleCategoryClick(e, "americano")}
          >
            Americano
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="/"
            className={`categories-a ${
              activeCategory === "macchiato" ? "active-link" : ""
            }`}
            onClick={(e) => handleCategoryClick(e, "macchiato")}
          >
            Macchiato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
