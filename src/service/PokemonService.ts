import { endpoint } from '@/config/constants/endpoint';
import { PokemonsResponse } from '@/interfaces/pokemons-response';
import { SimplePokemon } from '../interfaces/simple-pokemon';

export const getPokemons = async (
  pagination: number = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `${endpoint.POKEMON}?limit=24&offset=${pagination}`
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => ({
    idPokemon: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};
