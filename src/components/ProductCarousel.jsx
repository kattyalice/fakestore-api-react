import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

function ProductCarousel() {
  const navigate = useNavigate();

  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading imaginary products…</p>;
  if (error) return <p>{error}</p>;

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Carousel className="mt-5">
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.title}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>

            <div className="d-flex justify-content-center gap-2 mt-3">
              <Button
                variant="primary"
                onClick={() => handleCategoryClick(product.category)}
              >
                Find Your Product’s Doppelgängers
              </Button>
              <Button
                variant="light"
                onClick={() => handleProductClick(product.id)}
              >
                Inspect the Imaginary Item
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
