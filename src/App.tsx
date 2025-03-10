import { Provider } from "react-redux";
import { store } from "@/store";
import Menu from "@/components/Menu";
import Cart from "./components/Cart";
import History from "./components/History";
import "@blueprintjs/core/lib/css/blueprint.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App w-[1000px] m-auto">
        <h1>Food Ordering System</h1>
        <div className="flex flex-row">
          <div className="flex-4">
            <Menu />
          </div>
          <div className="flex-8">
            <Cart />
          </div>
        </div>
        <History />
      </div>
    </Provider>
  );
}

export default App;
