import { useContext } from 'react';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { PokemonContext } from '../contexts/PokemonContext';
import { NextButtonPagination } from '../components/Buttons/NextButtonPagination';
import next from '../assets/next.svg';
import previous from '../assets/previous.svg';
import { PreviousButtonPagination } from '../components/Buttons/PreviousButtonPagination';
import '../css/HomePage.css';

export const HomePage = () => {
  const { validatePagination, onClickNextPage, onClickBackPage } =
    useContext(PokemonContext);

  return (
    <>
      <PokemonList />
      <div className="container homePage-pagination">
        <PreviousButtonPagination
          text="Previous"
          icon={previous}
          functionClick={onClickBackPage}
          paginationValidation={validatePagination}
        />
        <NextButtonPagination
          text="Next"
          icon={next}
          functionClick={onClickNextPage}
        />
      </div>
    </>
  );
};
