import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import "../App.css";

export function Search() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? pokemons
    : pokemons.filter((pokemons) =>
        pokemons.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  return (
    <div>
      <form>
        Search Pokemon :
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {results.length !== 0
        ? results.map((pokemon) => {
            return (
              <div className="pokemon">
                
                    <div className="pokemon_name">
                      <p>{pokemon.name}</p>
                    </div>
                 
                    <div className="pokemon_image">
                      <img src={pokemon.image} alt={pokemon.name} />
                    </div>
               
             
              </div>
            );
          })
        : null}
    </div>
  );
}
