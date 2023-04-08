import * as React from 'react'
import { usePurchaseHistoryStore } from './state/purchase-history-store';
import './App.css'
import { PurchaseList } from './components/purchase-list.jsx';

const App = () => {
  const { isLoading, getPurchaseHistory } = usePurchaseHistoryStore();

  React.useEffect(() => {
    const currentDate = new Date();
    const fromDate = new Date();
    fromDate.setMonth(currentDate.getMonth() - 3);

    getPurchaseHistory(fromDate, currentDate);
  }, []);

  return (
    <div>
      { isLoading ? <progress /> : <PurchaseList /> }
    </div>
  )
}

export default App
