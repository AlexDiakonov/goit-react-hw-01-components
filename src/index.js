import React from "react";
import ReactDOM from "react-dom";
import Statistics from "./components/statistics/Statistics.jsx";
import Profile from "./components/profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import user from "./components/profile/user.json";
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./components/Transactions/transactios.json";

const Layout = () => (
  <>
    <Statistics title="Upload Statistics" />
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

ReactDOM.render(<Layout />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
