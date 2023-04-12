import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';

export const Statistics = ({ label, percentage }) => {
    return (
      <li
        className={css.item}
        style={{
          backgroundColor: getRandomHexColor(),
        }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
};
  
Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
  
function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const hexColor = '#' + '0'.repeat(6 - randomColor.length) + randomColor;
    return hexColor;
}

export default Statistics;