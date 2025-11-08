import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import "../App.css";

function NavBar() {
  const { cart, removeFromCart } = useCart();

  return (
    <Navbar id="custom-navbar" expand="lg" fixed="top" className="w-100">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Imaginary Outlet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Fake Products
            </Nav.Link>
            <Nav.Link as={Link} to="/addProduct">
              Add Fake Product
            </Nav.Link>
          </Nav>
          <NavDropdown
            title={`Cart (${cart.length})`}
            id="cart-dropdown"
            align="end"
          >
            {cart.length === 0 ? (
              <NavDropdown.Item disabled>Your cart is empty!</NavDropdown.Item>
            ) : (
              <>
                {cart.slice(0, 3).map((item) => (
                  <NavDropdown.Item
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{item.title}</span>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      x
                    </button>
                  </NavDropdown.Item>
                ))}
                {cart.length > 3 && (
                  <NavDropdown.Item disabled>
                    ...and {cart.length - 3} more
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cart">
                  Go to cart
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
