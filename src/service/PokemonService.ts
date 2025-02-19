import { endpoint } from '@/config/constants/endpoint';
import { SimplePokemon } from './simple-pokemon';
import { PokemonsResponse } from '@/interfaces/pokemons-response';

export const getPokemons = async (
  pagination: number = 0
): Promise<SimplePokemon[]> => {
  const URL = endpoint.POKEMON;
  console.log(URL);
  const data: PokemonsResponse = await fetch(
    `${URL}?limit=24&offset=${pagination}`
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => ({
    idPokemon: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};
