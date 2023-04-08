import './purchase-list.css';
import * as React from 'react';
import { usePurchaseHistoryStore } from '../state/purchase-history-store.js';
import { PurchaseListLineItem } from './purchase-list-line-item.jsx';

const PurchaseList = () => {
  const purchaseHistory = usePurchaseHistoryStore((state) => state.purchaseHistory);

  return (
    <>
      <ul>
        { purchaseHistory.map((purchase, i) => <PurchaseListLineItem amount={purchase.amount} date={purchase.date} item={purchase.item} key={i} />) }
      </ul>
      <summary className='purchase-list-summary'>
        <span>Total spent in last 3 months: ${purchaseHistory.reduce((sum, purchase) => sum + purchase.amount, 0)}</span>
        <span>Reward points earned: {'todo: make something to calculate this'}</span>
      </summary>
    </>
  );
};

export { PurchaseList }