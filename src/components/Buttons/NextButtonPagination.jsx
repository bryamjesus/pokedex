/* eslint-disable react/prop-types */
import '../../css/ButtonPagination.css';

export const NextButtonPagination = ({ text, icon, functionClick }) => {
  return (
    <>
      <button onClick={functionClick} className="buttonPagination">
        <span className="buttonPagination-text">{text}</span>
        <span className="buttonPagination-icon">
          <img src={icon}></img>
        </span>
      </button>
    </>
  );
};
