import * as React from 'react';

const PurchaseListLineItem = ({ amount, date, item }) => {
  return (
    <li>
      <span>{date.toString()}</span>
      <span>{amount}</span>
    </li>
  );
};

export { PurchaseListLineItem }