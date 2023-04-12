import PropTypes from 'prop-types';
import {TransactionHistoryItem} from '../transactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) =>{
    return (
    <section>
    <table className={css.transaction_history}>
        <thead>
            <tr className={css.transaction__header}>
                <th className={css.transaction__name}>Type</th>
                <th className={css.transaction__name}>Amount</th>
                <th className={css.transaction__name}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({id, type, amount, currency}) =>{
                return(
                    <TransactionHistoryItem
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}/>
                )
            })}
        </tbody>
    </table>
    </section>
    )
}
TransactionHistory.propTypes ={
    items:PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}