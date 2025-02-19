import {
  POKEMON_API_BASE,
  POKEMON_API_RESOURCE,
  POKEMON_API_VERSION,
} from '@/assets/config';

export default function PokemonsPage() {
  console.log(
    'PokemonsPage ',
    POKEMON_API_BASE,
    POKEMON_API_VERSION,
    POKEMON_API_RESOURCE
  );

  console.log(process.env.NEXT_PUBLIC_POKEMON_API_BASE);
  return (
    <>
      <div className="container">
        <h1>Pokemons</h1>
        <p>Here you can find all the pokemons</p>
      </div>
    </>
  );
}
