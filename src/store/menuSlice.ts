import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: "1",
      name: "Burger",
      foods: [{ id: "101", name: "Beef Burger", price: 120 }],
    },
    {
      id: "2",
      name: "Drinks",
      foods: [{ id: "201", name: "Cola", price: 50 }],
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
