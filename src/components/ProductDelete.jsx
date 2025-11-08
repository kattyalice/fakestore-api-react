import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSingleProduct } from "../hooks/useSingleProduct";

function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useSingleProduct(id);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      alert("The mirage has vanished into thin air!");
      navigate("/products");
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Oops! The illusion resisted deletion.");
    }
  };

  if (loading) return <p>Loading ghost product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product)
    return (
      <p>
        Not found. This product might never have existed in the first place!
      </p>
    );

  return (
    <>
      <Card className="details-card mt-5">
        <Card.Img
          className="custom-img"
          variant="top"
          src={product.image}
          alt={product.title}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button
            className="mb-2"
            variant="warning"
            as={Link}
            to={`/edit/${product.id}`}
          >
            Edit Something That Doesn't Exist
          </Button>{" "}
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete Something That Isn't Real
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Confirm Deletion of Something That Isn't Real
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this product? </p>
          <p>
            It's a fake site so nothing is actually happening but I wanted to
            make sure.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductDelete;
