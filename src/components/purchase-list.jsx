import './purchase-list.css';
import * as React from 'react';
import { usePurchaseHistoryStore } from '../state/purchase-history-store.js';
import { PurchaseListLineItem } from './purchase-list-line-item.jsx';
import { calculateRewardPoints } from '../services/reward-point-calculator.js';

const PurchaseList = () => {
  const purchaseHistory = usePurchaseHistoryStore((state) => state.purchaseHistory);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Date Purchased</th>
            <th>Price</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          { purchaseHistory.map((purchase, i) => <PurchaseListLineItem amount={purchase.amount} date={purchase.date} item={purchase.item} key={i} />) }
        </tbody>
      </table>
      <summary className='purchase-list-summary'>
        <span>Total spent in last 3 months: ${purchaseHistory.reduce((sum, purchase) => sum + purchase.amount, 0)}</span>
        <span>Reward points earned: {purchaseHistory.reduce((sum, purchase) => sum + calculateRewardPoints(purchase), 0)}</span>
      </summary>
    </>
  );
};

export { PurchaseList }