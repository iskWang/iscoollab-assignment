# Food Ordering App

This is a simple food ordering web application built with **React, Redux Toolkit, Blueprint.js, and TailwindCSS**. Users can browse a menu, add items to their cart, and view order history.

## 📦 Features

- **Menu Display**: View available food items categorized by type
- **Cart Management**: Add, remove, and clear items from the cart
- **Order Checkout**: Place orders and track past purchases
- **History Tracking**: View and clear past order history
- **Styled UI**: Uses Blueprint.js components with TailwindCSS for styling

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **State Management**: Redux Toolkit
- **UI Library**: Blueprint.js + TailwindCSS
- **Package Manager**: pnpm (preferred)

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
 git clone https://github.com/iskWang/iscoollab-assignment.git
 cd iscoollab-assignment
```

### 2️⃣ Install Dependencies

```sh
pnpm install
```

### 3️⃣ Start Development Server

```sh
pnpm dev
```

### 4️⃣ Build for Production

```sh
pnpm build
```

### 5️⃣ Start Production Server

```sh
pnpm preview
```

## 📂 Project Structure

```
📦 src/
 ┣ 📂 components/      # UI Components
 ┃ ┣ 📜 Cart.tsx       # Shopping Cart Component
 ┃ ┣ 📜 History.tsx    # Order History Component
 ┃ ┣ 📜 Menu.tsx       # Menu Component
 ┣ 📂 store/           # Redux Store
 ┃ ┣ 📜 index.ts       # Store Configuration
 ┃ ┣ 📜 cartSlice.ts   # Cart Reducer
 ┃ ┣ 📜 menuSlice.ts   # Menu Reducer
 ┃ ┣ 📜 historySlice.ts# Order History Reducer
 ┣ 📜 App.tsx          # Main Application Component
 ┣ 📜 index.css        # TailwindCSS Styles
 ┣ 📜 main.tsx         # React App Entry Point
 ┗ 📜 vite.config.ts   # Vite Configuration
```

## 📝 Notes

- **Ensure **``** is installed before running the project**
- Uses **Blueprint.js** for UI components
- TailwindCSS is used with **default styles**, no preflight reset

## 📜 License

MIT License
