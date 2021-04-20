import { pokeApi } from "../api/pokeApi"
import { FetchAllPokemonResponse, Pokemon, SmallPokemon } from "../interfaces/fetchAllPokemonResponse";


export const fetchAllPokemon = async(): Promise<Pokemon[]> => {

  const resp = await pokeApi.get<FetchAllPokemonResponse>('/pokemon?limit=1500');
  const smallPokemonList = resp.data.results;

  return transformSmallPokemonIntoPokemon( smallPokemonList );

}


const transformSmallPokemonIntoPokemon = ( smallPokemonList: SmallPokemon[] ): Pokemon[] => {

  const pokemonArr: Pokemon[] = smallPokemonList.map( poke => {

    const pokeArre = poke.url.split('/');
    const id = pokeArre[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`

    return{
      id,
      pic,
      name: poke.name,
    }
  });

  return pokemonArr;
}