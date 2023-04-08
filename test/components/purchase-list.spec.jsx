import * as React from 'react';
import { render } from '@testing-library/react';
import { PurchaseList } from '../../src/components/purchase-list';
import { usePurchaseHistoryStore } from '../../src/state/purchase-history-store';

describe('Purchase list', () => {
  let purchaseHistory;

  beforeEach(() => {
    purchaseHistory = [
      { item: 'Apples', amount: 75, date: new Date() },
      { item: 'Bananas', amount: 75, date: new Date() },
      { item: 'Carrots', amount: 120, date: new Date() },
    ];

    usePurchaseHistoryStore.setState({ purchaseHistory });
  });

  it('should display each entry of purchase history', () => {
    const rendered = render(<PurchaseList />);

    expect(rendered.getByText('Apples')).toBeInTheDocument();
    expect(rendered.getByText('Bananas')).toBeInTheDocument();
    expect(rendered.getByText('Carrots')).toBeInTheDocument();
  });

  it('should display the total reward points accumulated', () => {
    const rendered = render(<PurchaseList />);

    expect(rendered.getByText('120')).toBeInTheDocument();
  });
});