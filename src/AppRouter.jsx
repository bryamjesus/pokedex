import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokemonPage } from './pages/PokemonPage';
import { NavBar } from './components/Navigation/NavBar';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Route>
    </Routes>
  );
};
