import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Button, Card, NumericInput } from "@blueprintjs/core";
import {
  removeFromCart,
  clearCart,
  updateCartQuantity,
  checkoutCart,
} from "@/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : null}
      {cartItems.map((item) => (
        <Card key={item.id}>
          <h3>{item.name}</h3>
          <p>
            Quantity:{" "}
            <NumericInput
              value={item.quantity}
              min={1}
              onValueChange={(value) =>
                dispatch(updateCartQuantity({ id: item.id, quantity: value }))
              }
            />
          </p>
          <p>Price: {item.price * item.quantity}</p>
          <Button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </Button>
        </Card>
      ))}
      <Button intent="danger" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <Button
        intent="primary"
        onClick={() => dispatch(checkoutCart())}
        disabled={cartItems.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
};
export default Cart;
