import { useParams, useNavigate } from "react-router-dom";
import { useSingleProduct } from "../hooks/useSingleProduct";
import { useCart } from "../hooks/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading, error } = useSingleProduct(id);
  const { addToCart } = useCart();

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    navigate(`/delete/${id}`);
  };

  if (loading) return <p>Summoning product details from the digital void…</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Oops! The fake products are hiding again…</p>;

  return (
    <div>
      <h1 className="page-title mt-5">{product.title}</h1>
      <Card className="details-card">
        <Card.Img
          className="custom-img"
          variant="top"
          src={product.image}
          alt={product.title}
        />
        <Card.Body>
          <Card.Text>
            <strong>Category: </strong>
            {product.category}
          </Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <strong>Price: </strong>${product.price}
          </Card.Text>
        </Card.Body>
        <Button
          className="mt-2"
          variant="success"
          onClick={() => addToCart(product)}
        >
          Snag Phantom Treasure (Add to Cart)
        </Button>
        <div className="d-flex gap-2 mt-2">
          <Button
            variant="primary"
            onClick={() => handleCategoryClick(product.category)}
          >
            Find Your Product’s Doppelgängers
          </Button>
          <DropdownButton
            variant="warning"
            title="Actions"
            id="product-actions-dropdown"
          >
            <Dropdown.Item onClick={handleEdit}>
              Edit The Illusion
            </Dropdown.Item>
            <Dropdown.Item onClick={handleDelete}>
              Delete The Mirage
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;
