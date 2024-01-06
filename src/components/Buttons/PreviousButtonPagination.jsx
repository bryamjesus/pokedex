/* eslint-disable react/prop-types */
import '../../css/ButtonPagination.css';

export const PreviousButtonPagination = ({
  text,
  icon,
  functionClick,
  paginationValidation,
}) => {
  return (
    <>
      <button
        onClick={functionClick}
        className={`${
          paginationValidation && 'display-none'
        } buttonPagination`}>
        <span className="buttonPagination-icon">
          <img src={icon}></img>
        </span>
        <span className="buttonPagination-text">{text}</span>
      </button>
    </>
  );
};
