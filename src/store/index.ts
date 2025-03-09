import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@/store/menuSlice";
import cartReducer from "@/store/cartSlice";
import historyReducer from "@/store/historySlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { useDispatch } from "react-redux";
export const useAppDispatch: () => AppDispatch = useDispatch;
