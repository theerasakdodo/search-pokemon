import React from "react";

// const pokamon_name = [{}];
export const Search = (pokemon) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect((pokemon) => {
    const results = pokemon.filter(pokemon_name =>
      pokemon_name.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
console.log(pokemon)
  return (
    <form>
      Search Pokemon :
      <input type="text" placeholder="Search..." value={searchTerm}
        onChange={handleChange}/>
    </form>
  );
};
