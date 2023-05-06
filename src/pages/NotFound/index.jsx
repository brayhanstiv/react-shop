// Packages
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

const NotFoundPage = () => {
  return (
    <section className='not-found'>
      <div>
        <p className='html-code'>404</p>
        <p className='error'>Page not found</p>
        <p className='paragraph'>
          The page you're looking for doesn't exist or an other error ocurred.
        </p>
        <p className='paragraph'>
          Go back or head over to <Link to='/'>home</Link> to choose a new
          direction.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
