import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={style.item} key={id}>
      <span className={isOnline === true ? style.online : style.offline}></span>
      <img src={avatar} className={style.avatar} alt="avatar" />
      <p className={style.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendListItem;
