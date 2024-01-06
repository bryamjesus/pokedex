/**
 * BASES URL
 */
// https://pokeapi.co/api/v2/pokemon-species
// https://pokeapi.co/api/v2/pokemon?limit=50&offset=0
// https://pokeapi.co/api/v2/pokemon?offset=50&limit=50
// https://pokeapi.co/api/v2/pokemon/1
const URL_BASE = `https://pokeapi.co`;
const ROUTE_URL_API = `/api/v2`;
export const URL_API = `${URL_BASE}${ROUTE_URL_API}`;

// const URL_BASE_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

/**
 * TODOS LOS POKEMONS
 */
const ROUTE_ALL_POKEMON = `/pokemon?limit=24&offset=`;
export const URL_ALL_POKEMON = `${URL_API}${ROUTE_ALL_POKEMON}`;

/**
 * UN SOLO POKEMON
 */

export const URL_ONE_POKEMON = `${URL_API}/pokemon`;
