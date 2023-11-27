import user from '../data/user.json';
import data from '../data/data.json';

import Profile from './User/User';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <h2 className="task"> PROFILE</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task">STATISTICS</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 className="task">FRIEND LIST</h2>
      <h2 className="task">TRANSACTION HISTORY</h2>
    </>
  );
};
