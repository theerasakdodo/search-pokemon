import { useEffect, useState } from "react";

// const pokamon_name = [{}];
export const Search = (pokemon) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(pokemon);
  return (
    <form>
      Search Pokemon :
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};
