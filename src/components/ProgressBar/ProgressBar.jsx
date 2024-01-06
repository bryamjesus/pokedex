/* eslint-disable react/prop-types */
import '../../css/ProgressBar.css';
import { firstCapitalLetter } from '../../utils/StringUtils';

export const ProgressBar = ({ nameAttack, stats, statMax }) => {
  const stat =
    statMax > 100 && 200 >= statMax
      ? stats / 2
      : statMax > 200
      ? stats / 3
      : stats;
  console.log(stat);
  return (
    <>
      <div className="progressBar">
        <p className="progressBar-tipeStat">{firstCapitalLetter(nameAttack)}</p>
        <div className="progressBar-bar">
          <div
            style={{
              width: `${stat}%`,
            }}
            className="progressBar-stuffed">
            {stats}
          </div>
        </div>
      </div>
    </>
  );
};
