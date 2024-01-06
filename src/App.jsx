// import './App.css';
import { AppRouter } from './AppRouter';
import { PokemonProvider } from './contexts/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App;
