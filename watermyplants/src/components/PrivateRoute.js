import React from "react";

import { Redirect, Route } from "react-router";

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
