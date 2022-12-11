import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ component: Component, ...props }) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Route>
      {
        // eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
                () => (props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />)
            }
    </Route>
  );
}

export default ProtectedRoute;
