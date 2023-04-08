import * as React from 'react'
import { usePurchaseHistoryStore } from './state/purchase-history-store';
import './App.css'

const App = () => {
  const { isLoading, purchaseHistory, getPurchaseHistory } = usePurchaseHistoryStore();

  React.useEffect(() => {
    const currentDate = new Date();
    const fromDate = new Date();
    fromDate.setMonth(currentDate.getMonth() - 3);

    getPurchaseHistory(fromDate, currentDate);
  }, []);

  return (
    <div>
      { isLoading ? <progress /> : <progress /> }
    </div>
  )
}

export default App
