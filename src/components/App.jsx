import { Profile } from "./profile/Profile";
import { StatisticsList } from "./statisticsList/StatisticsList";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import user from 'user.json';
import stats from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';


export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar = {user.avatar}
      stats = {user.stats}/>

      <StatisticsList 
      stats={stats} 
      title="Upload stats"/>

      <FriendList
      friends={friends}/>

      <TransactionHistory
      items={transactions}/>
    </>
    

  );
};
