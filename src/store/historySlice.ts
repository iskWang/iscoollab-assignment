import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  items: { id: string; name: string; price: number; quantity: number }[];
  total: number;
  timestamp: string;
}

const initialState: { orders: Order[] } = { orders: [] };

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    clearHistory(state) {
      state.orders = [];
    },
  },
});

export const { addOrder, clearHistory } = historySlice.actions;
export default historySlice.reducer;
