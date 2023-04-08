import './purchase-list.css';
import * as React from 'react';
import { usePurchaseHistoryStore } from '../state/purchase-history-store';
import { PurchaseListLineItem } from './purchase-list-line-item';
import { calculateRewardPoints } from '../services/reward-point-calculator';

const PurchaseList = () => {
  const purchaseHistory = usePurchaseHistoryStore((state) => state.purchaseHistory);

  return (
    <>
      <table className='purchase-list-table'>
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
        <span>Reward points earned: </span>
        <strong>{purchaseHistory.reduce((sum, purchase) => sum + calculateRewardPoints(purchase), 0)}</strong>
      </summary>
    </>
  );
};

export { PurchaseList }