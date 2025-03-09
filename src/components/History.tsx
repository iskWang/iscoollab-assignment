import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Button, Card } from "@blueprintjs/core";
import { clearHistory } from "@/store/historySlice";

const History = () => {
  const orders = useSelector((state: RootState) => state.history.orders);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? <p>No past orders</p> : null}
      {orders.map((order) => (
        <Card key={order.id}>
          <h3>Order Date: {new Date(order.timestamp).toLocaleString()}</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${order.total}</p>
        </Card>
      ))}
      <Button intent="danger" onClick={() => dispatch(clearHistory())}>
        Clear History
      </Button>
    </div>
  );
};
export default History;
