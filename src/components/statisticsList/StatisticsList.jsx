import PropTypes from 'prop-types';
import { Statistics } from 'components/statistics/Statistics';
import css from './StatisticsList.module.css';

export const StatisticsList = ({stats, title}) =>{
    return <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    < ul className={css.list}>
        {stats.map(({id, label, percentage}) => {
          return (
            <Statistics
              key={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
    </ul>
  </section>
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
}