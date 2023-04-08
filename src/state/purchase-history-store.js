import { create } from 'zustand';
import { fetchPurchaseHistory } from '../services/purchase-history-service.js';

const usePurchaseHistoryStore = create((set) => ({
  isLoading: true,
  purchaseHistory: [],
  getPurchaseHistory: async (fromDate, toDate) => {
    set({ isLoading: true });

    const purchaseHistory = await fetchPurchaseHistory(fromDate, toDate);

    set({
      isLoading: false,
      purchaseHistory
    });
  }
}));

export { usePurchaseHistoryStore };