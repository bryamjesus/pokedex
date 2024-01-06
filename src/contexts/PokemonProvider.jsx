/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { getPokemons } from '../services/PokeApiService';

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pagination, setPagination] = useState(0);

  // Estados
  const [loading, setLoading] = useState(true);
  const [validatePagination, setValidatePagination] = useState(false);

  const validationFinisPagination = () => {
    setValidatePagination(pagination === 0);
  };

  const getAllPokemons = async () => {
    const pokemons = await getPokemons(pagination);
    setAllPokemons([...pokemons]);
    setLoading(false);
    validationFinisPagination();
  };

  useEffect(() => {
    getAllPokemons();
  }, [pagination]);

  // LOGICA BOTONES
  const onClickNextPage = () => {
    setPagination(pagination + 24);
  };

  const onClickBackPage = () => {
    setPagination(pagination - 24);
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        loading,
        validatePagination,
        onClickNextPage,
        onClickBackPage,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
