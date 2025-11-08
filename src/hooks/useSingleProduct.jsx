import { useState, useEffect } from "react";
import axios from "axios";

export function useSingleProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() =>
        setError(`Error fetching product. Probably because it's not real`)
      )
      .finally(() => setLoading(false));
  }, [id]);
  return { product, loading, error };
}
