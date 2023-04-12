import PropTypes from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) =>{
    return <section>
    <ul className={css.friends}>
        {friends.map(({id, avatar, name, isOnline}) =>{
            return (
                <FriendListItem 
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}/>
            )
        })}
    </ul>
    </section>
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
      ).isRequired,
};