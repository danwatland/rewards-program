import * as React from 'react';
import { calculateRewardPoints } from '../services/reward-point-calculator.js';

const PurchaseListLineItem = ({ amount, date, item }) => {
  return (
    <li className='purchase-list-line-item'>
      <span>{item}</span>
      <span>{date.toLocaleString()}</span>
      <span>{amount}</span>
      <span>{calculateRewardPoints({ amount })}</span>
    </li>
  );
};

export { PurchaseListLineItem }