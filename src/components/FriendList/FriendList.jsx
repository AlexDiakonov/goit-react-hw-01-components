import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          id={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
