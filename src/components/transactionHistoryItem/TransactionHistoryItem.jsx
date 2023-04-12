import PropTypes from 'prop-types';
import css from '../transactionHistoryItem/TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr className={css.link}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
    )
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;