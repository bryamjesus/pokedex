//import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../css/NavBar.css';
import pokedex from '../../assets/pokedex.png';

export const NavBar = () => {
  return (
    <>
      <header className="pa-navBar container">
        <Link to="/" className="pa-navBar-logo">
          <img src={pokedex} alt="Logo Pokedex" />
        </Link>
      </header>
      <Outlet />
    </>
  );
};
