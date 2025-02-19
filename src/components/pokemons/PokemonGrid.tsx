import { SimplePokemon } from '@/interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

type Props = {
  pokemons: SimplePokemon[];
};

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
