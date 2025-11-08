import { useCart } from "../hooks/CartContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2>Your cart is as empty as this fake store.</h2>;
  }

  return (
    <div className="mt-5">
      <h1>Your Imaginary Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Total: ${total.toFixed(2)}</h3>
      <Button variant="secendary" onClick={clearCart}>
        Clear Cart
      </Button>
      <Button variant="primary" className="ms-2">
        Proceed to Checkout (Pretend)
      </Button>
    </div>
  );
}

export default CartPage;
