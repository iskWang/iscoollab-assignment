import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Button, Card } from "@blueprintjs/core";
import { addToCart } from "@/store/cartSlice";

const Menu = () => {
  const categories = useSelector((state: RootState) => state.menu.categories);
  const dispatch = useDispatch();

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          {category.foods.map((food) => (
            <Card key={food.id}>
              <h3>{food.name}</h3>
              <p>Price: {food.price}</p>
              <Button
                onClick={() => dispatch(addToCart({ ...food, quantity: 1 }))}
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Menu;
