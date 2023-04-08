import * as React from 'react';
import { calculateRewardPoints } from '../services/reward-point-calculator.js';

const PurchaseListLineItem = ({ amount, date, item }) => {
  return (
    <tr>
      <td>{item}</td>
      <td>{date.toLocaleString()}</td>
      <td>{amount}</td>
      <td>{calculateRewardPoints({ amount })}</td>
    </tr>
  );
};

export { PurchaseListLineItem }