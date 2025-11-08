import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSingleProduct } from "../hooks/useSingleProduct";
import axios from "axios";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading, error } = useSingleProduct(id);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (product) setFormData({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        formData
      );
      console.log("Updated:", response.data);
      navigate(`/products/${id}`);
    } catch (err) {
      console.error("Failed to update product:", err);
      alert("Oops! Something went wrong while editing this imaginary product.");
    }
  };

  if (loading) return <p>Loading this illusion...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found — maybe it never existed?</p>;

  return (
    <Card className="details-card mt-5">
      <Card.Body>
        <Card.Title>Edit Phantom Product</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price of This Illusion</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description of Fakeness</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Imageinary URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category of Fakeness</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes to This Mirage
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProductEdit;
