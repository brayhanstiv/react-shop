// Packages
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Context
import AppContext from "@context/appContext";

// Components
import { Navbar } from "@containers";

// Hooks
import useInitialState from "@hooks/useInitialState";

// Styles
import "@styles/global.scss";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Fragment>
        <Navbar />
        <Outlet />
      </Fragment>
    </AppContext.Provider>
  );
};

export default App;
