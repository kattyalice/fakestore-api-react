import { useState, useEffect } from "react";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() =>
        setError(`Error fetching products. Maybe because they don't exist`)
      )
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
