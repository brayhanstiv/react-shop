// Packages
import React from "react";

// Styles
import "./index.scss";

const MainLayout = ({ children, main = true }) => {
  return (
    <section className='grid-container'>
      <div className={main ? "main-container" : "container"}>{children}</div>
    </section>
  );
};

export default MainLayout;
