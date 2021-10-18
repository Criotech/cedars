import React from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import ErrorBoundary from '../components/ErrorBoundary';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <ErrorBoundary>
            <main id="public-route-layout">
              <Component {...props} />
            </main>
          </ErrorBoundary>
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: propTypes.object.isRequired,
};

export default PublicRoute;
