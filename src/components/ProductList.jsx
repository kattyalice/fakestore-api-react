import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/CartContext";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function ProductList() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p>Summoning product details from the digital void…</p>;
  if (error) return <p>{error}: Our imaginary products are shy right now!</p>;

  return (
    <div>
      <h1 className="page-title mt-5">Product List</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="col-md-6 mb-3">
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "300px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>

                  <div className="mt-auto d-flex gap-2">
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/products/${product.id}`}
                    >
                      Inspect the Imaginary Item (View)
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => addToCart(product)}
                    >
                      Snag Phantom Treasure (Add to Cart)
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;
