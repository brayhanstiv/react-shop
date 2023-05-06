// Packages
import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=0";

  const getProducts = async () => {
    const response = await axios(API);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
