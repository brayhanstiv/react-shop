// Packages
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Context
import AppContext from "@context/appContext";

// Components
import { ProductItem } from "@components";
import { ProductDetail } from "@containers";

// Hooks
import useGetProducts from "@hooks/useGetProducts";

const HomePage = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const products = useGetProducts(id);

  useEffect(() => {
    console.log(typeof id);
  }, [id]);

  return (
    <section className='cards-container' style={{ margin: "5rem" }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {state.detail && <ProductDetail />}
    </section>
  );
};

export default HomePage;
