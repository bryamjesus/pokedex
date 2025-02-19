import { PokemonGrid } from '@/components/pokemons/PokemonGrid';
import { getPokemons } from '@/service/PokemonService';

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <>
      <div className="container">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </>
  );
}
