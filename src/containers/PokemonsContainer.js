import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 12 },
  });

  return (
    <div className="container">
      {pokemons && pokemons.map((pokemon) =><Pokemon Key={pokemon.id} pokemon={pokemon}/>)}
    </div>
  );
}
