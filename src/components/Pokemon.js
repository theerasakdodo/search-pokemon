import React from "react";
import { Search } from "./Search";
export function Pokemon({ pokemon }) {
  Search(pokemon)
  return (
    <div className="pokemon">
      <div className="pokemon_name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon_image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      {/* <div className="pokemon_evolutionRequirements">
        {pokemon &&
            pokemon.evolutionRequirements &&
            pokemon.evolutionRequirements.name
            .slice()
            }
      </div> */}
    </div>
  );
}
