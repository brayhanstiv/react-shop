// Packages
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import AppContext from "@context/appContext";

// Components
import { ProductItem } from "@components";
import { ProductDetail } from "@containers";

// Hooks
import useGetProducts from "@hooks/useGetProducts";

const HomePage = () => {
  const { state } = useContext(AppContext);

  const products = useGetProducts();

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
