/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../../css/NewCardPokemon.css';
import { addNumbers } from '../../utils/StringUtils';

export const PokemonCard = ({ codePokemon, name, urlImg, types }) => {
  const numberPokemon = addNumbers('0', codePokemon, 4);

  return (
    <Link to={`/pokemon/${codePokemon}`}>
      <div className={`cardPokemon ${types[0].type.name}-hv`}>
        <p className="cardPokemon-back">{`#${numberPokemon}`}</p>

        <div className="cardPokemon-imagen">
          <img
            src={urlImg}
            className="cardPokemon-img"
            alt={`Pokemon ${name}`}
          />
        </div>

        <div className="cardPokemon-info">
          <div className="cardPokemon-container">
            <h2 className="cardPokemon-name">{name}</h2>
          </div>
          <div className="cardPokemon-types">
            {types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
