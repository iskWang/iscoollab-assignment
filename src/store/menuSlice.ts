import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: "1",
      name: "Burger & Sandwich",
      foods: [
        { id: "101", name: "Beef Burger", price: 120 },
        { id: "102", name: "Sandwich", price: 100 },
      ],
    },
    {
      id: "2",
      name: "Drinks",
      foods: [
        { id: "201", name: "Cola", price: 50 },
        { id: "202", name: "Milk", price: 70 },
      ],
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
