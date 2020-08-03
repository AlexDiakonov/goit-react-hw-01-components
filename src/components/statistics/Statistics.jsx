import React from "react";
import statistical from "./statistical-data.json";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function getRandomRgb() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
function Statistics({ title }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {statistical.map((stat) => (
          <li
            style={{ backgroundColor: getRandomRgb() }}
            className={styles.item}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
