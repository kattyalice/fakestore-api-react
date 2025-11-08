import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartContext";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category products:", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1
        className="page-title mt-5"
        style={{ textTransform: "capitalize", margin: "20px 0" }}
      >
        Category:
        {categoryName}
      </h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "300px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Button
                  className="mt-2"
                  variant="success"
                  onClick={() => addToCart(product)}
                >
                  Snag Phantom Treasure (Add to Cart)
                </Button>
                <Button
                  className="mt-2"
                  variant="primary"
                  as={Link}
                  to={`/products/${product.id}`}
                >
                  Inspect the Imaginary Item
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CategoryPage;
