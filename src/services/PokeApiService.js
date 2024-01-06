import { URL_ALL_POKEMON, URL_ONE_POKEMON } from '../helpers/Config';

export const getPokemons = async (pagination = 0) => {
  const response = await fetch(`${URL_ALL_POKEMON}${pagination}`);
  const { results } = await response.json();

  const promises = results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return data;
  });
  const newResults = await Promise.all(promises);
  return newResults;
};

export const getOnePokemon = async (id) => {
  const response = await fetch(`${URL_ONE_POKEMON}/${id}`);
  const data = await response.json();
  return data;
};
