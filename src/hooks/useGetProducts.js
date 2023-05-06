// Packages
import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (id) => {
  const [products, setProducts] = useState([]);
  let API;
  const verified = parseInt(id);
  if (id && verified !== NaN) {
    API = `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=20&offset=0`;
  } else {
    API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=0";
  }

  const getProducts = async () => {
    const response = await axios(API);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return products;
};

export default useGetProducts;
