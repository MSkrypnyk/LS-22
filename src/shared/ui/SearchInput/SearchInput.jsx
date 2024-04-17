import { useState, useRef } from "react";
import "./SearchInput.scss";
import { Button } from "../Button/Button";

export const SearchInput = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm("");
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleSearchSubmit}>
      <Button type="submit" variant="secondary">
        <span className="icon-search"></span>
      </Button>
      <input
        id="searchInput"
        className="form__input"
        type="search"
        placeholder="Find Your Coffee..."
        value={searchTerm}
        onChange={handleSearchChange}
        ref={inputRef}
      />
    </form>
  );
};
