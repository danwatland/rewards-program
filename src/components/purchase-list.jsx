import * as React from 'react';
import { usePurchaseHistoryStore } from '../state/purchase-history-store.js';
import { PurchaseListLineItem } from './purchase-list-line-item.jsx';

const PurchaseList = () => {
  const purchaseHistory = usePurchaseHistoryStore((state) => state.purchaseHistory);

  return (
    <ul>
      { purchaseHistory.map((purchase, i) => <PurchaseListLineItem amount={purchase.amount} date={purchase.date} key={i} />) }
    </ul>
  );
};

export { PurchaseList }