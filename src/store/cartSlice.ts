import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addOrder } from "@/store/historySlice";
import { AppDispatch, RootState } from "@/store";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const initialState: { items: CartItem[] } = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const checkoutCart =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { cart } = getState();
    if (cart.items.length === 0) return;

    const order = {
      id: new Date().toISOString(),
      items: cart.items,
      total: cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      timestamp: new Date().toISOString(),
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
  };

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
