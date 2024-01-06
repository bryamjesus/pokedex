import { useContext } from 'react';
import { Loader } from '../Loader/Loader';
import { PokemonContext } from '../../contexts/PokemonContext';
import '../../css/PokemonList.css';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);

  return (
    <>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="pa-pokemon-list">
            {allPokemons.map((pokemon) => (
              <PokemonCard
                codePokemon={pokemon.id}
                name={pokemon.name}
                urlImg={pokemon.sprites.other.dream_world.front_default}
                pokemon={pokemon}
                types={pokemon.types}
                key={pokemon.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
