import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Heading from './Heading/Heading';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Heading text="PROFILE" tag="h1" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Heading text="STATISTICS" />
      <Statistics title="Upload stats" stats={data} />
      <Heading text="FRIEND LIST" />
      <FriendList friends={friends} />
      <Heading text="TRANSACTION HISTORY" />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
