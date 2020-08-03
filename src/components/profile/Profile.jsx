import React from "react";
import style from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="user avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        {Object.entries(stats).map((stat) => (
          <li className={style.item}>
            <span className={style.label}>{stat[0]}</span>
            <span className={style.quantity}>{stat[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
