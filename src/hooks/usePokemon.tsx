import { useEffect, useState } from "react"
import { fetchAllPokemon } from "../helpers/fetchAllPokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const usePokemon = () => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    fetchAllPokemon()
    .then( pokemons => {
      setisLoading(false);
      setPokemons( pokemons );
    })
  }, [])

  return {
    isLoading,
    pokemons
  }
}

