import React from "react";
import styles from "./trnsA.module.css";
import PropTypes, { number } from "prop-types";

function Transaction({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.line}>
        <tr className={styles.row1}>
          <th className={styles.head}>Type</th>
          <th className={styles.head}>Amount</th>
          <th className={styles.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={styles.row} key={item.id}>
            <td className={styles.data}>{item.type}</td>
            <td className={styles.data}>{item.amount}</td>
            <td className={styles.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Transaction.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Transaction;
