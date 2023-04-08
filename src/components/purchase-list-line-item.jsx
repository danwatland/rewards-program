import * as React from 'react';

const PurchaseListLineItem = ({ amount, date, item }) => {
  return (
    <li className='purchase-list-line-item'>
      <span>{item}</span>
      <span>{date.toLocaleString()}</span>
      <span>{amount}</span>
    </li>
  );
};

export { PurchaseListLineItem }