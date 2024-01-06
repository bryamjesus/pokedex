import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import '../css/PokemonPage.css';
import { addNumbers, firstCapitalLetter } from '../utils/StringUtils';
import pokeball from '../assets/pokeball.svg';
import { getOnePokemon } from '../services/PokeApiService';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { getMaxObj } from '../utils/ArrayString';

export const PokemonPage = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [color, setColor] = useState('');
  const [statMax, setStatMax] = useState(0);

  const { id } = useParams();

  const getByIdPokemon = async (id) => {
    const data = await getOnePokemon(id);
    setPokemon(data);
    console.log(data);
    setColor(data?.types[0]?.type?.name);
    setLoading(false);
    const objStatMax = getMaxObj([...data.stats], 'base_stat');
    setStatMax(objStatMax.base_stat);
  };

  const pokemonPage = {
    background: `linear-gradient(170.5deg, var(--color-${color}-bg) 60%, #fff 50%)`, //
  };

  useEffect(() => {
    getByIdPokemon(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section style={pokemonPage}>
            <div className="container">
              <div className="pokemonPage-header">
                <div className="pokemonPage-infoPrincipal">
                  <div className="pokemonPage-codePokemon">
                    <img src={pokeball} />
                    <h2 className="pokemonPage-code">
                      {addNumbers('0', pokemon.id, 4)}
                    </h2>
                  </div>
                  <h2 className="pokemonPage-name">
                    {firstCapitalLetter(pokemon.name)}
                  </h2>
                  <div className="pokemonPage-types">
                    {pokemon.types.map((type) => (
                      <span
                        key={type.type.name}
                        className={`${type.type.name} pokemonPage-type`}>
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pokemonPage-container-img">
                  <img
                    className="pokemonPage-img"
                    src={pokemon.sprites.other.dream_world.front_default}></img>
                </div>
              </div>
            </div>
          </section>
          <section className="container pokemonPage-moreInfo">
            <div className="pokemonPage-minInfo">
              <div className="">
                <h3>Altura</h3>
                <span>{pokemon.height}</span>
              </div>
              <div className="">
                <h3>Peso</h3>
                <span>{pokemon.weight}KG</span>
              </div>
            </div>
            <div className="pokemonPage-stats">
              <h3 className="pokemonPage-titleStats">Characteristics</h3>
              <div className="pokemonPage-groupsStat">
                {pokemon.stats.map((stat) => (
                  <ProgressBar
                    key={stat.stat.name}
                    nameAttack={stat.stat.name}
                    stats={stat.base_stat}
                    statMax={statMax}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
