import { SearchInput } from "../../shared/ui/SearchInput/SearchInput";
import "./Home.scss";
import { CategoriesNav } from "./components/CategoriesNav/CategoriesNav";
import { CoffeeBeans } from "./components/CoffeBeans/CoffeBeans";
import { Coffee } from "./components/Coffee/Coffee";


export const Home = () => {
  const handleSearchSubmit = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="home">
      <h1 className="title">
        Find the best <br />
        coffee for you
      </h1>
      <SearchInput onSubmit={handleSearchSubmit} />
      <CategoriesNav />
      <Coffee />
      <CoffeeBeans />
    </section>
  );
};
