import { useCart } from "../hooks/CartContext";
import { Container, Button, Table } from "react-bootstrap";

function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <Container className="page-title mt-5">
        <h2>Your Phantom Cart</h2>
        <p>
          Your cart is empty! So are our sheves though so that works for us.
        </p>
      </Container>
    );

  return (
    <Container className="page-title mt-5">
      <h2>Your Phantom Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td className="d-flex gap-2">
                <Button variant="secondary" onClick={() => addToCart(item)}>
                  +
                </Button>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
      <Button variant="warning" onClick={clearCart}>
        Clear Cart
      </Button>
    </Container>
  );
}

export default Cart;
